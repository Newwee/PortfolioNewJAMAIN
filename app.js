/* ============================================================
   📝 CONTENT — EDIT ME
   This is the only place you should need to touch to update
   your story, skills, projects, or certificates. Fill in both
   "en" and "th" for anything new so the language switch keeps
   working. Everything else in this file just renders whatever
   is written here.
   ============================================================ */
const CONTENT = {
  en: {
    story: [
      {
        period: "2009 · Where it started",
        title: "Born to explore",
        body: "I was born on June 23, 2009. Nothing dramatic — just a kid who loved playing, poking at things, and following whatever caught my curiosity that day."
      },
      {
        period: "Kindergarten – Grade 6",
        title: "Bangpleepat School",
        body: "This is where it all began — friendships, first lessons, and the habit of trying new things even when I wasn't sure I'd be good at them."
      },
      {
        period: "Grade 7 – Grade 12",
        title: "Navamindarajudis Triamudomsuksapattanakarn School",
        body: "I stuck with the Science-Math program through high school, and this is really where curiosity turned into direction: coding, design, content, and tech."
      },
      {
        period: "Dream university",
        title: "Why KMITL",
        body: "KMITL has been the dream since I was a kid. It's renowned for engineering, computer science, and pioneering technology. It is exactly where I want to grow as a developer and an innovator."
      },
      {
        period: "Now",
        title: "From playing to building",
        body: "My motto: I used to love playing — now I love building. These days that means full-stack websites, generative AI pipelines, content creation, and an expansive Roblox MMO RPG I'm bringing to life."
      }
    ],
    skills: [
      { name: "AI Systems & Generative Engineering", score: 10, body: "Mastering LLMs, prompt pipelines, autonomous agent workflows, Microsoft AI Builder, and multi-modal creation." },
      { name: "Polyglot Coding & Logic", score: 9, body: "Fluent in core computer science paradigms across Python, Lua, JS/TS, C#, HTML/CSS, and SQL." },
      { name: "Lua / Roblox Game Engine", score: 9, body: "Scripting complex MMO RPG systems, combat engines, inventory trees, and multiplayer client-server sync." },
      { name: "YouTube Content Creator", score: 9, body: "Storyboarding, high-retention pacing, creative storytelling, and video production that connects with audiences." },
      { name: "HTML5 / CSS3 / JavaScript", score: 8, body: "Designing futuristic glassmorphic UI, reactive components, fluid micro-interactions, and mobile responsiveness." },
      { name: "Python Automation & Data", score: 8, body: "AI integrations, automated data flows, backend pipelines, and rapid algorithmic prototyping." },
      { name: "UI/UX & Design Systems", score: 8, body: "Visual hierarchy, typography, glassmorphism aesthetics, responsive viewports, and seamless user experiences." },
      { name: "Premiere Pro & Media Editing", score: 8, body: "Dynamic pacing, sound design, visual effects, and cinematic transitions that elevate video content." },
      { name: "C# / Unity Foundations", score: 6, body: "OOP component architectures, Unity physics loops, and interactive 3D gameplay experiments." }
    ],
    aiTools: [
      { name: "ChatGPT", body: "Core engine for architectural design, code generation, debugging, and rapid prototyping." },
      { name: "Claude", body: "Deep analytical thinking, complex documentation refinement, and high-precision reasoning." },
      { name: "Gemini", body: "Multimodal research, latest technology exploration, and cross-model synthesis." },
      { name: "Grok", body: "Trend exploration, rapid ideation, and exploring unconventional creative angles." }
    ],
    dossiers: [
      {
        id: "champ-water",
        title: "National AI Champion",
        subtitle: "UTCC AI Hackathon 2026",
        color: "#f97316",
        papers: [
          { tag: "TROPHY", title: "1st Place Winner (20,000 THB)", desc: "Outperformed 15 finalist teams nationwide" },
          { tag: "SOLUTION", title: "AI Water & Flood Intel", desc: "Real-time hydrological predictive modeling" },
          { tag: "TECH", title: "IoT Sensors & Telemetry", desc: "Automated community disaster warning" }
        ]
      },
      {
        id: "genai-suite",
        title: "Generative AI Systems",
        subtitle: "Multi-Agent Workflows",
        color: "#ff5e1a",
        papers: [
          { tag: "AGENTS", title: "Multi-Agent Tool Calling", desc: "Autonomous reasoning & task pipelines" },
          { tag: "POWER PLATFORM", title: "Microsoft AI Builder", desc: "Connected directly to Dataverse cloud" },
          { tag: "MULTIMODAL", title: "Generative Media Suite", desc: "High-retention visual & text synthesis" }
        ]
      },
      {
        id: "roblox-engine",
        title: "Roblox MMO RPG Engine",
        subtitle: "Virtual World & Systems",
        color: "#ea580c",
        papers: [
          { tag: "NETCODE", title: "Client-Server State Sync", desc: "Low-latency multiplayer replication" },
          { tag: "PHYSICS", title: "Combat & Hitbox Validation", desc: "Server-authoritative action logic" },
          { tag: "ECONOMY", title: "Inventory & Quest Trees", desc: "Persistent progression and custom VFX" }
        ]
      },
      {
        id: "kmitl-aspirant",
        title: "KMITL Candidate Dossier",
        subtitle: "Future Tech Innovator",
        color: "#ffb43a",
        papers: [
          { tag: "ACADEMIC", title: "Grade 12 Science-Math", desc: "Navamindarajudis Triamudom School" },
          { tag: "TARGET", title: "Faculty of Engineering", desc: "Computer Science & Software Systems" },
          { tag: "CREED", title: "Born to Build", desc: "Code, AI, and continuous engineering" }
        ]
      }
    ],
    projects: [
      {
        id: "hackathon-manita",
        title: "AI Water Intelligence & Early Warning System",
        type: "🏆 1st Place National Champion / AI & STEM Hackathon",
        badge: "🏆 1st Place Champion (20,000 THB)",
        featured: true,
        status: "1st Place Winner",
        body: "Grand Champion solution for UTCC AI Hackathon 2026 (Team MANITA), defeating 15 finalist teams nationwide. Architected an AI-powered hydrological decision intelligence platform that analyzes real-time sensor streams, rainfall rates, and terrain elevation models to forecast urban flood risks and trigger automated community warning escalations.",
        highlights: ["1st Place Grand Prize (20,000 THB)", "Defeated 15 National Finalists", "Real-Time AI Flood Forecasting", "STEM & Telemetry Architecture"],
        tags: ["AI / Machine Learning", "STEM Solution", "Data Modeling", "IoT Telemetry", "Disaster Prevention", "Dashboard UI"]
      },
      {
        id: "ai-creative-engine",
        title: "Generative AI Systems & Autonomous Automation Suite",
        type: "🤖 AI Engineering / 'Anything With AI I Can Create'",
        badge: "⚡ Autonomous AI Suite",
        featured: true,
        status: "Active Innovation",
        body: "An end-to-end AI creation ecosystem demonstrating that with modern AI, any software or creative vision can be built rapidly. Integrates multi-agent LLM tool-calling, advanced prompt engineering, Microsoft AI Builder connected to Dataverse databases, automated workflow orchestrations, and multimodal asset synthesis.",
        highlights: ["Multi-Agent Tool Orchestration", "Microsoft AI Builder + Dataverse", "Prompt Engineering Mastery", "Multimodal Generative Pipelines"],
        tags: ["Generative AI", "LLM Workflows", "Agentic Systems", "Microsoft AI Builder", "Python Automation", "Dataverse"]
      },
      {
        id: "polyglot-code-lab",
        title: "Polyglot Engineering & Multi-Language Core Architecture",
        type: "⚡ Software Engineering / 'Know Code & Core Languages'",
        badge: "🌐 Multi-Language & Multi-Paradigm",
        featured: false,
        status: "Core Capability",
        body: "A demonstration of deep computer science adaptability across programming paradigms and languages. Fluent in Python for data/AI logic, Lua for real-time game systems, JavaScript/TypeScript for modern full-stack web engines, C# for Unity OOP game logic, HTML5/CSS3 for fluid glassmorphic UI, and SQL/Dataverse for robust relational data architecture.",
        highlights: ["Multi-Paradigm: OOP, Functional, Event-Driven", "Full-Stack Web & Low-Latency Engines", "Clean Modular Architecture", "Rapid Cross-Language Adaptability"],
        tags: ["Python", "Lua", "JavaScript / TypeScript", "C# / Unity", "HTML5 / CSS3", "SQL / Dataverse"]
      },
      {
        id: "roblox-mmorpg",
        title: "Roblox MMO RPG Game Engine & Virtual World",
        type: "🎮 Game Development / Distributed Systems",
        badge: "🎮 Large-Scale MMO Engine",
        featured: false,
        status: "In Active Development",
        body: "A comprehensive multiplayer action-RPG built inside Roblox Studio. Engineered with modular Lua framework, client-server state replication, real-time combat hitbox validation, inventory economy trees, procedural quest triggers, custom UI animation suites, and immersive atmospheric world-building.",
        highlights: ["Client-Server Network Sync", "Combat & Hitbox Validation", "Persistent Economy & Progression", "Custom World Design & VFX"],
        tags: ["Roblox Studio", "Lua Scripting", "MMO RPG", "Network Replication", "Game Systems", "Combat Physics"]
      },
      {
        id: "portfolio-site",
        title: "Cyber-Glassmorphism Portfolio & Admin Control Room",
        type: "💎 Full-Stack Web Application / Platform Engineering",
        badge: "💎 Full-Stack & Secure Back Office",
        featured: false,
        status: "Live Production",
        body: "Production portfolio built from ground up with an obsidian-orange KMITL aesthetic. Features Express.js server, SQLite/PostgreSQL data layer, Argon2 password encryption, tamper-proof session tokens, live interactive like system, full audit telemetry, admin control room, bi-lingual i18n, and ultra-fluid cross-device smoothness.",
        highlights: ["Express.js & Database Persistence", "Admin Control Room & Audit Logs", "Crypto-Grade Session Security", "Universal Cross-Device Fluidity"],
        tags: ["Express.js", "SQLite / PostgreSQL", "Security & Sessions", "Admin Control Room", "Bilingual i18n", "Fluid UI"]
      }
    ],
    certificates: [
      {
        title: "Certificate of 1st Place - UTCC AI Hackathon 2026",
        image: "assets/UTCCcer.jpg",
        body: "Received a certificate for winning 1st place with an AI & STEM solution for Thailand's water management.",
        issuerId: "best_award"
      },
      {
        title: "Champion Prize - Team MANITA",
        image: "assets/UTCC.jpg",
        body: "Awarded the 20,000 THB grand prize, defeating 15 finalist teams nationwide at the University of the Thai Chamber of Commerce.",
        issuerId: "best_award"
      },
      { title: "Design AI-powered business solutions", image: "assets2/17-1.png", body: "Shows I can design higher-level business solutions that put AI to work.", issuerId: "microsoft" },
      { title: "Create effective prompts for generative AI", image: "assets2/16-1.png", body: "Prompt engineering — getting generative AI models to actually give you what you need.", issuerId: "microsoft" },
      { title: "Create AI Builder prompts", image: "assets2/1-1.png", body: "Connecting AI capabilities directly to Dataverse databases.", issuerId: "microsoft" },
      { title: "Turn business ideas into solutions", image: "assets2/15-1.png", body: "Taking a business idea and actually turning it into a working Power Platform app.", issuerId: "microsoft" },
      { title: "Customize a canvas app", image: "assets2/10-1.png", body: "Hands-on work tailoring app interfaces and custom functions.", issuerId: "microsoft" },
      { title: "Configure forms, charts, and dashboards", image: "assets2/7-1.png", body: "Building the dashboards businesses actually rely on for data.", issuerId: "microsoft" },
      { title: "Build approval flows with Power Automate", image: "assets2/2-1.png", body: "Automated workflows and approval systems, built and working.", issuerId: "microsoft" },
      { title: "Publish, share, and maintain a canvas app", image: "assets2/9-1.png", body: "Understanding the full app lifecycle, from launch to long-term upkeep.", issuerId: "microsoft" },
      { title: "Use Dataverse triggers and actions", image: "assets2/3-1.png", body: "Automating processes off database events and data changes.", issuerId: "microsoft" },
      { title: "Core components of Power Pages", image: "assets2/6-1.png", body: "The foundations of building external-facing business websites.", issuerId: "microsoft" },
      { title: "Explore Power Pages design studio", image: "assets2/5-1.png", body: "Designing and styling data-driven web pages." },
      { title: "Get started with Power Automate", image: "assets2/4-1.png", body: "Foundations of automated workflows and process automation.", issuerId: "microsoft" },
      { title: "Get started with model-driven apps", image: "assets2/8-1.png", body: "The basics of data-first app development in Power Apps.", issuerId: "microsoft" },
      { title: "Get started with Power Apps canvas apps", image: "assets2/11-1.png", body: "First steps into low-code app development.", issuerId: "microsoft" },
      { title: "Security roles in Dataverse", image: "assets2/12-1.png", body: "The basics of access control and data security.", issuerId: "microsoft" },
      { title: "Create and manage columns in Dataverse", image: "assets2/13-1.png", body: "Foundations of database schema setup.", issuerId: "microsoft" },
      { title: "Create tables in Dataverse", image: "assets2/14-1.png", body: "The basics of structuring a relational database.", issuerId: "microsoft" },
      { title: "Make Game with AI", image: "assets/cer-2.jpg", body: "Completed the Make Game with AI activity.", issuerId: "hamsterhub" },
      { title: "Game with AI Workshop", image: "assets/cer-3.png", body: "Took part in a hands-on Game with AI workshop.", issuerId: "hamsterhub" },
      { title: "Other Certificate", image: "assets/cer-1.jpg", body: "General foundation-level skills.", issuerId: "other" }
    ]
  },
  th: {
    story: [
      {
        period: "2552 · จุดเริ่มต้น",
        title: "เกิดมาเพื่อสำรวจ",
        body: "เกิดวันที่ 23 มิถุนายน 2552 ไม่มีอะไรพิเศษหรอก แค่เด็กคนหนึ่งที่ชอบเล่น ชอบลองจับโน่นจับนี่ และตามความอยากรู้ของตัวเองไปเรื่อย ๆ"
      },
      {
        period: "อนุบาล – ประถม 6",
        title: "โรงเรียนบางพลีพัฒนศึกษาลัย",
        body: "จุดเริ่มของทุกอย่าง ทั้งเพื่อน บทเรียนแรก ๆ และนิสัยชอบลองของใหม่แม้จะยังไม่มั่นใจว่าจะทำได้ดีแค่ไหน"
      },
      {
        period: "มัธยม 1 – มัธยม 6",
        title: "โรงเรียนนวมินทราชูทิศ เตรียมอุดมศึกษาพัฒนาการ",
        body: "เรียนสายวิทย์-คณิตมาตลอด และช่วงนี้เองที่ความสนใจเริ่มชัดขึ้นเรื่อย ๆ ทั้งเขียนโค้ด ออกแบบ ทำคอนเทนต์ และเทคโนโลยี"
      },
      {
        period: "มหาวิทยาลัยในฝัน",
        title: "ทำไมต้อง KMITL",
        body: "KMITL (สจล.) เป็นมหาวิทยาลัยในฝันมาตั้งแต่เด็ก ด้วยชื่อเสียงความเป็นเลิศด้านวิศวกรรม วิทยาการคอมพิวเตอร์ และเทคโนโลยีชั้นนำ นี่คือสถานที่ที่อยากไปเรียนต่อเพื่อพัฒนาตัวเองให้เป็นนักพัฒนาและนวัตกรระดับประเทศ"
      },
      {
        period: "ตอนนี้",
        title: "จากเด็กที่ชอบเล่น สู่คนที่ชอบสร้าง",
        body: "คติประจำใจ: ตอนเด็กชอบเล่น ตอนนี้ชอบสร้าง ทุกวันนี้เลยได้ทำเว็บไซต์ Full-Stack, พัฒนาระบบด้วย AI, ทำคอนเทนต์ และสร้างเกม Roblox MMO RPG ของตัวเอง"
      }
    ],
    skills: [
      { name: "วิศวกรรม AI & Generative Workflows", score: 10, body: "เชี่ยวชาญการประยุกต์ใช้ LLMs, ออกแบบ Prompt ชั้นสูง, Multi-Agent Workflows, Microsoft AI Builder และการสร้างสื่อด้วย AI" },
      { name: "การเขียนโปรแกรมหลากภาษา & ตรรกะ (Polyglot)", score: 9, body: "เข้าใจรากฐานของภาษาและกระบวนทัศน์หลัก: Python, Lua, JS/TS, C#, HTML/CSS, SQL และ Dataverse" },
      { name: "สคริปต์ Lua / Roblox Engine", score: 9, body: "พัฒนาระบบเกม MMO RPG ขั้นสูง ระบบการต่อสู้ ระบบไอเทม และการ Sync ข้อมูล Client-Server แบบเรียลไทม์" },
      { name: "ยูทูบเบอร์ & ครีเอเตอร์คอนเทนต์", score: 9, body: "วางแผนโครงเรื่อง จังหวะการเล่าเรื่องที่ดึงดูด การตัดต่อวิดีโอคุณภาพ และการสื่อสารที่เข้าถึงผู้ชม" },
      { name: "HTML5 / CSS3 / JavaScript (Full-Stack)", score: 8, body: "ออกแบบ UI แบบ Cyber Glassmorphism ลื่นไหล คอมโพเนนต์ที่ตอบสนองดีเยี่ยม และรองรับทุกหน้าจอ" },
      { name: "Python สำหรับระบบอัตโนมัติ & Data", score: 8, body: "เชื่อมต่อ AI API, ไปป์ไลน์ประมวลผลข้อมูล, สคริปต์อัตโนมัติ และการแก้ปัญหาด้วยอัลกอริทึม" },
      { name: "การออกแบบ UI/UX & ระบบดีไซน์", score: 8, body: "การจัดลำดับสายตา ความคมชัดของตัวหนังสือ ธีม Glassmorphism ที่สวยงาม และประสบการณ์การใช้งานที่ราบรื่น" },
      { name: "Premiere Pro & ตัดต่อวิดีโอ", score: 8, body: "ตัดต่อแบบมีไดนามิก การออกแบบเสียง เอฟเฟกต์ภาพ และ Transitions สไตล์มืออาชีพ" },
      { name: "พื้นฐาน C# / Unity", score: 6, body: "สถาปัตยกรรม OOP สำหรับเกม วงรอบฟิสิกส์ใน Unity และการทดลองสร้างเกม 3D แบบ Interactive" }
    ],
    aiTools: [
      { name: "ChatGPT", body: "เครื่องมือหลักสำหรับวางแผนสถาปัตยกรรมระบบ ช่วยเขียนโค้ด ดีบัก และเร่งพัฒนาต้นแบบให้เร็วขึ้น" },
      { name: "Claude", body: "ใช้ในการคิดวิเคราะห์เชิงลึก จัดระเบียบเอกสารทางเทคนิค และการใช้เหตุผลที่ซับซ้อน" },
      { name: "Gemini", body: "การค้นคว้าแบบ Multimodal สำรวจข้อมูลเทคโนโลยีล่าสุด และเปรียบเทียบมุมมองเชิงลึก" },
      { name: "Grok", body: "เหมาะสำหรับการสำรวจเทรนด์ สร้างสรรค์ไอเดียใหม่ ๆ และทดลองมุมมองที่แปลกใหม่" }
    ],
    dossiers: [
      {
        id: "champ-water",
        title: "แชมป์ระดับประเทศ AI",
        subtitle: "UTCC AI Hackathon 2026",
        color: "#f97316",
        papers: [
          { tag: "TROPHY", title: "ชนะเลิศอันดับ 1 (20,000 บ.)", desc: "เอาชนะ 15 ทีมชิงชนะเลิศทั่วประเทศ" },
          { tag: "SOLUTION", title: "AI บริหารจัดการน้ำ", desc: "วิเคราะห์อุทกวิทยาและการพยากรณ์น้ำท่วม" },
          { tag: "TECH", title: "IoT เซนเซอร์ & Telemetry", desc: "ระบบกระจายสัญญาณเตือนภัยชุมชนล่วงหน้า" }
        ]
      },
      {
        id: "genai-suite",
        title: "ระบบ Generative AI",
        subtitle: "Multi-Agent Workflows",
        color: "#ff5e1a",
        papers: [
          { tag: "AGENTS", title: "Multi-Agent Tool Calling", desc: "ระบบอัตโนมัติสั่งการหลายเอเจนต์" },
          { tag: "POWER PLATFORM", title: "Microsoft AI Builder", desc: "เชื่อมต่อฐานข้อมูล Dataverse โดยตรง" },
          { tag: "MULTIMODAL", title: "ระบบสร้างสื่อผสม AI", desc: "การออกแบบพรอมป์ขั้นสูงและสร้างคอนเทนต์" }
        ]
      },
      {
        id: "roblox-engine",
        title: "เอนจิน Roblox MMO RPG",
        subtitle: "โลกเสมือนจริงและระบบเกม",
        color: "#ea580c",
        papers: [
          { tag: "NETCODE", title: "Client-Server Sync", desc: "ซิงค์ข้อมูลผู้เล่นแบบ Low Latency ด้วย Lua" },
          { tag: "PHYSICS", title: "ระบบ Hitbox การต่อสู้", desc: "คำนวณและตรวจสอบดาเมจที่ฝั่งเซิร์ฟเวอร์" },
          { tag: "ECONOMY", title: "ระบบช่องเก็บของและภารกิจ", desc: "เซฟข้อมูลถาวรพร้อมเอฟเฟกต์สมจริง" }
        ]
      },
      {
        id: "kmitl-aspirant",
        title: "แฟ้มผลงานมุ่งสู่ KMITL",
        subtitle: "นวัตกรเทคโนโลยีรุ่นใหม่",
        color: "#ffb43a",
        papers: [
          { tag: "ACADEMIC", title: "มัธยม 6 สายวิทย์-คณิต", desc: "รร.นวมินทราชูทิศ เตรียมอุดมศึกษาพัฒนาการ" },
          { tag: "TARGET", title: "คณะวิศวกรรมศาสตร์ สจล.", desc: "สาขาวิทยาการคอมพิวเตอร์และซอฟต์แวร์" },
          { tag: "CREED", title: "เกิดมาเพื่อสร้าง", desc: "พลังแห่งโค้ด AI และความมุ่งมั่นไม่หยุดยั้ง" }
        ]
      }
    ],
    projects: [
      {
        id: "hackathon-manita",
        title: "ระบบ AI บริหารจัดการน้ำและเตือนภัยล่วงหน้า (ทีม MANITA)",
        type: "🏆 รางวัลชนะเลิศระดับประเทศ / AI & STEM Hackathon",
        badge: "🏆 ชนะเลิศอันดับ 1 (เงินรางวัล 20,000 บาท)",
        featured: true,
        status: "ชนะเลิศการแข่งขัน",
        body: "ผลงานรางวัลชนะเลิศอันดับ 1 งาน UTCC AI Hackathon 2026 จากทีมตัวแทน 15 ทีมสุดท้ายทั่วประเทศ ออกแบบและพัฒนาระบบ AI วิเคราะห์ข้อมูลอุทกวิทยา เซนเซอร์วัดระดับน้ำ ปริมาณน้ำฝน และภูมิประเทศ เพื่อพยากรณ์ความเสี่ยงน้ำท่วมล่วงหน้าพร้อมระบบส่งสัญญาณเตือนภัยอัตโนมัติ",
        highlights: ["ชนะเลิศอันดับ 1 (เงินรางวัล 20,000 บาท)", "เอาชนะ 15 ทีมชิงชนะเลิศทั่วประเทศ", "ระบบ AI พยากรณ์น้ำท่วมล่วงหน้า", "โครงสร้าง STEM & Telemetry"],
        tags: ["AI / Machine Learning", "นวัตกรรม STEM", "วิเคราะห์ข้อมูล", "IoT Telemetry", "ระบบเตือนภัยพิบัติ", "Dashboard UI"]
      },
      {
        id: "ai-creative-engine",
        title: "ระบบ Generative AI และเครื่องมืออัตโนมัติอัจฉริยะ",
        type: "🤖 วิศวกรรม AI / 'ทุกสิ่งด้วย AI ผมสร้างได้'",
        badge: "⚡ ระบบ AI อัตโนมัติขั้นสูง",
        featured: true,
        status: "พัฒนาและใช้งานจริง",
        body: "ระบบนิเวศการพัฒนาด้วย AI เต็มรูปแบบ เพื่อพิสูจน์ว่าพลังของ AI ทำให้เราสร้างสรรค์ทุกไอเดียและระบบซอฟต์แวร์ให้เป็นจริงได้อย่างรวดเร็ว เชื่อมโยง Multi-Agent LLM, การเขียน Prompt เชิงลึก, Microsoft AI Builder เชื่อมกับฐานข้อมูล Dataverse, เวิร์กโฟลว์อัตโนมัติ และการสร้างสื่อ Multimodal",
        highlights: ["ผสานระบบ Multi-Agent & Tools", "Microsoft AI Builder + Dataverse", "การออกแบบ Prompt ขั้นสูง", "ระบบสร้างสื่อ Generative Multimodal"],
        tags: ["Generative AI", "LLM Workflows", "Agentic Systems", "Microsoft AI Builder", "Python Automation", "Dataverse"]
      },
      {
        id: "polyglot-code-lab",
        title: "สถาปัตยกรรมโค้ดและการพัฒนาหลายภาษา (Polyglot Lab)",
        type: "⚡ วิศวกรรมซอฟต์แวร์ / 'เข้าใจโค้ดและพื้นฐานทุกภาษา'",
        badge: "🌐 เชี่ยวชาญหลากภาษาและกระบวนทัศน์",
        featured: false,
        status: "ความเชี่ยวชาญหลัก",
        body: "ศูนย์รวมทักษะความเชี่ยวชาญด้านวิทยาการคอมพิวเตอร์ที่พร้อมปรับตัวในทุกภาษาและกระบวนทัศน์: Python สำหรับงาน Data และ AI, Lua สำหรับระบบเกมเรียลไทม์, JavaScript/TypeScript สำหรับเว็บ Full-Stack สมัยใหม่, C# สำหรับ Unity OOP, HTML5/CSS3 สำหรับ Glassmorphic UI ที่ลื่นไหล และ SQL/Dataverse สำหรับฐานข้อมูลเชิงสัมพันธ์",
        highlights: ["เข้าใจกระบวนทัศน์ OOP, Functional, Event-Driven", "เว็บ Full-Stack และ Game Engines", "โครงสร้างโค้ดที่สะอาดและยืดหยุ่น", "เรียนรู้ภาษาใหม่ได้รวดเร็ว"],
        tags: ["Python", "Lua", "JavaScript / TypeScript", "C# / Unity", "HTML5 / CSS3", "SQL / Dataverse"]
      },
      {
        id: "roblox-mmorpg",
        title: "เกม Roblox MMO RPG และระบบโลกเสมือนจริง",
        type: "🎮 พัฒนาเกม / ระบบเกมแบบกระจายศูนย์",
        badge: "🎮 สถาปัตยกรรม MMO สเกลใหญ่",
        featured: false,
        status: "กำลังพัฒนาอย่างต่อเนื่อง",
        body: "โปรเจกต์เกม Action-RPG ผู้เล่นหลายคนบน Roblox Studio เขียนด้วยโครงสร้าง Lua แบบ Modular เชื่อมต่อข้อมูล Client-Server แบบเรียลไทม์ ระบบคำนวณ Hitbox การต่อสู้ ระบบช่องเก็บของและไอเทม ระบบภารกิจอัตโนมัติ และการออกแบบบรรยากาศโลกแฟนตาซีที่สมจริง",
        highlights: ["การ Sync ข้อมูล Client-Server ลื่นไหล", "ระบบต่อสู้และ Hitbox แม่นยำ", "ระบบเศรษฐกิจและเซฟข้อมูลถาวร", "ออกแบบโลกและ VFX เฉพาะตัว"],
        tags: ["Roblox Studio", "สคริปต์ Lua", "MMO RPG", "Network Replication", "ระบบเกมเพลย์", "ฟิสิกส์การต่อสู้"]
      },
      {
        id: "portfolio-site",
        title: "พอร์ตโฟลิโอเว็บแอปพลิเคชันและห้องควบคุมแอดมิน",
        type: "💎 เว็บแอปพลิเคชัน Full-Stack / วิศวกรรมแพลตฟอร์ม",
        badge: "💎 Full-Stack พร้อมระบบหลังบ้านครบวงจร",
        featured: false,
        status: "เปิดใช้งานจริง",
        body: "เว็บพอร์ตโฟลิโอระดับโปรดักชันที่สร้างขึ้นเองทั้งหมดในธีม Obsidian-Orange สไตล์ KMITL มีแบ็กเอนด์ Express.js, ฐานข้อมูล SQLite/PostgreSQL, ระบบเข้ารหัสความปลอดภัยระดับสูง, เซสชันโทเคน, ระบบกดถูกใจแบบเรียลไทม์, บันทึก Audit Log ละเอียด, แดชบอร์ดแอดมิน, รองรับสองภาษา และความลื่นไหลในทุกหน้าจอ",
        highlights: ["Express.js & การเชื่อมต่อฐานข้อมูล", "ห้องควบคุมแอดมินและ Audit Log", "ระบบความปลอดภัยและเซสชันระดับสูง", "แสดงผลลื่นไหลสมบูรณ์แบบทุกอุปกรณ์"],
        tags: ["Express.js", "SQLite / PostgreSQL", "ความปลอดภัย & เซสชัน", "ห้องควบคุมแอดมิน", "ระบบสองภาษา", "Fluid UI"]
      }
    ],
    certificates: [
      {
        title: "เกียรติบัตรรางวัลชนะเลิศ UTCC AI Hackathon",
        image: "assets/UTCCcer.jpg",
        body: "เกียรติบัตรรางวัลชนะเลิศจากการนำเสนอโซลูชัน AI และ STEM เพื่อการบริหารจัดการน้ำของประเทศไทย",
        issuerId: "best_award"
      },
      {
        title: "รับรางวัลชนะเลิศ 20,000 บาท",
        image: "assets/UTCC.jpg",
        body: "ภาพบรรยากาศการรับมอบรางวัลชนะเลิศในนามทีม MANITA จากทีมที่ผ่านเข้ารอบชิงชนะเลิศ 15 ทีมทั่วประเทศ",
        issuerId: "best_award"
      },
      { title: "Design AI-powered business solutions", image: "assets2/17-1.png", body: "แสดงว่าออกแบบโซลูชันทางธุรกิจระดับสูงที่นำ AI มาใช้งานจริงได้", issuerId: "microsoft" },
      { title: "Create effective prompts for generative AI", image: "assets2/16-1.png", body: "ทักษะการเขียนพรอมป์ ให้ AI เข้าใจและตอบโจทย์ที่ต้องการได้จริง", issuerId: "microsoft" },
      { title: "Create AI Builder prompts", image: "assets2/1-1.png", body: "เชื่อมความสามารถของ AI เข้ากับฐานข้อมูล Dataverse โดยตรง", issuerId: "microsoft" },
      { title: "Turn business ideas into solutions", image: "assets2/15-1.png", body: "แปลงไอเดียทางธุรกิจให้กลายเป็นแอปพลิเคชัน Power Platform ที่ใช้งานได้จริง", issuerId: "microsoft" },
      { title: "Customize a canvas app", image: "assets2/10-1.png", body: "ลงมือปรับแต่งหน้าตาแอปและฟังก์ชันการทำงานเอง", issuerId: "microsoft" },
      { title: "Configure forms, charts, and dashboards", image: "assets2/7-1.png", body: "สร้างแดชบอร์ดที่ธุรกิจใช้งานจริงในการดูข้อมูล", issuerId: "microsoft" },
      { title: "Build approval flows with Power Automate", image: "assets2/2-1.png", body: "สร้างระบบเวิร์กโฟลว์และขั้นตอนอนุมัติแบบอัตโนมัติ", issuerId: "microsoft" },
      { title: "Publish, share, and maintain a canvas app", image: "assets2/9-1.png", body: "เข้าใจวงจรของแอปทั้งหมด ตั้งแต่เปิดใช้งานจนถึงดูแลรักษาต่อเนื่อง", issuerId: "microsoft" },
      { title: "Use Dataverse triggers and actions", image: "assets2/3-1.png", body: "ทำให้กระบวนการทำงานอัตโนมัติตามเหตุการณ์และข้อมูลที่เปลี่ยนแปลง", issuerId: "microsoft" },
      { title: "Core components of Power Pages", image: "assets2/6-1.png", body: "พื้นฐานของการสร้างเว็บไซต์ธุรกิจที่เปิดให้บุคคลภายนอกใช้งาน", issuerId: "microsoft" },
      { title: "Explore Power Pages design studio", image: "assets2/5-1.png", body: "ออกแบบและจัดสไตล์หน้าเว็บที่ขับเคลื่อนด้วยข้อมูล", issuerId: "microsoft" },
      { title: "Get started with Power Automate", image: "assets2/4-1.png", body: "พื้นฐานของเวิร์กโฟลว์อัตโนมัติและกระบวนการดิจิทัล", issuerId: "microsoft" },
      { title: "Get started with model-driven apps", image: "assets2/8-1.png", body: "ความเข้าใจพื้นฐานของแอปที่ขับเคลื่อนด้วยข้อมูลใน Power Apps", issuerId: "microsoft" },
      { title: "Get started with Power Apps canvas apps", image: "assets2/11-1.png", body: "ก้าวแรกสู่การพัฒนาแอปแบบ low-code", issuerId: "microsoft" },
      { title: "Security roles in Dataverse", image: "assets2/12-1.png", body: "พื้นฐานการควบคุมสิทธิ์การเข้าถึงและความปลอดภัยของข้อมูล", issuerId: "microsoft" },
      { title: "Create and manage columns in Dataverse", image: "assets2/13-1.png", body: "พื้นฐานการตั้งค่าโครงสร้างฐานข้อมูล", issuerId: "microsoft" },
      { title: "Create tables in Dataverse", image: "assets2/14-1.png", body: "ความเข้าใจพื้นฐานของการจัดโครงสร้างฐานข้อมูลเชิงสัมพันธ์", issuerId: "microsoft" },
      { title: "Make Game with AI", image: "assets/cer-2.jpg", body: "ผ่านกิจกรรม Make Game with AI เรียบร้อยแล้ว", issuerId: "hamsterhub" },
      { title: "Game with AI Workshop", image: "assets/cer-3.png", body: "เข้าร่วมเวิร์กช็อป Game with AI แบบลงมือทำจริง", issuerId: "hamsterhub" },
      { title: "Other Certificate", image: "assets/cer-1.jpg", body: "ทักษะพื้นฐานทั่วไป", issuerId: "other" }
    ]
  }
};

