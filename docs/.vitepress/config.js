import { defineConfig } from 'vitepress'
export default defineConfig({
    // base: "./",
    title: "Jiaunun",
    head: [
      ['link', { rel: 'icon', href: '/avar.png' }]
    ],
    themeConfig: {
      logo: "/avar.png",
      nav: [
        { 
          text: "前端", 
          collapsible: true, // 可折叠
          collapsed: false, // 折叠
          items: [
            { text: 'Vue2', link: '/client/vue2'},
            { text: 'Vue3', link: '/client/vue3' },
            { text: 'React', link: '/client/react' },
            { text: 'Vite', link: '/client/vite' },
            { text: 'webpack', link: '/client/webpack' },
            { text: '其他', link: '/client/other' }
          ]
        },
        {
          text: "后端", 
          collapsible: true, // 可折叠
          collapsed: false, // 折叠
          items: [
            { text: 'node.js', link: '/server/nodejs' },
            { text: 'express', link: '/server/express' },
            { text: 'koa2', link: '/server/koa2' },
            { text: 'golang', link: '/server/golang' }
          ]
        },
      ],
      socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
      sidebar: {
        "/client/": [
          // 菜单模版
          // {
          //   text: "进阶",
          //   items: [
          //     {
          //       text: "xx",
          //       link: "/xx",
          //     },
          //   ],
          // },
          {
            text: "更新中",
            link: "/client/vue2",
            // items: [
            //   {
            //     text: "安装",
            //     link: "/client/installation",
            //   },
            //   {
            //     text: "快速开始",
            //     link: "/client/quickstart",
            //   },
            // ],
          },
          {
            text: "等待中",
            link: "/client/vue2/one.md",
          }

        ],
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023-present Jiaun'
      }
    },
})


