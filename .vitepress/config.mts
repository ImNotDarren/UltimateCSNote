import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ultimate CS Note",
  base: "/UltimateCSNote/",
  description: "A Vitepress Site with easy-to-understand documents on learning computer science and software engineering",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'React', link: '/src/react' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ImNotDarren' }
    ]
  }
})