/* ============================================================
   🌐 UI TEXT — every static label on the page
   ============================================================ */
const UI = {
  en: {
    nav: { profile: "Profile", story: "Life Story", skills: "Skills", projects: "Works", certificates: "Certificates", contact: "Contact" },
    auth: { login: "Login", register: "Register", logout: "Logout", admin: "Admin" },
    hero: {
      kicker: "KMITL Dreamer · Future Innovator",
      alias: "AKA New JA · Born 06.23.09",
      text: "High school Grade 12 developer who grew up loving play, then started building. I use AI as a creative partner, code as a tool, and KMITL as the dream destination for a future in technology.",
      cta1: "See My Works",
      cta2: "Read Life Story",
      cta3: "Download Resume",
      nowCardSmall: "KMITL now",
      nowCardStrong: "Dream University",
      nowCardBody: "King Mongkut's Institute of Technology Ladkrabang",
      phoneCardTitle: "University",
      phoneCardBody: "King Mongkut's Institute of Technology Ladkrabang",
      faceCardRole: "Developer / Creator"
    },
    profile: {
      kicker: "Creator Profile",
      body: "New JA is a Grade 12 Science-Math student focused on developer work, Roblox game systems, AI-assisted building, content creation, and future technology studies at KMITL.",
      tags: ["AKA New JA", "Born 06.23.09", "Developer", "KMITL Dreamer"]
    },
    section: {
      story: { kicker: "Life Story", title: "From playing as a kid to building as a creator.", body: "New JA's story is shaped into a timeline, from early school life to the long-term dream of studying at KMITL." },
      skills: { kicker: "Skill Stack", title: "I can do anything with AI.", body: "The scores below are New's current self-rated levels, presented as a sharp developer-style dashboard." },
      projects: { kicker: "Works", title: "What I am building now.", body: "Members can sign in and like projects. Accounts, sessions, and likes are stored securely on the server." },
      certificates: { kicker: "Certificates", title: "Activities and proof of growth.", body: "Certificate images from the Cer folder are presented as a gallery with smooth hover transitions." },
      contact: { kicker: "Contact", title: "Let's connect." }
    },
    dossier: {
      badge: "⚡ 3D Interactive Dossiers",
      hint: "Click any folder to unfold project sheets & inspect details"
    },
    auth_modal: {
      loginKicker: "Login", loginTitle: "Welcome back", loginCopy: "Login to like projects and access your member account.",
      registerKicker: "Register", registerTitle: "Create a visitor account", registerCopy: "Register a normal account so you can like my work.",
      username: "Username", email: "Email", password: "Password", age: "Age",
      passwordRule: "Use 10+ characters with uppercase, lowercase, a number, and a symbol.",
      submitLogin: "Login", submitRegister: "Register"
    },
    dashboard: {
      kicker: "Admin Back Office", title: "Portfolio Control Room",
      stats: ["Accounts", "Active", "Admins", "Likes"],
      users: "User Accounts", likes: "Project Likes", logs: "System Logs",
      noUsers: "No users yet.", noLogs: "No logs yet.",
      roleUser: "User", roleAdmin: "Admin", active: "Active", disabled: "Disabled",
      enable: "Enable", disable: "Disable", delete: "Delete",
      joined: "Joined", age: "Age", anonymous: "Anonymous", system: "system", unknownIp: "unknown IP",
      searchPlaceholder: "Search email, target, IP...",
      allActions: "All actions",
      loadMore: "Load more",
      showingCount: (shown, total) => `Showing ${shown} of ${total} log entries`,
      actions: {
        USER_REGISTERED: "User registered",
        LOGIN_FAILED: "Login failed",
        LOGIN_SUCCEEDED: "Login succeeded",
        LOGOUT: "Logout",
        PROJECT_LIKED: "Project liked",
        PROJECT_UNLIKED: "Project unliked",
        ADMIN_USER_UPDATED: "Admin updated a user",
        ADMIN_USER_DELETED: "Admin deleted a user"
      }
    },
    likes: { youLiked: "You liked this work", loginToLike: "Login to like this work", liked: "Liked", like: "Like", likesLabel: "likes" },
    cert: { viewDetail: "View Detail", seeMore: "See more", seeLess: "See less" },
    issuers: { best_award: "The best Award", microsoft: "Microsoft", hamsterhub: "Hamster Hub", other: "Certificates" },
    toast: {
      loginFirst: "Login first, then you can like works.",
      loggedOut: "Logged out.",
      registerWelcome: (name) => `Account created. Welcome, ${name}.`,
      loginWelcome: (name) => `Welcome back, ${name}.`,
      userUpdated: "User account updated.",
      userDeleted: "User deleted.",
      deleteConfirm: "Delete this user and all of their sessions and likes?",
      pleaseWait: "Please wait...",
      invalidEmail: "Please enter a valid email address.",
      invalidPassword: "Use 10+ characters with uppercase, lowercase, a number, and a symbol."
    }
  },
  th: {
    nav: { profile: "โปรไฟล์", story: "เรื่องราวชีวิต", skills: "สกิล", projects: "ผลงาน", certificates: "ใบรับรอง", contact: "ติดต่อ" },
    auth: { login: "เข้าสู่ระบบ", register: "สมัครสมาชิก", logout: "ออกจากระบบ", admin: "แอดมิน" },
    hero: {
      kicker: "เด็กฝัน KMITL · นวัตกรเทคโนโลยี",
      alias: "หรือที่รู้จักกันในชื่อ New JA · เกิด 23.06.09",
      text: "ผมเป็นนักเรียนชั้นมัธยม 6 ที่เขียนโปรแกรมด้วย โตมากับการเล่น แล้วก็เริ่มมาสร้างของแทน ใช้ AI เป็นคู่คิดสร้างสรรค์ ใช้โค้ดเป็นเครื่องมือ และมี KMITL เป็นจุดหมายต่อไป",
      cta1: "ดูผลงานของผม",
      cta2: "อ่านเรื่องราวของผม",
      cta3: "ดาวน์โหลดเรซูเม่",
      nowCardSmall: "KMITL ตอนนี้",
      nowCardStrong: "มหาวิทยาลัยในฝัน",
      nowCardBody: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
      phoneCardTitle: "มหาวิทยาลัย",
      phoneCardBody: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
      faceCardRole: "นักพัฒนา / ครีเอเตอร์"
    },
    profile: {
      kicker: "โปรไฟล์ครีเอเตอร์",
      body: "นักเรียนสายวิทย์-คณิต ม.6 ที่ใช้เวลาส่วนใหญ่ไปกับงานพัฒนา ระบบเกม Roblox การสร้างงานด้วย AI และทำคอนเทนต์ โดยมี KMITL เป็นจุดหมายถัดไป",
      tags: ["หรือ New JA", "เกิด 23.06.09", "นักพัฒนา", "เด็กฝัน KMITL"]
    },
    section: {
      story: { kicker: "เรื่องราวชีวิต", title: "จากเด็กที่ชอบเล่น สู่ครีเอเตอร์ที่ชอบสร้าง", body: "เรื่องราวของผมเรียงเป็นไทม์ไลน์ ตั้งแต่วันเรียนจนถึงเป้าหมายระยะยาวคือการได้เรียนที่ KMITL" },
      skills: { kicker: "สกิลที่มี", title: "พยายามทำทุกอย่างโดยมี AI อยู่ข้าง ๆ", body: "นี่คือระดับสกิลที่ประเมินตัวเองตอนนี้ นำเสนอในสไตล์แดชบอร์ดนักพัฒนา" },
      projects: { kicker: "ผลงาน", title: "สิ่งที่กำลังสร้างอยู่ตอนนี้", body: "เข้าสู่ระบบเพื่อกดถูกใจผลงานได้เลย บัญชี เซสชัน และการกดถูกใจถูกเก็บไว้อย่างปลอดภัย" },
      certificates: { kicker: "ใบรับรอง", title: "กิจกรรมและหลักฐานความตั้งใจ", body: "แกลเลอรีใบรับรอง จัดกลุ่มตามผู้ออกใบรับรอง" },
      contact: { kicker: "ติดต่อ", title: "มาคุยกันได้เลย" }
    },
    dossier: {
      badge: "⚡ แฟ้มผลงานสามมิติ (Interactive Dossiers)",
      hint: "คลิกที่แฟ้มเอกสารเพื่อเปิดดูแผ่นสรุปข้อมูลและผลงานเด่น"
    },
    auth_modal: {
      loginKicker: "เข้าสู่ระบบ", loginTitle: "ยินดีต้อนรับกลับมา", loginCopy: "เข้าสู่ระบบเพื่อกดถูกใจผลงานและใช้งานบัญชีสมาชิกของคุณ",
      registerKicker: "สมัครสมาชิก", registerTitle: "สร้างบัญชีผู้เยี่ยมชม", registerCopy: "สมัครบัญชีทั่วไปเพื่อกดถูกใจผลงานของผมได้",
      username: "ชื่อผู้ใช้", email: "อีเมล", password: "รหัสผ่าน", age: "อายุ",
      passwordRule: "ใช้ 10 ตัวอักษรขึ้นไป มีทั้งตัวพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และสัญลักษณ์",
      submitLogin: "เข้าสู่ระบบ", submitRegister: "สมัครสมาชิก"
    },
    dashboard: {
      kicker: "ห้องควบคุมแอดมิน", title: "ศูนย์ควบคุมพอร์ตโฟลิโอ",
      stats: ["บัญชีทั้งหมด", "ใช้งานอยู่", "แอดมิน", "ยอดถูกใจ"],
      users: "บัญชีผู้ใช้", likes: "ยอดถูกใจผลงาน", logs: "บันทึกระบบ",
      noUsers: "ยังไม่มีผู้ใช้", noLogs: "ยังไม่มีบันทึก",
      roleUser: "ผู้ใช้ทั่วไป", roleAdmin: "แอดมิน", active: "ใช้งานอยู่", disabled: "ถูกระงับ",
      enable: "เปิดใช้งาน", disable: "ระงับการใช้งาน", delete: "ลบ",
      joined: "สมัครเมื่อ", age: "อายุ", anonymous: "ไม่ระบุตัวตน", system: "ระบบ", unknownIp: "ไม่ทราบ IP",
      searchPlaceholder: "ค้นหาอีเมล เป้าหมาย หรือ IP...",
      allActions: "ทุกประเภท",
      loadMore: "โหลดเพิ่ม",
      showingCount: (shown, total) => `แสดง ${shown} จาก ${total} รายการ`,
      actions: {
        USER_REGISTERED: "สมัครสมาชิกใหม่",
        LOGIN_FAILED: "เข้าสู่ระบบไม่สำเร็จ",
        LOGIN_SUCCEEDED: "เข้าสู่ระบบสำเร็จ",
        LOGOUT: "ออกจากระบบ",
        PROJECT_LIKED: "กดถูกใจผลงาน",
        PROJECT_UNLIKED: "ยกเลิกถูกใจผลงาน",
        ADMIN_USER_UPDATED: "แอดมินแก้ไขผู้ใช้",
        ADMIN_USER_DELETED: "แอดมินลบผู้ใช้"
      }
    },
    likes: { youLiked: "คุณกดถูกใจผลงานนี้แล้ว", loginToLike: "เข้าสู่ระบบเพื่อกดถูกใจ", liked: "ถูกใจแล้ว", like: "ถูกใจ", likesLabel: "ถูกใจ" },
    cert: { viewDetail: "ดูรายละเอียด", seeMore: "ดูเพิ่มเติม", seeLess: "ย่อกลับ" },
    issuers: { best_award: "รางวัลยอดเยี่ยม (The best Award)", microsoft: "Microsoft", hamsterhub: "Hamster Hub", other: "ใบรับรองอื่น ๆ" },
    toast: {
      loginFirst: "เข้าสู่ระบบก่อน แล้วค่อยกดถูกใจผลงานได้เลย",
      loggedOut: "ออกจากระบบแล้ว",
      registerWelcome: (name) => `สร้างบัญชีแล้ว ยินดีต้อนรับ, ${name}`,
      loginWelcome: (name) => `ยินดีต้อนรับกลับมา, ${name}`,
      userUpdated: "อัปเดตบัญชีผู้ใช้แล้ว",
      userDeleted: "ลบผู้ใช้แล้ว",
      deleteConfirm: "ลบผู้ใช้คนนี้พร้อมเซสชันและยอดถูกใจทั้งหมดเลยไหม?",
      pleaseWait: "กรุณารอสักครู่...",
      invalidEmail: "กรุณากรอกอีเมลให้ถูกต้อง",
      invalidPassword: "ใช้ 10 ตัวอักษรขึ้นไป มีทั้งตัวพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และสัญลักษณ์"
    }
  }
};

