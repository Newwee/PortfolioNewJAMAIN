/* ============================================================
   New JA Portfolio — Cosmic Nebula (Cyan, Purple, Pink) Edition
   Featuring React Bits: TargetCursor, FuzzyText, LogoLoop,
   BounceCards, BorderGlow, Counter, CountUp, 3D Folders & Galaxy
   ============================================================ */

/* ============================================================
   📝 CONTENT — Personal Identity for New JA
   ============================================================ */
const CONTENT = {
  en: {
    story: [
      {
        period: "2009 · Where it started",
        title: "Born to explore",
        body: "Born on June 23, 2009. From childhood, driven by raw curiosity — always pulling things apart to see how they tick, exploring games, and discovering the magic of code."
      },
      {
        period: "Early Foundations",
        title: "Building the First Logic",
        body: "First experiments with scripting, game mechanics, and digital design. Realized early on that creating virtual worlds was infinitely more thrilling than just playing them."
      },
      {
        period: "High School · Grade 7 – 12",
        title: "Science-Math & Engineering Direction",
        body: "Navamindarajudis Triamudomsuksapattanakarn School. Deepened understanding of algorithmic thinking, software architectures, advanced robotics, and real-time systems."
      },
      {
        period: "National AI Champion",
        title: "UTCC AI Hackathon Victory",
        body: "Grand Champion of UTCC AI Hackathon 2026. Designed and presented an end-to-end AI flood prediction & hydrological telemetry intelligence system, winning 1st place nationwide."
      },
      {
        period: "The Vision Ahead",
        title: "Autonomous Systems & Next-Gen AI",
        body: "My ambition: To pioneer autonomous robotics, multi-agent AI copilot frameworks, and spatial computing. Code is my canvas, AI is my collaborator, and innovation is my life's mission."
      }
    ],
    skills: [
      { name: "AI Systems & Generative Engineering", score: 10, body: "Mastering LLMs, prompt pipelines, autonomous agent workflows, Microsoft AI Builder, and multimodal synthesis." },
      { name: "Polyglot Coding & Core Logic", score: 9, body: "Fluent in core computer science paradigms across Python, Lua, TypeScript/JS, C#, HTML/CSS, and SQL." },
      { name: "Roblox Game Engine & Multiplayer Systems", score: 9, body: "Architecting complex MMO RPG mechanics, real-time client-server network replication, and physics validation." },
      { name: "Autonomous Robotics & Edge Vision", score: 9, body: "Edge AI vision processing (YOLO), ROS 2 teleoperation, telemetry streaming, and autonomous flight pathing." },
      { name: "Full-Stack Web & WebGL Architecture", score: 9, body: "Designing futuristic cyber glassmorphic interfaces, reactive state engines, zero-lag shaders, and REST APIs." },
      { name: "YouTube Creator & Visual Storytelling", score: 9, body: "High-retention pacing, creative storytelling, motion design, and technical media production." },
      { name: "Python Automation & Data Pipelines", score: 8, body: "Fast algorithmic workflows, custom AI integrations, data ingestion, and cloud microservices." },
      { name: "UI/UX & Interactive Design Systems", score: 8, body: "Spatial visual hierarchy, micro-interactions, responsive layouts, and seamless accessible ergonomics." }
    ],
    aiTools: [
      { name: "ChatGPT", body: "Architectural brainstorming, algorithmic optimization, code generation, and rapid prototyping." },
      { name: "Claude", body: "Deep analytical reasoning, complex systems documentation, and rigorous technical logic." },
      { name: "Gemini", body: "Multimodal analysis, cutting-edge spatial research, and cross-framework synthesis." },
      { name: "Grok", body: "Trend exploration, unconventional ideation, and rapid creative divergence." }
    ],
    dossiers: [
      {
        id: "champ-water",
        title: "National AI Champion",
        subtitle: "UTCC AI Hackathon 2026",
        color: "#38bdf8",
        papers: [
          { tag: "TROPHY", title: "1st Place Winner (20,000 THB)", desc: "Outperformed 15 finalist teams nationwide" },
          { tag: "SOLUTION", title: "AI Water & Flood Intel", desc: "Real-time hydrological predictive modeling" },
          { tag: "TELEMETRY", title: "IoT Sensors & Alert Network", desc: "Automated community disaster escalation" }
        ]
      },
      {
        id: "genai-suite",
        title: "Generative AI Systems",
        subtitle: "Multi-Agent Workflows",
        color: "#c084fc",
        papers: [
          { tag: "AGENTS", title: "Autonomous Tool Calling", desc: "Coordinated multi-agent reasoning pipelines" },
          { tag: "ENTERPRISE", title: "Microsoft AI Builder", desc: "Direct integration with Dataverse cloud" },
          { tag: "MULTIMODAL", title: "Asset Generation Suite", desc: "High-retention dynamic text and visuals" }
        ]
      },
      {
        id: "roblox-engine",
        title: "Roblox MMO RPG Engine",
        subtitle: "Virtual World & Systems",
        color: "#f472b6",
        papers: [
          { tag: "NETCODE", title: "Client-Server Replication", desc: "Low-latency multiplayer physics sync" },
          { tag: "COMBAT", title: "Hitbox & Action Validation", desc: "Server-authoritative combat loops" },
          { tag: "ECONOMY", title: "Persistent Quest Trees", desc: "Dynamic item economy and custom VFX" }
        ]
      },
      {
        id: "cyber-autonomy",
        title: "Autonomous Robotics",
        subtitle: "Edge AI · Vision · ROS 2",
        color: "#a855f7",
        papers: [
          { tag: "VISION", title: "Real-Time YOLO Detection", desc: "Embedded computer vision processing" },
          { tag: "FLIGHT", title: "Drone Waypoint Navigation", desc: "Obstacle avoidance and telemetry streaming" },
          { tag: "CREED", title: "Engineering the Future", desc: "Autonomous intelligence deployed at edge" }
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
        image: "assets/UTCCcer.jpg",
        body: "Grand Champion solution for UTCC AI Hackathon 2026 (Team MANITA). Architected an AI-powered hydrological decision platform that analyzes real-time IoT sensor streams, rainfall intensity, and topographical elevation models to forecast urban flood vectors and trigger automated emergency evacuations.",
        highlights: ["1st Place Grand Prize (20,000 THB)", "Defeated 15 National Finalists", "Real-Time AI Flood Forecasting", "IoT Telemetry Architecture"],
        tags: ["AI / Machine Learning", "Data Modeling", "IoT Telemetry", "Disaster Prevention", "Dashboard UI"]
      },
      {
        id: "drone-autonomy",
        title: "Autonomous Drone Vision & Telemetry Suite",
        type: "🚁 Robotics & Autonomous Edge Intelligence",
        badge: "⚡ Real-Time Edge Vision",
        featured: true,
        status: "Active Research",
        image: "assets/UTCC.jpg",
        body: "A high-performance autonomous drone teleoperation and computer vision platform. Combines edge YOLO object detection with ROS 2 flight controllers for real-time spatial mapping, target tracking, and ultra-low-latency telemetry transmission over WebSockets.",
        highlights: ["Real-Time Edge Object Detection", "ROS 2 Autonomous Navigation", "Sub-50ms Video Telemetry", "Hardware-Software Integration"],
        tags: ["Robotics", "ROS 2", "Edge AI", "Computer Vision", "Python", "Autonomous Flight"]
      },
      {
        id: "ai-creative-engine",
        title: "Generative AI Systems & Agentic Orchestration Suite",
        type: "🤖 AI Engineering / Multi-Agent Copilot",
        badge: "⚡ Autonomous AI Suite",
        featured: true,
        status: "Production Ready",
        image: "assets2/17-1.png",
        body: "An end-to-end AI creation ecosystem integrating multi-agent LLM tool-calling, advanced prompt engineering, Microsoft AI Builder connected to Dataverse databases, automated workflow orchestrations, and multimodal asset generation pipelines.",
        highlights: ["Multi-Agent Tool Orchestration", "Microsoft AI Builder + Dataverse", "Prompt Engineering Mastery", "Multimodal Generative Pipelines"],
        tags: ["Generative AI", "LLM Workflows", "Agentic Systems", "Microsoft AI Builder", "Python Automation", "Dataverse"]
      },
      {
        id: "roblox-mmorpg",
        title: "Roblox MMO RPG Game Engine & Virtual World",
        type: "🎮 Game Systems / Distributed Multiplayer",
        badge: "🎮 Large-Scale MMO Engine",
        featured: false,
        status: "In Active Development",
        image: "assets/cer-2.jpg",
        body: "A comprehensive multiplayer action-RPG built inside Roblox Studio. Engineered with a modular Lua framework, client-server state replication, real-time combat hitbox validation, inventory economy trees, procedural quest triggers, and custom atmospheric world-building.",
        highlights: ["Client-Server Network Sync", "Combat & Hitbox Validation", "Persistent Economy & Progression", "Custom World Design & VFX"],
        tags: ["Roblox Studio", "Lua Scripting", "MMO RPG", "Network Replication", "Game Systems", "Combat Physics"]
      },
      {
        id: "polyglot-code-lab",
        title: "Polyglot Engineering & Multi-Language Core",
        type: "⚡ Software Engineering / Cross-Paradigm",
        badge: "🌐 Multi-Language Architecture",
        featured: false,
        status: "Core Foundation",
        image: "assets/cer-1.jpg",
        body: "Deep computer science adaptability across programming paradigms: Python for AI & data pipelines, Lua for low-latency game loops, TypeScript/JavaScript for modern full-stack web engines, C# for Unity OOP, and SQL for robust relational data architecture.",
        highlights: ["Multi-Paradigm: OOP, Functional, Event-Driven", "Full-Stack Web & Low-Latency Engines", "Clean Modular Architecture", "Rapid Cross-Language Adaptability"],
        tags: ["Python", "Lua", "JavaScript / TypeScript", "C# / Unity", "HTML5 / CSS3", "SQL / Dataverse"]
      },
      {
        id: "portfolio-site",
        title: "Cosmic Nebula Cyber Portfolio & Admin Control Room",
        type: "💎 Full-Stack Web Platform / Spatial UI",
        badge: "💎 Full-Stack & Secure Back Office",
        featured: false,
        status: "Production Live",
        image: "assets/myface.jpg",
        body: "Production-grade portfolio web application engineered in a Cosmic Nebula theme. Features an Express backend, SQLite/PostgreSQL persistence, Argon2 password hashing, session tokens, real-time likes counter, detailed audit logs, and 10 interactive React Bits components.",
        highlights: ["Express.js & Database Architecture", "Admin Control Room & Audit Logs", "Argon2 Auth & Session Tokens", "10 React Bits Interactive Motion Engines"],
        tags: ["Express.js", "WebGL / Shaders", "Security & Sessions", "Admin Control Room", "Bilingual System", "Fluid UI"]
      }
    ],
    certificates: [
      {
        title: "1st Place Grand Champion — UTCC AI Hackathon",
        image: "assets/UTCCcer.jpg",
        body: "1st Place Winner certificate for designing an AI and STEM-driven hydrological early warning system for Thailand.",
        issuerId: "best_award"
      },
      {
        title: "Award Presentation Ceremony (20,000 THB Prize)",
        image: "assets/UTCC.jpg",
        body: "Acceptance of the Grand Champion award for Team MANITA, outperforming 15 national finalist teams.",
        issuerId: "best_award"
      },
      { title: "Design AI-powered business solutions", image: "assets2/17-1.png", body: "Validated mastery in designing high-level enterprise AI solutions.", issuerId: "microsoft" },
      { title: "Create effective prompts for generative AI", image: "assets2/16-1.png", body: "Expertise in prompt structuring and precise LLM steerability.", issuerId: "microsoft" },
      { title: "Create AI Builder prompts", image: "assets2/1-1.png", body: "Connecting generative AI directly to Dataverse enterprise databases.", issuerId: "microsoft" },
      { title: "Turn business ideas into solutions", image: "assets2/15-1.png", body: "Transforming functional concepts into production Power Platform solutions.", issuerId: "microsoft" },
      { title: "Customize a canvas app", image: "assets2/10-1.png", body: "Crafting bespoke user interfaces and dynamic UI components.", issuerId: "microsoft" },
      { title: "Configure forms, charts, and dashboards", image: "assets2/7-1.png", body: "Building mission-critical executive analytical dashboards.", issuerId: "microsoft" },
      { title: "Build approval flows with Power Automate", image: "assets2/2-1.png", body: "Designing automated multi-stage enterprise approval pipelines.", issuerId: "microsoft" },
      { title: "Publish, share, and maintain a canvas app", image: "assets2/9-1.png", body: "Managing full application lifecycle and cloud deployment.", issuerId: "microsoft" },
      { title: "Make Game with AI", image: "assets/cer-2.jpg", body: "Completed practical workshop in AI-assisted game development.", issuerId: "hamsterhub" },
      { title: "Game with AI Workshop", image: "assets/cer-3.png", body: "Hands-on engineering workshop creating games with generative tools.", issuerId: "hamsterhub" },
      { title: "Developer Fundamentals", image: "assets/cer-1.jpg", body: "Core programming and software engineering foundations.", issuerId: "other" }
    ]
  },
  th: {
    story: [
      {
        period: "2009 · จุดเริ่มต้น",
        title: "เกิดมาพร้อมความอยากรู้อยากเห็น",
        body: "เกิดเมื่อวันที่ 23 มิถุนายน 2009 ตั้งแต่วัยเด็กเป็นคนช่างสงสัย ชอบรื้อประกอบสิ่งต่าง ๆ สนุกกับการเล่นเกม และค้นพบความมหัศจรรย์ของการเขียนโค้ด"
      },
      {
        period: "ก้าวแรกของนักสร้าง",
        title: "จากผู้เล่นสู่ผู้สร้าง",
        body: "เริ่มทดลองเขียนสคริปต์ ออกแบบระบบเกม และสร้างสิ่งต่าง ๆ ด้วยตนเอง พบว่าการสร้างโลกเสมือนขึ้นมานั้นน่าตื่นเต้นยิ่งกว่าการเป็นเพียงผู้เล่นธรรมดา"
      },
      {
        period: "มัธยม 1 – มัธยม 6",
        title: "วิทย์-คณิต & เส้นทางวิศวกรรม",
        body: "โรงเรียนนวมินทราชูทิศ เตรียมอุดมศึกษาพัฒนาการ ศึกษาค้นคว้าทั้งอัลกอริทึม สถาปัตยกรรมซอฟต์แวร์ หุ่นยนต์อัจฉริยะ และระบบเรียลไทม์อย่างต่อเนื่อง"
      },
      {
        period: "แชมป์ AI ระดับประเทศ",
        title: "ชัยชนะใน UTCC AI Hackathon 2026",
        body: "คว้าแชมป์ชนะเลิศอันดับ 1 ของประเทศไทย ออกแบบและนำเสนอแพลตฟอร์ม AI พยากรณ์น้ำท่วมและบริหารจัดการน้ำอัจฉริยะ เอาชนะ 15 ทีมชิงชนะเลิศทั่วประเทศ"
      },
      {
        period: "วิสัยทัศน์ในอนาคต",
        title: "บุกเบิกระบบอัตโนมัติและปัญญาประดิษฐ์",
        body: "เป้าหมายสูงสุดคือการผลักดันขอบเขตของ AI, หุ่นยนต์อัตโนมัติ และ Spatial Computing โค้ดคือเครื่องมือ AI คือเพื่อนร่วมสร้าง และนวัตกรรมคือเป้าหมายชีวิต"
      }
    ],
    skills: [
      { name: "วิศวกรรม AI & ระบบ Generative อัตโนมัติ", score: 10, body: "เชี่ยวชาญการประยุกต์ใช้ LLMs, ออกแบบ Prompt เชิงลึก, Multi-Agent Workflows, Microsoft AI Builder และสื่อผสม AI" },
      { name: "การเขียนโปรแกรมหลากภาษา & ตรรกะ (Polyglot)", score: 9, body: "เข้าใจรากฐานภาษาหลัก: Python สำหรับ Data/AI, Lua สำหรับเกม, TypeScript/JS สำหรับเว็บ Full-Stack, C# และ SQL" },
      { name: "สคริปต์ Lua / เอนจินเกม Roblox", score: 9, body: "พัฒนาระบบเกม MMO RPG ขั้นสูง ระบบการต่อสู้ Hitbox และการ Sync ข้อมูล Client-Server แบบเรียลไทม์" },
      { name: "หุ่นยนต์อัตโนมัติ & Edge Vision", score: 9, body: "ประมวลผล Computer Vision ด้วย YOLO, การควบคุมโดรนผ่าน ROS 2, และระบบสตรีมข้อมูล Telemetry ความหน่วงต่ำ" },
      { name: "เว็บ Full-Stack & สถาปัตยกรรม WebGL", score: 9, body: "ออกแบบ UI แบบ Cyber Glassmorphism ลื่นไหล, ชิ้นส่วน Interactive Shader และ API ความปลอดภัยสูง" },
      { name: "ยูทูบเบอร์ & การเล่าเรื่องด้วยสื่อ", score: 9, body: "วางแผนโครงเรื่อง จังหวะการเล่าเรื่องที่น่าติดตาม และการตัดต่อวิดีโอระดับมืออาชีพ" },
      { name: "Python สำหรับระบบอัตโนมัติ & Data", score: 8, body: "เชื่อมต่อ AI APIs, สคริปต์ดึงและประมวลผลข้อมูลอัตโนมัติ และการแก้ปัญหาด้วยอัลกอริทึม" },
      { name: "การออกแบบ UI/UX & ระบบดีไซน์", score: 8, body: "การจัดลำดับสายตา ความคมชัดของตัวหนังสือ และประสบการณ์ใช้งานที่ราบรื่นบนทุกอุปกรณ์" }
    ],
    aiTools: [
      { name: "ChatGPT", body: "เครื่องมือหลักสำหรับวางแผนสถาปัตยกรรม ช่วยเขียนโค้ด ดีบัก และเร่งพัฒนาต้นแบบอย่างรวดเร็ว" },
      { name: "Claude", body: "ใช้ในการคิดวิเคราะห์เชิงลึก จัดระเบียบเอกสารทางเทคนิค และการใช้เหตุผลที่ซับซ้อน" },
      { name: "Gemini", body: "การค้นคว้าแบบ Multimodal สำรวจเทคโนโลยีล่าสุด และเปรียบเทียบมุมมองเชิงลึก" },
      { name: "Grok", body: "สำรวจเทรนด์ สร้างสรรค์ไอเดียใหม่ ๆ และทดลองมุมมองที่แปลกใหม่" }
    ],
    dossiers: [
      {
        id: "champ-water",
        title: "แชมป์ระดับประเทศ AI",
        subtitle: "UTCC AI Hackathon 2026",
        color: "#38bdf8",
        papers: [
          { tag: "TROPHY", title: "ชนะเลิศอันดับ 1 (20,000 บ.)", desc: "เอาชนะ 15 ทีมชิงชนะเลิศทั่วประเทศ" },
          { tag: "SOLUTION", title: "AI บริหารจัดการน้ำ", desc: "วิเคราะห์อุทกวิทยาและการพยากรณ์น้ำท่วม" },
          { tag: "TELEMETRY", title: "IoT เซนเซอร์ & ระบบเตือนภัย", desc: "กระจายสัญญาณเตือนภัยชุมชนล่วงหน้า" }
        ]
      },
      {
        id: "genai-suite",
        title: "ระบบ Generative AI",
        subtitle: "Multi-Agent Workflows",
        color: "#c084fc",
        papers: [
          { tag: "AGENTS", title: "ระบบ Multi-Agent Tool Calling", desc: "เวิร์กโฟลว์การตัดสินใจอัตโนมัติหลายเอเจนต์" },
          { tag: "ENTERPRISE", title: "Microsoft AI Builder", desc: "เชื่อมต่อฐานข้อมูล Dataverse โดยตรง" },
          { tag: "MULTIMODAL", title: "ระบบสร้างสื่อผสม AI", desc: "การสังเคราะห์คอนเทนต์และภาพไดนามิก" }
        ]
      },
      {
        id: "roblox-engine",
        title: "ระบบเกม Roblox MMO RPG",
        subtitle: "Virtual World & Systems",
        color: "#f472b6",
        papers: [
          { tag: "NETCODE", title: "Client-Server Sync", desc: "การจำลองข้อมูลผู้เล่นหลายคนความหน่วงต่ำ" },
          { tag: "COMBAT", title: "ระบบคำนวณ Hitbox การต่อสู้", desc: "ตรรกะแอ็กชันที่ตรวจสอบความถูกต้องบนเซิร์ฟเวอร์" },
          { tag: "ECONOMY", title: "ระบบภารกิจและช่องเก็บของ", desc: "การพัฒนาตัวละครถาวรและเอฟเฟกต์เฉพาะตัว" }
        ]
      },
      {
        id: "cyber-autonomy",
        title: "หุ่นยนต์และโดรนอัตโนมัติ",
        subtitle: "Edge AI · Vision · ROS 2",
        color: "#a855f7",
        papers: [
          { tag: "VISION", title: "ตรวจจับวัตถุ YOLO เรียลไทม์", desc: "ประมวลผลคอมพิวเตอร์วิชันบนอุปกรณ์ Edge" },
          { tag: "FLIGHT", title: "ระบบนำทางโดรนอัตโนมัติ", desc: "หลบหลีกสิ่งกีดขวางและสตรีม Telemetry" },
          { tag: "CREED", title: "สร้างสรรค์สู่อนาคต", desc: "นำปัญญาประดิษฐ์มาประยุกต์ใช้งานจริง" }
        ]
      }
    ],
    projects: [
      {
        id: "hackathon-manita",
        title: "AI บริหารจัดการน้ำและระบบเตือนภัยน้ำท่วมล่วงหน้า",
        type: "🏆 ชนะเลิศระดับประเทศ / AI & STEM Hackathon",
        badge: "🏆 รางวัลชนะเลิศ (20,000 บาท)",
        featured: true,
        status: "ชนะเลิศระดับประเทศ",
        image: "assets/UTCCcer.jpg",
        body: "ผลงานรางวัลชนะเลิศอันดับ 1 ในการแข่งขัน UTCC AI Hackathon 2026 (ทีม MANITA) ออกแบบแพลตฟอร์ม AI เพื่อการตัดสินใจทางอุทกวิทยา วิเคราะห์ข้อมูลเซนเซอร์ IoT ปริมาณน้ำฝน และแผนที่ระดับความสูงภูมิประเทศ เพื่อคาดการณ์ทิศทางน้ำท่วมและส่งสัญญาณเตือนภัยชุมชนอัตโนมัติ",
        highlights: ["รางวัลชนะเลิศอันดับ 1 (20,000 บาท)", "เอาชนะ 15 ทีมชิงชนะเลิศทั่วประเทศ", "AI พยากรณ์น้ำท่วมเรียลไทม์", "สถาปัตยกรรม IoT & Telemetry"],
        tags: ["AI / Machine Learning", "แบบจำลองข้อมูล", "IoT Telemetry", "การป้องกันภัยพิบัติ", "Dashboard UI"]
      },
      {
        id: "drone-autonomy",
        title: "ระบบโดรนอัจฉริยะและการควบคุมด้วย Edge AI",
        type: "🚁 วิศวกรรมหุ่นยนต์ & ระบบอัตโนมัติ",
        badge: "⚡ Edge AI Vision เรียลไทม์",
        featured: true,
        status: "กำลังศึกษาวิจัย",
        image: "assets/UTCC.jpg",
        body: "แพลตฟอร์มควบคุมโดรนและประมวลผลภาพจากระยะไกลแบบเรียลไทม์ ผสานโมเดลตรวจจับวัตถุ YOLO บนอุปกรณ์ Edge เข้ากับตัวควบคุมการบิน ROS 2 รองรับการนำทางอัตโนมัติและสตรีมมิงข้อมูล Telemetry ผ่าน WebSockets ความหน่วงต่ำกว่า 50ms",
        highlights: ["ตรวจจับวัตถุเรียลไทม์บนอุปกรณ์ Edge", "ระบบนำทางอัตโนมัติ ROS 2", "สตรีมมิง Telemetry ความหน่วงต่ำ", "ผสานฮาร์ดแวร์และซอฟต์แวร์ครบวงจร"],
        tags: ["วิทยาการหุ่นยนต์", "ROS 2", "Edge AI", "Computer Vision", "Python", "การบินอัตโนมัติ"]
      },
      {
        id: "ai-creative-engine",
        title: "ระบบ Generative AI และชุดระบบอัตโนมัติ Agentic",
        type: "🤖 วิศวกรรม AI / ระบบ Multi-Agent Copilot",
        badge: "⚡ ระบบ AI อัตโนมัติขั้นสูง",
        featured: true,
        status: "พร้อมใช้งานระดับโปรดักชัน",
        image: "assets2/17-1.png",
        body: "ระบบนิเวศการพัฒนาด้วย AI เต็มรูปแบบ เชื่อมโยง Multi-Agent LLM สั่งการเครื่องมืออัตโนมัติ, การออกแบบ Prompt เชิงลึก, Microsoft AI Builder เชื่อมกับฐานข้อมูล Dataverse, เวิร์กโฟลว์อัตโนมัติ และการสร้างสื่อ Multimodal",
        highlights: ["ผสานระบบ Multi-Agent & Tools", "Microsoft AI Builder + Dataverse", "การออกแบบ Prompt ขั้นสูง", "ระบบสร้างสื่อ Generative Multimodal"],
        tags: ["Generative AI", "LLM Workflows", "Agentic Systems", "Microsoft AI Builder", "Python Automation", "Dataverse"]
      },
      {
        id: "roblox-mmorpg",
        title: "เกม Roblox MMO RPG และระบบโลกเสมือนจริง",
        type: "🎮 พัฒนาเกม / ระบบเกมแบบกระจายศูนย์",
        badge: "🎮 สถาปัตยกรรม MMO สเกลใหญ่",
        featured: false,
        status: "กำลังพัฒนาอย่างต่อเนื่อง",
        image: "assets/cer-2.jpg",
        body: "โปรเจกต์เกม Action-RPG ผู้เล่นหลายคนบน Roblox Studio เขียนด้วยโครงสร้าง Lua แบบ Modular เชื่อมต่อข้อมูล Client-Server แบบเรียลไทม์ ระบบคำนวณ Hitbox การต่อสู้ ระบบช่องเก็บของและไอเทม ระบบภารกิจอัตโนมัติ และการออกแบบบรรยากาศโลกแฟนตาซีที่สมจริง",
        highlights: ["การ Sync ข้อมูล Client-Server ลื่นไหล", "ระบบต่อสู้และ Hitbox แม่นยำ", "ระบบเศรษฐกิจและเซฟข้อมูลถาวร", "ออกแบบโลกและ VFX เฉพาะตัว"],
        tags: ["Roblox Studio", "สคริปต์ Lua", "MMO RPG", "Network Replication", "ระบบเกมเพลย์", "ฟิสิกส์การต่อสู้"]
      },
      {
        id: "polyglot-code-lab",
        title: "สถาปัตยกรรมโค้ดและการพัฒนาหลายภาษา (Polyglot Lab)",
        type: "⚡ วิศวกรรมซอฟต์แวร์ / หลากกระบวนทัศน์",
        badge: "🌐 สถาปัตยกรรมหลายภาษา",
        featured: false,
        status: "รากฐานความเชี่ยวชาญ",
        image: "assets/cer-1.jpg",
        body: "ความเชี่ยวชาญด้านวิทยาการคอมพิวเตอร์ที่พร้อมปรับตัวในทุกภาษาและกระบวนทัศน์: Python สำหรับงาน Data และ AI, Lua สำหรับระบบเกมเรียลไทม์, JavaScript/TypeScript สำหรับเว็บ Full-Stack สมัยใหม่, C# สำหรับ Unity OOP และ SQL สำหรับฐานข้อมูลเชิงสัมพันธ์",
        highlights: ["เข้าใจกระบวนทัศน์ OOP, Functional, Event-Driven", "เว็บ Full-Stack และ Game Engines", "โครงสร้างโค้ดที่สะอาดและยืดหยุ่น", "เรียนรู้ภาษาใหม่ได้รวดเร็ว"],
        tags: ["Python", "Lua", "JavaScript / TypeScript", "C# / Unity", "HTML5 / CSS3", "SQL / Dataverse"]
      },
      {
        id: "portfolio-site",
        title: "พอร์ตโฟลิโอเว็บแอปพลิเคชัน Cosmic Nebula & ห้องควบคุมแอดมิน",
        type: "💎 เว็บแอปพลิเคชัน Full-Stack / Spatial UI",
        badge: "💎 Full-Stack พร้อมระบบหลังบ้านครบวงจร",
        featured: false,
        status: "เปิดใช้งานจริงระดับโปรดักชัน",
        image: "assets/myface.jpg",
        body: "เว็บพอร์ตโฟลิโอระดับโปรดักชันในธีม Cosmic Nebula มีแบ็กเอนด์ Express.js, ฐานข้อมูล SQLite/PostgreSQL, ระบบความปลอดภัยระดับสูง, เซสชันโทเคน, ระบบกดถูกใจแบบเรียลไทม์, บันทึก Audit Log ละเอียด, แดชบอร์ดแอดมิน และ 10 คอมโพเนนต์ Motion จาก React Bits",
        highlights: ["Express.js & การเชื่อมต่อฐานข้อมูล", "ห้องควบคุมแอดมินและ Audit Log", "ระบบความปลอดภัยและเซสชันระดับสูง", "10 คอมโพเนนต์ Interactive Motion จาก React Bits"],
        tags: ["Express.js", "WebGL / Shaders", "ความปลอดภัย & เซสชัน", "ห้องควบคุมแอดมิน", "ระบบสองภาษา", "Fluid UI"]
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
      { title: "Make Game with AI", image: "assets/cer-2.jpg", body: "ผ่านกิจกรรม Make Game with AI เรียบร้อยแล้ว", issuerId: "hamsterhub" },
      { title: "Game with AI Workshop", image: "assets/cer-3.png", body: "เข้าร่วมเวิร์กช็อป Game with AI แบบลงมือทำจริง", issuerId: "hamsterhub" },
      { title: "Developer Fundamentals", image: "assets/cer-1.jpg", body: "ทักษะพื้นฐานทั่วไปในการเขียนโปรแกรม", issuerId: "other" }
    ]
  }
};

/* ============================================================
   🌐 UI TEXT
   ============================================================ */
const UI = {
  en: {
    nav: { profile: "Profile", story: "Life Story", workflow: "AI Workflow", skills: "Skills", flagship: "Flagship", projects: "Works", certificates: "Certificates", contact: "Contact" },
    auth: { login: "Login", register: "Register", logout: "Logout", admin: "Admin" },
    hero: {
      kicker: "Creative AI Architect · Full-Stack Innovator",
      alias: "AKA New JA · Born 06.23.09 · Bangkok, Thailand",
      text: "Developer and AI systems creator driven by curiosity. Transforming complex algorithms into intuitive spatial experiences, autonomous drone intelligence, and scalable full-stack applications.",
      cta1: "Explore Works",
      cta2: "Read Journey",
      ctaWorkflow: "AI Workflow",
      cta3: "Download Resume",
      trophySmall: "National AI Hackathon",
      trophyStrong: "1st Place Champion",
      trophyBody: "UTCC AI Hackathon 2026 · Grand Winner",
      techSmall: "Core Focus",
      techStrong: "Autonomous & LLM Systems",
      techBody: "ROS · YOLO · Next.js · WebGL",
      faceCardRole: "AI Engineer & Creator"
    },
    stats: {
      projects: "Projects Built",
      awards: "Awards & Honors",
      accuracy: "AI Accuracy"
    },
    tech: {
      marquee: "CORE STACK & INTELLIGENCE ARSENAL"
    },
    flagship: {
      kicker: "Spotlight Showcase",
      title: "Flagship Innovations & Awards",
      body: "Hover over any card in the deck to inspect key projects with dynamic spring physics."
    },
    profile: {
      kicker: "Creator Profile",
      body: "High school Grade 12 developer with a relentless drive for innovation. Combining multi-agent AI, drone teleoperation, real-time 3D environments, and modern web architectures into impactful products."
    },
    section: {
      story: { kicker: "Life Story", title: "From playing as a kid to engineering the future.", body: "A timeline of passion, curiosity, national hackathons, and breakthrough milestones." },
      skills: { kicker: "Skill Stack", title: "Engineering Beyond Boundaries.", body: "Self-evaluated proficiencies across Artificial Intelligence, Full-Stack Development, Game Architecture, and Robotics." },
      projects: { kicker: "Selected Works", title: "Production Systems & Experiments.", body: "Interactive portfolio cards featuring Border Glow proximity luminescence and live member likes." },
      certificates: { kicker: "Certificates & Proof", title: "Verified Achievements & Growth.", body: "Official credentials, competition victories, and academic milestones." },
      contact: { kicker: "Transmission Channel", title: "Let's build something extraordinary." }
    },
    dossier: {
      badge: "⚡ 3D Interactive Dossiers",
      hint: "Click any dossier to unfold project sheets & magnetic blueprints"
    },
    workflow: {
      kicker: "AI Engineering Lifecycle",
      title: "Thought to Production: Co-Creating with AI.",
      body: "AI does not replace the developer — it acts as a tireless cognitive copilot that amplifies architectural speed, algorithmic rigor, and deployment precision.",
      traceHeader: "Active Reasoning Trace · Autonomous Multi-Agent Pipeline",
      step1Title: "Idea & Problem Framing",
      step1Desc: "Decomposing ambiguous real-world friction into structured algorithmic challenges and mathematical constraints.",
      step2Title: "Prompt & Context Engineering",
      step2Desc: "Engineering multi-shot system prompts, few-shot examples, and strict JSON schemas to steer LLMs with zero hallucinations.",
      step3Title: "Multi-Agent Cognition",
      step3Desc: "Orchestrating autonomous agents with tool-calling capabilities to critique, analyze edge cases, and cross-validate logic.",
      step4Title: "Polyglot Code Synthesis",
      step4Desc: "Translating validated reasoning into high-performance code across Python (AI), Lua (Roblox physics), and TypeScript (Full-Stack).",
      step5Title: "Testing & Telemetry",
      step5Desc: "Rigorous automated test suites, sub-50ms latency benchmarking, and hardware sensor telemetry validation.",
      step6Title: "Production & Iteration",
      step6Desc: "Deploying to edge devices (drones) and cloud environments with real-time logging, user telemetry, and continuous feedback loops."
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
      filterAll: "All actions", filterLogin: "Login", filterRegister: "Register", filterLike: "Like",
      loadMore: "Load more logs", showingLogs: "Showing {count} logs"
    },
    toast: {
      liked: "Thanks for liking!",
      unliked: "Like removed",
      loginRequired: "Please login to like this project",
      loggedIn: "Welcome back!",
      registered: "Account registered successfully!",
      loggedOut: "Logged out",
      sessionRestored: "Session active",
      copied: "Copied to clipboard!"
    }
  },
  th: {
    nav: { profile: "โปรไฟล์", story: "เรื่องราว", workflow: "กระบวนการ AI", skills: "ทักษะ", flagship: "ผลงานเด่น", projects: "ผลงาน", certificates: "เกียรติบัตร", contact: "ติดต่อ" },
    auth: { login: "เข้าสู่ระบบ", register: "สมัครสมาชิก", logout: "ออกจากระบบ", admin: "ผู้ดูแลระบบ" },
    hero: {
      kicker: "สถาปนิกปัญญาประดิษฐ์ · นักพัฒนา Full-Stack",
      alias: "AKA New JA · เกิด 23 มิ.ย. 2009 · กรุงเทพฯ",
      text: "นักพัฒนาและผู้สร้างระบบ AI ที่ขับเคลื่อนด้วยความอยากรู้อยากเห็น เปลี่ยนอัลกอริทึมซับซ้อนให้กลายเป็นประสบการณ์เสมือนจริง โดรนอัตโนมัติ และเว็บแอปพลิเคชันระดับโปรดักชัน",
      cta1: "ชมผลงานทั้งหมด",
      cta2: "อ่านเส้นทางชีวิต",
      ctaWorkflow: "กระบวนการ AI",
      cta3: "ดาวน์โหลดเรซูเม่",
      trophySmall: "การแข่งขัน AI ระดับประเทศ",
      trophyStrong: "ชนะเลิศอันดับ 1",
      trophyBody: "UTCC AI Hackathon 2026 · แชมป์ระดับชาติ",
      techSmall: "ความเชี่ยวชาญหลัก",
      techStrong: "ระบบอัตโนมัติ & LLM Systems",
      techBody: "ROS · YOLO · Next.js · WebGL",
      faceCardRole: "วิศวกร AI & ครีเอเตอร์"
    },
    stats: {
      projects: "โปรเจกต์ที่สร้างสรรค์",
      awards: "รางวัล & เกียรติบัตร",
      accuracy: "ความแม่นยำโมเดล AI"
    },
    tech: {
      marquee: "เทคโนโลยีและโมเดลอัจฉริยะหลัก"
    },
    flagship: {
      kicker: "ผลงานไฮไลท์ระดับประเทศ",
      title: "นวัตกรรมเด่น & รางวัลชนะเลิศ",
      body: "เลื่อนเมาส์ชี้การ์ดในกองผลงานเพื่อดูรายละเอียดพร้อมสปริงฟิสิกส์ 3 มิติ"
    },
    profile: {
      kicker: "ประวัติผู้สร้างสรรค์",
      body: "นักเรียนมัธยมศึกษาปีที่ 6 สายวิทย์-คณิต ที่มุ่งมั่นพัฒนานวัตกรรม ผสานระบบ Multi-Agent AI, การควบคุมโดรนทางไกล, โลก 3 มิติเสมือนจริง และสถาปัตยกรรมเว็บสมัยใหม่ให้เกิดประโยชน์สูงสุด"
    },
    section: {
      story: { kicker: "เส้นทางชีวิต", title: "จากเด็กที่ชอบเล่น สู่คนที่สร้างสรรค์อนาคต", body: "ไทม์ไลน์บันทึกก้าวสำคัญ ความหลงใหล ชัยชนะใน Hackathon ระดับประเทศ และก้าวต่อไป" },
      skills: { kicker: "คลังทักษะ", title: "ก้าวข้ามทุกขีดจำกัดด้วยเทคโนโลยี", body: "ระดับความเชี่ยวชาญที่ประเมินจากประสบการณ์จริง ทั้ง AI, Full-Stack, ระบบเกม และหุ่นยนต์" },
      projects: { kicker: "ผลงานที่คัดสรร", title: "ระบบโปรดักชัน & การทดลองเชิงวิจัย", body: "การ์ดผลงานแบบ Interactive พร้อมลำแสง Border Glow วิ่งตามเมาส์ และระบบถูกใจเรียลไทม์" },
      certificates: { kicker: "เกียรติบัตร & รางวัล", title: "หลักฐานความมุ่งมั่นและการเติบโต", body: "รางวัลจากการแข่งขัน การฝึกอบรมจากองค์กรเทคโนโลยีชั้นนำ และผลงานที่ผ่านการรับรอง" },
      contact: { kicker: "ช่องทางการสื่อสาร", title: "มาร่วมสร้างสรรค์สิ่งใหม่ด้วยกัน" }
    },
    dossier: {
      badge: "⚡ แฟ้มประวัติ 3D Interactive",
      hint: "คลิกที่แฟ้มเพื่อคลี่แผ่นเอกสารโครงการและพิมพ์เขียวระบบ"
    },
    workflow: {
      kicker: "วงจรวิศวกรรมปัญญาประดิษฐ์",
      title: "จากความคิดสู่ระบบจริง: ร่วมสร้างสรรค์ไปกับ AI",
      body: "AI ไม่ได้มาแทนที่นักพัฒนา แต่เป็นเพื่อนร่วมคิดที่ช่วยเร่งความเร็วในการออกแบบสถาปัตยกรรม ตรวจสอบตรรกะ และเพิ่มความแม่นยำในการพัฒนา",
      traceHeader: "ร่องรอยการใช้เหตุผลแบบเรียลไทม์ · ระบบ Multi-Agent อัตโนมัติ",
      step1Title: "การวางโจทย์ & นิยามปัญหา",
      step1Desc: "วิเคราะห์และแปลงปัญหาจริงที่ซับซ้อนให้กลายเป็นโจทย์เชิงอัลกอริทึมและข้อจำกัดทางคณิตศาสตร์",
      step2Title: "การออกแบบ Prompt & บริบท",
      step2Desc: "วางโครงสร้างคำสั่ง Meta-Prompt ตัวอย่าง Few-Shot และ JSON Schema เพื่อควบคุม AI ให้แม่นยำสูงสุด",
      step3Title: "การคิดร่วมกันของ Multi-Agent",
      step3Desc: "ประสานการทำงานระหว่าง AI หลายบทบาท ให้ตรวจสอบ วิพากษ์ และหาจุดบกพร่องของตรรกะร่วมกัน",
      step4Title: "การสังเคราะห์โค้ดหลากภาษา",
      step4Desc: "แปลงตรรกะที่ผ่านการตรวจแล้วให้เป็นโค้ดประสิทธิภาพสูง ทั้ง Python (AI), Lua (Game Physics) และ TypeScript (Web)",
      step5Title: "การทดสอบ & วัดผล Telemetry",
      step5Desc: "รันชุดการทดสอบอัตโนมัติ ทดสอบความหน่วงต่ำกว่า 50ms และจำลองโหลดเสมือนจริง",
      step6Title: "Deploy ขึ้นใช้งานจริง & พัฒนาต่อเนื่อง",
      step6Desc: "นำไปติดตั้งบนอุปกรณ์ Edge (โดรน) และระบบคลาวด์ พร้อมระบบเก็บ Log และติดตามผลแบบเรียลไทม์"
    },
    auth_modal: {
      loginKicker: "เข้าสู่ระบบ", loginTitle: "ยินดีต้อนรับกลับมา", loginCopy: "เข้าสู่ระบบเพื่อกดถูกใจผลงานและเข้าถึงบัญชีสมาชิกของคุณ",
      registerKicker: "สมัครสมาชิก", registerTitle: "สร้างบัญชีผู้เข้าชม", registerCopy: "สมัครบัญชีทั่วไปเพื่อร่วมกดถูกใจและสนับสนุนผลงานของฉัน",
      username: "ชื่อผู้ใช้", email: "อีเมล", password: "รหัสผ่าน", age: "อายุ",
      passwordRule: "ใช้รหัสผ่าน 10 ตัวอักษรขึ้นไป มีตัวพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และสัญลักษณ์",
      submitLogin: "เข้าสู่ระบบ", submitRegister: "สมัครสมาชิก"
    },
    dashboard: {
      kicker: "ระบบหลังบ้าน", title: "ห้องควบคุมพอร์ตโฟลิโอ",
      stats: ["ผู้ใช้งาน", "ใช้งานอยู่", "แอดมิน", "ยอดถูกใจ"],
      users: "รายชื่อบัญชีผู้ใช้", likes: "บันทึกยอดถูกใจ", logs: "บันทึกระบบ (Audit Logs)",
      noUsers: "ยังไม่มีผู้ใช้ในระบบ", noLogs: "ยังไม่มีบันทึกกิจกรรม",
      roleUser: "ผู้ใช้ทั่วไป", roleAdmin: "แอดมิน", active: "ปกติ", disabled: "ถูกระงับ",
      enable: "เปิดใช้งาน", disable: "ระงับ", delete: "ลบ",
      joined: "วันที่สมัคร", age: "อายุ", anonymous: "ไม่ระบุตัวตน", system: "ระบบ", unknownIp: "ไม่ทราบ IP",
      searchPlaceholder: "ค้นหาอีเมล, เป้าหมาย, IP...",
      filterAll: "ทุกกิจกรรม", filterLogin: "เข้าสู่ระบบ", filterRegister: "สมัครสมาชิก", filterLike: "กดถูกใจ",
      loadMore: "โหลดบันทึกเพิ่ม", showingLogs: "กำลังแสดง {count} รายการ"
    },
    toast: {
      liked: "ขอบคุณที่กดถูกใจผลงาน!",
      unliked: "ยกเลิกการถูกใจแล้ว",
      loginRequired: "กรุณาเข้าสู่ระบบก่อนกดถูกใจผลงาน",
      loggedIn: "เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ!",
      registered: "สมัครสมาชิกสำเร็จ พร้อมใช้งานแล้ว!",
      loggedOut: "ออกจากระบบเรียบร้อยแล้ว",
      sessionRestored: "เข้าสู่ระบบอัตโนมัติจากเซสชันเดิม",
      copied: "คัดลอกลงคลิปบอร์ดแล้ว!"
    }
  }
};

/* ============================================================
   STATE MANAGEMENT
   ============================================================ */
let state = {
  lang: localStorage.getItem("preferred_language") || "en",
  likedProjectIds: [],
  logsFilter: { search: "", action: "" },
  logsPage: 1
};

let session = null;

function t() {
  return UI[state.lang] || UI.en;
}

function content() {
  return CONTENT[state.lang] || CONTENT.en;
}

/* ============================================================
   API HELPER
   ============================================================ */
async function api(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  const res = await fetch(path, { credentials: "same-origin", credentials: "include", ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let toastTimeout = null;
function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ============================================================
   🎯 TARGET CURSOR (React Bits HUD Crosshair Engine)
   ============================================================ */
function initTargetCursor() {
  const cursor = document.querySelector("#targetCursor");
  if (!cursor || window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let isHovering = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function setupTargets() {
    const targets = document.querySelectorAll(".cursor-target, a, button, input, select, .folder, .bounce-card");
    targets.forEach((target) => {
      if (target._hasCursorListener) return;
      target._hasCursorListener = true;

      target.addEventListener("mouseenter", () => {
        isHovering = true;
        cursor.classList.add("active");
        const rect = target.getBoundingClientRect();
        cursor.style.width = `${rect.width + 14}px`;
        cursor.style.height = `${rect.height + 14}px`;
      });

      target.addEventListener("mouseleave", () => {
        isHovering = false;
        cursor.classList.remove("active");
        cursor.style.width = "32px";
        cursor.style.height = "32px";
      });
    });
  }

  setupTargets();
  const observer = new MutationObserver(() => setupTargets());
  observer.observe(document.body, { childList: true, subtree: true });

  function tick() {
    const ease = isHovering ? 0.25 : 0.18;
    cursorX += (mouseX - cursorX) * ease;
    cursorY += (mouseY - cursorY) * ease;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ============================================================
   🔤 FUZZY TEXT (React Bits Canvas 2D Text Engine)
   ============================================================ */
function initFuzzyText(canvas, text = "NEW JA") {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const container = canvas.parentElement;
  let width, height;
  let isHovered = false;

  const offscreen = document.createElement("canvas");
  const offCtx = offscreen.getContext("2d");

  function resize() {
    width = container ? container.clientWidth : 500;
    height = container ? container.clientHeight : 130;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;

    ctx.scale(dpr, dpr);
    renderOffscreen(dpr);
  }

  function renderOffscreen(dpr) {
    offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
    offCtx.save();
    offCtx.scale(dpr, dpr);

    const fontSize = Math.min(width * 0.22, 100);
    offCtx.font = `900 ${fontSize}px "Space Grotesk", sans-serif`;
    offCtx.textBaseline = "middle";

    const grad = offCtx.createLinearGradient(0, 0, width * 0.85, 0);
    grad.addColorStop(0, "#38bdf8");
    grad.addColorStop(0.5, "#c084fc");
    grad.addColorStop(1, "#f472b6");

    offCtx.fillStyle = grad;
    offCtx.shadowColor = "rgba(192, 132, 252, 0.6)";
    offCtx.shadowBlur = 18;
    offCtx.fillText(text, 10, height * 0.52);
    offCtx.restore();
  }

  if (container) {
    container.addEventListener("mouseenter", () => { isHovered = true; });
    container.addEventListener("mouseleave", () => { isHovered = false; });
  }

  window.addEventListener("resize", resize);
  setTimeout(resize, 60);

  function render() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    ctx.clearRect(0, 0, width, height);

    const intensity = isHovered ? 0.65 : 0.18;
    const sliceHeight = 3;
    const slices = Math.ceil(height / sliceHeight);

    for (let i = 0; i < slices; i++) {
      const sy = i * sliceHeight * dpr;
      const sh = sliceHeight * dpr;
      const jitter = (Math.random() - 0.5) * intensity * 24;

      ctx.drawImage(
        offscreen,
        0, sy, offscreen.width, sh,
        jitter, i * sliceHeight, width, sliceHeight
      );
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

/* ============================================================
   ♾️ LOGOLOOP (React Bits Infinite Marquee Engine)
   ============================================================ */
function initLogoLoop(container) {
  if (!container) return;

  const TECH_STACK = [
    { name: "Python", icon: "🐍" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Next.js / React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "📘" },
    { name: "WebGL / GLSL", icon: "✨" },
    { name: "Docker", icon: "🐳" },
    { name: "ROS 2 Robotics", icon: "🤖" },
    { name: "LangChain & LLMs", icon: "🧠" },
    { name: "Lua / Roblox", icon: "🕹️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Tailwind CSS", icon: "🎨" }
  ];

  const html = TECH_STACK.map(item => `
    <div class="logo-item cursor-target">
      <span class="logo-badge-icon">${item.icon}</span>
      <span>${item.name}</span>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="logo-loop-track" id="logoTrack1">${html}${html}</div>
  `;

  const track = container.querySelector("#logoTrack1");
  if (!track) return;

  let offset = 0;
  let speed = 0.85;
  let targetSpeed = 0.85;

  container.addEventListener("mouseenter", () => { targetSpeed = 0.2; });
  container.addEventListener("mouseleave", () => { targetSpeed = 0.85; });

  function step() {
    speed += (targetSpeed - speed) * 0.08;
    offset += speed;
    const halfWidth = track.scrollWidth / 2;
    if (offset >= halfWidth) offset -= halfWidth;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ============================================================
   🎠 FLEX CAROUSEL (@react-bits/FlexCarousel-JS-CSS WebGL2 Liquid Lens Engine)
   ============================================================ */
const FLEX_CAROUSEL_PRESETS = {
  liquid: {
    lensWidth: 0.74,
    lensHeight: 1.18,
    tilt: 62,
    roundness: 1,
    bend: 0.34,
    reach: 0.38,
    curl: "twist",
    dispersion: 0.45,
    liquid: 0,
    followCursor: false
  },
  ribbon: {
    lensWidth: 0.8,
    lensHeight: 0.8,
    tilt: 0,
    roundness: 1,
    bend: 0.34,
    reach: 0.34,
    curl: "twist",
    dispersion: 0.4,
    liquid: 0,
    followCursor: false
  },
  vortex: {
    lensWidth: 0.7,
    lensHeight: 0.95,
    tilt: 30,
    roundness: 1,
    bend: 0.46,
    reach: 0.3,
    curl: "twist",
    dispersion: 0.5,
    liquid: 0,
    followCursor: false
  },
  arch: {
    lensWidth: 0.8,
    lensHeight: 0.8,
    tilt: 0,
    roundness: 1,
    bend: 0.3,
    reach: 0.36,
    curl: "rise",
    dispersion: 0.4,
    liquid: 0,
    followCursor: false
  }
};

const FLEX_FIT_ASPECT = { portrait: 0.75, square: 1, landscape: 4 / 3 };
const FLEX_TAPS = 12;
const FLEX_PIXEL_BUDGET = 4.5e6;
const FLEX_INTRO_DURATION = { rise: 2.1, bloom: 1.6, spin: 2.2, deal: 1.5, fade: 0.35 };

const flexWrap = (value, size) => ((((value + size / 2) % size) + size) % size) - size / 2;
const flexClamp01 = (value) => Math.min(Math.max(value, 0), 1);
const flexEaseOut = (value) => 1 - Math.pow(1 - flexClamp01(value), 3);
const flexEaseOutQuint = (value) => 1 - Math.pow(1 - flexClamp01(value), 5);
const flexEaseInOut = (value) => {
  const tVal = flexClamp01(value);
  return tVal < 0.5 ? 4 * tVal * tVal * tVal : 1 - Math.pow(-2 * tVal + 2, 3) / 2;
};

const flexCardVertex = `#version 300 es
in vec3 position;
in vec2 uv;
uniform vec4 uRect;
uniform vec2 uResolution;
out vec2 vUv;
out vec2 vLocal;
void main() {
  vUv = uv;
  vLocal = vec2(position.x, -position.y) * uRect.zw;
  vec2 px = uRect.xy + vLocal;
  gl_Position = vec4(px.x / uResolution.x * 2.0 - 1.0, 1.0 - px.y / uResolution.y * 2.0, 0.0, 1.0);
}
`;

const flexCardFragment = `#version 300 es
precision highp float;
uniform sampler2D tMap;
uniform vec2 uSize;
uniform vec2 uImage;
uniform float uRadius;
uniform float uAlpha;
uniform float uReady;
uniform float uShift;
uniform float uDpr;
uniform vec3 uPlaceholder;
in vec2 vUv;
in vec2 vLocal;
out vec4 fragColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  float sd = roundedBox(vLocal, uSize * 0.5, min(uRadius, min(uSize.x, uSize.y) * 0.5));
  float mask = clamp(0.5 - sd * uDpr, 0.0, 1.0);
  vec2 local = vLocal / uSize + 0.5;
  float cardAspect = uSize.x / uSize.y;
  float imageAspect = uImage.x / max(uImage.y, 1.0);
  vec2 scale = imageAspect > cardAspect ? vec2(cardAspect / imageAspect, 1.0) : vec2(1.0, imageAspect / cardAspect);
  scale /= 1.08;
  vec2 uv = vec2(local.x, 1.0 - local.y);
  uv = (uv - 0.5) * scale + 0.5;
  uv.x += uShift * (1.0 - scale.x) * 0.5;
  vec3 image = texture(tMap, uv).rgb;
  vec3 color = mix(uPlaceholder, image, uReady);
  float alpha = mask * uAlpha;
  fragColor = vec4(color * alpha, alpha);
}
`;

const flexLensVertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const flexLensFragment = `#version 300 es
precision highp float;
uniform sampler2D tScene;
uniform vec2 uResolution;
uniform float uDpr;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uAngle;
uniform float uExponent;
uniform float uInner;
uniform float uOuter;
uniform float uFlow;
uniform float uCurl;
uniform float uDispersion;
uniform float uStrength;
uniform float uSceneAlpha;
out vec4 fragColor;

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  vec2 uv = frag / uResolution;
  vec2 rel = frag - vec2(uCenter.x, uResolution.y - uCenter.y);
  float ca = cos(uAngle);
  float sa = sin(uAngle);
  vec2 local = vec2(ca * rel.x + sa * rel.y, -sa * rel.x + ca * rel.y);
  vec2 k = max(abs(local) / uHalf, vec2(1e-5));
  float nd = pow(pow(k.x, uExponent) + pow(k.y, uExponent), 1.0 / uExponent);
  vec2 grad = pow(k, vec2(uExponent - 1.0)) * sign(local) / uHalf * pow(nd, 1.0 - uExponent);
  float glen = max(length(grad), 1e-6);
  float edge = (nd - 1.0) / glen;
  vec2 outward = grad / glen;
  vec2 normal = vec2(ca * outward.x - sa * outward.y, sa * outward.x + ca * outward.y);
  vec2 along = vec2(-normal.y, normal.x);

  float t = clamp((edge + uInner) / (uInner + uOuter), 0.0, 1.0);
  float ramp = t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  float slope = 16.0 * t * t * (1.0 - t) * (1.0 - t);
  float reachX = rel.x / (uResolution.x * 0.5);
  float side = smoothstep(0.02, 0.3, abs(reachX)) * (uCurl == 0.0 ? sign(reachX) : uCurl);
  float lift = ramp * side * uFlow * uStrength;
  vec2 swirl = along * along.y * side * slope * uFlow * uStrength * 0.35;
  vec2 drift = vec2(0.0, -lift) - swirl;
  vec2 shifted = uv + drift / uResolution;

  vec2 texels = uResolution * uDpr;
  vec2 gx = dFdx(shifted);
  vec2 gy = dFdy(shifted);
  gx *= min(1.0, 3.0 / max(length(gx * texels), 1e-4));
  gy *= min(1.0, 3.0 / max(length(gy * texels), 1e-4));

  vec4 color = textureGrad(tScene, shifted, gx, gy);
  vec2 spread = vec2(0.0, side * slope * uFlow * uStrength) / uResolution * uDispersion;
  float spreadPx = length(spread * texels);
  if (color.a > 0.002 && spreadPx > 0.25) {
    vec3 base = color.rgb / color.a;
    vec3 sumColor = vec3(0.0);
    vec3 sumWeight = vec3(0.0);
    for (int i = 0; i < ${FLEX_TAPS}; i++) {
      float s = (float(i) + 0.5) / float(${FLEX_TAPS});
      vec4 c = textureGrad(tScene, shifted + spread * (s - 0.5), gx, gy);
      vec3 w = max(1.0 - abs(vec3(s) - vec3(0.15, 0.5, 0.85)) * 2.6, 0.0) * c.a;
      sumColor += c.rgb * (w / max(c.a, 0.002));
      sumWeight += w;
    }
    vec3 split = mix(base, sumColor / max(sumWeight, vec3(1e-4)), clamp(sumWeight * 2.0, 0.0, 1.0));
    color.rgb = mix(color.rgb, clamp(split, 0.0, 1.0) * color.a, smoothstep(0.25, 1.5, spreadPx));
  }

  fragColor = color * uSceneAlpha;
}
`;

function renderDigitsReelHTML(value) {
  return `<span class="flex-carousel__digits">${String(value)
    .padStart(2, "0")
    .split("")
    .map(
      (digit) =>
        `<span class="flex-carousel__digit"><span class="flex-carousel__reel" style="transform: translateY(${-Number(digit) * 10}%)">${"0123456789"
          .split("")
          .map((n) => `<span>${n}</span>`)
          .join("")}</span></span>`
    )
    .join("")}</span>`;
}

function initFlexCarousel(hostContainer, options = {}) {
  if (!hostContainer) return;
  if (typeof hostContainer._flexCarouselCleanup === "function") {
    hostContainer._flexCarouselCleanup();
    hostContainer._flexCarouselCleanup = null;
  }

  const presetName = options.preset || "liquid";
  const base = FLEX_CAROUSEL_PRESETS[presetName] || FLEX_CAROUSEL_PRESETS.liquid;
  const pick = (val, key) => (val === undefined || val === null ? base[key] : val);

  const s = {
    intro: options.intro !== undefined ? options.intro : "rise",
    cardHeight: options.cardHeight !== undefined ? options.cardHeight : 0.5,
    gap: options.gap !== undefined ? options.gap : 12,
    radius: options.radius !== undefined ? options.radius : 0,
    fit: options.fit !== undefined ? options.fit : "natural",
    lensWidth: pick(options.lensWidth, "lensWidth"),
    lensHeight: pick(options.lensHeight, "lensHeight"),
    tilt: pick(options.tilt, "tilt"),
    roundness: pick(options.roundness, "roundness"),
    bend: pick(options.bend, "bend"),
    reach: pick(options.reach, "reach"),
    curl: pick(options.curl, "curl"),
    dispersion: pick(options.dispersion, "dispersion"),
    liquid: pick(options.liquid, "liquid"),
    followCursor: pick(options.followCursor, "followCursor"),
    squeeze: options.squeeze !== undefined ? options.squeeze : 0.2,
    focusOnClick: options.focusOnClick !== undefined ? options.focusOnClick : true,
    autoplay: options.autoplay !== undefined ? options.autoplay : false,
    interval: options.interval !== undefined ? options.interval : 4,
    captions: options.captions !== undefined ? options.captions : true,
    captureWheel: options.captureWheel !== undefined ? options.captureWheel : true,
    onChange: options.onChange,
    onSelect: options.onSelect
  };

  const list = Array.isArray(options.items) && options.items.length ? options.items : [];
  if (!list.length) return;

  const halfPct = `${Math.min(Math.max(s.cardHeight, 0.05), 1) * 50}%`;
  hostContainer.innerHTML = `
    <div
      class="flex-carousel"
      style="--flex-carousel-half: ${halfPct};"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      tabindex="0"
    >
      <div class="flex-carousel__hint">⇄ Drag / Scroll • Click to Zoom</div>
      <div class="flex-carousel__caption" aria-hidden="true" style="display: none;">
        <span class="flex-carousel__title"></span>
        <span class="flex-carousel__count">
          <span class="flex-carousel__digits-mount">${renderDigitsReelHTML(1)}</span>
          <span class="flex-carousel__slash">/</span>
          <span class="flex-carousel__total">${String(list.length).padStart(2, "0")}</span>
        </span>
      </div>
      <div class="flex-carousel__live" aria-live="polite" aria-atomic="true"></div>
    </div>
  `;

  const container = hostContainer.querySelector(".flex-carousel");
  const captionEl = container.querySelector(".flex-carousel__caption");
  const titleEl = container.querySelector(".flex-carousel__title");
  const countEl = container.querySelector(".flex-carousel__count");
  const digitsMount = container.querySelector(".flex-carousel__digits-mount");
  const liveEl = container.querySelector(".flex-carousel__live");

  let uiActive = 0;
  let uiRevealed = false;
  let uiFocusOpen = false;

  const syncOverlay = () => {
    const current = list[uiActive] || list[0];
    const label = current ? current.title || current.alt || `Image ${uiActive + 1}` : "";
    if (liveEl) {
      liveEl.textContent = `${label}, ${uiActive + 1} of ${list.length}`;
    }
    if (!captionEl) return;
    if (s.captions && current && uiRevealed) {
      captionEl.style.display = "flex";
      const subHTML = current.subtitle ? `<span class="flex-carousel__subtitle">${current.subtitle}</span>` : "";
      titleEl.innerHTML = `${current.title || current.alt || ""}${subHTML}`;
      const reels = digitsMount.querySelectorAll(".flex-carousel__reel");
      const digits = String(uiActive + 1).padStart(2, "0").split("");
      if (reels.length === digits.length) {
        reels.forEach((reel, idx) => {
          reel.style.transform = `translateY(${-Number(digits[idx]) * 10}%)`;
        });
      } else {
        digitsMount.innerHTML = renderDigitsReelHTML(uiActive + 1);
      }
      if (uiFocusOpen) countEl.setAttribute("data-hidden", "");
      else countEl.removeAttribute("data-hidden");
    } else {
      captionEl.style.display = "none";
    }
  };

  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2", {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false
  });

  if (!gl) {
    uiRevealed = true;
    syncOverlay();
    return;
  }

  gl.clearColor(0, 0, 0, 0);
  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.setAttribute("aria-hidden", "true");
  container.prepend(canvas);

  const compileShader = (type, source) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, source);
    gl.compileShader(sh);
    return sh;
  };
  const createProg = (vsSrc, fsSrc) => {
    const p = gl.createProgram();
    gl.attachShader(p, compileShader(gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(p, compileShader(gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(p);
    return p;
  };

  const cardGlProg = createProg(flexCardVertex, flexCardFragment);
  const lensGlProg = createProg(flexLensVertex, flexLensFragment);

  // Plane geometry (width 1, height 1, centered at 0)
  const planeVao = gl.createVertexArray();
  gl.bindVertexArray(planeVao);
  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-0.5, 0.5, 0, 0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 0]),
    gl.STATIC_DRAW
  );
  const cardPosLoc = gl.getAttribLocation(cardGlProg, "position");
  if (cardPosLoc >= 0) {
    gl.enableVertexAttribArray(cardPosLoc);
    gl.vertexAttribPointer(cardPosLoc, 3, gl.FLOAT, false, 0, 0);
  }
  const uvBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), gl.STATIC_DRAW);
  const cardUvLoc = gl.getAttribLocation(cardGlProg, "uv");
  if (cardUvLoc >= 0) {
    gl.enableVertexAttribArray(cardUvLoc);
    gl.vertexAttribPointer(cardUvLoc, 2, gl.FLOAT, false, 0, 0);
  }
  const idxBuf = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 2, 1, 1, 2, 3]), gl.STATIC_DRAW);

  // Fullscreen Triangle geometry
  const triVao = gl.createVertexArray();
  gl.bindVertexArray(triVao);
  const triBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const lensPosLoc = gl.getAttribLocation(lensGlProg, "position");
  if (lensPosLoc >= 0) {
    gl.enableVertexAttribArray(lensPosLoc);
    gl.vertexAttribPointer(lensPosLoc, 2, gl.FLOAT, false, 0, 0);
  }
  gl.bindVertexArray(null);

  // Offscreen FBO target
  const targetFbo = gl.createFramebuffer();
  const targetTex = gl.createTexture();
  let targetW = 2;
  let targetH = 2;
  const resizeTarget = (w, h) => {
    targetW = Math.max(2, w);
    targetH = Math.max(2, h);
    gl.bindTexture(gl.TEXTURE_2D, targetTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, targetW, targetH, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, targetFbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, targetTex, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  };
  resizeTarget(2, 2);

  // Empty 1x1 fallback texture
  const emptyTex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, emptyTex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([128, 128, 128, 255]));

  const cardLocs = {
    tMap: gl.getUniformLocation(cardGlProg, "tMap"),
    uRect: gl.getUniformLocation(cardGlProg, "uRect"),
    uResolution: gl.getUniformLocation(cardGlProg, "uResolution"),
    uSize: gl.getUniformLocation(cardGlProg, "uSize"),
    uImage: gl.getUniformLocation(cardGlProg, "uImage"),
    uRadius: gl.getUniformLocation(cardGlProg, "uRadius"),
    uAlpha: gl.getUniformLocation(cardGlProg, "uAlpha"),
    uReady: gl.getUniformLocation(cardGlProg, "uReady"),
    uShift: gl.getUniformLocation(cardGlProg, "uShift"),
    uDpr: gl.getUniformLocation(cardGlProg, "uDpr"),
    uPlaceholder: gl.getUniformLocation(cardGlProg, "uPlaceholder")
  };

  const lensLocs = {
    tScene: gl.getUniformLocation(lensGlProg, "tScene"),
    uResolution: gl.getUniformLocation(lensGlProg, "uResolution"),
    uDpr: gl.getUniformLocation(lensGlProg, "uDpr"),
    uCenter: gl.getUniformLocation(lensGlProg, "uCenter"),
    uHalf: gl.getUniformLocation(lensGlProg, "uHalf"),
    uAngle: gl.getUniformLocation(lensGlProg, "uAngle"),
    uExponent: gl.getUniformLocation(lensGlProg, "uExponent"),
    uInner: gl.getUniformLocation(lensGlProg, "uInner"),
    uOuter: gl.getUniformLocation(lensGlProg, "uOuter"),
    uFlow: gl.getUniformLocation(lensGlProg, "uFlow"),
    uCurl: gl.getUniformLocation(lensGlProg, "uCurl"),
    uDispersion: gl.getUniformLocation(lensGlProg, "uDispersion"),
    uStrength: gl.getUniformLocation(lensGlProg, "uStrength"),
    uSceneAlpha: gl.getUniformLocation(lensGlProg, "uSceneAlpha")
  };

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  const anisoExt =
    gl.getExtension("EXT_texture_filter_anisotropic") ||
    gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let slots = [];
  let width = 1;
  let height = 1;
  let pos = 0;
  let vel = 0;
  let goal = 0;
  let mode = "spring";
  let wheelAt = 0;
  let raf = 0;
  let last = performance.now();
  let visible = true;
  let alive = true;
  let dirty = true;
  let activeIndex = -1;
  let interactedAt = -Infinity;
  let autoplayAt = performance.now();
  let hasFocus = false;
  let deform = 0;
  let deformVel = 0;
  let layout = null;
  let resnap = false;
  let hover = "";
  let lift = 1;
  let energy = 0;
  let lastPos = 0;
  const lens = { x: 0, y: 0, vx: 0, vy: 0, ready: false };
  const pointer = {
    x: 0,
    y: 0,
    over: false,
    down: false,
    id: -1,
    startX: 0,
    startY: 0,
    startPos: 0,
    dragging: false,
    touch: false,
    samples: []
  };
  const introState = { kind: "none", t: 0, running: false, done: false, readyAt: 0 };
  const focus = { index: -1, pending: -1, t: 0, v: 0, target: 0 };
  let instances = [];

  const loadSlot = (item, index) => {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([30, 41, 59, 255]));

    const slot = {
      item,
      index,
      tex,
      aspect: 0.8,
      loaded: false,
      failed: false,
      ready: 0,
      color: [0.12, 0.16, 0.24],
      image: [1, 1],
      dispose: () => {}
    };

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = () => {
      if (!alive || !slots.includes(slot)) return;
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      if (anisoExt) {
        const maxAniso = gl.getParameter(anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT) || 1;
        gl.texParameterf(gl.TEXTURE_2D, anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, maxAniso));
      }
      slot.image = [image.naturalWidth || 1, image.naturalHeight || 1];
      slot.aspect = slot.image[0] / slot.image[1];
      try {
        const probe = document.createElement("canvas");
        probe.width = 8;
        probe.height = 8;
        const ctx = probe.getContext("2d", { willReadFrequently: true });
        if (ctx) {
          ctx.drawImage(image, 0, 0, 8, 8);
          const data = ctx.getImageData(0, 0, 8, 8).data;
          const avg = [0, 0, 0];
          for (let i = 0; i < data.length; i += 4) {
            avg[0] += data[i];
            avg[1] += data[i + 1];
            avg[2] += data[i + 2];
          }
          slot.color = avg.map((v) => v / 64 / 255);
        }
      } catch {
        slot.color = [0.2, 0.25, 0.35];
      }
      slot.loaded = true;
      dirty = true;
      start();
    };
    image.onerror = () => {
      if (!alive) return;
      slot.failed = true;
      dirty = true;
      start();
    };
    image.src = item.src;
    slot.dispose = () => {
      image.onload = null;
      image.onerror = null;
      gl.deleteTexture(tex);
    };
    return slot;
  };

  const metrics = () => {
    const cardH = Math.max(24, s.cardHeight * height);
    const fixed = FLEX_FIT_ASPECT[s.fit];
    const widths = slots.map((slot) => (fixed || slot.aspect) * cardH);
    const centers = [];
    let cursor = 0;
    for (let i = 0; i < widths.length; i++) {
      centers.push(cursor + widths[i] / 2);
      cursor += widths[i] + s.gap;
    }
    return { cardH, widths, centers, gap: s.gap, loop: Math.max(cursor, 1) };
  };

  const nearest = (m, at) => {
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < m.centers.length; i++) {
      const dist = Math.abs(flexWrap(m.centers[i] - at, m.loop));
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    }
    return best;
  };

  const snapPoint = (m, at) => {
    const i = nearest(m, at);
    return at + flexWrap(m.centers[i] - at, m.loop);
  };

  const remap = (from, to, at) => {
    const i = nearest(from, at);
    const offset = flexWrap(at - from.centers[i], from.loop);
    const cycles = Math.round((at - offset - from.centers[i]) / from.loop);
    return cycles * to.loop + to.centers[i] + offset * (to.widths[i] / from.widths[i]);
  };

  const step = (m, delta) => {
    let at = snapPoint(m, goal);
    let index = nearest(m, at);
    const n = m.centers.length;
    for (let k = 0; k < Math.abs(delta); k++) {
      const next = (index + (delta > 0 ? 1 : n - 1)) % n;
      const distance =
        delta > 0
          ? m.widths[index] / 2 + m.gap + m.widths[next] / 2
          : -(m.widths[next] / 2 + m.gap + m.widths[index] / 2);
      at += distance;
      index = next;
    }
    goal = at;
    mode = "spring";
    dirty = true;
    start();
  };

  const goTo = (m, index) => {
    const i = ((index % m.centers.length) + m.centers.length) % m.centers.length;
    goal = goal + flexWrap(m.centers[i] - goal, m.loop);
    mode = "spring";
    dirty = true;
    start();
  };

  const openFocus = (index) => {
    focus.index = index;
    focus.pending = -1;
    focus.target = 1;
    uiFocusOpen = true;
    syncOverlay();
    dirty = true;
    start();
  };

  const closeFocus = () => {
    focus.pending = -1;
    if (focus.target === 0) return false;
    focus.target = 0;
    uiFocusOpen = false;
    syncOverlay();
    dirty = true;
    start();
    return true;
  };

  const skipIntro = () => {
    if (introState.running) introState.t = 1;
  };

  const introEffects = () => {
    const tVal = introState.running ? introState.t : introState.done ? 1 : 0;
    const e = { sceneAlpha: 1, strength: 1, card: null };
    if (!introState.done && !introState.running) {
      e.sceneAlpha = 0;
      e.strength = 0;
      return e;
    }
    if (tVal >= 1) return e;
    const kind = introState.kind;
    if (kind === "rise") {
      e.strength = flexEaseInOut((tVal - 0.3) / 0.65);
      e.card = (rel) => {
        const delay = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.34;
        const local = flexClamp01((tVal - delay) / 0.6);
        return {
          alpha: flexClamp01(local * 4),
          x: 0,
          y: (1 - flexEaseOutQuint(local)) * height * 0.62,
          scale: 0.5 + 0.5 * flexEaseInOut((local - 0.18) / 0.82)
        };
      };
    } else if (kind === "bloom") {
      e.strength = flexEaseInOut((tVal - 0.2) / 0.8);
      e.card = (rel) => {
        const delay = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.25;
        const local = flexEaseOut((tVal - delay) / 0.55);
        return { alpha: local, x: 0, y: 0, scale: 0.92 + 0.08 * local };
      };
    } else if (kind === "spin") {
      e.sceneAlpha = flexEaseOut(tVal / 0.25);
      e.strength = flexEaseOut((tVal - 0.55) / 0.45);
    } else if (kind === "deal") {
      e.strength = flexEaseOut((tVal - 0.45) / 0.5);
      e.card = (rel) => {
        const spread = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.3;
        const local = flexEaseOut((tVal - 0.12 - spread) / 0.5);
        return { alpha: flexEaseOut((tVal - spread) / 0.12), x: -rel * (1 - local), y: 0, scale: 1 };
      };
    } else {
      e.sceneAlpha = flexEaseOut(tVal);
      e.strength = flexEaseOut(tVal);
    }
    return e;
  };

  const beginIntro = (m) => {
    const kind = reducedMotion && s.intro !== "none" ? "fade" : s.intro;
    introState.kind = FLEX_INTRO_DURATION[kind] ? kind : "none";
    introState.running = introState.kind !== "none";
    introState.done = !introState.running;
    introState.t = 0;
    if (introState.done) {
      uiRevealed = true;
      syncOverlay();
    }
    if (introState.kind === "spin") {
      const distance = m.loop * 1.6 + width;
      pos = goal + distance;
      vel = -distance * 3;
      mode = "spring";
    }
  };

  const resize = () => {
    width = Math.max(1, container.clientWidth || 800);
    height = Math.max(1, container.clientHeight || 560);
    dpr = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(FLEX_PIXEL_BUDGET / (width * height)));
    canvas.width = Math.max(2, Math.round(width * dpr));
    canvas.height = Math.max(2, Math.round(height * dpr));
    resizeTarget(canvas.width, canvas.height);
    dirty = true;
    start();
  };

  const frame = (now) => {
    raf = 0;
    if (!alive) return;
    const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now;
    if (!slots.length) {
      if (visible) raf = requestAnimationFrame(frame);
      return;
    }

    const m = metrics();
    const n = slots.length;
    let animating = false;

    if (resnap) {
      goal = snapPoint(m, goal);
      pos = goal;
      vel = 0;
      resnap = false;
    } else if (layout && layout.loop !== m.loop) {
      pos = remap(layout, m, pos);
      goal = remap(layout, m, goal);
      pointer.startPos = pos + (pointer.x - pointer.startX);
      animating = true;
    }
    layout = m;

    if (!introState.running && !introState.done) {
      const allSettled = slots.every((slot) => slot.loaded || slot.failed);
      if (allSettled || now - introState.readyAt > 1200) {
        goal = snapPoint(m, goal);
        pos = goal;
        beginIntro(m);
      }
    }
    if (introState.running) {
      introState.t = Math.min(1, introState.t + dt / (FLEX_INTRO_DURATION[introState.kind] || 1));
      if (introState.t >= 1) {
        introState.running = false;
        introState.done = true;
        uiRevealed = true;
        syncOverlay();
      }
      animating = true;
    }

    if (mode === "wheel" && now - wheelAt > 150) {
      goal = snapPoint(m, goal);
      mode = "spring";
    }
    if (!pointer.dragging) {
      const spinning = introState.running && introState.kind === "spin";
      const stiffness = spinning ? 9 : mode === "wheel" ? 80 : 55;
      const damping = 2 * Math.sqrt(stiffness);
      const steps = Math.ceil(dt / (1 / 240));
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        const acc = stiffness * (goal - pos) - damping * vel;
        vel += acc * h;
        pos += vel * h;
      }
      if (Math.abs(goal - pos) < 0.05 && Math.abs(vel) < 0.5) {
        pos = goal;
        vel = 0;
      } else {
        animating = true;
      }
    } else {
      animating = true;
    }

    if (Math.abs(pos) > m.loop * 8) {
      const shift = Math.round(pos / m.loop) * m.loop;
      pos -= shift;
      goal -= shift;
      pointer.startPos -= shift;
    }

    const current = nearest(m, pos);
    if (current !== activeIndex) {
      activeIndex = current;
      uiActive = current;
      syncOverlay();
      s.onChange?.(current, list[current]);
    }

    if (focus.pending >= 0 && mode === "spring" && Math.abs(goal - pos) < 1.5 && Math.abs(vel) < 30) {
      if (current === focus.pending) openFocus(current);
      else focus.pending = -1;
    }

    if (
      s.autoplay &&
      !reducedMotion &&
      introState.done &&
      focus.target === 0 &&
      focus.t < 0.01 &&
      !pointer.over &&
      !pointer.down &&
      !hasFocus &&
      mode === "spring" &&
      Math.abs(goal - pos) < 1 &&
      now - interactedAt > 3000 &&
      now - autoplayAt > s.interval * 1000
    ) {
      autoplayAt = now;
      step(m, 1);
    }
    if (s.autoplay && !reducedMotion) animating = true;

    const travel = Math.abs(pos - lastPos) / dt;
    lastPos = pos;
    const energyTarget = reducedMotion ? 0 : Math.min(travel / 2600, 1);
    energy += (energyTarget - energy) * (1 - Math.exp(-dt / (energyTarget > energy ? 0.07 : 0.35)));
    if (energy > 0.001) animating = true;
    const liquidAmount = reducedMotion ? 0 : s.liquid;
    const push = Math.max(-1, Math.min(1, vel / 2200));
    const deformStiffness = 120;
    const deformDamping = 2 * Math.sqrt(deformStiffness) * 0.32;
    deformVel += (deformStiffness * (push - deform) - deformDamping * deformVel) * dt;
    deform += deformVel * dt;
    if (Math.abs(deform) > 0.0005 || Math.abs(deformVel) > 0.005) animating = true;

    const focusStiffness = 64;
    focus.v += (focusStiffness * (focus.target - focus.t) - 2 * Math.sqrt(focusStiffness) * focus.v) * dt;
    focus.t += focus.v * dt;
    if (Math.abs(focus.target - focus.t) < 0.0005 && Math.abs(focus.v) < 0.001) {
      focus.t = focus.target;
      focus.v = 0;
    } else {
      animating = true;
    }
    const focusAmount = flexClamp01(focus.t);
    const focusEase = flexEaseInOut(focusAmount);
    const focusW = focus.index >= 0 && focus.index < n ? m.widths[focus.index] : m.cardH;
    const focusScale = Math.max(1, Math.min(1.3, (height * 0.84) / m.cardH, (width * 0.92) / focusW));
    const nextLift = 1 + (focusScale - 1) * focusEase;
    if (Math.abs(nextLift - lift) > 0.0005) {
      lift = nextLift;
      container.style.setProperty("--flex-carousel-lift", lift.toFixed(4));
    }

    const effects = introEffects();

    const homeX = width / 2;
    const homeY = height / 2;
    const follow = s.followCursor && pointer.over && !pointer.dragging && !pointer.touch && focus.target === 0;
    const aimX = follow ? pointer.x : homeX;
    const aimY = follow ? pointer.y : homeY;
    if (!lens.ready) {
      lens.x = homeX;
      lens.y = homeY;
      lens.ready = true;
    }
    const lensK = 110;
    const lensC = 2 * Math.sqrt(lensK) * 0.8;
    lens.vx += (lensK * (aimX - lens.x) - lensC * lens.vx) * dt;
    lens.vy += (lensK * (aimY - lens.y) - lensC * lens.vy) * dt;
    lens.x += lens.vx * dt;
    lens.y += lens.vy * dt;
    if (Math.abs(aimX - lens.x) + Math.abs(aimY - lens.y) > 0.2 || Math.abs(lens.vx) + Math.abs(lens.vy) > 0.5)
      animating = true;

    const cardH = m.cardH;
    let halfW = (s.lensWidth * width) / 2;
    let halfH = (s.lensHeight * width) / 2;
    const squash = Math.abs(deform) * liquidAmount;
    halfW *= 1 + squash * 0.16;
    halfH *= 1 - squash * 0.08;
    const lensX = lens.x - deform * 14 * liquidAmount;

    for (let i = 0; i < n; i++) {
      const slot = slots[i];
      if (slot.loaded && slot.ready < 1) {
        slot.ready = Math.min(1, slot.ready + dt / 0.45);
        animating = true;
      }
    }

    const waiting = !introState.done;
    if (dirty || animating || pointer.dragging) {
      dirty = false;
      instances = [];
      const shrink = 1 - flexClamp01(s.squeeze) * energy;
      const draws = [];
      for (let i = 0; i < n; i++) {
        const w = m.widths[i];
        const baseRel = flexWrap(m.centers[i] - pos, m.loop);
        for (let k = -3; k <= 3; k++) {
          const rel = baseRel + k * m.loop;
          if (Math.abs(rel) - w / 2 > width + 40) continue;
          const fx = effects.card ? effects.card(rel) : null;
          let x = homeX + rel + (fx ? fx.x : 0);
          let scale = shrink * (fx ? fx.scale : 1);
          let alpha = fx ? fx.alpha : 1;
          if (focusAmount > 0) {
            if (i === focus.index && Math.abs(rel) < w) {
              scale *= 1 + (focusScale - 1) * focusEase;
            } else {
              const order = Math.min(Math.abs(rel) / width, 1) * 0.25;
              const part = flexEaseInOut(focusAmount * 1.25 - order);
              x += Math.sign(rel) * part * width * 0.7;
              alpha *= 1 - part;
            }
          }
          const cw = w * scale;
          if (alpha <= 0.001 || x + cw / 2 < -40 || x - cw / 2 > width + 40) continue;
          draws.push({ i, rel, x, y: homeY + (fx ? fx.y : 0), cw, ch: cardH * scale, alpha });
        }
      }
      draws.sort((a, b) => Math.abs(b.rel) - Math.abs(a.rel));

      // Pass 1: Render cards into targetFbo
      gl.bindFramebuffer(gl.FRAMEBUFFER, targetFbo);
      gl.viewport(0, 0, targetW, targetH);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.useProgram(cardGlProg);
      gl.bindVertexArray(planeVao);

      gl.uniform2f(cardLocs.uResolution, width, height);
      gl.uniform1f(cardLocs.uDpr, dpr);
      gl.uniform1f(cardLocs.uRadius, s.radius);
      gl.uniform1i(cardLocs.tMap, 0);

      for (const draw of draws) {
        const slot = slots[draw.i];
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, slot.loaded ? slot.tex : emptyTex);
        gl.uniform4f(cardLocs.uRect, draw.x, draw.y, draw.cw + 2, draw.ch + 2);
        gl.uniform2f(cardLocs.uSize, draw.cw, draw.ch);
        gl.uniform2f(cardLocs.uImage, slot.image[0], slot.image[1]);
        gl.uniform1f(cardLocs.uAlpha, draw.alpha);
        gl.uniform1f(cardLocs.uReady, slot.ready);
        gl.uniform1f(cardLocs.uShift, reducedMotion ? 0 : Math.max(-1, Math.min(1, draw.rel / (width * 0.75))));
        gl.uniform3f(cardLocs.uPlaceholder, slot.color[0], slot.color[1], slot.color[2]);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

        instances.push({
          index: draw.i,
          x0: draw.x - draw.cw / 2,
          x1: draw.x + draw.cw / 2,
          y0: draw.y - draw.ch / 2,
          y1: draw.y + draw.ch / 2
        });
      }

      // Pass 2: Generate mipmap on targetTex and render liquid lens distortion to screen
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.disable(gl.BLEND);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, targetTex);
      gl.generateMipmap(gl.TEXTURE_2D);

      gl.useProgram(lensGlProg);
      gl.bindVertexArray(triVao);
      gl.uniform1i(lensLocs.tScene, 0);
      gl.uniform2f(lensLocs.uResolution, width, height);
      gl.uniform1f(lensLocs.uDpr, dpr);
      gl.uniform2f(lensLocs.uCenter, lensX, lens.y);
      const spanW = Math.max(halfW, 1);
      const spanH = Math.max(halfH, 1);
      gl.uniform2f(lensLocs.uHalf, spanW, spanH);
      gl.uniform1f(lensLocs.uAngle, (s.tilt * Math.PI) / 180);
      gl.uniform1f(lensLocs.uExponent, 2 + Math.pow(1 - flexClamp01(s.roundness), 1.5) * 10);
      const inner = Math.max(4, s.reach * (spanW + spanH) * 0.5);
      gl.uniform1f(lensLocs.uInner, inner);
      gl.uniform1f(lensLocs.uOuter, inner * 1.6);
      gl.uniform1f(lensLocs.uFlow, s.bend * (spanW + spanH) * 0.45);
      gl.uniform1f(lensLocs.uCurl, s.curl === "rise" ? 1 : s.curl === "fall" ? -1 : 0);
      gl.uniform1f(lensLocs.uDispersion, s.dispersion * 0.12 * (1 + Math.abs(deform) * liquidAmount * 1.2));
      gl.uniform1f(lensLocs.uStrength, effects.strength * (1 - focusEase));
      gl.uniform1f(lensLocs.uSceneAlpha, effects.sceneAlpha);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null);
    }

    let nextHover = "";
    if (pointer.over && !pointer.dragging && introState.done && s.focusOnClick) {
      const hit = instances.find(
        (inst) => pointer.x >= inst.x0 && pointer.x <= inst.x1 && pointer.y >= inst.y0 && pointer.y <= inst.y1
      );
      if (focus.target > 0) nextHover = "close";
      else if (hit) nextHover = "open";
    }
    if (nextHover !== hover) {
      hover = nextHover;
      if (hover) container.setAttribute("data-hover", hover);
      else container.removeAttribute("data-hover");
    }

    if (visible && (animating || waiting || dirty || pointer.down)) raf = requestAnimationFrame(frame);
  };

  const start = () => {
    if (raf || !visible || !alive) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  const localPoint = (e) => {
    const rect = container.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  };

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button > 0) return;
    skipIntro();
    const [x, y] = localPoint(e);
    pointer.down = true;
    pointer.id = e.pointerId;
    pointer.touch = e.pointerType === "touch";
    pointer.startX = x;
    pointer.startY = y;
    pointer.x = x;
    pointer.y = y;
    pointer.startPos = pos;
    pointer.dragging = false;
    pointer.samples = [{ x, t: performance.now() }];
    interactedAt = performance.now();
    if (Math.abs(vel) > 40) {
      goal = pos;
      vel = 0;
    }
    dirty = true;
    start();
  };

  const onPointerMove = (e) => {
    const [x, y] = localPoint(e);
    pointer.x = x;
    pointer.y = y;
    pointer.over = true;
    if (pointer.down && e.pointerId === pointer.id) {
      const dx = x - pointer.startX;
      const dy = y - pointer.startY;
      const slop = pointer.touch ? 10 : 5;
      if (!pointer.dragging) {
        if (pointer.touch && Math.abs(dy) > slop && Math.abs(dy) > Math.abs(dx)) {
          pointer.down = false;
          return;
        }
        if (Math.abs(dx) > slop) {
          pointer.dragging = true;
          pointer.startX = x;
          pointer.startPos = pos;
          closeFocus();
          try {
            container.setPointerCapture(e.pointerId);
          } catch {
            pointer.dragging = true;
          }
          container.setAttribute("data-dragging", "");
        }
      }
      if (pointer.dragging) {
        pos = pointer.startPos - (x - pointer.startX);
        goal = pos;
        vel = 0;
        const now = performance.now();
        pointer.samples.push({ x, t: now });
        while (pointer.samples.length > 2 && now - pointer.samples[0].t > 100) pointer.samples.shift();
      }
    }
    dirty = true;
    start();
  };

  const onPointerUp = (e) => {
    if (!pointer.down || e.pointerId !== pointer.id) return;
    pointer.down = false;
    container.removeAttribute("data-dragging");
    const m = metrics();
    interactedAt = performance.now();
    if (pointer.dragging) {
      pointer.dragging = false;
      const now = performance.now();
      const first = pointer.samples[0];
      const lastSample = pointer.samples[pointer.samples.length - 1];
      let velocity = 0;
      if (first && lastSample && lastSample.t > first.t && now - lastSample.t < 70) {
        velocity = -((lastSample.x - first.x) / (lastSample.t - first.t)) * 1000;
      }
      vel = velocity;
      const landing = snapPoint(m, pos + velocity * 0.32);
      goal = landing;
      if (Math.abs(velocity) > 400 && Math.abs(landing - pos) < 1) step(m, velocity > 0 ? 1 : -1);
      mode = "spring";
      start();
      return;
    }
    if (closeFocus()) return;
    const [x, y] = localPoint(e);
    const hit = instances.find((inst) => x >= inst.x0 && x <= inst.x1 && y >= inst.y0 && y <= inst.y1);
    if (!hit) return;
    if (hit.index === activeIndex && Math.abs(goal - pos) < 2) {
      s.onSelect?.(hit.index, list[hit.index]);
      if (s.focusOnClick) openFocus(hit.index);
    } else {
      const rel = (hit.x0 + hit.x1) / 2 - width / 2;
      goal = snapPoint(m, pos + rel);
      mode = "spring";
      if (s.focusOnClick) focus.pending = hit.index;
      start();
    }
  };

  const onPointerLeave = () => {
    pointer.over = false;
    dirty = true;
    start();
  };

  const onPointerCancel = () => {
    pointer.down = false;
    pointer.dragging = false;
    container.removeAttribute("data-dragging");
    goal = snapPoint(metrics(), pos);
    mode = "spring";
    start();
  };

  const onWheel = (e) => {
    if (e.ctrlKey) return;
    let dx = e.deltaX;
    let dy = e.deltaY;
    if (e.shiftKey && Math.abs(dx) < Math.abs(dy)) {
      dx = dy;
      dy = 0;
    }
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? height : 1;
    const horizontal = Math.abs(dx) > Math.abs(dy);
    if (!horizontal && !s.captureWheel) return;
    e.preventDefault();
    skipIntro();
    interactedAt = performance.now();
    if (closeFocus()) return;
    const delta = Math.max(-120, Math.min(120, (horizontal ? dx : dy) * unit));
    goal += delta * 1.25;
    mode = "wheel";
    wheelAt = performance.now();
    start();
  };

  const onKeyDown = (e) => {
    const m = metrics();
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      skipIntro();
      closeFocus();
      interactedAt = performance.now();
      step(m, 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      skipIntro();
      closeFocus();
      interactedAt = performance.now();
      step(m, -1);
    } else if (e.key === "Home") {
      e.preventDefault();
      closeFocus();
      goTo(m, 0);
    } else if (e.key === "End") {
      e.preventDefault();
      closeFocus();
      goTo(m, slots.length - 1);
    } else if (e.key === "Escape") {
      if (closeFocus()) e.preventDefault();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (closeFocus() || activeIndex < 0) return;
      s.onSelect?.(activeIndex, list[activeIndex]);
      if (s.focusOnClick) openFocus(activeIndex);
    }
  };

  const onFocus = () => {
    hasFocus = true;
  };
  const onBlur = () => {
    hasFocus = false;
  };
  const onVisibility = () => {
    if (!document.hidden) start();
  };

  container.addEventListener("pointerdown", onPointerDown);
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerup", onPointerUp);
  container.addEventListener("pointerleave", onPointerLeave);
  container.addEventListener("pointercancel", onPointerCancel);
  container.addEventListener("wheel", onWheel, { passive: false });
  container.addEventListener("keydown", onKeyDown);
  container.addEventListener("focus", onFocus);
  container.addEventListener("blur", onBlur);
  document.addEventListener("visibilitychange", onVisibility);

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    start();
  });
  intersectionObserver.observe(container);

  slots = list.map(loadSlot);
  resnap = true;
  introState.readyAt = performance.now();
  resize();
  start();

  hostContainer._flexCarouselCleanup = () => {
    alive = false;
    visible = false;
    cancelAnimationFrame(raf);
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    container.removeEventListener("pointerdown", onPointerDown);
    container.removeEventListener("pointermove", onPointerMove);
    container.removeEventListener("pointerup", onPointerUp);
    container.removeEventListener("pointerleave", onPointerLeave);
    container.removeEventListener("pointercancel", onPointerCancel);
    container.removeEventListener("wheel", onWheel);
    container.removeEventListener("keydown", onKeyDown);
    container.removeEventListener("focus", onFocus);
    container.removeEventListener("blur", onBlur);
    document.removeEventListener("visibilitychange", onVisibility);
    slots.forEach((slot) => slot.dispose());
    slots = [];
    gl.deleteTexture(targetTex);
    gl.deleteTexture(emptyTex);
    gl.deleteFramebuffer(targetFbo);
    gl.deleteProgram(cardGlProg);
    gl.deleteProgram(lensGlProg);
  };
}

