import type { Portfolio } from '../types'

export const portfolioMap: { [key: string]: Portfolio } = {
  'kurt.me': {
    title: 'Kurt.me',
    en: `<p>This is my personal website with terminal style.</p><p>The website is built with Nuxt3 & Tailwindcss & TypeScript.</p><p>It's an interactive website that you can type some command to interac with me😁</p>
    <a href="https://me.kurtstories.com" class="draw-outline draw-outline--tandem" target="_blank">Go >>></a>`,
    tw: '這是我的網站：<a href="https://me.kurtstories.com" class="draw-outline draw-outline--tandem">連結</a>',
    background: 'https://user-images.githubusercontent.com/32745146/198423735-d7615739-6317-4871-ba41-ddf139f7c0d7.png',
  },
  'kurt.blog': {
    title: 'Kurt Blog',
    en: `<p>This is my personal website with terminal style.</p><p>The website is built with Nuxt3 & Tailwindcss & TypeScript.</p><p>It's an interactive website that you can type some command to interac with me😁</p>
    <a href="https://blog.kurtstories.com" class="draw-outline draw-outline--tandem" target="_blank">Go >>></a>`,
    tw: '這是我的網站：<a href="https://blog.kurtstories.com">連結</a>',
    background: 'https://user-images.githubusercontent.com/32745146/201956371-f540f662-9d67-4e4b-9a3b-a2205c2d79da.png',
  },
  'movies': {
    title: 'Nuxt3 Movies',
    en: `<p>This is my personal website with terminal style.</p><p>The website is built with Nuxt3 & Tailwindcss & TypeScript.</p><p>It's an interactive website that you can type some command to interac with me😁</p>
    <a href="https://movies.kurtstories.com" class="draw-outline draw-outline--tandem" target="_blank">Go >>></a>`,
    tw: '這是我的網站：<a href="https://me.kurtstories.com">連結</a>',
    background: 'https://user-images.githubusercontent.com/32745146/199554060-27b87788-baa9-46cd-9cb6-c34821a2c327.png',
  },
}