const LANG_KEY = "newja_lang";
function getInitialLang() {
  const saved = window.localStorage.getItem(LANG_KEY);
  if (saved === "en" || saved === "th") return saved;
  return "th";
}

const state = {
  lang: getInitialLang(),
  likeCounts: {},
  likedProjectIds: [],
  expandedCerts: {},
  openFolders: {},
  logs: [],
  logsTotal: 0,
  logsPage: 0,
  logsPageSize: 50,
  logsFilter: { action: "", search: "" },
  logActions: []
};
let session = null;
let authMode = "login";

function t() { return UI[state.lang]; }
function c() { return CONTENT[state.lang]; }

const storyList = document.querySelector("#storyList");
const aiToolList = document.querySelector("#aiToolList");
const skillList = document.querySelector("#skillList");
const dossiersList = document.querySelector("#dossiersList");
const projectList = document.querySelector("#projectList");
const certificateList = document.querySelector("#certificateList");
const authModal = document.querySelector("#authModal");
const dashboardModal = document.querySelector("#dashboardModal");
const authForm = document.querySelector("#authForm");
const authTitle = document.querySelector("#authTitle");
const authKicker = document.querySelector("#authKicker");
const authCopy = document.querySelector("#authCopy");
const authSubmit = document.querySelector("#authSubmit");
const formStatus = document.querySelector("#formStatus");
const usernameField = document.querySelector("#usernameField");
const ageField = document.querySelector("#ageField");
const passwordRule = document.querySelector("#passwordRule");
const toast = document.querySelector("#toast");
const userBadge = document.querySelector("#userBadge");
const langToggleBtn = document.querySelector("#langToggleBtn");
const logSearchInput = document.querySelector("#logSearchInput");
const logActionSelect = document.querySelector("#logActionSelect");
const logCountLabel = document.querySelector("#logCountLabel");
const loadMoreLogsBtn = document.querySelector("#loadMoreLogsBtn");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function darkenColor(hex, percent) {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split("").map((ch) => ch + ch).join("");
  }
  const num = parseInt(color.slice(0, 6), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers
    },
    ...options
  });

  const data = response.status === 204 ? null : await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data?.error || "Something went wrong.");
    error.status = response.status;
    throw error;
  }
  return data;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

