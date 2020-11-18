import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Marie Crumpton', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Marie Crumpton',
  subtitle: 'teacher turned software engineer',
  cta: 'learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gobARk.jpg',
    title: 'go.bARk',
    info: 'what the game is all ',
    info2: 'about ',
    url: 'https://www.youtube.com/watch?v=tJig6T0Ccoc',
    repo: 'https://github.com/gh-capstone-team-c/Go.bARk',
  },
  {
    id: nanoid(),
    img: 'SeeTurtleExploration.jpg',
    title: 'SeeTurtle Exploration',
    info: 'What the game',
    info2: 'is all about ',
    url: 'https://www.youtube.com/watch?v=dUDTRJXvqfY',
    repo: 'https://github.com/mkcrumpton/SeeTurtleExploration',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Chat",
  email: 'marie.k.cr@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mariecrumpton/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mkcrumpton',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
