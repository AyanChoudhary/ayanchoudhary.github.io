
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ayan Choudhary",
  title: "Hello!! I am Ayan",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1qx1GzfsYz0sPHRCuCr-Q9SCfHXDy8eqs/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/AyanChoudhary",
  linkedin: "https://www.linkedin.com/in/ayanchoudhary/",
  gmail: "ayanchoudhary1025@gmail.com",
  facebook: "https://www.facebook.com/ayan.choudhary.790",
  twitter: "https://twitter.com/ayan_darkrider"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "78%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer",  
      company: "SDSlabs",
      companylogo: require("./assets/images/sds.webp"),
      date: "January 2019 – Present",
      desc: "Executive Member of the student group which fosters technical culture in our campus and strives to promote open source software development within the campus and the community as a whole.",
      descBullets: [
        "Regularly conducted hackathons, public lectures, and competitions to foster the technical culture in the campus.",
        "Responsible for maintaining current applications and server management.",
        "Mentored students in SDS Winter of Code 2019 and the new recruits."
      ]
    },
    {
      role: "Head Developer",   
      company: "SPARK IIT Roorkee",
      companylogo: require("./assets/images/spark.webp"),
      date: "October 2019 – Present",
      desc: "Developed some of the key features of the current website and am responsible for maintaining the current cloud configurations and to keep the website running. Was responsible for scaling the website from a single monolith to a distributed kubernetes configuration.",
      descBullets: [
        "Scaled the website from a monolith to a distributed kubernetes configuration."
      ]
    },
    {
      role: "GSoC'2020 Intern",   
      company: "Creative Commons",
      companylogo: require("./assets/images/cc.webp"),
      date: "May 2020 – August 2020",
      desc: "GSoC intern for improving the accessibility of cc-search and also internationalizing it.",
      descBullets: [
        "Ran accessibility audits and improved the overable accessiblity of thr site.",
        "Internationalized the website and setp internationalization architecture."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "AyanChoudhary", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/cc.webp"),
//       link: "https://creativecommons.org/"
//     },
//     {
//       image: require("./assets/images/publiclab.webp"),
//       link: "https://publiclab.org/"
//     }
//   ]
// };

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Microsoft Codefundo++ Online Winner",
      subtitle: "Winner of Online round of Microsoft Codefundo++ and represented IIT Roorkee in the finals.",
      image: require("./assets/images/microsoft.webp"),
      footerLink: [
      ]
    },
    {
      title: "GSoC 2020",
      subtitle: "Selected for the prestigious Google Summer of Code 2020",
      image: require("./assets/images/gsoc.webp"),
      footerLink: [
        { name: "Acceptance letter", url: "https://drive.google.com/file/d/14sixsGLCp_vaHxNknyYS883tneuXxx-F/view?usp=sharing" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://opensource.creativecommons.org/blog/entries/cc-search-accessibility-and-internationalization/",
      title: "CC Search, Proposal Drafting and Community Bonding",
      description: "A good proposal: How I got selected for the Google Summer of Code in Creative Commons"
    },
    {
      url: "https://opensource.creativecommons.org/blog/entries/cc-search-accessibility-week1-2/",
      title: "CC Search, Setting up vue-i18n and internationalizing homepage",
      description: "Setting up internationalization in the CC search website"
    },
    {
      url: "https://opensource.creativecommons.org/blog/entries/cc-search-accessibility-week3-4/",
      title: "Internationalization Continued: Handling strings in the store",
      description: "Solving the problem of internationalizing strings in Vuex store"
    },
    {
      url: "https://opensource.creativecommons.org/blog/entries/cc-search-accessibility-week5-6/",
      title: "Internationalization continued: Modifying tests",
      description: "Any good project comes with its test suite ready to catch any breaking changes, how we modify tests to accomodate i18n"
    },
    {
      url: "https://opensource.creativecommons.org/blog/entries/cc-search-accessibility-week7-8/",
      title: "CC Search, Initial Accessibility Improvements",
      description: "Research and setting up the workflow for accessibility changes in the CC search website"
    },
    {
      url: "https://opensource.creativecommons.org/blog/entries/cc-search-accessibility-week9-10/",
      title: "Accessibility Improvements: Final Changes and Modal Accessilibity",
      description: "Some niche accessibility changes and a deeper insight to the accessibility parameters"
    },
    {
      url: "https://opensource.creativecommons.org/blog/entries/cc-search-accessibility-wrapup/",
      title: "Accessibility and Internationalization: WrapUp GSoC 2020",
      description: "The final blog wrapping up my work for the GSoC 2020 with Creative Commons"
    }
  ]
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ]
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8827254838",
  email_address: "ayanchoudhary1025@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "ayan_darkrider"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, blogSection, contactInfo, twitterDetails };
