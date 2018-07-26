const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, '../public')
      }
    }
  },
  base: '',
  dest: 'vuepress',
    locales: {
    '/': {
      lang: 'en-US',
      title: 'ivank',
      description: '不甘被业务代码淹没的切图仔'
    },
/*    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }*/
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'songkai2012/vue-blog-dev',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Blog',
            items: [
              {
                text: 'JavaScript',
                link: '/blog/js/'
              },
              {
                text: 'css',
                link: '/blog/css/'
              },
              {
                text: 'markdown',
                link: '/blog/markdown/'
              },
            ]
          },
          {
            text: '每日心得',
            link: '/daily-summary/',
          },
          {
            text: '面试点',
            link: '/interview/'
          },
          {
            text: '技能',
            link: '/skill/'
          }
        ],
        sidebar: {
          '/interview/': [{
            title:'面试',
            collapsable: false,
            children: [
              '',
              'basic',
              'work',
            ]
          }],
          '/skill/': [{
            title:'技能',
            collapsable: false,
            children: getWebArr(2)
          }],
          '/daily-summary/': [{
            title:'每日心得',
            collapsable: false,
            children: [
              '',
              '2018-08',
              '2018-09',
              '2018-10',
              '2018-11',
              '2018-12',
            ]
          },
            {
              title:'2019',
              collapsable: false,
              children: [
                '2019-01'
              ]
            }]
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}

function getWebArr(count) {
  let arr = []
  while (count) {
    arr.push(`web${count--}`)
  }
  arr.push('')
  return arr.reverse()
}