const portfolioData = {
  identity: {
    name: "Alpha Odiero",
    nickname: "Engineer Alpha",
    role: "Full-Stack Developer & Designer",
    email: "collinsodiera8@gmail.com",
    phone: "+254715519158",
    location: "Kenya",
    bio: "Let's build something impactful together. Currently expanding my expertise in backend development, system design, and cybersecurity. I'm open to freelance work, collaborations, and learning opportunities.",
    socials: {
      github: "https://github.com/alpha-odiero",
      linkedin: "https://linkedin.com/in/alpha-odiero",
      whatsapp: "https://wa.me/254715519158",
      email: "mailto:collinsodiera8@gmail.com",
      tiktok: "https://tiktok.com/@alpha_dev",
      instagram: "https://instagram.com/alpha_odiero",
      twitter: "https://twitter.com/alpha_odiero"
    }
  },
  about: {
    intro:
      "I'm Alpha Odiero, a creative technologist focused on building modern, user-centered digital experiences. I combine design, development, and problem-solving to create responsive websites, intuitive interfaces, and visually engaging products.\n\nMy work spans web development, WordPress solutions, and graphic design, enabling me to deliver complete digital solutions from concept to execution.\n\nI'm continuously expanding into backend systems, application architecture, and digital security, with a focus on building reliable, scalable, and impactful solutions.",
    howIWork: [
      { step: 1, title: "Understand the problem and define goals", description: "Analyze requirements and set clear objectives" },
      { step: 2, title: "Design intuitive, user-friendly interfaces", description: "Create wireframes and mockups for optimal UX" },
      { step: 3, title: "Build responsive and scalable frontend systems", description: "Develop clean, maintainable code with modern frameworks" },
      { step: 4, title: "Integrate backend services and APIs", description: "Connect frontend with secure backend systems" },
      { step: 5, title: "Test, debug, and optimize performance", description: "Ensure quality through testing and performance tuning" },
      { step: 6, title: "Continuously improve and refine the product", description: "Iterate based on feedback and new requirements" }
    ]
  },
  skills: [
    {
      category: "Frontend Development",
      description: "I build modern, responsive interfaces using HTML, CSS, JavaScript, and React to bring polished visual systems to life.",
      items: [
        { name: "HTML", level: 95, icon: "fab fa-html5", color: "#E34F26" },
        { name: "CSS", level: 90, icon: "fab fa-css3-alt", color: "#1572B6" },
        { name: "JavaScript", level: 85, icon: "fab fa-js", color: "#F7DF1E" },
        { name: "React", level: 80, icon: "fab fa-react", color: "#61DAFB" }
      ]
    },
    {
      category: "Backend (Learning & Growing)",
      description: "I use Node.js, Express, and cloud services to connect frontend experiences with secure APIs and reliable backend systems.",
      items: [
        { name: "Node.js", level: 70, icon: "fab fa-node-js", color: "#339933" },
        { name: "Express", level: 65, icon: "fas fa-server", color: "#000000" },
        ]
    },
    {
      category: "Tools & Workflow",
      description: "Strong collaboration and version control are essential; I use Git, GitHub, and VS Code for efficient delivery and clean teamwork.",
      items: [
       
        
      ]
    },
    {
      category: "Design & Creativity",
      description: "I craft interfaces, visuals, and branding with Figma, Adobe tools, and Canva to make digital products feel polished and intuitive.",
      items: [
        { name: "Figma", level: 85, icon: "fab fa-figma", color: "#F24E1E" },
        { name: "Adobe Photoshop", level: 80, icon: "fab fa-adobe", color: "#31A8FF" },
        { name: "Adobe Illustrator", level: 75, icon: "fab fa-adobe", color: "#FF9A00" },
        { name: "Adobe Premiere Pro", level: 70, icon: "fab fa-adobe", color: "#9999FF" },
        { name: "Canva", level: 90, icon: "fas fa-palette", color: "#00C4CC" }
      ]
    },
    {
      category: "Core Strengths",
      description: "These are the problem-solving and experience-driven strengths I use to deliver reliable, user-centered digital work every time.",
      items: [
        { name: "Responsive Design", level: 90, icon: "fas fa-mobile-alt", color: "#007ACC" },
        { name: "UI/UX Thinking", level: 85, icon: "fas fa-brain", color: "#FF6B6B" },
        { name: "Problem Solving", level: 95, icon: "fas fa-puzzle-piece", color: "#4ECDC4" },
        { name: "Debugging", level: 85, icon: "fas fa-bug", color: "#45B7D1" },
        { name: "Performance Optimization", level: 80, icon: "fas fa-tachometer-alt", color: "#FFA07A" }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "EcoCare - Environmental Awareness Website",
      description: "A platform promoting environmental conservation and tree planting initiatives in Kenya.",
      tech: ["HTML", "CSS", "JavaScript"],
      problem: "Limited digital platforms for environmental awareness in Kenya",
      solution: "Developed an informative website to promote conservation and tree planting",
      features: ["Informative UI", "Responsive design", "Conservation focus"],
      challenges: "Creating engaging content layout and ensuring accessibility",
      live: "#",
      github: "https://github.com/alpha-odiero/eco-care",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio designed to showcase projects, skills, and professional growth.",
      tech: ["React", "Tailwind CSS"],
      problem: "Need for a professional online presence to showcase work and skills",
      solution: "Created a modern, responsive portfolio with clean design and organized content",
      features: ["Reusable components", "Clean UI", "Responsive layout"],
      challenges: "Balancing design aesthetics with content organization",
      live: "#",
      github: "https://github.com/alpha-odiero/portfolio",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Shushi Restaurant",
      description: "Landing site for a sushi restaurant with menu highlights and online ordering cues.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      problem: "Local restaurant needed a modern digital menu and lead capture",
      solution: "Built a responsive single-page experience with menu sections, CTA, and contact info",
      features: ["Hero promotions", "Menu grid", "Call-to-action buttons"],
      challenges: "Balancing imagery with fast load times",
      live: "https://github.com/alpha-odiero/shushi-resstaurant",
      github: "https://github.com/alpha-odiero/shushi-resstaurant",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Nyumbani Housing",
      description: "Property listing and booking experience showcasing apartments and amenities.",
      tech: ["React", "CSS", "JavaScript"],
      problem: "Showcase housing units with clear details and inquiries",
      solution: "Created cards for listings, amenity highlights, and inquiry calls to action",
      features: ["Property cards", "Amenity highlights", "Inquiry CTA"],
      challenges: "Keeping layout clean across device sizes",
      live: "https://github.com/alpha-odiero/nyumbani",
      github: "https://github.com/alpha-odiero/nyumbani",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Kilimo Bora",
      description: "Agriculture-focused site promoting sustainable farming practices in Kenya.",
      tech: ["HTML", "CSS", "JavaScript"],
      problem: "Need for accessible information on modern farming techniques",
      solution: "Built an educational site with sections for practices, benefits, and contact",
      features: ["Educational sections", "Impact highlights", "Contact prompt"],
      challenges: "Presenting dense content in a skimmable layout",
      live: "https://kilimo-bora-amber.vercel.app/",
      github: "https://github.com/alpha-odiero/kilimo-bora",
      image: "assets/avocado.jpg"
    },
    {
      id: 6,
      title: "Kingstone",
      description: "Corporate-style landing page for a construction and real estate brand.",
      tech: ["React", "CSS", "JavaScript"],
      problem: "Establish a professional web presence for a property brand",
      solution: "Designed a hero, services, portfolio, and contact CTA tailored to the brand",
      features: ["Brand hero", "Service highlights", "Project gallery"],
      challenges: "Maintaining brand feel while optimizing performance",
      live: "https://github.com/alpha-odiero/kingstone",
      github: "https://github.com/alpha-odiero/kingstone",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    }
  ],
  services: [
    {
      title: "Web Development",
      description: "I build responsive, modern websites and web applications tailored to user needs, focusing on performance and scalability.",
      icon: "fas fa-laptop-code"
    },
    {
      title: "UI/UX Design",
      description: "I design clean, user-friendly interfaces that provide smooth and engaging user experiences.",
      icon: "fas fa-user-check"
    },
    {
      title: "Graphic Design",
      description: "I create high-quality visual content including posters, banners, thumbnails, and branding materials.",
      icon: "fas fa-paint-brush"
    }
  ]
};

export default portfolioData;
