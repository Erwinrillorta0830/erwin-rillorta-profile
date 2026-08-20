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
  category?: string;
  vectorType?: 'divi-erp' | 'field-management' | 'vos-sync' | 'industrial-distribution' | 'mmpa-erp';
  imageUrl?: string;
  images?: string[];
  metrics?: string[];
  features?: string[];
  featured?: boolean;
}

export interface DesignItem {
  id: string;
  title: string;
  category: 'Branding & Logos' | 'Social Media & Banners' | 'T-Shirt & Apparel' | 'Brochures & Print' | 'Video Editing';
  client?: string;
  tools: string[];
  description: string;
  imageUrl?: string;
  images?: string[];
  vectorStyle: 'logo' | 'banner' | 'tshirt' | 'brochure' | 'video';
  featured?: boolean;
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
  designs: DesignItem[];
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
  phone: "09673025852",
  location: "Mangaldan, Pangasinan, Philippines",
  portfolioUrl: "https://drive.google.com/drive/folders/1A8SuUnqbIZxGXgNMAYT1CSUqX7axHxKK",
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
      role: "Project Manager & Senior ERP Developer",
      company: "Vertex Technology Corporation",
      location: "Philippines",
      date: "April 2025 – July 2025",
      category: "IT",
      description: [
        "Lead developer for enterprise ERP modules (Sales, Purchasing, Serialized Tracking, RFID Integration).",
        "Architected scalable web modules using Next.js, React, TypeScript, PHP Laravel, and MySQL databases."
      ]
    },
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
      role: "Social Media Manager & Graphic Designer",
      company: "A & T Agricultural Machinery Spare Parts & Trading",
      location: "Mangaldan, Pangasinan, Philippines",
      date: "January 2021 – November 2021",
      category: "VA",
      description: [
        "Social Media Manager: Posted and managed all agricultural spare parts product listings on Facebook.",
        "Graphic Designer: Created Facebook page graphics, brochures, calling cards, and tarpaulins."
      ]
    }
  ],
  projects: [
    {
      title: "MMPA Thai Parts & Accessories - Enterprise ERP System",
      description: "A flagship multi-subsystem enterprise resource planning command center built for motor parts distribution. Features Executive BI & Analytics, Sales Management & POS Hub, MotorERP Supply Chain (SCM), Customer Relations (CRM), and Human Resources (HRM).",
      tags: ["Next.js", "TypeScript", "ERP Architecture", "POS & Invoicing", "Supply Chain SCM", "Tailwind CSS"],
      category: "ERP Systems",
      vectorType: "mmpa-erp",
      imageUrl: "/images/projects/mmpa_command_center.png",
      images: [
        "/images/projects/mmpa_command_center.png",
        "/images/projects/mmpa_bi_analytics.png",
        "/images/projects/mmpa_pos_terminal.png",
        "/images/projects/mmpa_pricing_tiers.png",
        "/images/projects/mmpa_supplier_scm.png"
      ],
      featured: true,
      metrics: ["5 Core Subsystems", "Executive BI & POS", "Multi-Tier Pricing"],
      features: [
        "Interactive Command Center connecting 5 subsystems (BI, CRM, HRM, Sales/POS, SCM)",
        "Executive BI & Analytics dashboard with live sales trends, inventory valuation (₱79.4M) & overdue receivables",
        "Sales Hub POS Terminal with walk-in checkout, promo rules & 4 customer price tiers",
        "MotorERP Supply Chain Management for Thai & local vendor procurement, POs & shipments",
        "Human Resources (HRM) duty tracking & Customer Relations (CRM) lead pipeline"
      ],
      liveUrl: "https://erp-system-prototype-j1hq.vercel.app/",
      githubUrl: "https://github.com/Erwinrillorta0830"
    },
    {
      title: "OFC IT Solutions - Field Service Management System",
      description: "A dedicated field service management system for OFC IT Solutions to handle job orders, technician dispatching, real-time service monitoring, machine repairs, time tracking, and automated PDF service report generation.",
      tags: ["Next.js", "TypeScript", "Field Service", "Job Orders", "Technician Dispatch", "PDF Generator"],
      category: "Operations & Field",
      vectorType: "field-management",
      imageUrl: "/images/projects/ofc_job_orders_dashboard.png",
      images: [
        "/images/projects/ofc_job_orders_dashboard.png",
        "/images/projects/ofc_employee_portal.png",
        "/images/projects/ofc_field_services.png",
        "/images/projects/ofc_job_order_report.png"
      ],
      featured: true,
      metrics: ["Job Order Dispatch", "Real-Time Tracking", "PDF Service Reports"],
      features: [
        "Centralized Employee Portal & Operations HUD for technician schedules and dispatch",
        "Real-time job order status monitoring (Pending, Assigned, In Progress, Completed)",
        "Technical Service Report builder with problem diagnostic logging & step-by-step resolution",
        "Time tracking engine recording exact technician labor hours per service ticket",
        "One-click PDF Technical Service Report generator & machine equipment history logs"
      ],
      liveUrl: "https://ofc-it-solutions-field-service-syst.vercel.app/",
      githubUrl: "https://github.com/Erwinrillorta0830"
    },
    {
      title: "Physical Serial & RFID Inventory Alignment System",
      description: "Comprehensive physical inventory audit and reconciliation platform. Integrates serial numbers, RFID scanners, and barcode readers to count stock, automatically align physical vs. system inventory levels, calculate variance costs, and export audit sheets.",
      tags: ["React", "TypeScript", "RFID Scanners", "Serial Tracking", "Inventory Audit", "REST API"],
      category: "Operations & Field",
      vectorType: "field-management",
      imageUrl: "/images/projects/physical_inventory_rfid_hud.png",
      images: [
        "/images/projects/physical_inventory_rfid_hud.png",
        "/images/projects/global_rfid_scanner.png",
        "/images/projects/physical_inventory_scope.png",
        "/images/projects/physical_serial_inventory.png"
      ],
      featured: true,
      metrics: ["RFID & Serial Scanners", "System Variance Audit", "Automated Inventory Alignment"],
      features: [
        "Pure scanner mode with Global RFID Scanner modal supporting hex-safe buffers & live toast feedback",
        "Real-time physical vs system count variance calculation and total cost difference auditing",
        "Multi-branch, supplier, category, and price-type scope filtering before loading product variants",
        "Product Finder with SKU grouping, barcode lookup, uncounted row filters, and zero-count tracking",
        "Go-to-offsetting workflow for instant inventory adjustment alignment & audit sheet printing"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Erwinrillorta0830"
    },
    {
      title: "Serialized Cylinder Assets & Logistics",
      description: "Specialized enterprise logistics platform for tracking industrial gas cylinders, serial movements, customer balances, condition status, and warehouse return logs.",
      tags: ["Next.js", "Serialized Inventory", "RFID / Barcode", "Logistics", "Tailwind CSS"],
      category: "Operations & Field",
      vectorType: "industrial-distribution",
      imageUrl: "/images/projects/cylinder_assets.png",
      images: ["/images/projects/cylinder_assets.png"],
      featured: true,
      metrics: ["Serialized Tracking", "Customer Balance Ledger", "Audit Trail Log"],
      features: [
        "Serialized cylinder asset tracking with condition logs",
        "Customer cylinder balance & deposit ledger",
        "Near-expiration & expired asset telemetry cards",
        "Barcode & RFID cylinder scanner integration"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Erwinrillorta0830"
    },
    {
      title: "Memo Approvals & Financial Authorization Queue",
      description: "Automated credit and debit memo approval pipeline with real-time backlog valuation, authorization discovery, and multi-tier authorization workflows.",
      tags: ["Next.js", "TypeScript", "Financial Memos", "Queue Engine", "PHP Laravel"],
      category: "ERP Systems",
      vectorType: "vos-sync",
      imageUrl: "/images/projects/memo_approvals.png",
      images: ["/images/projects/memo_approvals.png"],
      featured: false,
      metrics: ["Real-Time Queue", "Backlog Valuation", "Authorization Flow"],
      features: [
        "Active queue metrics & backlog valuation telemetry",
        "Customer & supplier authorization discovery search",
        "Credit and debit memo verification and posting",
        "Peak authorization and average valuation tracking"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Erwinrillorta0830"
    }
  ],
  designs: [
    {
      id: "des-1",
      title: "Upper Echelon Credit Restoration & Tradelines Campaign",
      category: "Social Media & Banners",
      client: "Upper Echelon Capital LLC (Florida, USA)",
      tools: ["Adobe Photoshop", "Canva", "Figma", "Illustrator"],
      description: "High-conversion credit repair campaign flyers, aged tradelines promotion graphics, luxury chauffeur advertising, and financial score package infographics for US clientele.",
      imageUrl: "/images/designs/ue_credit_restoration.jpg",
      images: [
        "/images/designs/ue_credit_restoration.jpg",
        "/images/designs/ue_tradelines_sale.jpg",
        "/images/designs/ue_black_label_chauffeur.jpg",
        "/images/designs/ue_cpn_approvals.jpg",
        "/images/designs/ue_credit_sweep.jpg"
      ],
      vectorStyle: "logo",
      featured: true
    },
    {
      id: "des-2",
      title: "Shopify E-Commerce Banners & Web Graphics",
      category: "Branding & Logos",
      client: "LESS (Smestad, Oslo, Norway)",
      tools: ["Adobe Photoshop", "Canva", "Shopify", "Figma"],
      description: "Custom e-commerce homepage banners, slideshow graphics, promotional web assets, and multi-language translated media slides for Scandinavian online retail brand.",
      imageUrl: "/images/designs/shopify_banner.png",
      images: ["/images/designs/shopify_banner.png"],
      vectorStyle: "banner",
      featured: true
    },
    {
      id: "des-3",
      title: "Custom T-Shirt & Apparel Merchandise Graphics",
      category: "T-Shirt & Apparel",
      client: "LESS (Oslo, Norway)",
      tools: ["Adobe Photoshop", "Illustrator", "Canva"],
      description: "Original t-shirt graphics, typography screen-printing layouts, urban apparel vector designs, and merchandise mockups for international fashion retail.",
      imageUrl: "/images/designs/tshirt_merch.png",
      images: ["/images/designs/tshirt_merch.png"],
      vectorStyle: "tshirt",
      featured: true
    },
    {
      id: "des-4",
      title: "Houston Black Label Luxury Chauffeur Campaign",
      category: "Social Media & Banners",
      client: "Upper Echelon / Experience Consultants",
      tools: ["Adobe Photoshop", "Illustrator", "Canva"],
      description: "Luxury red-and-black marketing banner advertising airport pickup & everyday driving featuring Cadillac Escalade and Mercedes Benz S-Class vehicles.",
      imageUrl: "/images/designs/ue_black_label_chauffeur.jpg",
      images: [
        "/images/designs/ue_black_label_chauffeur.jpg",
        "/images/designs/ue_credit_sweep.jpg",
        "/images/designs/ue_cpn_approvals.jpg"
      ],
      vectorStyle: "banner",
      featured: false
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
  const [data, setData] = useState<PortfolioData>(() => {
    if (typeof window === 'undefined') return defaultData;
    const saved = localStorage.getItem('portfolio-data-v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...defaultData, ...parsed };
      } catch {
        console.error("Failed to parse portfolio data");
      }
    } else {
      // Clear legacy cache keys
      localStorage.removeItem('portfolio-data');
      localStorage.removeItem('portfolio-data-v2');
    }
    return defaultData;
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  const updateData = (newData: Partial<PortfolioData>) => {
    const updated = { ...data, ...newData };
    setData(updated);
    localStorage.setItem('portfolio-data-v3', JSON.stringify(updated));
  };

  const resetData = () => {
    setData(defaultData);
    localStorage.removeItem('portfolio-data-v3');
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

