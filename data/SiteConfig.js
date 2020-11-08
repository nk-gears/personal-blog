const config = {
  siteTitle: 'Nirmal Kumar',
  siteTitleShort: 'Nirmal Kumar',
  siteTitleAlt: 'Nirmal Kumar',
  siteLogo: '/logos/logo-48.jpg',
  siteUrl: 'https://blog.gyanmoti.in',
  repo: 'https://github.com/nk-gears/gyanmoti.in',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Nirmal Kumar is full-stack software developer and Cloud Solution Architect.',
  siteRss: '/rss.xml',
  googleAnalyticsID: '',
  postDefaultCategoryID: 'Tech',
  userName: 'Nirmal',
  userEmail: 'me@gyanmoti.in',
  userTwitter: 'nirmal_kumar',
  userLocation: 'Chennai, India',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I build open source projects and write the missing instruction manuals of the web.',
  menuLinks: [
    {
      name: 'me',
      link: '/me/',
    },
  
    {
      name: 'posts',
      link: '/blog/',
    },
    {
      name: 'eurekas',
      link: '/eureka/',
    },
    {
      name: 'contact',
      link: '/contact/',
    },
    {
      name: 'wiki',
      link: 'https://wiki.nkdews.me',
      external:true
    }
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
