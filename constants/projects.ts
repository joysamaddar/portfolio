import dooit_cover from "@/public/dooit_cover.png";
import dooit_screenshot from "@/public/dooit_screenshot.png";
import dooit_screenshot_2 from "@/public/dooit_screenshot_2.png";
import joey_jumps_cover from "@/public/joey_jumps_cover.png";
import joey_jumps_screenshot from "@/public/joey_jumps_screenshot.png";
import xatty_cover from "@/public/xatty_cover.png";
import xatty_screenshot from "@/public/xatty_screenshot.png";

export const projects = [
  {
    id: "dooit",
    title: "DOOIT",
    metadata: ["Utility"],
    cover_image: dooit_cover,
    screenshots: [dooit_screenshot, dooit_screenshot_2],
    description: "A kanban board with a sleek design and intuitive UX.",
    url: "/projects/dooit",
    features: [
      "Drag and drop kanban board with an amazing UI and smooth UX",
      "Create and manage multiple projects",
      "Add/Remove users from projects on the fly",
      "Get tasks progress and other statistics",
      "Optimised for both mobile and web",
    ],
    skills: {
      Backend: ["NestJS", "TypeScript", "TypeORM", "MongoDB"],
      Frontend: ["NextJS", "TypeScript", "Tailwind CSS", "SCSS", "DaisyUI"],
      Others: ["Apollo GraphQL"],
    },
    liveLink: "https://dooit.vercel.app/",
    codeLink: "https://github.com/joysamaddar/dooit",
  },
  {
    id: "joey_jumps",
    title: "JOEY JUMPS",
    metadata: ["Gaming"],
    cover_image: joey_jumps_cover,
    screenshots: [joey_jumps_screenshot],
    url: "/projects/joey_jumps",
    description: "A platformer game for fun and lols.",
    features: [
      "No libraries used. No gimmicks. Just plain old HTML and JS.",
      "Amazing sprite animations.",
    ],
    problem:
      "Challenged myself to make a platformer game without using any game engine, any frameworks or html canvas. Just plain old html, css and javascript.",
    solution:
      "Achieved this by using html divs for the character sprite and the shooting blast. For the running and jumping of the sprite, css animations were used. Shooting blase divs were randomly generated at random intervals of time to the viewport. Then calculated if the character and the blast intersects (which means the character dies) by using the getBoundingClientRect method, which returns a DOMRect object providing information about the size of an element and its position relative to the viewport.",
    skills: { Frontend: ["HTML", "CSS", "Vanilla Javascript"] },
    liveLink: "https://joysamaddar.github.io/Joey-Jumps/",
    codeLink: "https://github.com/joysamaddar/Joey-Jumps",
  },
  {
    id: "xatty",
    title: "XATTY",
    url: "/projects/xatty",
    cover_image: xatty_cover,
    screenshots: [xatty_screenshot],
    description: "A chat app that allows realtime chat between users.",
    metadata: ["Social"],
    features: [
      "Create unlimited chatrooms",
      "Allows multiple users per room",
      "No useless signup or login needed. Share room link & chat!",
    ],
    skills: {
      Backend: ["Node.js", "Express.js", "Socket.IO"],
      Frontend: ["React", "SCSS"],
    },
    liveLink: "https://xatty.netlify.app/",
    codeLink: "https://github.com/joysamaddar/Xatty",
  },
];
