import { IChatGPTQuote } from '../interfaces/chatGPTQuote.interface';
import { iJobExperience } from '../interfaces/job-experience.interface';
import { iProject } from '../interfaces/project.interface';

export const poem: string = `
I arn lovely, O mortals, like a dream of stone,
And my bosom, where each one gets bruised in turn,
To inspire the love of a poet is prone,
Like matter eternally silent and stern.

As an unfathomed sphinx, enthroned by the Nile,
My heart a swan's whiteness with granite combines,
And I hate every movement, displacing the lines,
And never I weep and never I smile.

The poets in front of mine attitudes fine
(Which the proudest of monuments seem to implant),
To studies profound all their moments assign,

For I have all these docile swains to enchant —
Two mirrors, which Beauty in all things ignite:
Mine eyes, my large eyes, of eternal Light!
`;

export const developerTexts: string[] = [
  'Developer and designer with a passion for creating meaningful and cool stuff.',
  'Developer and designer with a passion for creating meaningful and cool stuff.',
  'Developer and designer with a passion for creating meaningful and cool stuff.',
];

export const chatGPTQuote: IChatGPTQuote = {
  quote:
    '  "Giorgi Kharbedia is a skilled thinker with a passion for creating intuitive and visually appealing web interfaces. With interest in modern technologies, Giorgi combines a technical background with a creative approach to design and create cool stuff. His attention to detail and ability to stay current make him a valuable asset in the ever-evolving nature of this world." ',
  author: '-   ChatGPT, circa 2024',
};

export const projects: iProject[] = [
  {
    name: 'ChatApp',
    url: 'https://chat-app-bice-nu.vercel.app/',
    description:
      'Become friends and chat up with random character about random stuff.',
    technologies: [
      'React',
      'Next.js',
      'Next Auth',
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind',
      'Redis',
      'Vercel',
      'Pusher.js',
    ],
    developerNotes:
      'Use mail: testadmin@gmail.com and password: testadmin123! (which are prewritten in the form) to access the website full functionality, or create your own regular customer account with register or google auth. Please note: Pusher.js used in this application is on free tier, meaning there is a limit to connection count. Chatting application with Next.js and React.js. Uses Redis for database and Pusher.js webhooks for real-time messages and notifications. Global chat, where you can chat with all users and add them to your friends list to later chat with them in private.',
  },
  // {
  //   name: 'Win95 (In Progress)',
  //   url: 'https://win95-five.vercel.app/',
  //   description:
  //     'Win95 is a web application that allows you to experience the classic Windows 95 interface.',
  //   technologies: ['React', 'Vite', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
  //   developerNotes: 'This project is a work in progress.',
  // },
  {
    name: 'VVHARTS - Clothing brand e-commerce',
    url: 'https://vvharts.com/',
    description:
      'VVHARTS is a modern streetwear clothing brand website with full e-commerce functionality. It features responsive design showcasing the latest collections, an intuitive shopping cart, secure checkout process, and user account management.',
    technologies: [
      'Next',
      'React',
      'HTML',
      'CSS',
      'Supabase',
      'TypeScript',
      'Zustand',
      'Tailwind',
      'Framer Motion',
      'React Hook Form',
      'Nodemailer',
    ],
    developerNotes:
      'First time using Supabase. Fully functional e-commerce responsive website with admin panel. Use mail: testadmin@gmail.com and password: testadmin123! (which are prewritten in the form) to access the website full functionality with admin rights, or create your own regular customer account with register or google auth.',
  },
  {
    name: 'TATIA BAZADZE - Artist Portfolio',
    // url: 'https://tatiabazadze.com/images',
    url: 'https://untitled-artist-portfolio.vercel.app/images',
    description:
      "A minimalist portfolio website showcasing the vibrant works of painter Tatia Bazadze. The gallery-style layout emphasizes the artwork, allowing visitors to immerse themselves in the artist's colorful and expressive paintings. The site features a clean, intuitive design that lets the art speak for itself.",
    technologies: ['Angular', 'HTML', 'CSS', 'TypeScript'],
    developerNotes: 'A static portfolio website.',
  },
  // {
  //   name: 'BLANK DIPLOMAT',
  //   url: 'https://blankdiplomat.com/',
  //   description:
  //     "BLANK DIPLOMAT is a personal clothing brand website built on the Shopify platform. It showcases a unique collection of streetwear and accessories with a minimalist aesthetic. The site features custom-designed themes using Liquid templating language, along with bespoke HTML and CSS to create a distinctive user experience. The e-commerce functionality is seamlessly integrated, offering smooth navigation, product filtering, and a secure checkout process. The design emphasizes clean lines and a monochromatic color scheme, reflecting the brand's ethos of simplicity and quality.",
  //   technologies: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
  //   developerNotes:
  //     'Not just a template website, its a custom design. Had to learn liquid template language and the structure of Shopify websites to change the look and functionality the way intended for the brand.',
  //   disabled: true,
  // },
  {
    name: 'Peculiar Weather',
    url: 'https://weather-virid-pi.vercel.app/',
    description:
      'A unique weather application that challenges conventional city searches. Users can input any city name, and if it exists, the app provides detailed weather information including temperature, humidity, and geographical data. This peculiar approach makes discovering weather conditions in lesser-known locations an intriguing experience.',
    technologies: ['Angular', 'TypeScript', 'Tailwind', 'RXJS', 'HTML', 'CSS'],
    developerNotes:
      'Allow your location. Otherwise it is a playground to spam strange name and find out cities.',
  },
  {
    name: 'Enertec Technologies',
    url: 'https://www.enertec.ge/',
    description:
      'Enertec Technologies is a company that provides energy solutions to businesses and organizations. This is a business website with a blog section and a contact form with ability to change language.',
    technologies: [
      'Next',
      'React',
      'HTML',
      'CSS',
      'TypeScript',
      'Tailwind',
      'Framer Motion',
      'React Hook Form',
      'Nodemailer',
      'i18next',
    ],
    developerNotes:
      'Freelance project. First time working with Next.js and React.js in a real project.',
  },
];

export const jobs: iJobExperience[] = [
  {
    company: 'Tegeta Motors',
    lastPosition: 'Middle Angular Developer',
    startDate: new Date('2022-08-01'),
    endDate: new Date('2023-11-01'),
    description:
      'Enertec Technologies is a company that provides energy solutions to businesses and organizations. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    developerNotes: 'This project is a work in progress.',
  },
  {
    company: 'Enertec Technologies',
    lastPosition: 'Full Stack Developer',
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-08-01'),
    description:
      'Enertec Technologies is a company that provides energy solutions to businesses and organizations. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    technologies: ['Next', 'React', 'HTML', 'CSS', 'TypeScript'],
    developerNotes: 'This project is a work in progress.',
  },
];
