'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Experience {
  role: string;
  company: string;
  date: string;
  description: string | string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  aboutText1: string;
  aboutText2: string;
  email: string;
  phone: string;
  location: string;
  experiences: Experience[];
  projects: Project[];
}

const defaultData: PortfolioData = {
  name: "ERWIN RILLORTA",
  role: "Full Stack ERP Web Developer",
  bio: "Full Stack Developer specializing in scalable web applications, REST APIs, system architecture, and high-performance systems. Experienced in building enterprise-level platforms.",
  aboutText1: "I am a results-driven IT Professional transitioning from Senior Full Stack Development to Project Management. I specialize in designing, developing, and leading teams to deliver scalable enterprise applications using Agile methodologies.",
  aboutText2: "I am adept at system architecture, full SDLC management, and cross-functional collaboration to build custom ERP modules that streamline business processes, enhance operational efficiency, and drive digital transformation.",
  email: "erwin.rillorta.0330@gmail.com",
  phone: "+63 967 302 5852",
  location: "Dagupan City, Pangasinan, PH",
  experiences: [
    {
      role: "Project Manager",
      company: "Vertex Technology Corporation",
      date: "Apr 2026 - Present",
      description: [
        "Lead a team of developers in the end-to-end development of core custom ERP modules, including physical inventory, sales orders, purchasing, serialized tracking, and RFID product integration.",
        "Manage multiple concurrent software projects utilizing Agile and Scrum methodologies across the full Software Development Life Cycle (SDLC).",
        "Oversee database architecture, UI/UX implementation, and comprehensive end-to-end testing to ensure seamless system functionality, high performance, and successful deployment.",
        "Utilize ClickUp and various CRM tools to track project milestones, manage strict resource deadlines, and facilitate cross-functional team collaboration."
      ]
    },
    {
      role: "Senior Full Stack Web Developer",
      company: "Vertex Technology Corporation",
      date: "Apr 2025 - May 2026",
      description: [
        "Architected and developed a custom ERP system encompassing Sales, Inventory, Finance, HR, Attendance, and Service Operations.",
        "Built scalable ERP web modules using Next.js, React, and TypeScript for Purchase Orders (PO), Accounts Payable (AP), expenses, inventory, and comprehensive dashboards.",
        "Designed and optimized MySQL databases utilizing normalized schemas, indexes, and relational integrity to ensure high performance and data security.",
        "Developed and integrated RESTful APIs using PHP and Laravel, ensuring seamless communication across various system components.",
        "Implemented Directus CMS for flexible data management and deployed web applications on production and shared hosting environments.",
        "Created financial and operational reports (AP aging, VAT/EWT, stock movement) and built responsive, reusable UI components using Tailwind CSS."
      ]
    },
    {
      role: "Technical Support Representative (GoodWe Account)",
      company: "Brandlink PH",
      date: "Sep 2024 - Feb 2025",
      description: [
        "Resolved technical inquiries related to GoodWe solar inverters utilizing the SEMS Portal, IoT Management Platform, and GoodWe Management Platform.",
        "Managed and tracked support tickets via Zendesk, ensuring timely and accurate resolution of customer issues.",
        "Guided customers through Wi-Fi configurations using the SolarGo App and Web UI, and successfully troubleshot Wi-Fi 1.0 and 2.0 modules.",
        "Assisted with post-setup checks, firmware updates, and remote monitoring while coordinating effectively with internal teams."
      ]
    },
    {
      role: "IT Specialist",
      company: "Green Marine",
      date: "Aug 2024 - Apr 2025",
      description: [
        "Configured and customized core business modules within the Odoo Framework, including Helpdesk, CRM, Contacts, and Website.",
        "Tailored CRM workflows and Helpdesk ticketing systems to align with company requirements and improve customer response times.",
        "Conducted product research, handled large-scale product imports, and maintained accurate contact databases and website content."
      ]
    },
    {
      role: "IT Specialist",
      company: "LESS",
      date: "Aug 2023 - Apr 2024",
      description: [
        "Managed cross-functional operations including social media, graphic design, and video production for a diverse portfolio.",
        "Developed and executed social media posting strategies and content on TikTok, enhancing audience engagement.",
        "Created various graphic assets, including T-shirt designs, E-commerce banners for Shopify, and webpage content.",
        "Translated and localized media content slideshows for international distribution.",
        "Developed workflow automations using Zapier and integrated AI tools like ChatGPT into data processes.",
        "Administered E-commerce operations on the Shopify platform, covering product listings, website customization, and SEO.",
        "Managed backend operations with content scheduling, extensive product research, and comprehensive design organization."
      ]
    },
    {
      role: "IT Intern",
      company: "OFC IT Solutions and Technologies",
      date: "Mar 2023 - Jul 2023",
      description: [
        "Developed custom functional systems for technicians, administrators, and managers, including a Technical Service Report System.",
        "Configured IVMS (Intelligent Video Management System) for accurate biometrics and employee attendance tracking."
      ]
    }
  ],
  projects: [
    {
      title: "Custom ERP System",
      description: "Architected and developed a custom ERP system encompassing Sales, Inventory, Finance, HR, Attendance, and Service Operations.",
      tags: ["Next.js", "React", "TypeScript", "MySQL", "Laravel"],
      liveUrl: "#",
      githubUrl: "https://github.com/Erwinrillorta0830"
    },
    {
      title: "Technical Service Report System",
      description: "Developed custom functional systems for technicians, administrators, and managers for efficient reporting and biometrics tracking.",
      tags: ["System Architecture", "Hardware Config", "UI/UX"],
      liveUrl: "#",
      githubUrl: "https://github.com/Erwinrillorta0830"
    },
    {
      title: "E-Commerce Website Builder",
      description: "Created and designed an E-commerce website for the company utilizing comprehensive funnel building techniques.",
      tags: ["E-commerce", "Funnel Building", "Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/Erwinrillorta0830"
    }
  ]
};

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => void;
  resetData: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData({ ...defaultData, ...parsed });
      } catch {
        console.error("Failed to parse portfolio data");
      }
    }
    setIsLoaded(true);
  }, []);

  const updateData = (newData: Partial<PortfolioData>) => {
    const updated = { ...data, ...newData };
    setData(updated);
    localStorage.setItem('portfolio-data', JSON.stringify(updated));
  };

  const resetData = () => {
    setData(defaultData);
    localStorage.removeItem('portfolio-data');
  };

  if (!isLoaded) return null; // Wait for localStorage to avoid hydration mismatch

  return (
    <PortfolioContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
