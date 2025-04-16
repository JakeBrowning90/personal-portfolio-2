import gameLibraryThumbnail from "/src/imgs/projectThumbnails/gameLibraryThumbnail.jpg";
import fileUploaderThumbnail from "/src/imgs/projectThumbnails/fileUploaderThumbnail.jpg";
import musicAppThumbnail from "/src/imgs/projectThumbnails/musicAppThumbnail.jpg";
import messagingAppThumbnail from "/src/imgs/projectThumbnails/messagingAppThumbnail.jpg";
import mapGameThumbnail from "/src/imgs/projectThumbnails/mapGameThumbnail.jpg";
import blogThumbnail from "/src/imgs/projectThumbnails/blogThumbnail.jpg";
import memory2Thumbnail from "/src/imgs/projectThumbnails/memory2Thumbnail.jpg";
import cvBuilderThumbnail from "/src/imgs/projectThumbnails/cvBuilderThumbnail.jpg";
import battleshipThumbnail from "/src/imgs/projectThumbnails/battleshipThumbnail.jpg";

const projectsList = [
  //   {
  //     title: "",
  //     repoLink: "",
  //     liveLink: "",
  //     thumbnail: "",
  //     desc: "",
  //   },
  {
    id: 0,
    title: "Board Game Library",
    repoLink: "https://github.com/JakeBrowning90/game-library-public",
    liveLink: "https://game-library-public.fly.dev/",
    thumbnail: gameLibraryThumbnail,
    desc: "A full-stack PERN app designed as a library for a tabletop gaming café. The JWT-authenticated private site manages the collection and user access, and the public site can search for games using multiple queries.",
  },
  {
    id: 1,
    title: "File Uploader",
    repoLink: "https://github.com/JakeBrowning90/file-uploader",
    liveLink: "https://file-uploader-empty-sun-8023.fly.dev/",
    thumbnail: fileUploaderThumbnail,
    desc: "A file hosting app built using Express, Node.js, Prisma ORM, and Cloudinary. Authenticated users can upload files, sort them into custom folders, and search their collection by entry name.",
  },
  //   {
  //     title: "Micro Blog",
  //     repoLink: "https://github.com/JakeBrowning90/members-only-2",
  //     liveLink: "https://members-only-2-frosty-moon-5954.fly.dev/",
  //     thumbnail: "",
  //     desc: "",
  //   },
  {
    id: 2,
    title: "Music Collection",
    repoLink: "https://github.com/JakeBrowning90/inventory-application-2",
    liveLink: "https://inventory-application-2.fly.dev/",
    thumbnail: musicAppThumbnail,
    desc: "An inventory management app built using Express, Node.js, PostgreSQL, and Cloudinary. Authenticated users can create, update, and delete artists and albums from the database.",
  },
  {
    id: 3,
    title: "Messaging App",
    repoLink: "https://github.com/JakeBrowning90/messaging-app-front",
    liveLink: "https://messaging-app.fly.dev/",
    thumbnail: messagingAppThumbnail,
    desc: "A messaging tool built with the MERN stack (MongoDB, Express, React, Node.js). Create and customize a profile, add other users to your contacts list, and post text messages to your chat history.",
  },
  {
    id: 4,
    title: "Map Game",
    repoLink: "https://github.com/JakeBrowning90/wheres-waldo-front",
    liveLink: "https://jakebrowningmapgame.netlify.app/",
    thumbnail: mapGameThumbnail,
    desc: "A quiz game built with the MERN stack. Correctly identify U.S. state capitals, reveal interesting trivia on each play session, and update the database by achieving a top 10 score.",
  },
  {
    id: 5,
    title: "Blog API",
    repoLink: "https://github.com/JakeBrowning90/blog-public-frontend",
    liveLink: "https://blog-public-frontend.fly.dev/",
    thumbnail: blogThumbnail,
    desc: "A MERN blogging app using RESTful API across two front ends. A public site displays posts and comments, and a private site manages post content with a rich text editor. Editing actions are controlled by JWT authentication.",
  },
  //   {
  //     title: "Art Gallery",
  //     repoLink: "https://github.com/JakeBrowning90/inventory-application",
  //     liveLink: "https://virtual-gallery-morning-fire-4767.fly.dev/",
  //     thumbnail: "img/artMuseumThumbnail.jpg",
  //     desc: "An inventory management app built using Node.js, Express, and MongoDB. Authenticated users can create, update, and delete artists and paintings from the database.",
  //   },
  //   {
  //     title: "I Spy",
  //     repoLink: "https://github.com/JakeBrowning90/i-spy",
  //     liveLink: "https://jakebrowning90.github.io/i-spy/",
  //     thumbnail: "img/ispyThumbnail.jpg",
  //     desc: "A hidden-object game built with JavaScript and online scorekeeping in Cloud Firestore. Locate every item as fast as possible to join the scoreboard.",
  //   },
  {
    id: 6,
    title: "Memory",
    repoLink: "https://github.com/JakeBrowning90/memory-cards-2",
    liveLink: "https://jake-browning-memory-cards-2.netlify.app/",
    thumbnail: memory2Thumbnail,
    desc: "A React card game using a NASA image API. Click each card only once, but watch out: the cards move after every turn and no two games are the same.",
  },
  {
    id: 7,
    title: "CV Builder",
    repoLink: "https://github.com/JakeBrowning90/cv-application",
    liveLink: "https://jakebrowning-cv-builder.netlify.app/",
    thumbnail: cvBuilderThumbnail,
    desc: "A React app for building and editing a CV. Collapsable forms allow input for a header, summary, education, and work experience components.",
  },
  {
    id: 8,
    title: "Battleship",
    repoLink: "https://github.com/JakeBrowning90/battleship",
    liveLink: "https://jakebrowning90.github.io/battleship/",
    thumbnail: battleshipThumbnail,
    desc: "The classic board game in JavaScript, playable by 1 or 2 players. Place ships manually or automatically, and be the first to sink the opposing fleet.",
  },
  // {
  //   title: "Weather",
  //   repoLink: "https://github.com/JakeBrowning90/weather-app",
  //   liveLink: "https://jakebrowning90.github.io/weather-app/",
  //   thumbnail: "img/weatherThumbnail.jpg",
  //   desc: "Check the weather in more than 200,000 cities using the OpenWeather API. You can also toggle between metric and U.S. customary measurements.",
  // },
  // {
  //   title: "To-Do List",
  //   repoLink: "https://github.com/JakeBrowning90/to-do-list",
  //   liveLink: "https://jakebrowning90.github.io/to-do-list/",
  //   thumbnail: "img/todoThumbnail.jpg",
  //   desc: "Add, categorize, edit, and delete tasks on a personal list. The list also persists on a user’s machine using the localStorage property.",
  // },
  // {
  //   title: "Tic-Tac-Toe",
  //   repoLink: "https://github.com/JakeBrowning90/tic-tac-toe",
  //   liveLink: "https://jakebrowning90.github.io/tic-tac-toe/",
  //   thumbnail: "img/tictactoeThumbnail.jpg",
  //   desc: "Play a JavaScript version of the old-fashioned game against your friend.",
  // },
];

export default projectsList;