/* ============================================================
   🃏 FLAGSHIP FLEX CAROUSEL SHOWCASE
   ============================================================ */
function initBounceCards(container) {
  if (!container) return;

  const items = [
    {
      src: "assets/UTCC.jpg",
      alt: "UTCC AI Hackathon 2026 Grand Winner",
      title: "UTCC AI Hackathon 2026",
      subtitle: "1st Place Grand Champion • Hydrological AI"
    },
    {
      src: "assets/UTCCcer.jpg",
      alt: "Edge AI Drone Flight Suite",
      title: "Edge AI Drone Flight Suite",
      subtitle: "Real-Time YOLO Vision + ROS 2 Telemetry"
    },
    {
      src: "assets/cer-2.jpg",
      alt: "Roblox MMO RPG Framework",
      title: "Roblox MMO RPG Framework",
      subtitle: "Multiplayer Combat VFX & Server Authority"
    },
    {
      src: "assets2/17-1.png",
      alt: "Autonomous Agent Orchestrator",
      title: "Autonomous Agent Orchestrator",
      subtitle: "Multi-Agent LangChain + Cloud Dataverse"
    },
    {
      src: "assets/myface.jpg",
      alt: "New JA Innovation Studio",
      title: "New JA Innovation Studio",
      subtitle: "Full-Stack AI & Creative WebGL Engineering"
    },
    {
      src: "assets2/16-2.png",
      alt: "National Robotics & Coding Showcase",
      title: "Robotics & Embedded Systems",
      subtitle: "Hardware-in-the-Loop Sensor Fusion"
    },
    {
      src: "assets2/17-2.png",
      alt: "Enterprise AI Architecture",
      title: "Cloud AI Pipeline",
      subtitle: "High-Throughput Inference & Security"
    }
  ];

  initFlexCarousel(container, {
    items,
    preset: "liquid",
    intro: "rise",
    cardHeight: 0.5,
    gap: 12,
    squeeze: 0.2,
    focusOnClick: true,
    captions: true,
    fit: "natural",
    radius: 0,
    lensWidth: 0.74,
    lensHeight: 1.18,
    tilt: 62,
    roundness: 1,
    bend: 0.34,
    reach: 0.38,
    curl: "twist",
    dispersion: 0.45,
    liquid: 0,
    followCursor: false,
    autoplay: false,
    interval: 4,
    captureWheel: true
  });
}

