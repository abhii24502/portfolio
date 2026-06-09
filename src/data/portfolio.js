export const portfolioData = {
  name: "Abhay Madhuwan",
  title: "Aspiring Software Developer",
  tagline: "Building efficient, scalable, and user-focused digital solutions.",
  about:
    "Aspiring Software Developer with a strong foundation in web development and software engineering. Skilled in HTML, CSS, Bootstrap, JavaScript, PHP, SQL, MySQL, React Native, and Firebase. Experienced in developing responsive web applications and mobile application interfaces. Passionate about learning emerging technologies, solving real-world problems, and building efficient, scalable, and user-focused digital solutions.",
  email: "madhuwanabhay648@gmail.com",
  phone: "+91-8894296648",
  location: "Kangra, HP, India",
  resumeUrl: "#", // Add resume link here
  social: {
    github: "https://github.com/abhii24502",
    linkedin: "https://linkedin.com/in/abhay-madhuwan-252321388",
    twitter: "",
  },
  skills: [
    { name: "HTML", category: "Frontend", level: 85 },
    { name: "CSS", category: "Frontend", level: 85 },
    { name: "Bootstrap", category: "Frontend", level: 80 },
    { name: "JavaScript", category: "Frontend", level: 80 },
    { name: "React Native", category: "Frontend", level: 75 },
    { name: "PHP", category: "Backend", level: 75 },
    { name: "SQL", category: "Backend", level: 80 },
    { name: "Firebase", category: "Backend", level: 70 },
    { name: "MySQL", category: "Database", level: 80 },
    { name: "Firestore", category: "Database", level: 70 },
    { name: "Git", category: "Tools", level: 75 },
    { name: "GitHub", category: "Tools", level: 75 },
    { name: "VS Code", category: "Tools", level: 85 },
    { name: "XAMPP", category: "Tools", level: 75 },
  ],
  projects: [
    {
      title: "On-Demand Service Booking System",
      description:
        "Developed end-to-end on-demand service booking system for home services (electrician, plumber, cleaning, etc.) with real-time tracking and payment integration. Built dynamic catalog with 20+ service categories, intelligent search, and zone-based filtering. Implemented dual-flow booking system supporting both direct-price and package-based services with company selection and scheduling. Integrated Razorpay payment gateway supporting UPI, cards, and wallets with webhook-based confirmation. Developed real-time booking tracker with multi-stage progress (Pending → Assigned → Completed) using Firebase listeners. Built quantity-based cart with dynamic pricing, automatic discount application, and add-on services support. Achieved 50% reduction in load times through prefetching and lazy loading optimization.",
      tech: ["React Native", "Firebase", "Firestore", "Razorpay", "JavaScript"],
      live: "#",
      github: "#",
      image: "",
      highlights: [
        "Service Discovery: 20+ categories with intelligent search and zone-based filtering",
        "Booking Flow: Dual-flow system (direct-price & package-based) with scheduling",
        "Payment Integration: Razorpay gateway with UPI, cards, wallets & webhook confirmation",
        "Live Tracking: Real-time booking tracker with multi-stage progress & technician info",
        "Cart & Pricing: Quantity-based cart with dynamic pricing & discount application",
        "Performance: 50% load time reduction through prefetching & lazy loading"
      ]
    },
    {
      title: "Life Coaching Website",
      description:
        "A responsive web application designed for life coaching services. The project focuses on creating an intuitive user interface with service booking, user management, and workflow features. Built with modern web technologies to ensure optimal performance and user experience.",
      tech: ["React", "Node.js", "CSS", "MySQL"],
      live: "#",
      github: "#",
      image: "",
      status: "In Progress"
    },
  ],
  experience: [
    {
      role: "Software Developer Intern",
      company: "Ninja Deliveries",
      duration: "2025 – Present (1 year)",
      points: [
        "Developed end-to-end on-demand service booking system with 20+ service categories and real-time tracking.",
        "Built responsive and user-friendly mobile application screens using React Native.",
        "Integrated Razorpay payment gateway supporting multiple payment methods (UPI, cards, wallets) with webhook-based confirmation.",
        "Implemented real-time booking tracker with multi-stage progress updates using Firebase Firestore listeners.",
        "Developed intelligent search and zone-based filtering system for service discovery.",
        "Built quantity-based cart system with dynamic pricing, automatic discount application, and add-on services support.",
        "Optimized application performance achieving 50% reduction in load times through prefetching and lazy loading.",
        "Created reusable mobile UI components to improve code maintainability and application performance.",
        "Collaborated with team members during development, testing, and feature enhancement activities.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Government Post Graduate College, Dharamshala",
      year: "2024 – 2026",
      score: "Current CGPA: 7.70 (up to 3rd Semester)",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "MCM DAV College, Kangra",
      year: "2021 – 2024",
      score: "CGPA: 7.93",
    },
  ],
};