/* ─── Static UI text (nav, hero, section heads, labels) ─── */
function applyStaticText() {
  document.documentElement.lang = state.lang;
  const ui = t();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = key.split(".").reduce((obj, part) => obj?.[part], ui);
    if (typeof value === "string") el.textContent = value;
  });

  const tagsHost = document.querySelector("#profileTags");
  if (tagsHost) {
    tagsHost.innerHTML = ui.profile.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("");
  }

  if (langToggleBtn) {
    langToggleBtn.textContent = state.lang === "th" ? "EN" : "ไทย";
    langToggleBtn.setAttribute("aria-label", state.lang === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย");
  }

  passwordRule.textContent = ui.auth_modal.passwordRule;
  document.querySelector("#dashboardModal h2").textContent = ui.dashboard.title;
  document.querySelector("#dashboardModal .kicker").textContent = ui.dashboard.kicker;
  document.querySelector(".dashboard-users h3").textContent = ui.dashboard.users;
  document.querySelector(".dashboard-grid article:nth-child(2) h3").textContent = ui.dashboard.likes;
  document.querySelector(".dashboard-logs h3").textContent = ui.dashboard.logs;
  if (logSearchInput) logSearchInput.placeholder = ui.dashboard.searchPlaceholder;
  if (loadMoreLogsBtn) loadMoreLogsBtn.textContent = ui.dashboard.loadMore;
  populateActionSelect();
  renderLogs();

  updateAuthUi();
}