/* ============================================================
   🎴 BORDER GLOW (React Bits Cursor Proximity Luminescence)
   ============================================================ */
function initBorderGlow() {
  const cards = document.querySelectorAll(".border-glow");
  cards.forEach((card) => {
    if (card._hasBorderGlow) return;
    card._hasBorderGlow = true;

    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - cx;
      const dy = y - cy;

      let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      if (angle < 0) angle += 360;

      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = Math.sqrt(cx * cx + cy * cy);
      const edgeProximity = Math.min(Math.max(dist / maxDist, 0.2), 1.0);

      card.style.setProperty("--cursor-angle", `${angle}deg`);
      card.style.setProperty("--edge-proximity", edgeProximity.toFixed(2));
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--edge-proximity", "0.2");
    });
  });
}

/* ============================================================
   📈 COUNT UP (React Bits Spring Number Increment)
   ============================================================ */
function initCountUp() {
  const elements = document.querySelectorAll(".count-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      observer.unobserve(el);

      const target = parseInt(el.dataset.target || "0", 10);
      const duration = 1800;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);

        el.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   🕸️ WEB THREADS (React Bits Background Engine)
   High-Performance Neural Network Waveform & Filament Synthesis
   ============================================================ */
function initWebThreads() {
  const canvas = document.querySelector("#webThreadsCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReduced) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouseX = width / 2;
  let mouseY = height / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;

  window.addEventListener("mousemove", (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
  }, { passive: true });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const threadCount = 20;
  const threads = [];
  const colors = [
    "rgba(16, 185, 129, 0.45)",  // Emerald
    "rgba(56, 189, 248, 0.45)",  // Cyan
    "rgba(192, 132, 252, 0.4)",  // Purple
    "rgba(99, 102, 241, 0.4)"    // Indigo
  ];

  for (let i = 0; i < threadCount; i++) {
    threads.push({
      baseY: (height / (threadCount + 1)) * (i + 1),
      amplitude: 16 + Math.random() * 32,
      frequency: 0.0016 + Math.random() * 0.002,
      speed: 0.001 + Math.random() * 0.0015,
      phase: Math.random() * Math.PI * 2,
      color: colors[i % colors.length],
      lineWidth: 1 + (i % 3) * 0.5,
      nodes: [
        { progress: Math.random(), speed: 0.0012 + Math.random() * 0.0018 },
        { progress: Math.random(), speed: 0.0012 + Math.random() * 0.0018 }
      ]
    });
  }

  let time = 0;
  let isRunning = true;

  document.addEventListener("visibilitychange", () => {
    isRunning = !document.hidden;
    if (isRunning) requestAnimationFrame(draw);
  });

  function draw() {
    if (!isRunning) return;
    time += 1;

    // Smooth mouse interpolation
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    ctx.clearRect(0, 0, width, height);

    threads.forEach((t) => {
      ctx.beginPath();
      ctx.lineWidth = t.lineWidth;
      ctx.strokeStyle = t.color;

      const step = 20;
      let started = false;

      for (let x = 0; x <= width + step; x += step) {
        // Multi-frequency sinusoidal wave
        const wave1 = Math.sin(x * t.frequency + time * t.speed + t.phase) * t.amplitude;
        const wave2 = Math.cos(x * t.frequency * 1.5 - time * t.speed * 0.8) * (t.amplitude * 0.4);

        // Mouse pinch / magnetic displacement
        const dx = x - mouseX;
        const distSq = dx * dx;
        const sigmaSq = 160000; // ~400px radius
        const influence = Math.exp(-distSq / sigmaSq);
        const mouseLift = (mouseY - t.baseY) * influence * 0.35;

        const y = t.baseY + wave1 + wave2 + mouseLift;

        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Render glowing nodes traversing along thread
      t.nodes.forEach((node) => {
        node.progress = (node.progress + node.speed) % 1;
        const nx = node.progress * width;
        const nWave = Math.sin(nx * t.frequency + time * t.speed + t.phase) * t.amplitude;
        const ndx = nx - mouseX;
        const nInfluence = Math.exp(-(ndx * ndx) / 160000);
        const ny = t.baseY + nWave + (mouseY - t.baseY) * nInfluence * 0.35;

        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = t.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    });

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

/* ============================================================
   💬 PROMPT BAR & THOUGHT LINE (React Bits Micro Engines)
   Interactive AI Prompt Interface with Verified Knowledge Responses
   ============================================================ */
function initPromptBar() {
  const container = document.querySelector("#heroPromptBar");
  if (!container) return;

  const input = container.querySelector("#promptInput");
  const sendBtn = container.querySelector("#promptSendBtn");
  const modelSelector = container.querySelector("#promptModelSelector");
  const modelName = container.querySelector("#promptModelName");
  const tokenCount = container.querySelector("#promptTokenCount");
  const responseCard = container.querySelector("#promptResponseCard");
  const pills = container.querySelectorAll(".prompt-pill-btn");

  const models = [
    "GPT-4o Omniscient",
    "Claude 3.5 Sonnet",
    "Gemini 1.5 Pro",
    "DeepSeek V3"
  ];
  let currentModelIndex = 0;

  if (modelSelector && modelName) {
    modelSelector.addEventListener("click", () => {
      currentModelIndex = (currentModelIndex + 1) % models.length;
      modelName.textContent = models[currentModelIndex];
      showToast(`Switched active AI reasoning engine to ${models[currentModelIndex]}`);
    });
  }

  if (input && tokenCount) {
    input.addEventListener("input", () => {
      const len = input.value.trim().length;
      tokenCount.textContent = Math.max(38, Math.round(38 + len * 1.3));
    });
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const promptText = pill.getAttribute("data-prompt");
      if (promptText && input) {
        input.value = promptText;
        handlePromptSubmit(promptText);
      }
    });
  });

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      if (input && input.value.trim()) {
        handlePromptSubmit(input.value.trim());
      }
    });
  }

  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && input.value.trim()) {
        e.preventDefault();
        handlePromptSubmit(input.value.trim());
      }
    });
  }

  function handlePromptSubmit(promptText) {
    if (!responseCard) return;
    const model = models[currentModelIndex];

    // Charging & Thinking Animation
    if (sendBtn) sendBtn.classList.add("is-thinking");
    responseCard.hidden = false;
    responseCard.innerHTML = `
      <div class="thought-line" id="promptThoughtLine">
        <div class="thought-line-header cursor-target">
          <div class="thought-line-left">
            <span class="thought-sparkle">✦</span>
            <strong>Reasoning with ${model}</strong>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="thought-timer-badge" id="thoughtTimer">Thinking 0.0s</span>
            <svg class="thought-toggle-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        <div class="thought-steps-trace">
          <div class="thought-step-item"><span class="step-num">[1/4]</span> Parsing prompt telemetry & context boundaries</div>
          <div class="thought-step-item"><span class="step-num">[2/4]</span> Querying knowledge graph & project portfolio index</div>
          <div class="thought-step-item"><span class="step-num">[3/4]</span> Extracting verified metrics, tech stacks & citations</div>
          <div class="thought-step-item"><span class="step-num">[4/4]</span> Formulating synthesis with clickable navigation triggers</div>
        </div>
      </div>
      <p style="color:var(--muted);font-style:italic;">Synthesizing response...</p>
    `;

    const thoughtLineEl = responseCard.querySelector("#promptThoughtLine");
    const headerEl = responseCard.querySelector(".thought-line-header");
    if (thoughtLineEl && headerEl) {
      headerEl.addEventListener("click", () => {
        thoughtLineEl.classList.toggle("is-open");
      });
    }

    let elapsed = 0;
    const timerInterval = setInterval(() => {
      elapsed += 0.1;
      const timerBadge = responseCard.querySelector("#thoughtTimer");
      if (timerBadge) timerBadge.textContent = `Thinking ${elapsed.toFixed(1)}s`;
    }, 100);

    setTimeout(() => {
      clearInterval(timerInterval);
      if (sendBtn) sendBtn.classList.remove("is-thinking");

      // Generate knowledge response
      const answer = generateAiResponse(promptText);

      responseCard.innerHTML = `
        <div class="thought-line" id="promptThoughtLineDone">
          <div class="thought-line-header cursor-target" title="Click to inspect thought trace">
            <div class="thought-line-left">
              <span class="thought-sparkle">✦</span>
              <strong>Thought for ${elapsed.toFixed(1)}s (${model})</strong>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <span class="thought-timer-badge">4 steps verified</span>
              <svg class="thought-toggle-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          <div class="thought-steps-trace">
            <div class="thought-step-item"><span class="step-num">[1/4]</span> Verified prompt against New JA engineering corpus</div>
            <div class="thought-step-item"><span class="step-num">[2/4]</span> Matched UTCC AI Hackathon, Drone Vision & Full-Stack nodes</div>
            <div class="thought-step-item"><span class="step-num">[3/4]</span> Retrieved telemetry & project artifacts</div>
            <div class="thought-step-item"><span class="step-num">[4/4]</span> Generated responsive interactive card</div>
          </div>
        </div>
        <h4>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          ${answer.title}
        </h4>
        <p>${answer.text}</p>
        <div class="prompt-response-actions">
          ${answer.actions.map(a => `<a class="solid-btn compact cursor-target" href="${a.href}">${a.label}</a>`).join("")}
        </div>
      `;

      const doneThoughtLine = responseCard.querySelector("#promptThoughtLineDone");
      const doneHeader = responseCard.querySelector(".thought-line-header");
      if (doneThoughtLine && doneHeader) {
        doneHeader.addEventListener("click", () => {
          doneThoughtLine.classList.toggle("is-open");
        });
      }
    }, 1100);
  }

  function generateAiResponse(query) {
    const q = query.toLowerCase();
    const isThai = state.lang === "th";

    if (q.includes("hackathon") || q.includes("utcc") || q.includes("water") || q.includes("flood") || q.includes("แชมป์") || q.includes("น้ำท่วม")) {
      return {
        title: isThai ? "ผลงานชนะเลิศอันดับ 1 ประเทศไทย — UTCC AI Hackathon 2026" : "National AI Champion — UTCC AI Hackathon 2026",
        text: isThai
          ? "ทีม MANITA โดย New JA คว้ารางวัลชนะเลิศอันดับ 1 ของประเทศ (ทุนการศึกษา 20,000 บาท) จากการออกแบบระบบ AI พยากรณ์น้ำท่วมและบริหารจัดการน้ำอัจฉริยะแบบเรียลไทม์ ผสานโมเดลภูมิประเทศและเครือข่ายเซนเซอร์ IoT"
          : "Team MANITA led by New JA won 1st Place Grand Champion (20,000 THB) at the UTCC AI Hackathon 2026. The solution integrates IoT telemetry, hydrological rainfall modeling, and real-time early evacuation alert dispatch.",
        actions: [
          { label: isThai ? "ดูผลงานเด่น" : "View Flagship Spotlight", href: "#flagship" },
          { label: isThai ? "ดูเกียรติบัตร" : "Inspect Certificate", href: "#certificates" }
        ]
      };
    }

    if (q.includes("drone") || q.includes("vision") || q.includes("yolo") || q.includes("ros") || q.includes("โดรน") || q.includes("หุ่นยนต์")) {
      return {
        title: isThai ? "ระบบควบคุมโดรนอัจฉริยะ & Edge Computer Vision (ROS 2 + YOLO)" : "Autonomous Drone Vision & Telemetry Platform",
        text: isThai
          ? "แพลตฟอร์มการควบคุมโดรนระยะไกลและประมวลผล Computer Vision แบบเรียลไทม์บน Edge Device (YOLO) พร้อมระบบนำทาง ROS 2 และสตรีมมิง Telemetry ความหน่วงต่ำผ่าน WebSockets"
          : "A high-performance autonomous drone teleoperation and edge vision platform combining YOLO object detection with ROS 2 flight controllers for real-time spatial navigation and sub-50ms telemetry streaming.",
        actions: [
          { label: isThai ? "ดูโปรเจกต์โดรน" : "Inspect Drone Project", href: "#projects" },
          { label: isThai ? "ทักษะ Robotics" : "View Skills Stack", href: "#skills" }
        ]
      };
    }

    if (q.includes("workflow") || q.includes("กระบวนการ") || q.includes("how") || q.includes("work")) {
      return {
        title: isThai ? "กระบวนการพัฒนาด้วย AI — จากแนวคิดสู่ระบบจริง" : "AI Engineering Workflow — Thought to Production",
        text: isThai
          ? "New JA ใช้กระบวนการ 6 ขั้นตอน: ตั้งโจทย์อย่างมีโครงสร้าง (Prompt Architecture) -> วางระบบ Multi-Agent -> สร้างโมเดล Edge AI/YOLO -> สังเคราะห์และดีบักโค้ด -> ทดสอบความแม่นยำ -> Deploy ระบบจริง"
          : "A structured 6-stage lifecycle: Problem Framing & Prompting -> Multi-Agent Reasoning -> Edge AI / Neural Models -> Polyglot Code Synthesis -> Telemetry Benchmarking -> Production Deployment.",
        actions: [
          { label: isThai ? "สำรวจ AI Workflow" : "Explore AI Workflow", href: "#ai-workflow" },
          { label: isThai ? "ดูทักษะ AI" : "Examine AI Skills", href: "#skills" }
        ]
      };
    }

    if (q.includes("resume") || q.includes("contact") || q.includes("จ้าง") || q.includes("เรซูเม่") || q.includes("ติดต่อ")) {
      return {
        title: isThai ? "ข้อมูลติดต่อ & ดาวน์โหลดเรซูเม่" : "Contact & Official Resume",
        text: isThai
          ? "คุณสามารถดาวน์โหลดเอกสารประวัติการทำงาน (PDF) หรือติดต่อ New JA ได้โดยตรงผ่าน Gmail, Line, Facebook หรือ GitHub"
          : "You can download New JA's official resume (PDF) or transmit a message directly via Gmail, Line, or GitHub.",
        actions: [
          { label: isThai ? "ดาวน์โหลด Resume (PDF)" : "Download Resume (PDF)", href: "assets/resume.pdf" },
          { label: isThai ? "ติดต่อ New JA" : "Transmission Channel", href: "#contact" }
        ]
      };
    }

    // Default / All AI projects
    return {
      title: isThai ? "ระบบปัญญาประดิษฐ์และโปรเจกต์ของ New JA" : "New JA's Intelligence Systems & Works",
      text: isThai
        ? "โปรเจกต์ครอบคลุมระบบ AI พยากรณ์น้ำท่วมชนะเลิศระดับประเทศ, ระบบควบคุมโดรนอัตโนมัติด้วย ROS 2 & YOLO, เอนจินเกม Roblox MMO RPG และสถาปัตยกรรมเว็บ Full-Stack พร้อมระบบ Admin Control Room"
        : "Projects span the National Champion AI Flood Prediction System, Autonomous Drone Edge Vision, large-scale Roblox MMO RPG networking, and full-stack cyber architectures with secure admin telemetry.",
      actions: [
        { label: isThai ? "ดูผลงานทั้งหมด" : "Explore All Works", href: "#projects" },
        { label: isThai ? "สำรวจ AI Workflow" : "Explore AI Workflow", href: "#ai-workflow" }
      ]
    };
  }
}

