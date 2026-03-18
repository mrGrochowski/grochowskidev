import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
const logoPath = path.resolve(publicDir, 'logo.png');
const squareLogoPath = path.resolve(publicDir, 'temp_logo_square.png');
const tempWhitePng = path.resolve(publicDir, 'temp_logo_white.png');

async function generateFavicons() {
  console.log('Generating favicons from', logoPath);

  if (!fs.existsSync(logoPath)) {
    console.error('Error: logo.png not found in public directory.');
    process.exit(1);
  }

  try {
    // Ensure the input image is square before generating ICO files
    // Get original metadata to find the max dimension
    const metadata = await sharp(logoPath).metadata();
    const size = Math.max(metadata.width, metadata.height);

    // Create a square version of the original logo (transparent background)
    await sharp(logoPath)
      .resize({
        width: size,
        height: size,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(squareLogoPath);

    // 1. Generate light mode favicon (original colors)
    const faviconPath = path.resolve(publicDir, 'favicon.ico');
    const bufLight = await pngToIco(squareLogoPath);
    fs.writeFileSync(faviconPath, bufLight);
    console.log(`Successfully generated ${faviconPath}`);

    // 2. Generate dark mode favicon (inverted colors / white)
    await sharp(squareLogoPath)
      // Extract alpha channel
      .ensureAlpha()
      // Create a white overlay
      .composite([{
        input: Buffer.from(`<svg><rect width="${size}" height="${size}" fill="white"/></svg>`),
        blend: 'in' // Only keep white where alpha is solid
      }])
      .toFile(tempWhitePng);

    const faviconDarkPath = path.resolve(publicDir, 'favicon-dark.ico');
    const bufDark = await pngToIco(tempWhitePng);
    fs.writeFileSync(faviconDarkPath, bufDark);

    console.log(`Successfully generated ${faviconDarkPath}`);

  } catch (error) {
    console.error('Error generating favicons:', error);
  } finally {
    // Clean up temp files
    if (fs.existsSync(squareLogoPath)) fs.unlinkSync(squareLogoPath);
    if (fs.existsSync(tempWhitePng)) fs.unlinkSync(tempWhitePng);
  }
}

generateFavicons();
