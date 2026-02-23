export function works() {
  return [
    {
      id: 333,
      title: "UI Component Generator",
      urlName: "ui-component-generator",
      description:
        "UI Component Generator is a fullstack application that uses generative AI to create React components with TypeScript and Tailwind CSS from natural language descriptions. Components are rendered in real time with an interactive preview and can be edited through textual instructions.",

      fullDescription: `
Fullstack application that uses generative AI to create React components with TypeScript and Tailwind CSS from natural language descriptions. Components are rendered in real time with an interactive preview and can be edited through textual instructions.

Stack: Next.js 15 • React • TypeScript • Tailwind CSS • Groq AI (Llama 3.3) • Supabase • Monaco Editor

Key Features:

Component generation through natural language prompts

Live preview with isolated iframe and independent Tailwind CDN

Iterative editing via AI instructions ("change the color to green")

Automatic variant system (sizes, styles, colors)

Integrated code editor with syntax highlighting

PostgreSQL persistence with full version history

Technical Complexity:

Sandbox architecture using iframes to isolate Tailwind from the main site

Optimized prompt engineering to generate valid TypeScript code

In-browser React/JSX transpilation using Babel Standalone

Complex state management for component editing and regeneration
`,

      tech: [
        "React",
        "NextJs",
        "TypeScript",
        "Tailwind",
        "Groq AI",
        "Supabase",
        "Monaco Editor",
      ],
      liveDemo: "https://ui-component-generator-federicosavastano.vercel.app/",
      gitHub: "https://github.com/FedericoSavastano/ui-component-generator",
      screenshot:
        "https://res.cloudinary.com/dd1gptapb/image/upload/v1771884088/portfolio/202602231854-_1__htho5i.gif",
      //flowchart: "https://example.com/demo1",
      // docs: "https://taskly-backend-8sam.onrender.com/docs",
    },

    {
      id: 77772,
      title: "Code Review Assistant",
      urlName: "code-review-assistant",
      description:
        "AI-powered code analysis platform that identifies bugs, security vulnerabilities, and code smells across more than 10 programming languages.",

      fullDescription: `
An AI-powered code analysis platform that identifies bugs, security vulnerabilities, and code smells across more than 10 programming languages. It provides corrected code suggestions with detailed explanations and side-by-side visual comparison.

Stack: Next.js 15 • React • TypeScript • Tailwind CSS • Groq AI (Llama 3.3) • Supabase • Monaco Editor

Key Features:

Static code analysis for JavaScript, TypeScript, Python, Java, Go, Rust, C++, C#, PHP, and Ruby

Automatic detection of bugs, vulnerabilities, and bad practices

Severity classification system (critical, warning, suggestion)

Inline and modal visual comparison with syntax highlighting

Corrected code suggestions with contextual explanations

Shareable links for collaborative reviews

Persistent analysis history with search functionality

Technical Complexity:

Prompt engineering for structured analysis with reliable JSON outputs

Visual diff system using react-diff-viewer for code comparisons

Contextual code extraction (3 lines before/after each issue)

Secure sharing architecture with unique tokens and Supabase RLS policies

Robust error handling with fallbacks for inconsistent LLM responses
`,

      tech: [
        "React",
        "NextJs",
        "TypeScript",
        "Groq AI",
        "Supabase",
        "Monaco Editor",
        "TailwindCSS",
      ],
      liveDemo: "https://code-review-assistant-federicosavastano.vercel.app/",
      gitHub: "https://github.com/FedericoSavastano/code-review-assistant",
      screenshot:
        "https://res.cloudinary.com/dd1gptapb/image/upload/v1771887102/portfolio/202602231854-_2__e1gwqt.gif",
      //flowchart: "https://example.com/demo1",
      //docs: "https://taskly-backend-8sam.onrender.com/docs",
    },
    {
      id: 2,
      title: "Taskly - Task manager",
      urlName: "taskly",
      description:
        "Taskly is a fullstack task management app built with the MERN stack. It allows users to create projects, assign roles, manage tasks with status updates, and add notes. Developed with React + TypeScript on the frontend and Node.js, Express, and MongoDB (Mongoose) with TypeScript on the backend.",

      fullDescription: `
Taskly is a fullstack project management application inspired by tools like Trello, designed to streamline team collaboration and task organization.

The platform provides user authentication and account creation, ensuring secure access to projects. Once logged in, users can:
- Create and manage projects
- Assign roles and tasks to team members
- Track task progress by updating their status
- Add notes and comments directly to tasks for better context and communication

From a technical perspective, the frontend was built with React and TypeScript, delivering a responsive and type-safe user experience. The backend was developed using Node.js, Express, and MongoDB (Mongoose) with TypeScript, enabling scalable data management and a robust API layer.
This project demonstrates not only technical proficiency in the MERN stack with TypeScript but also the ability to design and implement real-world features for collaborative productivity tools.

Feel free to create your own user or if you want to quickly check the app sign in as:
- user: federicosavastano.dev@gmail.com
- pass: tasklytester
`,

      tech: [
        "React",
        "React router dom",
        "TypeScript",
        "Node",
        "Express",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Zod",
      ],
      liveDemo: "https://taskly-taskmanager.vercel.app/",
      gitHub: "https://github.com/FedericoSavastano/taskly_backend",
      screenshot:
        "https://res.cloudinary.com/dd1gptapb/image/upload/v1755983020/portfolio/taskly_gif_gwzk3j.gif",
      //flowchart: "https://example.com/demo1",
      docs: "https://taskly-backend-8sam.onrender.com/docs",
    },

    {
      id: 3,
      title: "McDowell's Burgers and Café",
      urlName: "mcdowells",
      description:
        "McDowell’s is a fullstack app built with Next.js and TypeScript that simulates a fast-food kiosk. Customers can place and pay for orders, while staff manage them through an admin dashboard. Completed orders are displayed on a pickup screen. It uses MongoDB with Prisma, SWR, Zod, and Zustand for data handling and validation.",

      fullDescription: `
McDowell’s is a fullstack application developed with Next.js and TypeScript, designed to function as a kiosk system for a fast-food and café business.

* The customer-facing side runs under /order/[category], where users can select items, place an order, and complete payment seamlessly.

* The kitchen/admin panel is located at /admin, where staff can:
      -- View incoming orders in real-time
      -- Update order statuses (e.g., mark as completed)
      -- Manage the menu by creating and editing products

* Once an order is completed, it is displayed at /orders, serving as the pickup screen where customers can confirm their orders are ready.

The app is powered by MongoDB with Prisma for database management, and uses SWR, Zod, and Zustand for state management, data fetching, and schema validation also Stripe platform for payment. Together, these tools ensure a responsive, scalable, and reliable kiosk experience tailored for the food-service industry.

Feel free to create your own orders!
`,
      tech: [
        "React",
        "NextJs",
        "TypeScript",
        "Node",
        "Express",
        "MongoDB",
        "Mongoose",
        "Prisma",
        "Zod",
        "Zustand",
        "SWR",
        "Stripe",
      ],
      liveDemo: "https://mcdowells-nextjs-shop.vercel.app/",
      adminPanel: "https://mcdowells-nextjs-shop.vercel.app/admin/orders",
      orders: "https://mcdowells-nextjs-shop.vercel.app/orders",
      gitHub: "https://github.com/FedericoSavastano/mcdowells_nextjs_shop",
      screenshot:
        "https://res.cloudinary.com/dd1gptapb/image/upload/v1757542072/portfolio/mcdowells_gifV2_b7iwah.gif",
      //flowchart: "https://example.com/demo1",
      // docs: "https://taskly-backend-8sam.onrender.com/docs",
    },
    {
      id: 1,
      title: "Boys Pet Shop",
      urlName: "boyspetshop",
      description:
        "Boys Pet Shop is a fullstack CRUD application built with React, TypeScript, Node.js, Express, and PostgreSQL. It allows seamless management of pet products, clean architecture and strong integration between the frontend and backend.",

      fullDescription: `
Boys Pet Shop is a fullstack CRUD (Create, Read, Update, Delete) application designed to manage a pet shop’s core data and operations.

* The frontend, developed with React and TypeScript, provides a clean and responsive interface for handling pet shop products.

* The backend, built with Node.js and Express, connects to a PostgreSQL database, ensuring reliable and efficient data storage.

* Core features include adding, editing, viewing, and deleting records, with a strong focus on data integrity and user experience.

This project highlights fullstack development skills, database modeling, and the ability to build scalable, maintainable CRUD applications that serve as the foundation for real-world business solutions.

Feel free to create your own pet products!
`,
      tech: [
        "React",
        "Node",
        "Express",
        "TypeScript",
        "PostgreSQL",
        "React router dom",
        "Tailwind",
      ],
      liveDemo: "https://boyspetshop.vercel.app/",
      gitHub: "https://github.com/FedericoSavastano/boyspetshop_backend",
      screenshot:
        "https://res.cloudinary.com/dd1gptapb/image/upload/v1755989614/portfolio/boyspetshop_gif_fnlpk4.gif",
      // flowchart: 'https://example.com/demo1',
      docs: "https://boyspetshop-backend.onrender.com/docs/",
    },
    {
      id: 4,
      title: "Smalllists",
      urlName: "smalllists",
      description:
        "Small lists is a React application. It functions as a shopping list - or anything list -, that you can add items inside a category, and mark them as done, or delete them. You can also share via your preferred way to any friend of yours to check the list",
      fullDescription:
        "Small lists is a React application. It functions as a shopping list - or anything list -, that you can add items inside a category, and mark them as done, or delete them. You can also share via your preferred way to any friend of yours to check the list. The sharing button creates a url with your complete list and when you share it the application quickly fetches all data from the url to recreate the list on a different device. When this process is done, the url switches back to the standard way.",

      tech: ["React", "React router dom", "Bootstrap", "Axios"],
      liveDemo: "https://smalllists.vercel.app/",
      gitHub: "https://github.com/FedericoSavastano/smalllists",
      screenshot:
        "https://res.cloudinary.com/dd1gptapb/image/upload/v1755996120/portfolio/smalllists_gif_stcywm.gif",
      // flowchart: 'https://example.com/demo1',
    },
    // {
    //   id: 42,
    //   title: "Job 42",
    //   urlName: "job42",
    //   description:
    //     "This is job 42 according to the hitchhicker´s guide to the galaxy lorem consectetur adipisicing elit. Illum sequi, est nemo eveniet incidunt, commodi sed optio dolores id eum molestias perferendis exercitation",

    //   tech: ["React", "Styled-Components", "Tailwind"],
    //   liveDemo: "https://example.com/demo1",
    //   gitHub: "https://github.com/",
    //   screenshot:
    //     "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png",
    //   flowchart: "https://example.com/demo1",
    // },
    // {
    //   id: 3,
    //   title: "Job XX",
    //   urlName: "job3",
    //   description:
    //     "This is job 3 consectetur adipisicing elit. Illum sequi, est nemo eveniet incidunt, commodi sed optio dolores id eum molestias perferendis exercitation",
    //   tech: ["React", "React router dom"],
    //   liveDemo: "https://example.com/demo1",
    //   gitHub: "https://github.com/",
    //   screenshot:
    //     "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png",
    //   flowchart: "https://example.com/demo1",
    // },
  ];
}