/* ============================================================
   🔤 REACT BITS TEXT ANIMATION SYSTEM
   (SplitText, DecryptedText, ScrollReveal, ShinyText)
   ============================================================ */
function initTextAnimations() {
  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReduced) return;

  // Level 1: Hero SplitText
  const headline = document.querySelector("#heroHeadline");
  if (headline) {
    const lines = headline.querySelectorAll(".split-line");
    lines.forEach((line) => {
      const text = line.textContent;
      line.innerHTML = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          return `<span class="split-char" style="transition-delay:${i * 28}ms">${char}</span>`;
        })
        .join("");
    });

    requestAnimationFrame(() => {
      setTimeout(() => {
        headline.querySelectorAll(".split-char").forEach((c) => c.classList.add("is-revealed"));
      }, 150);
    });
  }

  // Level 1: DecryptedText (AI status kicker)
  const statusEl = document.querySelector("#aiStatusText");
  if (statusEl) {
    const originalText = statusEl.textContent;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@%&*";
    let iteration = 0;
    const interval = setInterval(() => {
      statusEl.textContent = originalText
        .split("")
        .map((char, index) => {
          if (char === " " || char === "·") return char;
          if (index < iteration) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1;
    }, 28);
  }

  // Level 2: Section Headings Scroll Reveal & True Focus
  const sectionHeadings = document.querySelectorAll(".section-head h2, .section-head .kicker");
  const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("text-scroll-reveal", "is-focused");
        headingObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sectionHeadings.forEach((h) => {
    h.classList.add("text-scroll-reveal");
    headingObserver.observe(h);
  });
}

/* ============================================================
   🔦 SPOTLIGHT CARD (React Bits Component Engine)
   Radial Luminescence & Proximity Illumination Tracking
   ============================================================ */
function initSpotlightCards() {
  const cards = document.querySelectorAll(".spotlight-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* ============================================================
   ⭐ PEEK RATING (React Bits Micro Engine)
   Wave Lift Dynamics, Floating Tooltip & Commit Pop Animation
   ============================================================ */
function initPeekRating() {
  const containers = document.querySelectorAll(".peek-rating-container");

  const ratingLabels = {
    en: [
      "1.0 · Functional Prototype",
      "2.0 · Solid Architecture",
      "3.0 · High Performance",
      "4.0 · Production Grade",
      "5.0 · National Champion / Masterpiece"
    ],
    th: [
      "1.0 · ต้นแบบใช้งานได้",
      "2.0 · สถาปัตยกรรมมั่นคง",
      "3.0 · ประสิทธิภาพสูง",
      "4.0 · ระดับโปรดักชัน",
      "5.0 · แชมป์ระดับประเทศ / ยอดเยี่ยม"
    ]
  };

  containers.forEach((container) => {
    if (container._hasPeekInit) return;
    container._hasPeekInit = true;

    const projectId = container.dataset.project;
    const starsRow = container.querySelector(".peek-stars-row");
    const stars = container.querySelectorAll(".peek-star");
    const tooltip = container.querySelector(".peek-rating-tooltip");
    const scoreLabel = container.querySelector(".peek-rating-score");

    let currentScore = parseFloat(container.dataset.score || "5.0");

    function updateFilledStars(score) {
      stars.forEach((star, idx) => {
        star.classList.toggle("is-filled", idx < Math.round(score));
      });
      if (scoreLabel) scoreLabel.textContent = score.toFixed(1);
    }

    updateFilledStars(currentScore);

    if (!starsRow) return;

    starsRow.addEventListener("mousemove", (e) => {
      const rect = starsRow.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const rowWidth = rect.width;
      const hoveredIndex = Math.min(4, Math.max(0, Math.floor((mouseX / rowWidth) * 5)));
      const isThai = state.lang === "th";
      const label = (isThai ? ratingLabels.th : ratingLabels.en)[hoveredIndex];

      // Wave lift computation for each star
      stars.forEach((star, i) => {
        const starCenter = (i + 0.5) * (rowWidth / 5);
        const dist = Math.abs(mouseX - starCenter);
        const maxDist = rowWidth * 0.45;
        const lift = Math.max(0, 1 - dist / maxDist);
        star.style.setProperty("--lift", lift.toFixed(2));
      });

      if (tooltip) {
        tooltip.textContent = label;
        tooltip.style.left = `${mouseX}px`;
        tooltip.style.opacity = "1";
      }
    });

    starsRow.addEventListener("mouseleave", () => {
      stars.forEach((star) => star.style.setProperty("--lift", "0"));
      if (tooltip) tooltip.style.opacity = "0";
      updateFilledStars(currentScore);
    });

    stars.forEach((star, index) => {
      star.addEventListener("click", (e) => {
        e.stopPropagation();
        currentScore = index + 1;
        updateFilledStars(currentScore);
        container.dataset.score = currentScore.toString();

        // Pop particle animation
        star.style.transform = "scale(1.55)";
        setTimeout(() => {
          star.style.transform = "";
        }, 220);

        const isThai = state.lang === "th";
        showToast(isThai ? `บันทึกคะแนน ${currentScore}.0 ดาวแล้ว!` : `Rated ${currentScore}.0 stars!`);

        // If authenticated and not already liked, automatically trigger like for the project
        if (projectId && !state.likedProjectIds.includes(projectId) && session) {
          handleLike(projectId);
        }
      });
    });
  });
}

/* ============================================================
   ✦ LIFECYCLE THOUGHT LINE (React Bits Micro Engine)
   Expandable AI Reasoning Trace for Workflow Pipeline
   ============================================================ */
function initLifecycleThoughtLine() {
  const line = document.querySelector("#lifecycleThoughtLine");
  if (!line) return;
  const header = line.querySelector(".thought-line-header");
  if (header) {
    header.addEventListener("click", () => {
      line.classList.toggle("is-open");
    });
  }
}

/* ============================================================
   🌌 DYNAMIC MULTI-STATE COSMIC BACKGROUND ENGINE
   Featuring 6 Distinct Procedural Themes with Dual-Buffer Smooth Crossfade:
   1. "aurora"        — Cosmic Aurora Ribbon Waves & Stardust (Hero)
   2. "warp"          — 3D Hyperspeed Star Velocity Streaks (Flagship)
   3. "constellation" — Interactive Starlight Nodes & Filament Threads (Story & Profile)
   4. "cybergrid"     — 3D Undulating Perspective Wireframe Terrain (Skills)
   5. "quantum"       — Quantum Particle Field & Prismatic Light Rays (Projects)
   6. "supernova"     — Celestial Horizon Glow & Breathing Cosmic Void (Certs & Contact)
   ============================================================ */

const CosmicThemes = {
  createAuroraState(w, h) {
    const motes = [];
    for (let i = 0; i < 45; i++) {
      motes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.8,
        speed: Math.random() * 0.6 + 0.2,
        color: ['#38bdf8', '#c084fc', '#f472b6'][Math.floor(Math.random() * 3)]
      });
    }
    return { motes };
  },

  renderAurora(ctx, state, w, h, t, mouse) {
    ctx.clearRect(0, 0, w, h);
    const ribbons = [
      { y: h * 0.35, amp: 45, freq: 0.003, speed: 0.8, colors: ['rgba(56,189,248,0.32)', 'rgba(192,132,252,0.22)', 'rgba(244,114,182,0.15)'] },
      { y: h * 0.52, amp: 60, freq: 0.002, speed: 1.1, colors: ['rgba(192,132,252,0.30)', 'rgba(244,114,182,0.22)', 'rgba(56,189,248,0.14)'] },
      { y: h * 0.68, amp: 50, freq: 0.0025, speed: 0.9, colors: ['rgba(244,114,182,0.28)', 'rgba(56,189,248,0.20)', 'rgba(192,132,252,0.15)'] }
    ];

    ribbons.forEach((r, idx) => {
      ctx.save();
      const grad = ctx.createLinearGradient(0, r.y - 120, w, r.y + 120);
      grad.addColorStop(0, r.colors[0]);
      grad.addColorStop(0.5, r.colors[1]);
      grad.addColorStop(1, r.colors[2]);
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 16) {
        const my = (mouse.y - h * 0.5) * 0.06;
        const wave = Math.sin(x * r.freq + t * r.speed + idx) * r.amp
                   + Math.cos(x * (r.freq * 1.5) - t * (r.speed * 0.6)) * (r.amp * 0.5) + my;
        ctx.lineTo(x, r.y + wave);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });

    // Gentle stardust
    if (state && state.motes) {
      state.motes.forEach(m => {
        m.y -= m.speed;
        if (m.y < 0) { m.y = h + 10; m.x = Math.random() * w; }
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = m.color;
        ctx.fill();
      });
    }
  },

  createWarpState(w, h) {
    const stars = [];
    const count = 420;
    for (let i = 0; i < count; i++) {
      stars.push({
        x: (Math.random() - 0.5) * w * 2.2,
        y: (Math.random() - 0.5) * h * 2.2,
        z: Math.random() * 1400 + 1,
        pz: 1400,
        color: ['#38bdf8', '#c084fc', '#f472b6', '#ffffff'][Math.floor(Math.random() * 4)]
      });
    }
    return { stars };
  },

  renderWarp(ctx, state, w, h, t, mouse) {
    ctx.clearRect(0, 0, w, h);
    const cx = w * 0.5 + (mouse.x - w * 0.5) * 0.15;
    const cy = h * 0.5 + (mouse.y - h * 0.5) * 0.15;
    const speed = 22;

    if (!state || !state.stars) return;

    state.stars.forEach(s => {
      s.pz = s.z;
      s.z -= speed;
      if (s.z <= 0) {
        s.z = 1400;
        s.pz = 1400;
        s.x = (Math.random() - 0.5) * w * 2.2;
        s.y = (Math.random() - 0.5) * h * 2.2;
      }

      const k = 420 / s.z;
      const sx = cx + s.x * k;
      const sy = cy + s.y * k;

      const pk = 420 / s.pz;
      const px = cx + s.x * pk;
      const py = cy + s.y * pk;

      if (sx >= -50 && sx <= w + 50 && sy >= -50 && sy <= h + 50) {
        const alpha = Math.min(Math.max((1 - s.z / 1400) * 1.1, 0.1), 1.0);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = Math.min((1 - s.z / 1400) * 2.6 + 0.6, 3.2);
        ctx.stroke();
      }
    });
    ctx.globalAlpha = 1.0;
  },

  createConstellationState(w, h) {
    const nodes = [];
    const count = 90;
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        r: Math.random() * 2 + 1.2,
        color: ['#38bdf8', '#c084fc', '#f472b6'][Math.floor(Math.random() * 3)]
      });
    }
    return { nodes };
  },

  renderConstellation(ctx, state, w, h, t, mouse) {
    ctx.clearRect(0, 0, w, h);
    if (!state || !state.nodes) return;
    const nodes = state.nodes;
    const maxDist = 115;

    // Update nodes
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      // Mouse repulsion
      const mdx = n.x - mouse.x;
      const mdy = n.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140 && mdist > 0) {
        const force = (140 - mdist) / 140 * 1.5;
        n.x += (mdx / mdist) * force;
        n.y += (mdy / mdist) * force;
      }
    }

    // Draw filaments
    for (let i = 0; i < nodes.length; i++) {
      const n1 = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.42;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = 'rgba(192, 132, 252, ' + alpha + ')';
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.fill();
    }
  },

  createCybergridState(w, h) {
    return {};
  },

  renderCybergrid(ctx, state, w, h, t, mouse) {
    ctx.clearRect(0, 0, w, h);
    const horizonY = h * 0.38;
    const cx = w * 0.5 + (mouse.x - w * 0.5) * 0.08;

    // Horizon glow
    const grad = ctx.createLinearGradient(0, horizonY, w, horizonY);
    grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
    grad.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
    grad.addColorStop(0.5, 'rgba(192, 132, 252, 0.95)');
    grad.addColorStop(0.7, 'rgba(244, 114, 182, 0.8)');
    grad.addColorStop(1, 'rgba(244, 114, 182, 0)');
    ctx.beginPath();
    ctx.moveTo(0, horizonY);
    ctx.lineTo(w, horizonY);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Perspective vertical radiating lines
    const rays = 28;
    for (let i = 0; i <= rays; i++) {
      const bottomX = (i / rays) * (w * 2.4) - w * 0.7;
      ctx.beginPath();
      ctx.moveTo(cx, horizonY);
      ctx.lineTo(bottomX, h);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.lineWidth = 1.0;
      ctx.stroke();
    }

    // Undulating horizontal lines
    const rows = 18;
    for (let r = 1; r <= rows; r++) {
      const p = Math.pow(r / rows, 2.2);
      const rowY = horizonY + p * (h - horizonY);
      const waveAmp = (1 - p) * 12 + 2;

      ctx.beginPath();
      for (let x = 0; x <= w; x += 24) {
        const offset = Math.sin(x * 0.015 + t * 2.2 + r) * waveAmp;
        if (x === 0) ctx.moveTo(x, rowY + offset);
        else ctx.lineTo(x, rowY + offset);
      }
      ctx.strokeStyle = 'rgba(192, 132, 252, ' + (0.12 + p * 0.45) + ')';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  },

  createQuantumState(w, h) {
    const particles = [];
    for (let i = 0; i < 110; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        pulse: Math.random() * Math.PI * 2,
        color: ['#38bdf8', '#c084fc', '#f472b6'][Math.floor(Math.random() * 3)]
      });
    }
    return { particles };
  },

  renderQuantum(ctx, state, w, h, t, mouse) {
    ctx.clearRect(0, 0, w, h);

    // Prismatic sweeping light rays
    const rayCount = 4;
    for (let i = 0; i < rayCount; i++) {
      ctx.save();
      const originX = w * (0.2 + i * 0.22) + Math.sin(t * 0.5 + i) * 60 + (mouse.x - w * 0.5) * 0.05;
      const rayGrad = ctx.createLinearGradient(originX, 0, originX + 240, h);
      rayGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      rayGrad.addColorStop(0.4, i % 2 === 0 ? 'rgba(192, 132, 252, 0.12)' : 'rgba(56, 189, 248, 0.12)');
      rayGrad.addColorStop(0.6, 'rgba(244, 114, 182, 0.08)');
      rayGrad.addColorStop(1, 'rgba(3, 3, 8, 0)');

      ctx.fillStyle = rayGrad;
      ctx.beginPath();
      ctx.moveTo(originX - 50, 0);
      ctx.lineTo(originX + 90, 0);
      ctx.lineTo(originX + 380, h);
      ctx.lineTo(originX + 180, h);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Quantum particles
    if (state && state.particles) {
      state.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        p.pulse += 0.04;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = a;
        ctx.fill();
      });
    }
    ctx.globalAlpha = 1.0;
  },

  createSupernovaState(w, h) {
    const motes = [];
    for (let i = 0; i < 70; i++) {
      motes.push({
        angle: Math.random() * Math.PI,
        radius: Math.random() * (Math.min(w, h) * 0.65) + 80,
        speed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2 + 1,
        color: ['#38bdf8', '#c084fc', '#f472b6', '#ffffff'][Math.floor(Math.random() * 4)]
      });
    }
    return { motes };
  },

  renderSupernova(ctx, state, w, h, t, mouse) {
    ctx.clearRect(0, 0, w, h);
    const cx = w * 0.5;
    const cy = h * 0.86;
    const coreR = Math.min(w, h) * 0.45;

    const pulse = 1.0 + 0.06 * Math.sin(t * 1.4);

    const corona = ctx.createRadialGradient(cx, cy, 10, cx, cy, coreR * pulse);
    corona.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
    corona.addColorStop(0.2, 'rgba(56, 189, 248, 0.35)');
    corona.addColorStop(0.5, 'rgba(192, 132, 252, 0.24)');
    corona.addColorStop(0.8, 'rgba(244, 114, 182, 0.12)');
    corona.addColorStop(1, 'rgba(3, 3, 8, 0)');

    ctx.fillStyle = corona;
    ctx.beginPath();
    ctx.arc(cx, cy, coreR * pulse, 0, Math.PI * 2);
    ctx.fill();

    if (state && state.motes) {
      state.motes.forEach(m => {
        m.angle += m.speed;
        const px = cx + Math.cos(m.angle) * m.radius * 1.5;
        const py = cy + Math.sin(m.angle) * (m.radius * 0.5);

        if (px >= 0 && px <= w && py >= 0 && py <= h) {
          ctx.beginPath();
          ctx.arc(px, py, m.size, 0, Math.PI * 2);
          ctx.fillStyle = m.color;
          ctx.fill();
        }
      });
    }
  }
};

