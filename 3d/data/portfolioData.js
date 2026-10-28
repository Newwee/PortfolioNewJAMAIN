/**
 * 3D Workspace Portfolio Data
 * Centralized content used by interactive 3D objects and detail panels.
 */

export const WORKSPACE_DATA = {
  profile: {
    name: "Pataradanai Pongsao",
    alias: "New JA",
    role: "Creative AI Architect · Full-Stack Innovator",
    born: "June 23, 2009",
    location: "Bangkok, Thailand",
    school: "Navamindarajudis Triamudomsuksapattanakarn School (Grade 12)",
    bio: "High school developer with a relentless drive for innovation. Combining multi-agent AI, drone teleoperation, real-time 3D environments, and modern web architectures into impactful products.",
    avatar: "assets/myface.jpg",
    stats: [
      { label: "Projects Built", value: "24+" },
      { label: "Awards & Honors", value: "15+" },
      { label: "AI Accuracy", value: "99.8%" },
      { label: "Hackathon Win", value: "1st Place" }
    ],
    vision: "To pioneer autonomous robotics, multi-agent AI copilot frameworks, and spatial computing. Code is my canvas, AI is my collaborator, and innovation is my life's mission."
  },

  objects: {
    centerMonitor: {
      id: "projects",
      name: "Main Display",
      category: "Works & Innovations",
      tooltipTitle: "Main Display — Flagship Works",
      tooltipSub: "Click to inspect flagship projects & awards",
      icon: "🖥️",
      cameraTarget: { x: 0.15, y: 1.15, z: 0.75 },
      lookAt: { x: 0.15, y: 1.15, z: 0 },
      description: "Production-ready systems, national hackathon champions, and real-time AI architectures.",
      projects: [
        {
          id: "hackathon-manita",
          title: "AI Water Intelligence & Early Warning System",
          badge: "🏆 1st Place Champion (20,000 THB)",
          subtitle: "UTCC AI Hackathon 2026 (Team MANITA)",
          image: "assets/UTCCcer.jpg",
          body: "Grand Champion solution for UTCC AI Hackathon 2026. An AI-powered hydrological decision platform that analyzes real-time IoT sensor telemetry, rainfall intensity, and topographical elevation models to forecast urban flood vectors and trigger automated emergency alerts.",
          tags: ["AI / Machine Learning", "IoT Telemetry", "Disaster Prevention", "Dashboard UI"],
          highlights: ["1st Place Grand Prize (20,000 THB)", "Defeated 15 National Finalists", "Real-Time AI Flood Forecasting"]
        },
        {
          id: "drone-autonomy",
          title: "Autonomous Drone Vision & Telemetry Suite",
          badge: "⚡ Real-Time Edge Vision",
          subtitle: "Edge AI · YOLO · ROS 2 Flight Teleoperation",
          image: "assets/UTCC.jpg",
          body: "A high-performance autonomous drone teleoperation and computer vision platform. Combines edge YOLO object detection with ROS 2 flight controllers for real-time spatial mapping, target tracking, and sub-50ms telemetry over WebSockets.",
          tags: ["Robotics", "ROS 2", "Edge AI", "Computer Vision", "Python"],
          highlights: ["Real-Time Edge Object Detection", "ROS 2 Autonomous Navigation", "Sub-50ms Video Telemetry"]
        },
        {
          id: "ai-creative-engine",
          title: "Generative AI Systems & Agentic Orchestration",
          badge: "🤖 Autonomous AI Suite",
          subtitle: "Multi-Agent Copilot & Microsoft AI Builder",
          image: "assets2/17-1.png",
          body: "An end-to-end AI creation ecosystem integrating multi-agent LLM tool-calling, advanced prompt engineering, Microsoft AI Builder connected to Dataverse databases, and automated workflow orchestrations.",
          tags: ["Generative AI", "LLM Workflows", "Agentic Systems", "Microsoft AI Builder"],
          highlights: ["Multi-Agent Tool Orchestration", "Microsoft AI Builder + Dataverse", "Multimodal Generative Pipelines"]
        },
        {
          id: "roblox-mmorpg",
          title: "Roblox MMO RPG Game Engine & Systems",
          badge: "🎮 Large-Scale MMO Engine",
          subtitle: "Client-Server Network Replication & Combat Physics",
          image: "assets/cer-2.jpg",
          body: "A comprehensive multiplayer action-RPG built in Roblox Studio with a modular Lua framework, client-server state replication, server-authoritative combat hitbox validation, and persistent economy trees.",
          tags: ["Roblox Studio", "Lua Scripting", "MMO RPG", "Network Replication", "Combat Physics"],
          highlights: ["Client-Server Network Sync", "Combat Hitbox Validation", "Persistent Economy & Progression"]
        }
      ]
    },

    leftMonitor: {
      id: "about",
      name: "Dev Terminal",
      category: "Code & Philosophy",
      tooltipTitle: "Left Display — About New JA & Code",
      tooltipSub: "Click to explore developer profile & vision",
      icon: "💻",
      cameraTarget: { x: -0.65, y: 1.15, z: 0.8 },
      lookAt: { x: -0.65, y: 1.15, z: 0.1 },
      title: "Pataradanai Pongsao (New JA)",
      subtitle: "Creative AI Architect · Full-Stack Innovator",
      highlights: [
        "National Champion @ UTCC AI Hackathon 2026",
        "Grade 12 Student passionate about Autonomous Robotics & Generative Systems",
        "Polyglot Developer: Python, Lua, TypeScript, C#, WebGL, ROS 2",
        "Certified in Microsoft Azure AI & Power Platform"
      ],
      disciplines: [
        { name: "AI & Autonomous Systems", level: "Advanced", desc: "Agentic tool calling, fine-tuning, RAG, vision YOLO" },
        { name: "Full-Stack Web & 3D", level: "Advanced", desc: "Interactive Three.js, reactive architectures, Node.js" },
        { name: "Game Engine Systems", level: "Advanced", desc: "Distributed multiplayer netcode, physics validation" },
        { name: "Edge Robotics", level: "Proficient", desc: "ROS 2 telemetry, drone flight controllers, IoT sensors" }
      ]
    },

    pc: {
      id: "tech",
      name: "Workstation Rig",
      category: "Hardware & Tech Stack",
      tooltipTitle: "PC Tower — Engineering Arsenal",
      tooltipSub: "Click to view languages, frameworks & tools",
      icon: "⚡",
      cameraTarget: { x: 0.75, y: 1.15, z: 0.85 },
      lookAt: { x: 0.9, y: 1.1, z: 0.05 },
      categories: [
        {
          group: "Programming Languages",
          items: ["Python", "TypeScript / JavaScript", "Lua", "C#", "SQL", "HTML5 / CSS3"]
        },
        {
          group: "AI & Machine Intelligence",
          items: ["OpenAI & Claude API", "Google Gemini / Multimodal", "Microsoft AI Builder", "YOLO Vision", "Prompt Architecture", "Agentic Tool Calling"]
        },
        {
          group: "Frameworks & Web Architecture",
          items: ["Three.js / WebGL", "Node.js & Express", "React / Next.js Patterns", "PostgreSQL / SQLite", "REST & WebSocket Protocols"]
        },
        {
          group: "Robotics, Game & Edge",
          items: ["ROS 2 (Robot Operating System)", "Roblox Studio Engine", "Linux & Shell Scripting", "IoT Microcontrollers & Telemetry", "Drone Flight Teleoperation"]
        }
      ]
    },

    keyboard: {
      id: "skills",
      name: "Mechanical Keyboard",
      category: "Skills & Proficiencies",
      tooltipTitle: "RGB Keyboard — Core Skill Matrix",
      tooltipSub: "Click to inspect engineering proficiencies",
      icon: "⌨️",
      cameraTarget: { x: -0.05, y: 1.0, z: 0.65 },
      lookAt: { x: -0.05, y: 0.75, z: 0.35 },
      skills: [
        { name: "AI Systems & Generative Engineering", score: 10, tag: "10/10" },
        { name: "Polyglot Coding & Core Logic", score: 9, tag: "9/10" },
        { name: "Roblox Game Engine & Netcode", score: 9, tag: "9/10" },
        { name: "Autonomous Robotics & Edge Vision", score: 9, tag: "9/10" },
        { name: "Full-Stack Web & WebGL Architecture", score: 9, tag: "9/10" },
        { name: "YouTube Creator & Visual Storytelling", score: 9, tag: "9/10" },
        { name: "Python Automation & Pipelines", score: 8, tag: "8/10" },
        { name: "UI/UX & Interactive Design Systems", score: 8, tag: "8/10" }
      ]
    },

    mouse: {
      id: "journey",
      name: "Gaming Mouse",
      category: "Journey & Milestones",
      tooltipTitle: "Gaming Mouse — Life Story",
      tooltipSub: "Click to navigate career milestones",
      icon: "🖱️",
      cameraTarget: { x: 0.28, y: 0.98, z: 0.6 },
      lookAt: { x: 0.28, y: 0.75, z: 0.35 },
      milestones: [
        {
          period: "2009 · Where it started",
          title: "Born to explore",
          body: "Born June 23, 2009. From childhood, driven by raw curiosity — dismantling gadgets, exploring mechanics, and writing my first scripts."
        },
        {
          period: "Early Foundations",
          title: "Building Virtual Worlds",
          body: "First experiments with scripting and game loops. Realized that crafting virtual worlds was far more thrilling than simply playing them."
        },
        {
          period: "High School · Grade 7 – 12",
          title: "Science-Math & Engineering Direction",
          body: "Navamindarajudis Triamudomsuksapattanakarn School. Deepened algorithmic mastery, distributed systems, robotics, and edge AI."
        },
        {
          period: "2026 · National AI Champion",
          title: "UTCC AI Hackathon Victory",
          body: "Grand Champion of UTCC AI Hackathon 2026 (Team MANITA). Built AI flood forecasting telemetry system, winning 1st place nationwide."
        },
        {
          period: "The Vision Ahead",
          title: "Autonomous Systems & Spatial Computing",
          body: "Pioneering the intersection of autonomous edge robotics and agentic intelligence to solve real-world problems."
        }
      ]
    },

    headphones: {
      id: "contact",
      name: "Gaming Headset",
      category: "Transmission & Connect",
      tooltipTitle: "Headset — Contact Channel",
      tooltipSub: "Click to connect with New JA",
      icon: "🎧",
      cameraTarget: { x: 0.48, y: 1.05, z: 0.68 },
      lookAt: { x: 0.52, y: 0.9, z: 0.3 },
      channels: [
        { label: "Gmail", value: "pongpataradanai@gmail.com", href: "mailto:pongpataradanai@gmail.com" },
        { label: "Line", value: "new_vd", href: "https://line.me/R/ti/p/~new_vd" },
        { label: "GitHub", value: "github.com/Newwee", href: "https://github.com/Newwee" },
        { label: "Facebook", value: "pataradanai.pongsao", href: "https://www.facebook.com/pataradanai.pongsao" },
        { label: "Instagram", value: "@new.linknewja", href: "https://www.instagram.com/new.linknewja/" },
        { label: "YouTube", value: "@NewJAA", href: "https://www.youtube.com/@NewJAA" }
      ],
      resumeNote: "Download official PDF Resume or reach out for collaborations."
    },

    plant: {
      id: "philosophy",
      name: "Desk Plant",
      category: "Personal & Vision",
      tooltipTitle: "Desk Plant — Personal Philosophy",
      tooltipSub: "Click to read personal creed & mindset",
      icon: "🌱",
      cameraTarget: { x: -0.65, y: 0.98, z: 0.65 },
      lookAt: { x: -0.7, y: 0.82, z: 0.25 },
      creed: "Keep building. Stay relentlessly curious. Never stop learning.",
      points: [
        "Belief in rapid prototyping and hands-on trial by fire.",
        "Embracing open-source and modern AI collaboration.",
        "Balancing rigorous engineering discipline with boundless creativity.",
        "Turning complex algorithms into intuitive human experiences."
      ]
    },

    deskMat: {
      id: "dossiers",
      name: "Desk Workspace",
      category: "Interactive Dossiers",
      tooltipTitle: "Workspace — 3D Project Dossiers",
      tooltipSub: "Click to inspect competition dossiers & papers",
      icon: "📁",
      cameraTarget: { x: 0.0, y: 1.1, z: 0.7 },
      lookAt: { x: 0.0, y: 0.75, z: 0.25 },
      dossiers: [
        {
          title: "National AI Champion (UTCC 2026)",
          badge: "🏆 1st Place (20,000 THB)",
          desc: "Real-time hydrological predictive modeling & disaster warning."
        },
        {
          title: "Generative AI Systems Suite",
          badge: "🤖 Agentic Workflows",
          desc: "Autonomous multi-agent tool calling with Microsoft AI Builder."
        },
        {
          title: "Roblox MMO RPG Engine",
          badge: "🎮 Multiplayer Netcode",
          desc: "Server-authoritative replication, persistent quest trees."
        },
        {
          title: "Autonomous Robotics & Drones",
          badge: "🚁 ROS 2 & YOLO",
          desc: "Embedded computer vision processing and low-latency flight."
        }
      ]
    }
  }
};