function setLanguage(lang) {
  if (lang !== "th" && lang !== "en") return;
  state.lang = lang;
  window.localStorage.setItem(LANG_KEY, lang);
  applyStaticText();
  renderStory();
  renderAiTools();
  renderSkills();
  renderDossiers();
  renderProjects();
  renderCertificates();
}

function renderStory() {
  storyList.innerHTML = c().story.map((item, index) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot">${index + 1}</span>
      <time>${escapeHtml(item.period)}</time>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
      </div>
    </article>
  `).join("");
  observeReveals();
}

function renderAiTools() {
  aiToolList.innerHTML = c().aiTools.map((tool) => `
    <article class="ai-card">
      <span>${escapeHtml(tool.name.slice(0, 2))}</span>
      <div>
        <h3>${escapeHtml(tool.name)}</h3>
        <p>${escapeHtml(tool.body)}</p>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  skillList.innerHTML = c().skills.map((skill) => `
    <article class="skill-card reveal">
      <h3>${escapeHtml(skill.name)}</h3>
      <p>${escapeHtml(skill.body)}</p>
      <div class="meter" aria-label="${escapeHtml(skill.name)} ${skill.score} / 10">
        <span style="--value: ${skill.score * 10}%"></span>
      </div>
      <p><strong>${skill.score}/10</strong></p>
    </article>
  `).join("");
  observeReveals();
}

/* ============================================================
   🗂️ RENDER REACT BITS 3D INTERACTIVE FOLDERS
   ============================================================ */
function renderDossiers() {
  if (!dossiersList) return;
  const dossiers = c().dossiers || [];
  dossiersList.innerHTML = dossiers.map((dossier) => {
    const isOpen = Boolean(state.openFolders[dossier.id]);
    const folderBackColor = darkenColor(dossier.color, 0.22);

    return `
      <div class="folder-item-wrap" data-folder-id="${escapeHtml(dossier.id)}">
        <div
          class="folder ${isOpen ? "open" : ""}"
          role="button"
          tabindex="0"
          aria-expanded="${isOpen}"
          aria-label="${isOpen ? "Close folder" : "Open folder"}"
          style="--folder-color: ${escapeHtml(dossier.color)}; --folder-back-color: ${escapeHtml(folderBackColor)};"
        >
          <div class="folder__back">
            ${dossier.papers.map((p, idx) => `
              <div class="paper paper-${idx + 1}" data-paper-index="${idx}">
                <div class="paper-inner">
                  <span class="paper-tag">${escapeHtml(p.tag)}</span>
                  <strong>${escapeHtml(p.title)}</strong>
                  <small>${escapeHtml(p.desc)}</small>
                </div>
              </div>
            `).join("")}
            <div class="folder__front"></div>
            <div class="folder__front right"></div>
          </div>
        </div>
        <div class="folder-caption">
          <strong>${escapeHtml(dossier.title)}</strong>
          <span>${escapeHtml(dossier.subtitle)}</span>
        </div>
      </div>
    `;
  }).join("");

  // Attach interactive click and magnetic mouse physics
  dossiersList.querySelectorAll(".folder-item-wrap").forEach((wrap) => {
    const folderId = wrap.dataset.folderId;
    const folder = wrap.querySelector(".folder");
    const papers = wrap.querySelectorAll(".paper");

    function toggleFolder() {
      state.openFolders[folderId] = !state.openFolders[folderId];
      const opened = state.openFolders[folderId];
      folder.classList.toggle("open", opened);
      folder.setAttribute("aria-expanded", String(opened));
      if (!opened) {
        papers.forEach((p) => {
          p.style.removeProperty("--magnet-x");
          p.style.removeProperty("--magnet-y");
        });
      }
    }

    folder.addEventListener("click", (e) => {
      // If clicking inside a paper, don't necessarily toggle if dragging
      toggleFolder();
    });

    folder.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFolder();
      }
    });

    papers.forEach((paper) => {
      paper.addEventListener("mousemove", (e) => {
        if (!folder.classList.contains("open")) return;
        const rect = paper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = (e.clientX - centerX) * 0.18;
        const offsetY = (e.clientY - centerY) * 0.18;
        paper.style.setProperty("--magnet-x", `${offsetX}px`);
        paper.style.setProperty("--magnet-y", `${offsetY}px`);
      });

      paper.addEventListener("mouseleave", () => {
        paper.style.setProperty("--magnet-x", "0px");
        paper.style.setProperty("--magnet-y", "0px");
      });
    });
  });
}