class DynamicCosmicEngine {
  constructor() {
    this.container = document.querySelector("#dynamicBgContainer");
    this.canvasA = document.querySelector("#bgCanvasA");
    this.canvasB = document.querySelector("#bgCanvasB");
    if (!this.container || !this.canvasA || !this.canvasB) return;

    this.ctxA = this.canvasA.getContext("2d");
    this.ctxB = this.canvasB.getContext("2d");

    this.activeBuffer = "A";
    this.currentTheme = "aurora";
    this.themeNameA = "aurora";
    this.themeNameB = "aurora";

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.mouse = {
      x: this.width * 0.5,
      y: this.height * 0.5,
      targetX: this.width * 0.5,
      targetY: this.height * 0.5
    };

    this.time = 0;
    this.lastTime = performance.now();

    this.themeStateA = this.createThemeState("aurora");
    this.themeStateB = this.createThemeState("aurora");

    this.isTransitioning = false;
    this.transitionEndTime = 0;

    this.initEvents();
    this.resize();
    this.observeSections();
    this.startLoop();
  }

  createThemeState(theme) {
    if (theme === "aurora") return CosmicThemes.createAuroraState(this.width, this.height);
    if (theme === "warp") return CosmicThemes.createWarpState(this.width, this.height);
    if (theme === "constellation") return CosmicThemes.createConstellationState(this.width, this.height);
    if (theme === "cybergrid") return CosmicThemes.createCybergridState(this.width, this.height);
    if (theme === "quantum") return CosmicThemes.createQuantumState(this.width, this.height);
    if (theme === "supernova") return CosmicThemes.createSupernovaState(this.width, this.height);
    return CosmicThemes.createAuroraState(this.width, this.height);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    [this.canvasA, this.canvasB].forEach(c => {
      c.width = Math.floor(this.width * this.dpr);
      c.height = Math.floor(this.height * this.dpr);
    });

    this.ctxA.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.ctxB.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    this.themeStateA = this.createThemeState(this.themeNameA);
    this.themeStateB = this.createThemeState(this.themeNameB);
  }

