import About from "../../common/icons/about.svg";
import Education from "../../common/icons/education.svg";
import Experience from "../../common/icons/experience.svg";
import Learn from "../../common/icons/learn.svg";

const aboutContent = `
Hi I’m Alberto a computer guy.
I’ve been working with javascript for 4 years (back-end and front-end),
in projects based on microservices, testing and continuos integration and delivery.

I went through a quite radical career change around 5 years ago,
going from being a charted accountant to a software developer.
When I realised that I didn’t want to be an accountant for the rest of my life,
I turned my passion for technology and programming into a full time job.
It’s one of the best choices I’ve ever done. Since than I proudly contributed
to 2 great startups at Solair (recently bought by Microsoft) and SafetyCulture
(in which Atlassian is one of the major investors) and now, I help ThoughtWorks
clients to understand their users needs and to build top quality software.
`;

const educationContent = `
### [General Assembly](https://generalassemb.ly/) WDI - Web Development Immersive, Computer Software Engineering
#### Sydney, Australia
#### Jan 2014 - Apr 2014
12-weeks. All day, every day. Program focused on Ruby on Rails.

Main topics:
Fundamentals of Programming with Ruby and TDD, Databases and APIs, Ruby on Rails and MVC Concepts, JavaScript Libraries + MVC,
Advanced Ruby on Rails Topics, Advanced Ruby on Rails Topics, System Administration.

### University of Ferrara - Master of Business Administration (MBA), Accounting & Business Skills
#### 2006 – 2008

### University of Ferrara - Bachelor of Business Administration (BBA), Accounting & Business Skills
#### 2002 – 2005
`;

const experienceContent = `
### [ThoughtWorks](https://www.thoughtworks.com/) - Senior UI Developer
#### London, United Kingdom
#### June 2015 – Present

ThoughtWorks provides software delivery, pioneering tools and consulting for organisations with ambitious missions. The company has clients like Lastminute.com, Expedia, Nokia, Rackspace, Domino’s, GOV.UK, just to name a few.

I am in charge of architecting, building, deploying, maintaining high traffic Web Application for client in Finance and Retail.

### [SafetyCulture Pty Ltd](https://safetyculture.com/) - Senior Software Engineer
#### Townsville, Australia
#### April 2014 – April 2015 (1 year 1 month)

I was in charge of the front-end development of Safety Culture Web Application. The application allows users to create templates, and to perform audits based on those templates.

Key achievements:
- took decisions and provided advices for all the front-end features and implementations;
- created advanced APIs endpoints for handling authorisation and resource sharing;
- created a highly scalable web application and a modular CSS framework;
- taught CSS patterns and Ember.js framework to junior developers and new software engineers;
- assisted DevOps in deploying, monitoring and maintaining the whole stack on AWS.

Key Tasks:
- create a single page web application using Ember.js;
- convert the previous front-end codebase, from Backbone.js to Ember.js;
- contribute to the development of the back-end, based on Node.js and Hapi.js;
- work closely with the design team to build a rich user interface, with SASS and Twitter Bootstrap 3.

### [Solair Srl](https://techcrunch.com/2016/05/03/microsoft-acquires-italian-iot-company-solair/) - Software Engineer
#### Bologna Area, Italy
#### March 2013 – December 2013

I was in charge of the front-end development of Solair Platform Web Application. The application allows users to to build their own applications by dragging and dropping concepts from a library and creating both single and inter-related entities.

Key achievements:
- Achieved wide autonomy in adopting patterns to follow and tools to use in order to accomplish the senior management requirements;
- Important contributions in developing the internal javascript framework highly integrated with JQuery, JQuery UI, Kendo UI Web, Underscore JS;
- Built from scratch a completely customized user interface. I decided to adopt a SMACSS approach, SASS, grids system, css sprites and icon fonts;
- In an Agile environment, estimated timetables for required tasks and always delivered on time well commented and tested code.

Key Tasks:
- Contribution to the internal JavaScript framework development in order to build a single page application which interacts with the Web Application APIs;
- Development of the user interface in strict collaboration with backend engineers and designer;
- Decision of which tools and design patterns to use in order to convert adobe photoshop and fireworks mockups;
- Writing of the CSS following the SMACSS approach;
- Creation of css sprites and icon fonts starting from adobe illustrator projects;
- Development of side projects and tools in C#, javascript, Microsoft SQL.
`;

const learnContent = `
I love learning,
I am currently learing OCaml and following the
[Introduction to Functional Programming in OCaml](https://www.fun-mooc.fr/courses/parisdiderot/56002S02/session02/about)
and I am enrolled on [Pluralsight](https://www.pluralsight.com/) where most recently I've been looking at Typescript and C#.
`;

const sections = [
  {
    text: "about me",
    icon: <About />,
    content: aboutContent,
  },
  {
    text: "experience",
    icon: <Experience />,
    content: experienceContent,
  },
  {
    text: "education",
    icon: <Education />,
    content: educationContent,
  },
  {
    text: "learning",
    icon: <Learn />,
    content: learnContent,
  },
];

const navItems = sections.map(({ text, icon }) => ({ text, icon }));
const sectionContents = sections.map(({ content }) => content);
const getSectionContent = (sectionIndex) => sectionContents[sectionIndex] || "";

export { navItems, getSectionContent };