function getProjectLikeCount(projectId) {
  return state.likeCounts[projectId] || 0;
}

function renderProjects() {
  const ui = t();
  projectList.innerHTML = c().projects.map((project) => {
    const liked = state.likedProjectIds.includes(project.id);
    const isFeatured = Boolean(project.featured);
    const highlightsHtml = (project.highlights && project.highlights.length > 0)
      ? `<div class="project-highlights">
          ${project.highlights.map((h) => `<span class="highlight-chip"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>${escapeHtml(h)}</span>`).join("")}
        </div>`
      : "";

    return `
      <article class="project-card ${isFeatured ? "project-card--featured" : ""} reveal">
        ${project.badge ? `<div class="project-badge">${escapeHtml(project.badge)}</div>` : ""}
        <div class="project-header">
          <p class="kicker">${escapeHtml(project.type)}</p>
          <h3>${escapeHtml(project.title)}</h3>
        </div>
        <p class="project-body">${escapeHtml(project.body)}</p>
        ${highlightsHtml}
        <div class="project-meta">
          <span class="pill status-pill">${escapeHtml(project.status)}</span>
          <span class="pill like-pill">❤️ ${getProjectLikeCount(project.id)} ${escapeHtml(ui.likes.likesLabel)}</span>
        </div>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="pill tag-pill">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div class="like-row">
          <span>${liked ? escapeHtml(ui.likes.youLiked) : escapeHtml(ui.likes.loginToLike)}</span>
          <button class="like-btn ${liked ? "is-liked" : ""}" data-like="${project.id}" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="${liked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            ${liked ? escapeHtml(ui.likes.liked) : escapeHtml(ui.likes.like)}
          </button>
        </div>
      </article>
    `;
  }).join("");
  observeReveals();
}

window.openCertModal = function (imgSrc, title, body) {
  document.getElementById("certModalImg").src = imgSrc;
  document.getElementById("certModalTitle").textContent = title;
  document.getElementById("certModalBody").textContent = body;
  document.getElementById("certModal").showModal();
};

window.toggleCerts = function (issuerId) {
  state.expandedCerts[issuerId] = !state.expandedCerts[issuerId];

  if (document.startViewTransition) {
    document.startViewTransition(() => renderCertificates());
  } else {
    renderCertificates();
  }
};

function renderCertificates() {
  const ui = t();
  const issuerOrder = ["best_award", "microsoft", "hamsterhub", "other"];

  const grouped = issuerOrder.map((issuerId) => ({
    issuerId,
    label: ui.issuers[issuerId],
    certs: c().certificates.filter((cert) => cert.issuerId === issuerId)
  })).filter((group) => group.certs.length > 0);

  let htmlContent = "";

  for (const { issuerId, label, certs } of grouped) {
    const isExpanded = state.expandedCerts[issuerId];
    const displayCerts = isExpanded ? certs : certs.slice(0, 3);
    const hasMore = certs.length > 3;

    htmlContent += `
      <div class="cert-category">
        <div class="cert-category-header">
          <h3>${escapeHtml(label)}</h3>
          ${hasMore ? `<a href="#" class="see-more-link" onclick="event.preventDefault(); toggleCerts('${issuerId}')">${isExpanded ? escapeHtml(ui.cert.seeLess) : escapeHtml(ui.cert.seeMore)}</a>` : ""}
        </div>
        <div class="cert-row">
          ${displayCerts.map((cert) => `
            <div class="cert-box reveal" onclick="openCertModal('${escapeHtml(cert.image)}', '${escapeHtml(cert.title)}', '${escapeHtml(cert.body)}')">
              <img src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.title)}" loading="lazy">
              <div class="cert-overlay">
                <span>${escapeHtml(ui.cert.viewDetail)}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  certificateList.innerHTML = htmlContent;
  observeReveals();
}

function openAuth(mode) {
  authMode = mode;
  const ui = t().auth_modal;
  formStatus.textContent = "";
  authForm.reset();
  document.querySelector("#ageInput").value = 17;
  const isRegister = mode === "register";
  authKicker.textContent = isRegister ? ui.registerKicker : ui.loginKicker;
  authTitle.textContent = isRegister ? ui.registerTitle : ui.loginTitle;
  authCopy.textContent = isRegister ? ui.registerCopy : ui.loginCopy;
  authSubmit.textContent = isRegister ? ui.submitRegister : ui.submitLogin;
  usernameField.hidden = !isRegister;
  ageField.hidden = !isRegister;
  passwordRule.hidden = !isRegister;
  document.querySelector("#usernameInput").required = isRegister;
  document.querySelector("#ageInput").required = isRegister;
  document.querySelector("#passwordInput").minLength = isRegister ? 10 : 1;
  authModal.showModal();
}

function updateAuthUi() {
  const ui = t().auth;
  const isLoggedIn = Boolean(session);
  document.querySelector("#loginBtn").hidden = isLoggedIn;
  document.querySelector("#registerBtn").hidden = isLoggedIn;
  document.querySelector("#logoutBtn").hidden = !isLoggedIn;
  document.querySelector("#dashboardBtn").hidden = !(session && session.role === "admin");
  document.querySelector("#loginBtn").textContent = ui.login;
  document.querySelector("#registerBtn").textContent = ui.register;
  document.querySelector("#logoutBtn").textContent = ui.logout;
  document.querySelector("#dashboardBtn").textContent = ui.admin;
  userBadge.hidden = !isLoggedIn;
  userBadge.textContent = isLoggedIn ? `${session.username} / ${session.role}` : "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRegisterPassword(password) {
  return password.length >= 10
    && /[A-Z]/.test(password)
    && /[a-z]/.test(password)
    && /\d/.test(password)
    && /[^A-Za-z0-9]/.test(password);
}