  switchTheme(newTheme) {
    if (!newTheme || newTheme === this.currentTheme) return;

    this.currentTheme = newTheme;
    const now = performance.now();

    if (this.activeBuffer === "A") {
      this.themeNameB = newTheme;
      this.themeStateB = this.createThemeState(newTheme);
      this.canvasB.classList.add("active");
      this.canvasA.classList.remove("active");
      this.activeBuffer = "B";
    } else {
      this.themeNameA = newTheme;
      this.themeStateA = this.createThemeState(newTheme);
      this.canvasA.classList.add("active");
      this.canvasB.classList.remove("active");
      this.activeBuffer = "A";
    }

    this.isTransitioning = true;
    this.transitionEndTime = now + 1250;
  }

  initEvents() {
    window.addEventListener("resize", () => this.resize(), { passive: true });

    window.addEventListener("mousemove", (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
    }, { passive: true });
  }

  observeSections() {
    const sections = document.querySelectorAll("[data-bg-theme]");
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let targetTheme = null;

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          targetTheme = entry.target.dataset.bgTheme;
        }
      });

      if (targetTheme) {
        this.switchTheme(targetTheme);
      }
    }, {
      threshold: [0.15, 0.35, 0.6, 0.85],
      rootMargin: "-12% 0px -12% 0px"
    });

    sections.forEach(sec => observer.observe(sec));

    let scrollTimeout = null;
    window.addEventListener("scroll", () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        const scrollMiddle = window.scrollY + window.innerHeight * 0.4;
        for (let i = sections.length - 1; i >= 0; i--) {
          const sec = sections[i];
          if (sec.offsetTop <= scrollMiddle) {
            const theme = sec.dataset.bgTheme;
            if (theme) this.switchTheme(theme);
            break;
          }
        }
      }, 60);
    }, { passive: true });
  }

  startLoop() {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    let isRunning = true;
    document.addEventListener("visibilitychange", () => {
      isRunning = !document.hidden;
      if (isRunning) {
        this.lastTime = performance.now();
        requestAnimationFrame(render);
      }
    });

    const render = (now) => {
      if (!isRunning) return;
      const delta = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;
      this.time += delta;

      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

      const inTransition = now < this.transitionEndTime;

      if (this.activeBuffer === "A") {
        this.renderTheme(this.ctxA, this.themeNameA, this.themeStateA);
        if (inTransition) {
          this.renderTheme(this.ctxB, this.themeNameB, this.themeStateB);
        }
      } else {
        this.renderTheme(this.ctxB, this.themeNameB, this.themeStateB);
        if (inTransition) {
          this.renderTheme(this.ctxA, this.themeNameA, this.themeStateA);
        }
      }

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }

  renderTheme(ctx, theme, state) {
    if (theme === "aurora") CosmicThemes.renderAurora(ctx, state, this.width, this.height, this.time, this.mouse);
    else if (theme === "warp") CosmicThemes.renderWarp(ctx, state, this.width, this.height, this.time, this.mouse);
    else if (theme === "constellation") CosmicThemes.renderConstellation(ctx, state, this.width, this.height, this.time, this.mouse);
    else if (theme === "cybergrid") CosmicThemes.renderCybergrid(ctx, state, this.width, this.height, this.time, this.mouse);
    else if (theme === "quantum") CosmicThemes.renderQuantum(ctx, state, this.width, this.height, this.time, this.mouse);
    else if (theme === "supernova") CosmicThemes.renderSupernova(ctx, state, this.width, this.height, this.time, this.mouse);
  }
}

