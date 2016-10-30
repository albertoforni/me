import about from '../../common/icons/about.svg';
import dev from '../../common/icons/dev.svg';
import education from '../../common/icons/education.svg';
import experience from '../../common/icons/experience.svg';
import learn from '../../common/icons/learn.svg';

const aboutContent = `
about test \`with mardown\`
`;

const devContent = `
dev content
`;

const educationContent = `
education content
`;

const experienceContent = `
experience content
`;

const learnContent = `
learn content
`;

const sections = [
  {
    text: 'about me',
    icon: about,
    content: aboutContent,
  },
  {
    text: 'experience',
    icon: experience,
    content: experienceContent,
  },
  {
    text: 'education',
    icon: education,
    content: educationContent,
  },
  {
    text: 'development skills',
    icon: dev,
    content: devContent,
  },
  {
    text: 'learning',
    icon: learn,
    content: learnContent,
  },
];

const navItems = sections.map(({ text, icon }) => ({ text, icon }));
const sectionContents = sections.map(({ content }) => content);
const getSectionContent = sectionIndex => sectionContents[sectionIndex] || '';

export {
  navItems,
  getSectionContent,
};