async function handleAuth(event) {
  event.preventDefault();
  const ui = t().toast;
  const username = document.querySelector("#usernameInput").value.trim();
  const email = document.querySelector("#emailInput").value.trim().toLowerCase();
  const password = document.querySelector("#passwordInput").value;
  const age = Number(document.querySelector("#ageInput").value || 0);

  if (!validateEmail(email)) {
    formStatus.textContent = ui.invalidEmail;
    return;
  }

  if (authMode === "register" && !validateRegisterPassword(password)) {
    formStatus.textContent = ui.invalidPassword;
    return;
  }

  authSubmit.disabled = true;
  formStatus.textContent = ui.pleaseWait;
  try {
    const payload = authMode === "register"
      ? { username, email, password, age }
      : { email, password };
    const data = await api(`/api/auth/${authMode}`, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    session = data.user;
    updateAuthUi();
    await loadLikes();
    authModal.close();
    showToast(authMode === "register" ? ui.registerWelcome(session.username) : ui.loginWelcome(session.username));
  } catch (error) {
    formStatus.textContent = error.message;
  } finally {
    authSubmit.disabled = false;
  }
}

async function handleLike(projectId) {
  if (!session) {
    openAuth("login");
    showToast(t().toast.loginFirst);
    return;
  }

  try {
    await api(`/api/projects/${encodeURIComponent(projectId)}/like`, { method: "POST" });
    await loadLikes();
  } catch (error) {
    if (error.status === 401) {
      session = null;
      updateAuthUi();
    }
    showToast(error.message);
  }
}

function formatDate(value) {
  return new Intl.DateTimeFormat(state.lang === "th" ? "th-TH" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

let dashboardOverview = null;

function renderDashboardOverview(data) {
  dashboardOverview = data;
  const ui = t().dashboard;
  const userList = document.querySelector("#userList");
  const likeList = document.querySelector("#likeList");
  const activeUsers = data.users.filter((user) => user.isActive).length;
  const admins = data.users.filter((user) => user.role === "admin").length;
  const totalLikes = data.likes.reduce((sum, item) => sum + Number(item.count), 0);

  document.querySelector("#adminStats").innerHTML = `
    <div><strong>${data.users.length}</strong><span>${escapeHtml(ui.stats[0])}</span></div>
    <div><strong>${activeUsers}</strong><span>${escapeHtml(ui.stats[1])}</span></div>
    <div><strong>${admins}</strong><span>${escapeHtml(ui.stats[2])}</span></div>
    <div><strong>${totalLikes}</strong><span>${escapeHtml(ui.stats[3])}</span></div>
  `;

  userList.innerHTML = data.users.length
    ? data.users.map((user) => {
      const isSelf = user.id === session.id;
      return `
      <div class="user-row">
        <p>
          <strong>${escapeHtml(user.username)}</strong>
          <span class="account-state ${user.isActive ? "is-active" : "is-disabled"}">${user.isActive ? escapeHtml(ui.active) : escapeHtml(ui.disabled)}</span>
          <br>${escapeHtml(user.email)}<br>
          <small>${escapeHtml(ui.age)} ${user.age ?? "-"} / ${escapeHtml(ui.joined)} ${formatDate(user.createdAt)}</small>
        </p>
        <div class="user-actions">
          <select data-role-user="${user.id}" aria-label="${escapeHtml(user.username)}" ${isSelf ? "disabled" : ""}>
            <option value="user" ${user.role === "user" ? "selected" : ""}>${escapeHtml(ui.roleUser)}</option>
            <option value="admin" ${user.role === "admin" ? "selected" : ""}>${escapeHtml(ui.roleAdmin)}</option>
          </select>
          <button class="ghost-btn compact" type="button" data-toggle-user="${user.id}" data-active="${user.isActive}" ${isSelf ? "disabled" : ""}>
            ${user.isActive ? escapeHtml(ui.disable) : escapeHtml(ui.enable)}
          </button>
          <button class="danger-btn" type="button" data-delete-user="${user.id}" ${isSelf ? "disabled" : ""}>${escapeHtml(ui.delete)}</button>
        </div>
      </div>
    `;
    }).join("")
    : `<p>${escapeHtml(ui.noUsers)}</p>`;

  likeList.innerHTML = c().projects.map((project) => {
    const item = data.likes.find((like) => like.project_id === project.id);
    const names = item?.users?.map((user) => user.username).join(", ");
    return `
    <p><strong>${escapeHtml(project.title)}</strong><br>${Number(item?.count || 0)} ${escapeHtml(t().likes.likesLabel)}
    ${names ? `<br><small>${escapeHtml(names)}</small>` : ""}</p>
  `;
  }).join("");
}

function actionLabel(actionCode) {
  return t().dashboard.actions[actionCode] || actionCode;
}

function populateActionSelect() {
  if (!logActionSelect) return;
  const ui = t().dashboard;
  const current = logActionSelect.value;
  const options = [`<option value="">${escapeHtml(ui.allActions)}</option>`]
    .concat(state.logActions.map((code) => `<option value="${escapeHtml(code)}">${escapeHtml(actionLabel(code))}</option>`));
  logActionSelect.innerHTML = options.join("");
  logActionSelect.value = state.logActions.includes(current) ? current : "";
}

function renderLogs() {
  const ui = t().dashboard;
  const logList = document.querySelector("#logList");
  if (!logList) return;

  logList.innerHTML = state.logs.length
    ? state.logs.map((log) => `
      <p>
        <strong>${escapeHtml(actionLabel(log.action))}</strong>
        <span class="log-actor">${escapeHtml(log.actor_email || ui.anonymous)}</span><br>
        ${escapeHtml(log.target_type || ui.system)}${log.target_id ? ` / ${escapeHtml(log.target_id)}` : ""}
        <br><small>${formatDate(log.created_at)} / ${escapeHtml(log.ip_address || ui.unknownIp)}</small>
      </p>
    `).join("")
    : `<p>${escapeHtml(ui.noLogs)}</p>`;

  if (logCountLabel) {
    logCountLabel.textContent = state.logsTotal ? ui.showingCount(state.logs.length, state.logsTotal) : "";
  }
  if (loadMoreLogsBtn) {
    loadMoreLogsBtn.hidden = state.logs.length >= state.logsTotal;
  }
}

async function loadLogs({ reset = false } = {}) {
  if (reset) {
    state.logs = [];
    state.logsPage = 0;
    state.logsTotal = 0;
  }
  const params = new URLSearchParams({
    page: String(state.logsPage + 1),
    pageSize: String(state.logsPageSize)
  });
  if (state.logsFilter.action) params.set("action", state.logsFilter.action);
  if (state.logsFilter.search) params.set("search", state.logsFilter.search);

  const data = await api(`/api/admin/logs?${params.toString()}`);
  state.logs = reset ? data.logs : [...state.logs, ...data.logs];
  state.logsTotal = data.total;
  state.logsPage = data.page;
  renderLogs();
}

let logSearchTimeout = null;
function scheduleLogSearch(value) {
  state.logsFilter.search = value.trim();
  window.clearTimeout(logSearchTimeout);
  logSearchTimeout = window.setTimeout(() => {
    loadLogs({ reset: true }).catch((error) => showToast(error.message));
  }, 350);
}

async function openDashboard() {
  try {
    const [overview, actionsData] = await Promise.all([
      api("/api/admin/overview"),
      api("/api/admin/logs/actions")
    ]);
    renderDashboardOverview(overview);
    state.logActions = actionsData.actions;
    populateActionSelect();
    await loadLogs({ reset: true });
    dashboardModal.showModal();
  } catch (error) {
    showToast(error.message);
  }
}

async function refreshDashboard() {
  const overview = await api("/api/admin/overview");
  renderDashboardOverview(overview);
  await loadLogs({ reset: true });
}

async function updateUser(userId, changes) {
  try {
    await api(`/api/admin/users/${encodeURIComponent(userId)}`, {
      method: "PATCH",
      body: JSON.stringify(changes)
    });
    await refreshDashboard();
    showToast(t().toast.userUpdated);
  } catch (error) {
    showToast(error.message);
    await refreshDashboard().catch(() => { });
  }
}

async function deleteUser(userId) {
  if (!window.confirm(t().toast.deleteConfirm)) return;
  try {
    await api(`/api/admin/users/${encodeURIComponent(userId)}`, { method: "DELETE" });
    await refreshDashboard();
    showToast(t().toast.userDeleted);
  } catch (error) {
    showToast(error.message);
  }
}

async function loadLikes() {
  const data = await api("/api/projects/likes");
  state.likeCounts = data.counts;
  state.likedProjectIds = data.likedProjectIds;
  renderProjects();
}

async function initializeSession() {
  try {
    const data = await api("/api/auth/me");
    session = data.user;
  } catch {
    session = null;
  }
  updateAuthUi();
  await loadLikes().catch(() => renderProjects());
}

/* ============================================================
   🌌 REACT BITS GALAXY COSMIC BACKGROUND ENGINE (Pure WebGL)
   ============================================================ */
function initGalaxy(canvas, opts = {}) {
  if (!canvas) return;
  const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false })
          || canvas.getContext("experimental-webgl", { alpha: true, premultipliedAlpha: false });
  if (!gl) return;

  const config = {
    starSpeed: opts.starSpeed ?? 1.0,
    density: opts.density ?? 1.7,
    hueShift: opts.hueShift ?? 255,
    speed: opts.speed ?? 2.3,
    glowIntensity: opts.glowIntensity ?? 0.85,
    saturation: opts.saturation ?? 1.0,
    mouseRepulsion: opts.mouseRepulsion !== undefined ? opts.mouseRepulsion : true,
    repulsionStrength: opts.repulsionStrength ?? 2.0,
    twinkleIntensity: opts.twinkleIntensity ?? 0.3,
    rotationSpeed: opts.rotationSpeed ?? 0.05,
    transparent: opts.transparent !== undefined ? opts.transparent : true,
    focal: opts.focal || [0.5, 0.5],
    rotation: opts.rotation || [1.0, 0.0],
    autoCenterRepulsion: opts.autoCenterRepulsion ?? 0,
    lightMode: opts.lightMode ? 1.0 : 0.0
  };

  const vertexShader = `
    attribute vec2 uv;
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;

    uniform float uTime;
    uniform vec3 uResolution;
    uniform vec2 uFocal;
    uniform vec2 uRotation;
    uniform float uStarSpeed;
    uniform float uDensity;
    uniform float uHueShift;
    uniform float uSpeed;
    uniform vec2 uMouse;
    uniform float uGlowIntensity;
    uniform float uSaturation;
    uniform bool uMouseRepulsion;
    uniform float uTwinkleIntensity;
    uniform float uRotationSpeed;
    uniform float uRepulsionStrength;
    uniform float uMouseActiveFactor;
    uniform float uAutoCenterRepulsion;
    uniform bool uTransparent;
    uniform float uLightMode;

    varying vec2 vUv;

    #define NUM_LAYER 4.0
    #define STAR_COLOR_CUTOFF 0.2
    #define MAT45 mat2(0.70710678, -0.70710678, 0.70710678, 0.70710678)
    #define PERIOD 3.0

    float Hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float tri(float x) {
      return abs(fract(x) * 2.0 - 1.0);
    }

    float tris(float x) {
      float t = fract(x);
      return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
    }

    float trisn(float x) {
      float t = fract(x);
      return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float Star(vec2 uv, float flare) {
      float d = length(uv);
      float m = (0.05 * uGlowIntensity) / d;
      float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
      m += rays * flare * uGlowIntensity;
      uv *= MAT45;
      rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
      m += rays * 0.3 * flare * uGlowIntensity;
      m *= smoothstep(1.0, 0.2, d);
      return m;
    }

    vec3 StarLayer(vec2 uv) {
      vec3 col = vec3(0.0);
      vec2 gv = fract(uv) - 0.5;
      vec2 id = floor(uv);

      for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
          vec2 offset = vec2(float(x), float(y));
          vec2 si = id + offset;
          float seed = Hash21(si);
          float size = fract(seed * 345.32);
          float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
          float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

          float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
          float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
          float grn = min(red, blu) * seed;
          vec3 base = vec3(red, grn, blu);

          float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159265) + 0.5;
          hue = fract(hue + uHueShift / 360.0);
          float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
          float val = max(max(base.r, base.g), base.b);
          base = hsv2rgb(vec3(hue, sat, val));

          vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;
          float star = Star(gv - offset - pad, flareSize);
          vec3 color = base;

          float twinkle = trisn(uTime * uSpeed + seed * 6.2831853) * 0.5 + 1.0;
          twinkle = mix(1.0, twinkle, uTwinkleIntensity);
          star *= twinkle;

          col += star * size * color;
        }
      }
      return col;
    }

    void main() {
      vec2 focalPx = uFocal * uResolution.xy;
      vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

      vec2 mouseNorm = uMouse - vec2(0.5);

      if (uAutoCenterRepulsion > 0.0) {
        vec2 centerUV = vec2(0.0, 0.0);
        float centerDist = length(uv - centerUV);
        vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
        uv += repulsion * 0.05;
      } else if (uMouseRepulsion) {
        vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
        float mouseDist = length(uv - mousePosUV);
        vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
        uv += repulsion * 0.05 * uMouseActiveFactor;
      } else {
        vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
        uv += mouseOffset;
      }

      float autoRotAngle = uTime * uRotationSpeed;
      mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
      uv = autoRot * uv;
      uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

      vec3 col = vec3(0.0);
      for (int l = 0; l < 4; l++) {
        float i = float(l) / 4.0;
        float depth = fract(i + uStarSpeed * uSpeed);
        float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
        float fade = depth * smoothstep(1.0, 0.9, depth);
        col += StarLayer(uv * scale + i * 453.32) * fade;
      }

      if (uLightMode > 0.5) {
        float energy = max(max(col.r, col.g), col.b);
        float coverage = clamp(smoothstep(0.0, 0.42, energy) * 0.92, 0.0, 0.92);
        vec3 ink = clamp(col * 0.48, 0.0, 0.82);
        gl_FragColor = vec4(mix(vec3(1.0), ink, coverage), 1.0);
      } else if (uTransparent) {
        float alpha = length(col);
        alpha = smoothstep(0.0, 0.3, alpha);
        alpha = min(alpha, 1.0);
        gl_FragColor = vec4(col, alpha);
      } else {
        gl_FragColor = vec4(col, 1.0);
      }
    }
  `;

  function compileShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn("Galaxy shader compile error:", gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  const vs = compileShader(gl.VERTEX_SHADER, vertexShader);
  const fs = compileShader(gl.FRAGMENT_SHADER, fragmentShader);
  if (!vs || !fs) return;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.warn("Galaxy program link error:", gl.getProgramInfoLog(prog));
    return;
  }
  gl.useProgram(prog);

  const verts = new Float32Array([
    -1, -1,  0, 0,
     3, -1,  2, 0,
    -1,  3,  0, 2
  ]);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(prog, "position");
  const aUv = gl.getAttribLocation(prog, "uv");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0);
  gl.enableVertexAttribArray(aUv);
  gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 16, 8);

  const uTimeLoc = gl.getUniformLocation(prog, "uTime");
  const uResLoc = gl.getUniformLocation(prog, "uResolution");
  const uFocalLoc = gl.getUniformLocation(prog, "uFocal");
  const uRotLoc = gl.getUniformLocation(prog, "uRotation");
  const uStarSpeedLoc = gl.getUniformLocation(prog, "uStarSpeed");
  const uDensityLoc = gl.getUniformLocation(prog, "uDensity");
  const uHueShiftLoc = gl.getUniformLocation(prog, "uHueShift");
  const uSpeedLoc = gl.getUniformLocation(prog, "uSpeed");
  const uMouseLoc = gl.getUniformLocation(prog, "uMouse");
  const uGlowLoc = gl.getUniformLocation(prog, "uGlowIntensity");
  const uSatLoc = gl.getUniformLocation(prog, "uSaturation");
  const uMouseRepLoc = gl.getUniformLocation(prog, "uMouseRepulsion");
  const uTwinkleLoc = gl.getUniformLocation(prog, "uTwinkleIntensity");
  const uRotSpeedLoc = gl.getUniformLocation(prog, "uRotationSpeed");
  const uRepStrengthLoc = gl.getUniformLocation(prog, "uRepulsionStrength");
  const uMouseActLoc = gl.getUniformLocation(prog, "uMouseActiveFactor");
  const uAutoCenterLoc = gl.getUniformLocation(prog, "uAutoCenterRepulsion");
  const uTransLoc = gl.getUniformLocation(prog, "uTransparent");
  const uLightLoc = gl.getUniformLocation(prog, "uLightMode");

  gl.uniform2f(uFocalLoc, config.focal[0], config.focal[1]);
  gl.uniform2f(uRotLoc, config.rotation[0], config.rotation[1]);
  gl.uniform1f(uStarSpeedLoc, config.starSpeed);
  gl.uniform1f(uDensityLoc, config.density);
  gl.uniform1f(uHueShiftLoc, config.hueShift);
  gl.uniform1f(uSpeedLoc, config.speed);
  gl.uniform1f(uGlowLoc, config.glowIntensity);
  gl.uniform1f(uSatLoc, config.saturation);
  gl.uniform1i(uMouseRepLoc, config.mouseRepulsion ? 1 : 0);
  gl.uniform1f(uTwinkleLoc, config.twinkleIntensity);
  gl.uniform1f(uRotSpeedLoc, config.rotationSpeed);
  gl.uniform1f(uRepStrengthLoc, config.repulsionStrength);
  gl.uniform1f(uAutoCenterLoc, config.autoCenterRepulsion);
  gl.uniform1i(uTransLoc, config.transparent ? 1 : 0);
  gl.uniform1f(uLightLoc, config.lightMode);

  if (config.transparent) {
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);
  } else {
    gl.clearColor(0, 0, 0, 1);
  }

  const targetMouse = { x: 0.5, y: 0.5 };
  const smoothMouse = { x: 0.5, y: 0.5 };
  let targetActive = 0.0;
  let smoothActive = 0.0;

  window.addEventListener("mousemove", (e) => {
    targetMouse.x = e.clientX / window.innerWidth;
    targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
    targetActive = 1.0;
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    targetActive = 0.0;
  });

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(prog);
    gl.uniform3f(uResLoc, canvas.width, canvas.height, canvas.width / canvas.height);
  }
  resize();
  window.addEventListener("resize", resize);

  const lerp = (a, b, f) => a + (b - a) * f;

  function render(time) {
    const t = time * 0.001;
    smoothMouse.x = lerp(smoothMouse.x, targetMouse.x, 0.05);
    smoothMouse.y = lerp(smoothMouse.y, targetMouse.y, 0.05);
    smoothActive = lerp(smoothActive, targetActive, 0.05);

    gl.useProgram(prog);
    gl.uniform1f(uTimeLoc, t);
    gl.uniform1f(uStarSpeedLoc, (t * config.starSpeed) / 10.0);
    gl.uniform2f(uMouseLoc, smoothMouse.x, smoothMouse.y);
    gl.uniform1f(uMouseActLoc, smoothActive);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

/* ============================================================
   EVENT LISTENERS & LIFECYCLE
   ============================================================ */
document.querySelector("#loginBtn").addEventListener("click", () => openAuth("login"));
document.querySelector("#registerBtn").addEventListener("click", () => openAuth("register"));
document.querySelector("#logoutBtn").addEventListener("click", async () => {
  try {
    await api("/api/auth/logout", { method: "POST" });
  } catch (error) {
    showToast(error.message);
  } finally {
    session = null;
    state.likedProjectIds = [];
    updateAuthUi();
    await loadLikes().catch(() => renderProjects());
    showToast(t().toast.loggedOut);
  }
});
document.querySelector("#dashboardBtn").addEventListener("click", openDashboard);
document.querySelector("#closeAuthBtn").addEventListener("click", () => authModal.close());
document.querySelector("#closeDashboardBtn").addEventListener("click", () => dashboardModal.close());
authForm.addEventListener("submit", handleAuth);
projectList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-like]");
  if (button) handleLike(button.dataset.like);
});
document.querySelector("#userList").addEventListener("change", (event) => {
  const select = event.target.closest("[data-role-user]");
  if (select) updateUser(select.dataset.roleUser, { role: select.value });
});
document.querySelector("#userList").addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle-user]");
  if (toggle) {
    updateUser(toggle.dataset.toggleUser, { isActive: toggle.dataset.active !== "true" });
    return;
  }
  const remove = event.target.closest("[data-delete-user]");
  if (remove) deleteUser(remove.dataset.deleteUser);
});
langToggleBtn?.addEventListener("click", () => setLanguage(state.lang === "th" ? "en" : "th"));
logSearchInput?.addEventListener("input", (event) => scheduleLogSearch(event.target.value));
logActionSelect?.addEventListener("change", (event) => {
  state.logsFilter.action = event.target.value;
  loadLogs({ reset: true }).catch((error) => showToast(error.message));
});
loadMoreLogsBtn?.addEventListener("click", () => {
  loadLogs().catch((error) => showToast(error.message));
});

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((target) => observer.observe(target));
}

const topbar = document.querySelector("#topbar");
const scrollProgress = document.querySelector("#scrollProgress");
const backToTop = document.querySelector("#backToTop");

function updateScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (scrollProgress) scrollProgress.style.width = `${progress}%`;
  if (topbar) topbar.classList.toggle("scrolled", scrollTop > 10);
  if (backToTop) backToTop.classList.toggle("visible", scrollTop > 400);
}

function initScrollEffects() {
  updateScrollEffects();
  window.addEventListener("scroll", updateScrollEffects, { passive: true });
  window.addEventListener("resize", updateScrollEffects);

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Initial Boot
applyStaticText();
renderStory();
renderAiTools();
renderSkills();
renderDossiers();
renderProjects();
renderCertificates();
updateAuthUi();
observeReveals();
initScrollEffects();
initializeSession();

// Initialize React Bits Galaxy Cosmic Background
initGalaxy(document.querySelector("#galaxyCanvas"), {
  starSpeed: 1,
  density: 1.7,
  hueShift: 255,
  speed: 2.3,
  glowIntensity: 0.85,
  saturation: 1,
  mouseRepulsion: true,
  repulsionStrength: 2,
  twinkleIntensity: 0.3,
  rotationSpeed: 0.05,
  transparent: true
});