/* ============================================================
   📂 RENDER DOSSIERS (Folder-JS-CSS Engine)
   ============================================================ */
function renderDossiers() {
  const container = document.querySelector("#dossiersList");
  if (!container) return;
  const list = content().dossiers || [];

  container.innerHTML = list.map((d, idx) => `
    <div class="folder cursor-target" data-folder-id="${d.id}" tabindex="0" role="button" aria-expanded="false">
      <div class="folder__back" style="border-color: ${d.color};">
        <div class="folder__tab" style="background: ${d.color};"></div>
        ${d.papers.map((p, pIdx) => `
          <div class="paper paper-${pIdx + 1}">
            <span class="paper-tag" style="color: ${d.color}; font-weight:800; font-size:10.5px; text-transform:uppercase;">${p.tag}</span>
            <h4 style="font-size:13.5px; font-weight:800; margin: 4px 0 2px; color:#030308;">${p.title}</h4>
            <p style="font-size:11.5px; color:#475569; line-height:1.35;">${p.desc}</p>
          </div>
        `).join("")}
      </div>
      <div class="folder__front">
        <div class="folder-header">
          <span class="folder-badge" style="color: ${d.color};">${d.subtitle}</span>
          <span class="folder-num" style="font-family:'Space Grotesk',sans-serif; font-weight:900; color:rgba(255,255,255,0.4);">0${idx + 1}</span>
        </div>
        <div>
          <h3 class="folder-title">${d.title}</h3>
          <p style="font-size:12px; color:var(--muted); margin-top:4px;">Click to unfold blueprint</p>
        </div>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".folder").forEach((folder) => {
    folder.addEventListener("click", () => {
      const isOpen = folder.classList.toggle("open");
      folder.setAttribute("aria-expanded", isOpen);
    });

    folder.addEventListener("mousemove", (e) => {
      const rect = folder.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      folder.style.setProperty("--magnet-x", x.toFixed(2));
      folder.style.setProperty("--magnet-y", y.toFixed(2));
    });

    folder.addEventListener("mouseleave", () => {
      folder.style.setProperty("--magnet-x", "0");
      folder.style.setProperty("--magnet-y", "0");
    });
  });
}

/* ============================================================
   RENDER CORE SECTIONS (Projects, Skills, Story, Certs)
   ============================================================ */
let likesState = {};
let customProjects = [];

async function loadCustomProjects() {
  try {
    const res = await api("/api/projects");
    if (res && Array.isArray(res.projects)) {
      customProjects = res.projects;
    }
  } catch {
    try {
      const stored = localStorage.getItem("newja_custom_projects");
      if (stored) customProjects = JSON.parse(stored);
    } catch {}
  }
  renderProjects();
}

async function loadLikes() {
  try {
    const res = await api("/api/projects/likes");
    likesState = res.likes || {};
  } catch {
    likesState = {};
  }
  renderProjects();
}

function renderProjects() {
  const container = document.querySelector("#projectList");
  if (!container) return;
  const staticList = content().projects || [];
  const list = [...customProjects, ...staticList];
  const isThai = state.lang === "th";

  container.innerHTML = list.map((p) => {
    const count = likesState[p.id] || 0;
    const isLiked = state.likedProjectIds.includes(p.id);
    const score = p.id === "hackathon-manita" ? 5.0 : (p.id === "drone-autonomy" ? 4.9 : 4.8);
    const isCustom = customProjects.some(cp => cp.id === p.id);
    const tags = Array.isArray(p.tags) ? p.tags : (typeof p.tags === "string" ? p.tags.split(",") : []);

    return `
      <article class="project-card spotlight-card border-glow cursor-target" id="project-${p.id}">
        <div class="project-card-inner">
          <div class="project-card-image-wrap">
            <img src="${p.image || 'assets/myface.jpg'}" alt="${p.title}" loading="lazy">
            <span class="badge-status online" style="position:absolute;top:12px;right:12px;">${p.status || p.category || 'Live'}</span>
            ${isCustom ? `<span class="badge-status" style="position:absolute;top:12px;left:12px;background:rgba(244,114,182,0.2);border-color:var(--pink);color:var(--pink);font-weight:700;">${isThai ? '⭐ ผลงานของคุณ' : '⭐ Your Project'}</span>` : ''}
          </div>
          <span class="tag" style="align-self:flex-start; margin-bottom:8px; color:var(--emerald-bright); border-color:rgba(16,185,129,0.35); background:rgba(16,185,129,0.08);">${p.badge || p.category || 'Featured'}</span>
          <h3 class="project-card-title shiny-text">${p.title}</h3>
          <p class="project-card-desc">${p.body || p.description || ''}</p>

          <div class="project-tags">
            ${tags.map(t => `<span class="tag">${String(t).trim()}</span>`).join("")}
          </div>

          <!-- React Bits Peek Rating Micro Component -->
          <div class="project-rating-wrap" style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding:8px 12px;background:rgba(255,255,255,0.03);border-radius:var(--radius-sm);border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.75rem;color:var(--muted);font-family:'JetBrains Mono',monospace;">${isThai ? "การประเมิน" : "Rating"}:</span>
            <div class="peek-rating-container cursor-target" data-project="${p.id}" data-score="${score}">
              <div class="peek-rating-tooltip">${score.toFixed(1)} · ${isThai ? "คุณภาพยอดเยี่ยม" : "High Quality"}</div>
              <div class="peek-stars-row">
                <span class="peek-star cursor-target">★</span>
                <span class="peek-star cursor-target">★</span>
                <span class="peek-star cursor-target">★</span>
                <span class="peek-star cursor-target">★</span>
                <span class="peek-star cursor-target">★</span>
              </div>
              <span class="peek-rating-score">${score.toFixed(1)}</span>
            </div>
          </div>

          <div class="project-card-footer">
            <button class="like-btn ${isLiked ? 'liked' : ''} cursor-target" data-like="${p.id}" type="button" aria-label="Like ${p.title}">
              <span class="like-heart">${isLiked ? '❤️' : '🤍'}</span>
              <div class="counter-wheel">
                <span class="counter-digit" data-count="${count}">
                  <span class="counter-number">${count}</span>
                </span>
              </div>
            </button>
            <div style="display:flex;gap:8px;align-items:center;">
              ${isCustom ? `<button class="ghost-btn compact cursor-target" data-delete-project="${p.id}" type="button" title="${isThai ? 'ลบผลงาน' : 'Delete'}" style="padding:6px 10px;font-size:0.76rem;color:#f87171;border-color:rgba(248,113,113,0.3);">🗑️</button>` : ''}
              ${p.link ? `<a href="${p.link}" target="_blank" rel="noreferrer" class="ghost-btn compact cursor-target" style="padding:6px 12px;font-size:0.76rem;">${isThai ? 'เปิดดู' : 'Link'}</a>` : `<a href="https://github.com/Newwee" target="_blank" rel="noreferrer" class="ghost-btn compact cursor-target" style="padding:6px 12px;font-size:0.76rem;">GitHub</a>`}
              <a href="#contact" class="solid-btn compact cursor-target" style="padding:6px 12px;font-size:0.76rem;">${isThai ? 'สอบถาม' : 'Inquire'}</a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  initBorderGlow();
  initSpotlightCards();
  initPeekRating();
}

async function handleLike(projectId) {
  if (!session) {
    openAuth("login");
    showToast(t().toast.loginRequired);
    return;
  }

  try {
    const res = await api(`/api/projects/${projectId}/like`, { method: "POST" });
    if (res.liked) {
      if (!state.likedProjectIds.includes(projectId)) state.likedProjectIds.push(projectId);
      likesState[projectId] = (likesState[projectId] || 0) + 1;
      showToast(t().toast.liked);
    } else {
      state.likedProjectIds = state.likedProjectIds.filter(id => id !== projectId);
      likesState[projectId] = Math.max(0, (likesState[projectId] || 1) - 1);
      showToast(t().toast.unliked);
    }
    renderProjects();
  } catch (err) {
    showToast(err.message);
  }
}

function renderSkills() {
  const list = content().skills || [];
  const container = document.querySelector("#skillList");
  if (!container) return;

  container.innerHTML = list.map(s => `
    <div class="skill-card cursor-target">
      <div class="skill-head">
        <span style="color:#ffffff;">${s.name}</span>
        <span style="color:var(--cyan);">${s.score * 10}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" style="width: ${s.score * 10}%;"></div>
      </div>
      <p style="font-size:12.5px; color:var(--muted); margin-top:8px; line-height:1.5;">${s.body}</p>
    </div>
  `).join("");

  const aiContainer = document.querySelector("#aiToolList");
  if (aiContainer) {
    const aiTools = content().aiTools || [];
    aiContainer.innerHTML = aiTools.map(tool => `
      <div class="pill cursor-target" style="padding:10px 18px;">
        <strong style="color:var(--purple); margin-right:6px;">${tool.name}</strong>
        <span>${tool.body}</span>
      </div>
    `).join("");
  }
}

function renderStory() {
  const list = content().story || [];
  const container = document.querySelector("#storyList");
  if (!container) return;

  container.innerHTML = list.map(s => `
    <div class="timeline-item reveal cursor-target">
      <div class="timeline-year">${s.period}</div>
      <h3 class="timeline-title">${s.title}</h3>
      <p class="timeline-desc">${s.body}</p>
    </div>
  `).join("");
}

function renderCertificates() {
  const list = content().certificates || [];
  const container = document.querySelector("#certificateList");
  if (!container) return;

  const items = list.map((c) => ({
    src: c.image,
    alt: c.title,
    title: c.title,
    subtitle: c.body
  }));

  initFlexCarousel(container, {
    items,
    preset: "liquid",
    intro: "rise",
    cardHeight: 0.5,
    gap: 12,
    squeeze: 0.2,
    focusOnClick: true,
    captions: true,
    fit: "natural",
    radius: 0,
    lensWidth: 0.74,
    lensHeight: 1.18,
    tilt: 62,
    roundness: 1,
    bend: 0.34,
    reach: 0.38,
    curl: "twist",
    dispersion: 0.45,
    liquid: 0,
    followCursor: false,
    autoplay: false,
    interval: 4,
    captureWheel: true
  });
}

window.openCert = function(src, title, body) {
  const modal = document.querySelector("#certModal");
  if (!modal) return;
  document.querySelector("#certModalImg").src = src;
  document.querySelector("#certModalTitle").textContent = title;
  document.querySelector("#certModalBody").textContent = body;
  modal.showModal();
};

/* ============================================================
   STATIC TEXT & LANGUAGE SWITCHER
   ============================================================ */
function applyStaticText() {
  const currentUi = t();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const parts = key.split(".");
    let val = currentUi;
    for (const p of parts) {
      val = val ? val[p] : null;
    }
    if (val && typeof val === "string") {
      el.textContent = val;
    }
  });

  const langBtn = document.querySelector("#langToggleBtn");
  if (langBtn) langBtn.textContent = state.lang === "th" ? "EN" : "TH";
}

