import type { Portfolio } from '../types'

export const portfolioMap: { [key: string]: Portfolio } = {
  'kurt.me': {
    title: 'Kurt.me',
    repo: 'https://github.com/kurt-liao/terminal.me',
    appLink: 'https://me.kurtstories.com',
    en: ['This is my personal website with terminal style.', 'The website is built with Nuxt3 & Tailwindcss & TypeScript.', 'It\'s an interactive website that you can type some commands to interact with með'],
    tw: ['éæ¯æçåäººç¶²ç«ï¼ä½¿ç¨ Nuxt3 & Tailwindcss & TypeScript æå»ºæ§ï¼æ¡ç¨çæ¯ terminal çé¢¨æ ¼', 'å¦å¤ï¼éæ¯ä¸åäºåå¼çç¶²ç«(å°±å terminal)ï¼å¨ééä½ å¯ä»¥æä¸äºæä»¤èæäºåð'],
    background: 'https://user-images.githubusercontent.com/32745146/198423735-d7615739-6317-4871-ba41-ddf139f7c0d7.png',
  },
  'kurt.blog': {
    title: 'Kurt Blog',
    repo: 'https://github.com/kurt-liao/github-style-plus',
    appLink: 'https://blog.kurtstories.com/',
    en: ['This is my personal blog. Obviously, the site was built in Github style.', 'The website was made by Hugo with the github-style-plus theme(You can find it in my github).', 'I\'ll share some issues I faced, some projects I did and some technologies of programming here. Follow með¤©'],
    tw: ['éæ¯æçé¨è½æ ¼ï¼å¯ä»¥å¾æé¡¯ççåºä¾éæ¯ Github é¢¨æ ¼ï¼', 'æ­¤ç¶²ç«æ¯ä½¿ç¨ Hugo å»ºç½®ï¼èä¸»é¡åæ¯ github-style-plus(å¯ä»¥å¨æçgithub æ¾å°æ­¤å°æ¡)', 'ææå¨ééåäº«æéå°çåé¡/è§£æ³ãä¸äºæåçå°æ¡ï¼éæä¸äºæå­¸å°çæéç¨å¼çç¥è­ç­ç­ï¼å¿«ä¾è¿½è¹¤æçé¨è½æ ¼å§ð¤©'],
    background: 'https://user-images.githubusercontent.com/32745146/201956371-f540f662-9d67-4e4b-9a3b-a2205c2d79da.png',
  },
  'movies': {
    title: 'Nuxt3 Movies',
    repo: 'https://github.com/kurt-liao/nuxt3-movies',
    appLink: 'https://movies.kurtstories.com/',
    en: ['This is the website about movies and TV shows. It\'s similar to Netflix and Disney+ without playing videos for youð', 'It\'s the project for me to practice Nuxt3 and Tailwindcss.', 'Although it\'s not real like Netflix, you can easily know the newest, most famous movies and TV shows here.', 'By the way, the api is taken from TMDB(Appreciate)!'],
    tw: ['æ­¤ç¶²ç«æ¯é»å½±ãå½±éçéåï¼å°±å NetflixãDisney+ ä¸æ¨£ï¼ä¸éä¸¦ä¸æä¾è§çå½±çð', 'éæ¯æç¨ä¾ç·´ç¿ Nuxt3 å Tailwindcss çä½å', 'ä½ å¯ä»¥å¨æ­¤ç¶²ç«çè¦½ææ°çãæè¿ç±éçãæä¸ç¨®é¡å¥çé»å½±/å½±é', 'å¦å¤ï¼æ­¤ç¶²ç«çè³æä¾æºæ¯ TMDB(éå¸¸æè¬)!'],
    background: 'https://user-images.githubusercontent.com/32745146/199554060-27b87788-baa9-46cd-9cb6-c34821a2c327.png',
  },
  'travel-taiwan': {
    title: 'Travel Taiwan',
    repo: 'https://github.com/kurt-liao/travel-taiwan',
    en: ['A website that calculate how much you familiar with Taiwan.', 'It was made by pure JavaScript and CSS.', 'Go and try to see how many points you can get!'],
    tw: ['ä¸åç´éä½ å»éå°ç£ååç¸£å¸çç¶²ç«ï¼ä½¿ç¨ç´ JavaScriptãCSS è£½ä½', 'è¶å¿«å»é»é»çä½ å¯ä»¥ç²å¾å¤å°åæ¸å§ï¼'],
    appLink: 'https://taiwan.kurtstories.com/',
    background: 'https://user-images.githubusercontent.com/32745146/202212412-cba23407-d7ee-48ac-88e2-7b100585c052.png',
  },
  'so-stats': {
    title: 'SO Stats',
    repo: 'https://github.com/kurt-liao/so-stats',
    en: ['This is a tool that shows your Stack Overflow stats. It\'s not only show the stats but also prettify your Github profile.', 'Enter your Stack Overflow user ID, and it will return a svg that display your Stack Overflow stats.', 'Go and make your Github profile page more beautifulð'],
    tw: ['éæ¯ä¸åå·¥å·è®ä½ å¨ Github åäººé é¢å±ç¾ Stack Overflow çæ¸æ', 'åªè¦è¼¸å¥ä½ çä½¿ç¨è IDï¼å³æåå³ä¸å¼µé¡¯ç¤ºä½ ç Stack Overflow çåé æ¸æç svg', 'è¶å¿«ç¨éåå·¥å·ç¾åä½ ç Github åäººé å§ð'],
    appLink: '',
    background: 'https://user-images.githubusercontent.com/32745146/202213942-a17e3bfa-7bf4-4786-a566-a4cd3e013d44.png',
  },
  'medium-story': {
    title: 'Medium Story',
    repo: 'https://github.com/kurt-liao/medium-story',
    en: ['Tool like SO Stats, this tool is also for you to prettify your Github profile.', 'Enter your Medium user ID and it returns a svg that shows your recently posts.', 'This project uses RSS to retrieve your posts, it can get most 10 posts.', 'Go and give it a tryð'],
    tw: ['è· SO Stats å°æ¡å¾åï¼éä¹æ¯ä¸åè®ä½ ç¾å Github åäººé çå·¥å·', 'åªè¦ä½ è¼¸å¥ä½ ç Medium ä½¿ç¨è IDï¼å³æåå³ä¸å¼µå¡ç SVGï¼ä¸é ­æé¡¯ç¤ºä½ æè¿çä¸ç¯æç« ', 'æ­¤å°æ¡ä½¿ç¨ RSS æè¡ï¼æå¤å¯ä»¥åå¾æè¿ 10 ç¯æç« ', 'æååå¾è©¦è©¦ð'],
    appLink: '',
    background: 'https://user-images.githubusercontent.com/32745146/202214181-7156492e-f18f-4243-a9f8-5a174da3c0ca.png',
  },
  'js-toys': {
    title: 'JS Toys',
    repo: 'https://github.com/kurt-liao/js-toys',
    en: ['This website displays few small projects, and those projects are for me to practice JavaScript api, library.', 'Some of projects are games, like card game, patatap...', 'Hope you will like itð'],
    tw: ['éæ¯ä¸åå±ç¤ºåå¼åæ¨£ä¸åçå°å°æ¡çç¶²ç«ï¼ä¸»è¦æ¯ææ¿ä¾çæåç¨® JS APIãJS Library çå°æ¡', 'è£¡é¢ä¹æä¸äºå°éæ²ï¼åæ¯ç¿»å¡éæ²ãææéµç¼åºè²é³ç­ç­ç', 'æ­¡è¿å»ç©ç©ð'],
    appLink: 'https://kurt-liao.github.io/js-toys/',
    background: 'https://user-images.githubusercontent.com/32745146/202328644-178c0535-a6c9-4659-b2dd-0d87b4e46857.png',
  },
  'start-nuxt3': {
    title: 'Start Nuxt3',
    repo: 'https://github.com/kurt-liao/start-nuxt3',
    en: ['This is a command line tool that help you to create a Nuxt3 app easily and fast. Just try itð'],
    tw: ['éæ¯ä¸å command line å·¥å·ï¼ç¨ä¾å¿«éå»ºæ§ Nuxt3 å°æ¡ï¼ä¸è¼ä¾ä½¿ç¨ççå§ð'],
    appLink: 'https://www.npmjs.com/package/start-nuxt3',
    background: 'https://raw.githubusercontent.com/kurt-liao/start-nuxt3/main/assets/demo.png',
  },
}
