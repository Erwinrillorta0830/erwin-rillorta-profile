'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Experience {
  role: string;
  company: string;
  location?: string;
  date: string;
  category: 'IT' | 'VA';
  description: string | string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  aboutITText1: string;
  aboutITText2: string;
  aboutVAText1: string;
  aboutVAText2: string;
  email: string;
  phone: string;
  location: string;
  portfolioUrl: string;
  education: {
    tertiary: { school: string; degree: string; location: string; years: string };
    secondary: { school: string; location: string; years: string };
  };
  achievements: string[];
  itSkills: string[];
  vaSkills: string[];
  experiences: Experience[];
  projects: Project[];
}

const defaultData: PortfolioData = {
  name: "ERWIN RILLORTA",
  role: "Virtual Assistant & IT Specialist",
  bio: "Results-driven IT Specialist & Executive Virtual Assistant with over 5 years of hands-on experience in IT support, system administration, software development, social media management, graphic design, video editing, and e-commerce operations.",
  aboutITText1: "I am a dedicated IT Specialist & Systems Developer holding a Bachelor of Science in Information Technology from Universidad de Dagupan. I specialize in system administration, database management (MySQL), Odoo framework module customization, network administration (CCNA certified), and full SDLC software development.",
  aboutITText2: "From architecting ERP solutions and developing custom technical report systems to configuring IVMS biometrics, Zendesk ticketing, and Helpdesk workflows, I deliver exceptional remote technical support, hardware/software troubleshooting, and high-performance IT solutions.",
  aboutVAText1: "I am a versatile Executive Virtual Assistant, Content Creator, and E-commerce Specialist. I help international clients, businesses, and brands in Norway, the US, and the Philippines streamline administrative tasks, expand online reach, and boost revenue across TikTok, YouTube, Shopify, Etsy, and eBay.",
  aboutVAText2: "My expertise spans Social Media Management, Graphic Design (brochures, logos, T-shirt designs), Video Editing (TikTok/YouTube content), workflow automations (Zapier, ChatGPT & Google Sheets AI prompts, Dropbox), content scheduling, SEO, and e-commerce product listings.",
  email: "erwinrillorta.0330@gmail.com",
  phone: "09396073451",
  location: "Dagupan City, Pangasinan, Philippines",
  portfolioUrl: "myprofile.ph/erwinrillorta",
  education: {
    tertiary: {
      school: "Universidad de Dagupan",
      degree: "Bachelor of Science in Information Technology",
      location: "Dagupan City, Pangasinan",
      years: "2019 - 2024"
    },
    secondary: {
      school: "Mangaldan National High School",
      location: "Mangaldan, Pangasinan",
      years: "2013 - 2019"
    }
  },
  achievements: [
    "Hackathon 2020 Champion",
    "Dean's Lister 2021",
    "NetAcad Passer (Cybersecurity)",
    "NetAcad CCNA Passer"
  ],
  itSkills: [
    "Odoo Framework",
    "MySQL (Database)",
    "PHP / Laravel",
    "JavaScript / jQuery",
    "Bootstrap & HTML/CSS",
    "System Architecture",
    "IVMS Biometrics Config",
    "Zendesk / Helpdesk Workflows",
    "NetAcad CCNA & Cybersecurity",
    "Hardware & Network Config",
    "Assembly & Java",
    "Salesforce"
  ],
  vaSkills: [
    "Social Media Management (TikTok/FB)",
    "Graphic Design (Canva/Ps/Figma)",
    "Video Editing (Premiere Pro)",
    "Shopify Store Customization & SEO",
    "Etsy & Ebay Product Listing",
    "Zapier Automation",
    "ChatGPT & AI Prompt Engineering",
    "Content Scheduling & Research",
    "Dropbox & Cloud Data Management",
    "E-commerce Funnel Building",
    "T-Shirt & Brochure Design",
    "Customer Service & Admin Support"
  ],
  experiences: [
    {
      role: "IT Specialist",
      company: "Green Marine",
      location: "Metairie, LA, USA",
      date: "August 2024 – April 2025",
      category: "IT",
      description: [
        "Configured and customized various core modules within the Odoo Framework (Helpdesk, CRM, Contacts, Website).",
        "Conducted in-depth product research and handled bulk product imports.",
        "Customized CRM workflows and Helpdesk ticketing systems for streamlined support.",
        "Maintained and updated contact databases and website content.",
        "Funnel Builder: Created and designed E-commerce Websites for the company."
      ]
    },
    {
      role: "Assistant Manager / Virtual Assistant",
      company: "LESS",
      location: "Smestad, Oslo, Norway",
      date: "August 2023 – April 2024",
      category: "VA",
      description: [
        "Social Media Manager (TikTok): Daily posting, content creation, and customer engagement management.",
        "Graphic Designer: Created T-shirt designs, Shopify website banners, webpage content, and translated media slideshows.",
        "Programmer & Automation: Created automations in Zapier, custom ChatGPT & Google Sheets prompts, and Dropbox automations.",
        "Video Editor & Shopify: Edited videos, product listing, Shopify website customization, and SEO.",
        "Data Entry: Content scheduling, market research, and design asset organization."
      ]
    },
    {
      role: "Content Creator & Virtual Assistant",
      company: "Upper Echelon Capital LLC",
      location: "Saint Petersburg, Florida, USA",
      date: "August 2023 – October 2023",
      category: "VA",
      description: [
        "Social Media Management: Created and published content for social platforms to boost client credit awareness.",
        "Graphic Designer & Video Editor: Produced social content, brochures, logos, documents, and videos for YouTube and TikTok.",
        "Etsy & Ebay: Handled product listings, created/customized stores, and managed customer inquiries."
      ]
    },
    {
      role: "YouTube Content Creator & Video Editor",
      company: "CRUTUX LLC",
      location: "Sugar Land, Texas, USA",
      date: "April 2023 – July 2023",
      category: "VA",
      description: [
        "Worked as Video Editor and Thumbnail Creator for two YouTube accounts.",
        "Edited YouTube videos including compilations and personal experience narratives."
      ]
    },
    {
      role: "Content Creator & Virtual Assistant",
      company: "AIM4ASSETS LLC",
      location: "Saint Petersburg, Florida, USA",
      date: "March 2022 – October 2022",
      category: "VA",
      description: [
        "Social Media Manager: Handled social media posting, content creation, and customer management.",
        "Graphic Designer & Video Editor: Designed brochures, book covers, documents, and edited video content for social media."
      ]
    },
    {
      role: "IT Intern & System Developer",
      company: "OFC IT Solutions and Technologies",
      location: "Binmaley, Pangasinan, Philippines",
      date: "March 2023 – July 2023",
      category: "IT",
      description: [
        "System Developer: Built custom functional systems for Technicians, Administrators, and Managers, including a Technical Service Report System.",
        "Technical Operations: Configured IVMS for biometrics and attendance tracking; handled printer installation & network config.",
        "Graphic & Social Media: Created tarpaulin designs, brochures, calling cards, and car wrapping designs."
      ]
    },
    {
      role: "Social Media Manager & Graphic Designer",
      company: "A & T Agricultural Machinery Spare Parts & Trading",
      location: "Mangaldan, Pangasinan, Philippines",
      date: "January 2021 – November 2021",
      category: "VA",
      description: [
        "Social Media Manager: Posted and managed all agricultural spare parts product listings on Facebook.",
        "Graphic Designer: Created Facebook page graphics, brochures, calling cards, and tarpaulins."
      ]
    },
    {
      role: "Project Manager & Senior ERP Developer",
      company: "Vertex Technology Corporation",
      location: "Philippines",
      date: "April 2025 – Present",
      category: "IT",
      description: [
        "Lead developer for enterprise ERP modules (Sales, Purchasing, Serialized Tracking, RFID Integration).",
        "Architected scalable web modules using Next.js, React, TypeScript, PHP Laravel, and MySQL databases."
      ]
    }
  ],
  projects: [
    {
      title: "Odoo ERP & E-Commerce Funnel",
      description: "Customized Odoo modules (CRM, Helpdesk, Contacts) and built high-converting e-commerce funnels for Green Marine.",
      tags: ["Odoo Framework", "CRM Workflows", "E-commerce", "Funnel Builder"],
      liveUrl: "#",
      githubUrl: "https://github.com/Erwinrillorta0830"
    },
    {
      title: "Technical Service Report System & Biometrics",
      description: "Built custom technical reporting systems for technicians and managers, integrated with IVMS attendance tracking.",
      tags: ["System Architecture", "MySQL", "IVMS Biometrics", "PHP/Laravel"],
      liveUrl: "#",
      githubUrl: "https://github.com/Erwinrillorta0830"
    },
    {
      title: "Automation & E-Commerce Management Suite",
      description: "Automated business workflows via Zapier & ChatGPT, managed multi-channel stores on Shopify, Etsy, and eBay with full SEO.",
      tags: ["Zapier", "ChatGPT Prompts", "Shopify", "Etsy/eBay SEO", "Canva/Ps"],
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