function setLanguage(newLang) {
  state.lang = newLang;
  localStorage.setItem("preferred_language", newLang);
  document.documentElement.lang = newLang;
  applyStaticText();
  renderStory();
  renderSkills();
  renderDossiers();
  renderProjects();
  renderCertificates();
  initBounceCards(document.querySelector("#bounceCardsContainer"));
}

/* ============================================================
   AUTH & USER SESSION
   ============================================================ */
const authModal = document.querySelector("#authModal");
const authForm = document.querySelector("#authForm");

let authMode = "login";
function openAuth(mode = "login") {
  authMode = mode;
  const isReg = mode === "register";
  document.querySelector("#authKicker").textContent = isReg ? t().auth_modal.registerKicker : t().auth_modal.loginKicker;
  document.querySelector("#authTitle").textContent = isReg ? t().auth_modal.registerTitle : t().auth_modal.loginTitle;
  document.querySelector("#authCopy").textContent = isReg ? t().auth_modal.registerCopy : t().auth_modal.loginCopy;
  document.querySelector("#authSubmit").textContent = isReg ? t().auth_modal.submitRegister : t().auth_modal.submitLogin;
  document.querySelector("#usernameField").style.display = isReg ? "block" : "none";
  document.querySelector("#ageField").style.display = isReg ? "block" : "none";
  document.querySelector("#passwordRule").hidden = !isReg;
  document.querySelector("#formStatus").textContent = "";
  authModal.showModal();
}

async function handleAuth(e) {
  e.preventDefault();
  const statusEl = document.querySelector("#formStatus");
  statusEl.textContent = "Connecting...";

  const email = document.querySelector("#emailInput").value.trim();
  const password = document.querySelector("#passwordInput").value;
  const username = document.querySelector("#usernameInput").value.trim();
  const age = parseInt(document.querySelector("#ageInput").value, 10) || 17;

  try {
    if (authMode === "register") {
      await api("/api/auth/register", { method: "POST", body: JSON.stringify({ email, password, username, age }) });
      showToast(t().toast.registered);
    }
    const res = await api("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
    session = res.user;
    updateAuthUi();
    authModal.close();
    showToast(t().toast.loggedIn);
    await loadLikes();
  } catch (err) {
    statusEl.textContent = err.message;
  }
}

function updateAuthUi() {
  const loginBtn = document.querySelector("#loginBtn");
  const regBtn = document.querySelector("#registerBtn");
  const logoutBtn = document.querySelector("#logoutBtn");
  const userBadge = document.querySelector("#userBadge");
  const dashBtn = document.querySelector("#dashboardBtn");

  if (session) {
    loginBtn.hidden = true;
    regBtn.hidden = true;
    logoutBtn.hidden = false;
    userBadge.hidden = false;
    userBadge.textContent = session.username || session.email.split("@")[0];
    dashBtn.hidden = session.role !== "admin";
  } else {
    loginBtn.hidden = false;
    regBtn.hidden = false;
    logoutBtn.hidden = true;
    userBadge.hidden = true;
    dashBtn.hidden = true;
  }
}

async function initializeSession() {
  try {
    const res = await api("/api/auth/me");
    if (res.authenticated && res.user) {
      session = res.user;
    }
  } catch {
    session = null;
  }
  updateAuthUi();
  await loadLikes();
}

/* ============================================================
   ADMIN DASHBOARD MODAL
   ============================================================ */
const dashboardModal = document.querySelector("#dashboardModal");
async function openDashboard() {
  if (!session || session.role !== "admin") return;
  dashboardModal.showModal();
  loadAdminStats();
  loadAdminUsers();
  loadLogs({ reset: true });
}

async function loadAdminStats() {
  const container = document.querySelector("#adminStats");
  try {
    const res = await api("/api/admin/metrics");
    container.innerHTML = `
      <div class="pill">Accounts: ${res.usersCount}</div>
      <div class="pill">Likes: ${res.likesCount}</div>
      <div class="pill">Logs: ${res.logsCount}</div>
    `;
  } catch {}
}

async function loadAdminUsers() {
  const container = document.querySelector("#userList");
  try {
    const res = await api("/api/admin/users");
    container.innerHTML = (res.users || []).map(u => `
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--line-subtle);">
        <span>${u.email} (${u.role})</span>
        <button class="ghost-btn" style="padding:4px 10px; font-size:11px;" onclick="deleteUser('${u.id}')">Delete</button>
      </div>
    `).join("");
  } catch {}
}

window.deleteUser = async function(id) {
  if (!confirm("Are you sure?")) return;
  try {
    await api(`/api/admin/users/${id}`, { method: "DELETE" });
    loadAdminUsers();
  } catch (e) {
    showToast(e.message);
  }
};

async function loadLogs({ reset = false } = {}) {
  const container = document.querySelector("#logList");
  try {
    const res = await api("/api/admin/logs?limit=20");
    container.innerHTML = (res.logs || []).map(l => `
      <div style="font-size:12px; padding:6px 0; color:var(--text-dim); border-bottom:1px solid rgba(255,255,255,0.04);">
        <strong style="color:var(--cyan);">${l.action}</strong> by ${l.userEmail || 'anon'} (${new Date(l.createdAt).toLocaleTimeString()})
      </div>
    `).join("");
  } catch {}
}

/* ============================================================
   EVENT LISTENERS & SCROLL
   ============================================================ */
document.querySelector("#loginBtn")?.addEventListener("click", () => openAuth("login"));
document.querySelector("#registerBtn")?.addEventListener("click", () => openAuth("register"));
document.querySelector("#logoutBtn")?.addEventListener("click", async () => {
  try {
    await api("/api/auth/logout", { method: "POST" });
  } catch {}
  session = null;
  state.likedProjectIds = [];
  updateAuthUi();
  await loadLikes();
  showToast(t().toast.loggedOut);
});
document.querySelector("#dashboardBtn")?.addEventListener("click", openDashboard);
document.querySelector("#closeAuthBtn")?.addEventListener("click", () => authModal.close());
document.querySelector("#closeDashboardBtn")?.addEventListener("click", () => dashboardModal.close());
authForm?.addEventListener("submit", handleAuth);

document.querySelector("#projectList")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-like]");
  if (btn) handleLike(btn.dataset.like);

  const delBtn = e.target.closest("[data-delete-project]");
  if (delBtn) handleDeleteProject(delBtn.dataset.deleteProject);
});

/* Add Project Modal & Form Handling */
const addProjectModal = document.querySelector("#addProjectModal");
const openAddProjectBtn = document.querySelector("#openAddProjectBtn");
const closeAddProjectBtn = document.querySelector("#closeAddProjectBtn");
const addProjectForm = document.querySelector("#addProjectForm");

openAddProjectBtn?.addEventListener("click", () => {
  addProjectModal?.showModal();
});

closeAddProjectBtn?.addEventListener("click", () => {
  addProjectModal?.close();
});

// Image preset quick buttons
document.querySelectorAll(".img-preset-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = document.querySelector("#newProjectImage");
    if (input && btn.dataset.src) {
      input.value = btn.dataset.src;
      showToast(state.lang === "th" ? "เลือกรูปภาพตัวอย่างแล้ว" : "Sample image selected");
    }
  });
});

async function handleAddProject(e) {
  e.preventDefault();
  const isThai = state.lang === "th";
  const statusEl = document.querySelector("#addProjectStatus");
  if (statusEl) statusEl.textContent = isThai ? "กำลังบันทึก..." : "Saving...";

  const title = document.querySelector("#newProjectTitle")?.value.trim() || "";
  const category = document.querySelector("#newProjectCategory")?.value || "AI & Software";
  const badge = document.querySelector("#newProjectBadge")?.value.trim() || category;
  const body = document.querySelector("#newProjectDesc")?.value.trim() || "";
  const image = document.querySelector("#newProjectImage")?.value.trim() || "assets/UTCC.jpg";
  const tagsStr = document.querySelector("#newProjectTags")?.value.trim() || "";
  const link = document.querySelector("#newProjectLink")?.value.trim() || "";
  const tags = tagsStr ? tagsStr.split(",").map(s => s.trim()).filter(Boolean) : [category];

  let createdProject = null;
  try {
    const res = await api("/api/projects", {
      method: "POST",
      body: JSON.stringify({ title, category, badge, body, image, tags, link })
    });
    if (res && res.project) {
      createdProject = res.project;
    }
  } catch (err) {
    console.warn("API save error, fallback to local storage:", err);
  }

  if (!createdProject) {
    const id = "custom-" + Date.now().toString(36);
    createdProject = { id, title, category, badge, body, image, tags, link, created_at: new Date().toISOString() };
  }

  customProjects.unshift(createdProject);
  try {
    localStorage.setItem("newja_custom_projects", JSON.stringify(customProjects));
  } catch {}

  renderProjects();

  if (addProjectModal) addProjectModal.close();
  addProjectForm?.reset();
  if (statusEl) statusEl.textContent = "";

  showToast(isThai ? "🎉 เพิ่มผลงานของคุณเรียบร้อยแล้ว!" : "🎉 Project added successfully!");

  setTimeout(() => {
    const card = document.querySelector(`#project-${createdProject.id}`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 200);
}

async function handleDeleteProject(projectId) {
  const isThai = state.lang === "th";
  if (!confirm(isThai ? "คุณต้องการลบผลงานนี้หรือไม่?" : "Delete this project?")) return;

  try {
    await api(`/api/projects/${projectId}`, { method: "DELETE" });
  } catch (e) {
    console.warn("API delete error:", e);
  }

  customProjects = customProjects.filter(p => p.id !== projectId);
  try {
    localStorage.setItem("newja_custom_projects", JSON.stringify(customProjects));
  } catch {}

  renderProjects();
  showToast(isThai ? "ลบผลงานเรียบร้อยแล้ว" : "Project deleted");
}

addProjectForm?.addEventListener("submit", handleAddProject);

document.querySelector("#langToggleBtn")?.addEventListener("click", () => {
  setLanguage(state.lang === "th" ? "en" : "th");
});

document.querySelector(".mobile-lang-btn")?.addEventListener("click", () => {
  setLanguage(state.lang === "th" ? "en" : "th");
});

const navToggleBtn = document.querySelector("#navToggleBtn");
const mainNav = document.querySelector(".topbar .nav");
if (navToggleBtn && mainNav) {
  navToggleBtn.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");
  });
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
    });
  });
}

document.querySelector(".resume-btn")?.addEventListener("click", (e) => {
  showToast(state.lang === "th" ? "ติดต่อขอรับ Resume ฉบับเต็มได้ที่ pongsaopataradanai@gmail.com" : "Request full Resume via pongsaopataradanai@gmail.com");
});

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal:not(.is-visible)").forEach(t => observer.observe(t));
}

function updateScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  const scrollProgress = document.querySelector("#scrollProgress");
  const topbar = document.querySelector("#topbar");
  const backToTop = document.querySelector("#backToTop");

  if (scrollProgress) scrollProgress.style.width = `${progress}%`;
  if (topbar) topbar.classList.toggle("scrolled", scrollTop > 10);
  if (backToTop) backToTop.classList.toggle("visible", scrollTop > 400);
}

window.addEventListener("scroll", updateScrollEffects, { passive: true });
document.querySelector("#backToTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   🚀 INITIAL BOOT & MOUNTING ENGINES
   ============================================================ */
applyStaticText();
renderStory();
renderSkills();
renderDossiers();
loadCustomProjects();
renderProjects();
renderCertificates();
observeReveals();
initializeSession();

// Mount React Bits Engines
initTargetCursor();
initFuzzyText(document.querySelector("#fuzzyTitleCanvas"), "NEW JA");
initLogoLoop(document.querySelector("#techLogoLoop"));
initBounceCards(document.querySelector("#bounceCardsContainer"));
initCountUp();
initWebThreads();
initPromptBar();
initTextAnimations();
initLifecycleThoughtLine();

// Mount Dynamic Multi-State Cosmic Background Engine (Dual-Buffer Crossfade)
const cosmicBgEngine = new DynamicCosmicEngine();
