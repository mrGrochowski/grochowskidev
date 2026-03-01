export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://secure.gravatar.com/avatar/fe6cdb120a3f64222f15e7d252d6b354',
      light: 'https://secure.gravatar.com/avatar/fe6cdb120a3f64222f15e7d252d6b354',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/mateusz.grochowski/30min',
    email: 'mateusz.grochowski1992@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built by Mateusz Grochowski • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/mrGrochowski',
      'target': '_blank',
      'aria-label': 'Mateusz Grochowski on GitHub'
    }]
  }
})
