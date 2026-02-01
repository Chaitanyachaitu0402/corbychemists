import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Script from "next/script";
import {
  Code2,
  Laptop2,
  Database,
  Search,
  BrainCircuit,
  Briefcase,
  Users,
  Rocket,
  Zap,
  Wand2,
  TrendingUp,
  Cpu,
  Gem,
  Layers3,
  Boxes,
  UserCircle2,
  Facebook,
  X,
  Linkedin,
  Github,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Lock,
  Truck,
  Calendar,
  CalendarSearchIcon,
  CalendarDays,
  Package,
  Diameter,
  ShieldCheck,
  Stethoscope,
  Smartphone,
  Wallet,
  DollarSign,
  Heart,
  Clock,
  BadgeCheck,
  Printer,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Import our new components
import Navbar from "@/components/layout/Navbar";
import FloatingSVG from "@/components/ui/FloatingSVG";
import ServiceCard from "@/components/cards/ServiceCard";
import ProductCard from "@/components/cards/ProductCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import FaqItem from "@/components/sections/FaqItem";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import FloatingSVGGroup from "@/components/ui/FloatingSVGGroup";
import { FileText, Pill, HeartPulse } from "lucide-react";
import Heroimg from "../components/assets/hero-img.png";
import Image from "next/image";
import Why from "../components/assets/why.jpg";
import Caring from "../components/assets/caring.jpg";

// Dummy data for products and services

const jobs = [
  {
    role: "Pharmacist",
    type: "Full-Time",
    desc:
      "Licensed pharmacist responsible for dispensing medications, providing patient counseling, and ensuring quality pharmaceutical care.",
    requirements: [
      "Valid Pharmacist License",
      "Strong knowledge of medications and regulations",
      "Excellent patient counseling skills",
      "Attention to detail and accuracy",
      "Commitment to patient safety",
    ],
  },
  {
    role: "Pharmacy Technician",
    type: "Full-Time / Part-Time",
    desc:
      "Assist pharmacists in preparing and dispensing medications, managing inventory, and providing excellent customer service.",
    requirements: [
      "Pharmacy Technician Certification (preferred)",
      "High school diploma or equivalent",
      "Strong organizational skills",
      "Customer service experience",
      "Basic computer skills",
    ],
  },
  {
    role: "Customer Service Representative",
    type: "Part-Time",
    desc:
      "Front desk position handling customer inquiries, prescription drop-offs, and providing friendly service to patients.",
    requirements: [
      "Strong communication skills",
      "Customer-facing experience",
      "Ability to multitask",
      "Basic computer knowledge",
      "Friendly and professional attitude",
    ],
  },
  {
    role: "Delivery Driver",
    type: "Part-Time",
    desc:
      "Responsible for timely and safe delivery of prescriptions and medical supplies to community members.",
    requirements: [
      "Valid driver’s license",
      "Clean driving record",
      "Punctual and reliable",
      "Knowledge of local routes",
      "Customer-friendly behavior",
    ],
  },
];
const products = [
  {
    name: "KoshiFit",
    description: "Revolutionize fitness with AI-powered personal training.",
    category: "Mobile",
    icon: <TrendingUp className="w-6 h-6 text-red-400 mb-4" />,
    detailedDescription: `KoshiFit is a cutting-edge fitness application that leverages artificial intelligence to provide personalized workout plans and nutrition advice.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>AI-powered workout recommendations based on your goals and progress</li>
          <li>Real-time form correction and feedback</li>
          <li>Personalized nutrition plans integrated with fitness routines</li>
          <li>Community features to connect with fitness enthusiasts</li>
          <li>Sync with wearable devices for comprehensive health tracking</li>
        </ul>
        KoshiFit is designed to be your complete fitness companion, adapting to your needs and helping you achieve optimal results efficiently.`,
  },
  {
    name: "Accounting Suite",
    description: "Streamline finances with our intuitive accounting solution.",
    category: "Business",
    icon: <Briefcase className="w-6 h-6 text-green-400 mb-4" />,
    detailedDescription: `Our Accounting Suite is designed to simplify financial management for businesses of all sizes, from startups to enterprises.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Automated bookkeeping and transaction categorization</li>
          <li>Real-time financial reporting and analytics</li>
          <li>Tax preparation and compliance tools</li>
          <li>Multi-currency support for global businesses</li>
          <li>Role-based access control for team collaboration</li>
        </ul>
        Accounting Suite streamlines your financial operations, saving time and reducing errors while providing valuable insights into your business performance.`,
  },
  {
    name: "Finance API",
    description: "Integrate accounting seamlessly with our robust API.",
    category: "API",
    icon: <Cpu className="w-6 h-6 text-blue-400 mb-4" />,
    detailedDescription: `Our Finance API provides developers with a powerful way to integrate financial capabilities into their applications.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Comprehensive RESTful API with extensive documentation</li>
          <li>Secure transaction processing and data handling</li>
          <li>Webhooks for real-time event notifications</li>
          <li>SDK support for major programming languages</li>
          <li>Sandbox environment for development and testing</li>
        </ul>
        The Finance API enables seamless integration of financial services into your software ecosystem, with security and performance at its core.`,
  },
  {
    name: "LMS Platform",
    description: "Transform education with our innovative learning platform.",
    category: "Education",
    icon: <BrainCircuit className="w-6 h-6 text-yellow-400 mb-4" />,
    detailedDescription: `Our Learning Management System (LMS) Platform is built to enhance educational experiences in schools, universities, and corporate training environments.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Interactive course creation with multimedia support</li>
          <li>Progress tracking and adaptive learning paths</li>
          <li>Assessment tools with automatic grading</li>
          <li>Discussion forums and collaborative learning spaces</li>
          <li>Analytics dashboard for instructors and administrators</li>
        </ul>
        The LMS Platform creates engaging learning experiences, increases knowledge retention, and provides detailed insights into learner progress.`,
  },
  {
    name: "ServiceHub",
    description:
      "Enhance operations with our reliable service management solution.",
    category: "Business",
    icon: <Gem className="w-6 h-6 text-pink-400 mb-4" />,
    detailedDescription: `ServiceHub is our comprehensive service management platform designed to optimize operations and enhance customer satisfaction.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Service catalog management and request tracking</li>
          <li>Automated workflow management</li>
          <li>SLA monitoring and performance analytics</li>
          <li>Knowledge base for service delivery teams</li>
          <li>Client portal for service requests and status tracking</li>
        </ul>
        ServiceHub streamlines your service operations, improving efficiency and ensuring consistent service delivery to your customers.`,
  },
  {
    name: "StaffTrack",
    description:
      "Modernize HR with our efficient attendance and workforce management system.",
    category: "HR",
    icon: <Users className="w-6 h-6 text-purple-400 mb-4" />,
    detailedDescription: `StaffTrack is a modern solution for tracking employee attendance, time-off, and work hours with precision and ease.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Biometric and mobile check-in capabilities</li>
          <li>Leave management with approval workflows</li>
          <li>Scheduling tools and shift management</li>
          <li>Payroll integration and reporting</li>
          <li>Compliance tracking for labor regulations</li>
        </ul>
        StaffTrack simplifies workforce management, reduces administrative burden, and provides accurate data for payroll and compliance purposes.`,
  },
];

const services = [
  {
    title: "Free Delivery",
    icon: <Truck className="w-12 h-12 text-blue-400 mb-4" />,
    description:
      "Enjoy the convenience of free prescription delivery directly to your doorstep, ensuring your medications arrive safely and on time.",
    detailedDescription: `Enjoy the convenience of free prescription delivery directly to your doorstep, ensuring your medications arrive safely and on time..
      <br/><br/>
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Same-day delivery available</li>
        <li>Free for all prescriptions</li>
        <li>Serving local and surrounding areas</li>
        <li>Contactless delivery options</li>
        <li>Temperature-controlled transport</li>
      </ul>
      We prioritize your health and convenience by providing reliable and efficient delivery services, ensuring you never miss a dose.`,
  },
  {
  title: "Prescription Transfers",
  icon: <Pill className="w-12 h-12 text-indigo-400 mb-4" />,
  description:
    "Transfer your prescriptions to our pharmacy quickly and hassle-free, with no interruption to your ongoing treatment.",
  detailedDescription: `Our Prescription Transfer service makes switching pharmacies simple and stress-free.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>Fast and secure prescription transfers</li>
      <li>No gaps in medication availability</li>
      <li>Coordination with your current pharmacy and doctor</li>
      <li>Insurance verification and assistance</li>
      <li>Personal support throughout the transfer process</li>
    </ul>
    Our team ensures your medications are transferred safely and efficiently, so you can continue your care without delays or complications.`,
},

{
  title: "Blister Packaging",
  icon: <Package className="w-12 h-12 text-green-400 mb-4" />,
  description:
    "Simplify your medication routine with organized blister packaging designed for safety, accuracy, and convenience.",
  detailedDescription: `Our Blister Packaging service helps patients take the right medication at the right time, every day.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>Weekly or monthly medication packs</li>
      <li>Clearly labeled doses by day and time</li>
      <li>Reduced risk of missed or incorrect doses</li>
      <li>Ideal for seniors and long-term care patients</li>
      <li>Support for caregivers and family members</li>
    </ul>
    This service improves medication adherence, safety, and peace of mind for patients managing multiple prescriptions.`,
},

{
  title: "Health Consultations",
  icon: <HeartPulse className="w-12 h-12 text-red-400 mb-4" />,
  description:
    "Receive professional health advice and medication guidance through one-on-one consultations with our licensed pharmacists.",
  detailedDescription: `Our Health Consultation service provides personalized support for your health and medication needs.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>Medication reviews and safety checks</li>
      <li>Guidance on side effects and interactions</li>
      <li>Support for chronic health conditions</li>
      <li>Lifestyle and wellness advice</li>
      <li>Private and confidential consultations</li>
    </ul>
    We take the time to listen and provide clear, trusted advice to help you make informed decisions about your health.`,
},

{
  title: "Diabetes Care",
  icon: <Diameter className="w-12 h-12 text-purple-400 mb-4" />,
  description:
    "Comprehensive diabetes care to support medication management, monitoring, and long-term health control.",
  detailedDescription: `Our Diabetes Care service is designed to help patients manage diabetes safely and effectively.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>Medication counseling and insulin guidance</li>
      <li>Blood sugar monitoring advice</li>
      <li>Diet and lifestyle support</li>
      <li>Education on managing complications</li>
      <li>Ongoing, personalized care support</li>
    </ul>
    We work closely with patients to promote better control, improved quality of life, and long-term wellbeing.`,
},

  // {
  //   title: "AI & ML",
  //   icon: <BrainCircuit className="w-12 h-12 text-pink-400 mb-4" />,
  //   description:
  //     "Developing cutting-edge AI-powered solutions to transform your business and gain a competitive edge.",
  //   detailedDescription: `Our AI & ML Solutions help businesses leverage the power of artificial intelligence and machine learning to gain insights, automate processes, and create innovative products.
  //     <br/><br/>
  //     <strong>What We Offer:</strong>
  //     <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
  //       <li>Custom AI model development and training</li>
  //       <li>Natural Language Processing (NLP) integration</li>
  //       <li>Computer Vision solutions</li>
  //       <li>Predictive analytics and forecasting models</li>
  //       <li>AI strategy consulting and implementation roadmaps</li>
  //     </ul>
  //     We turn complex data into actionable intelligence, helping you make data-driven decisions that drive growth and innovation.`,
  // },
  // {
  //   title: "Automation",
  //   icon: <Search className="w-12 h-12 text-yellow-400 mb-4" />,
  //   description:
  //     "Ensuring the highest standards of quality through rigorous testing and automated quality assurance processes.",
  //   detailedDescription: `Our QA & Automation service ensures your software meets the highest standards of reliability, performance, and user experience.
  //     <br/><br/>
  //     <strong>What We Offer:</strong>
  //     <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
  //       <li>Comprehensive test strategy and planning</li>
  //       <li>Manual and automated testing implementation</li>
  //       <li>Performance, security, and usability testing</li>
  //       <li>Continuous integration testing</li>
  //       <li>Test automation framework development</li>
  //     </ul>
  //     We implement robust testing methodologies and automation tools to identify issues early, reduce development costs, and deliver superior software quality.`,
  // },
  // {
  //   title: "Consulting",
  //   icon: <Briefcase className="w-12 h-12 text-orange-400 mb-4" />,
  //   description:
  //     "Providing expert guidance and strategic advice to drive your business growth and achieve your technology goals.",
  //   detailedDescription: `Our IT consulting services provide expert guidance to help you navigate complex technological and business challenges.
  //     <br/><br/>
  //     <strong>What We Offer:</strong>
  //     <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
  //       <li>Technology strategy and roadmap development</li>
  //       <li>Digital transformation planning and implementation</li>
  //       <li>IT infrastructure assessment and optimization</li>
  //       <li>Vendor selection and management</li>
  //       <li>Technology risk assessment and security planning</li>
  //     </ul>
  //     Our experienced consultants work closely with your team to understand your business objectives and develop technology strategies that deliver tangible results.`,
  // },
  // {
  //   title: "DevOps & Cloud",
  //   icon: <Laptop2 className="w-12 h-12 text-blue-500 mb-4" />,
  //   description:
  //     "Enhancing the speed, efficiency, and scalability of your systems with modern DevOps practices and cloud solutions.",
  //   detailedDescription: `Our DevOps & Cloud service helps identify and implement best practices for continuous integration, delivery, and cloud infrastructure.
  //     <br/><br/>
  //     <strong>What We Offer:</strong>
  //     <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
  //       <li>Cloud migration strategy and implementation</li>
  //       <li>CI/CD pipeline development and optimization</li>
  //       <li>Infrastructure as Code (IaC) implementation</li>
  //       <li>Container orchestration with Kubernetes</li>
  //       <li>Cloud cost optimization and management</li>
  //     </ul>
  //     We help organizations adopt DevOps culture and cloud technologies to increase deployment frequency, reduce time to market, and improve system reliability.`,
  // },
];

const testimonials = [
  {
    name: "Sarah M.",
    company: "Local Resident",
    quote:
      "The team at Corby Chemists genuinely cares. They take the time to explain my medications and always remember me by name. It feels reassuring to have a pharmacy that treats you like family",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=JohnSmith&style=circle&backgroundColor=ffaabb",
  },
  {
    name: "James R.",
    company: "Local Resident",
    quote:
      "Prescription refills are always fast and hassle-free. Their delivery service has been a lifesaver for my parents, and we never have to worry about missed medications.",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=JaneDoe&style=circle&backgroundColor=aabbff",
  },
  {
    name: "Anita K.",
    company: "Long-term Customer",
    quote:
      "I’ve been coming here for years because I trust them completely. From advice to availability, Corby Chemists consistently delivers excellent service with a personal touch.",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidLee&style=circle&backgroundColor=bbffaa",
  },
];

const teamMembers = [
  {
    name: "Daryl",
    title: "CEO",
    image: "/teams/1.png",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Mark",
    title: "CTO",
    image: "/teams/2.png",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Ching",
    title: "Software Architect",
    image: "/teams/3.png",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Loop",
    title: "Software Engineer",
    image: "/teams/4.png",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
];

const faqs = [
  {
    question: "Do you offer free prescription delivery?",
    answer:
      "Yes, we offer free prescription delivery within our local service area. Our delivery service ensures your medicines reach you safely and on time, especially for patients who cannot visit the pharmacy in person.",
  },
  {
    question: "How can I transfer my prescription to your pharmacy?",
    answer:
      "Transferring your prescription is easy. Simply provide us with your current pharmacy details, and our team will handle the entire transfer process for you with no hassle.",
  },
  {
    question: "Do you accept insurance plans?",
    answer:
      "Yes, we accept most major insurance plans. If you are unsure whether your insurance is covered, feel free to contact us and our staff will be happy to assist you.",
  },
  {
    question: "Can I consult a pharmacist for health advice?",
    answer:
      "Absolutely. Our licensed pharmacists are always available to provide guidance on medications, dosage, side effects, and general health concerns. Your health and safety are our top priorities.",
  },
  {
    question: "Do you provide services for diabetes care?",
    answer:
      "Yes, we offer dedicated diabetes care services including medication counseling, blood sugar monitoring guidance, lifestyle advice, and ongoing support to help manage diabetes effectively.",
  },
  {
    question: "How long does it take to refill a prescription?",
    answer:
      "Most prescription refills are ready within a short time. For repeat prescriptions, we also offer refill reminders and synchronized medication pickup to save you time.",
  },
];


// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  whileHover: {
    scale: 1.03,
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const HomePage: React.FC = () => {
  const [activeJob, setActiveJob] = useState<any>(null);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Add instant scrolling
  useEffect(() => {
    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const yOffset = -80; // Offset for fixed header
            const y =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "auto" });
          }
        }
      });
    });

    // Clean up
    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen">
      <Head>
        <title>Corby Chemists - Delivering Trusted Pharmacy Care</title>
        <meta
          name="description"
          content="Delivering trusted pharmacy care, quality medications, and personalized health services to our community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Corby Chemists, Delivering trusted pharmacy care, quality medications, and personalized health services to our community."
        />
        <meta
          property="og:title"
          content="Corby Chemists - Delivering trusted pharmacy care, quality medications, and personalized health services to our community."
        />
        <meta
          property="og:description"
          content="Delivering trusted pharmacy care, quality medications, and personalized health services to our community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CorbyChemists.com" />
        <meta
          property="og:image"
          content="https://CorbyChemists.com/og-image.jpg"
        />
        <meta property="og:site_name" content="CorbyChemists" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CorbyChemists - Crafting Digital Excellence"
        />
        <meta
          name="twitter:description"
          content="Leading software development company in Birtamode, Jhapa, Nepal offering innovative solutions in web development, mobile apps, and AI services."
        />
        <meta
          name="twitter:image"
          content="https://CorbyChemists.com/og-image.jpg"
        />

        <meta name="geo.region" content="NP-P1" />
        <meta name="geo.placename" content="Birtamode, Jhapa" />
        <meta name="geo.position" content="26.6418;87.9927" />
        <meta name="ICBM" content="26.6418, 87.9927" />

        <link rel="canonical" href="https://CorbyChemists.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <header
  id="home"
  className="
    container mx-auto px-6 lg:px-8
    pt-32
    flex flex-col lg:flex-row
    items-center justify-between
    gap-32 lg:gap-24
    relative overflow-hidden
    min-h-[90vh]
  "
>
  {/* Soft background glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 blur-[160px]" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[160px]" />
  </div>

  {/* LEFT CONTENT */}
  <div className="max-w-xl relative z-10 text-left mx-4 md:mx-8 mt-10">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
                    bg-white/10 backdrop-blur border border-white/20
                    text-sm text-gray-200">
      ⭐ Personal Service, Affordable Care
    </div>

    {/* Heading */}
    <h1 className="text-5xl sm:text-6xl font-heading font-semibold leading-tight mb-6">
      <span className="text-gray-100">Your Neighborhood</span><br />
      <span className="bg-gradient-to-r from-blue-400 to-purple-400
                       text-transparent bg-clip-text">
        Pharmacy
      </span>
    </h1>

    {/* Description */}
    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
      Licensed pharmacists providing fast refills, genuine medicines,
      and trusted advice — caring for your family and community every day.
    </p>

    {/* Trust points */}
    <div className="flex flex-wrap gap-3 mb-8">
  {[
    {
      label: "Licensed Pharmacists",
      icon: <ShieldCheck className="w-4 h-4 text-blue-400" />,
    },
    {
      label: "Most Insurances Accepted",
      icon: <CreditCard className="w-4 h-4 text-purple-400" />,
    },
    {
      label: "Free Prescription Delivery",
      icon: <Truck className="w-4 h-4 text-green-400" />,
    },
  ].map((item) => (
    <div
      key={item.label}
      className="flex items-center gap-2
                 px-4 py-2 rounded-lg
                 bg-white/10 backdrop-blur
                 border border-white/20
                 text-gray-200 text-sm"
    >
      {item.icon}
      <span>{item.label}</span>
    </div>
  ))}
</div>

    {/* Mini stats */}
    <div className="flex gap-6 mb-10 text-sm text-gray-300">
      <div>
        <p className="text-white font-semibold text-xl">15+</p>
        <p>Years Serving</p>
      </div>
      <div>
        <p className="text-white font-semibold text-xl">10k+</p>
        <p>Happy Patients</p>
      </div>
      <div>
        <p className="text-white font-semibold text-xl">Same Day</p>
        <p>Prescription Ready</p>
      </div>
    </div>

    {/* CTAs */}
    <div className="flex flex-wrap gap-4">
      <a href="#services">
        <button
          className="px-8 py-4 rounded-xl text-white font-semibold text-lg
                     bg-gradient-to-r from-blue-500 to-purple-600
                     hover:from-blue-600 hover:to-purple-700
                     transition shadow-lg"
        >
          Explore Services →
        </button>
      </a>

      <a href="#about">
        <button
          className="px-8 py-4 rounded-xl text-gray-200 font-semibold text-lg
                     border border-white/30 hover:bg-white/10 transition"
        >
          About Us
        </button>
      </a>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="w-full md:w-1/2 relative px-4 md:px-6">

    <div className="flex justify-center md:justify-end">
      <div className="relative w-full max-w-[560px] aspect-[4/3]">

        {/* Glow */}
        <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-[40px]" />

        {/* Background layer */}
        <div
          className="absolute -top-4 -left-4 w-full h-full
                     rounded-[32px]
                     bg-white/10 backdrop-blur-sm
                     border border-white/10"
        />

        {/* Image */}
        <div className="relative w-full h-full rounded-[28px] overflow-hidden">
          <Image
            src={Heroimg}
            alt="Pharmacist assisting customer"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-tr
                          from-black/50 via-black/20 to-transparent" />

          <div className="absolute inset-0 rounded-[28px]
                          border border-white/20" />

          {/* Experience badge */}
          <div className="absolute top-3 right-3
                          bg-violet-950/90 backdrop-blur-md
                          border border-white/30
                          px-3 py-1.5 rounded-lg
                          text-xs sm:text-sm text-white font-semibold">
            15+ Years Serving<br />the Community
          </div>

          {/* Quote */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2
                          bg-violet-950/90 backdrop-blur-md
                          border border-white/20
                          px-4 py-1.5 rounded-full
                          text-xs sm:text-sm text-gray-200">
            “Your Health. Our Priority.”
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


      {/* About Us Section */}
      <section
        id="about"
        className="container mx-auto px-6 lg:px-8 py-36 relative overflow-hidden"
      >
        <FloatingSVGGroup
          elements={[
            {
              icon: <Gem className="text-purple-400/90" />,
              position: { top: "20%", right: "15%" },
              size: "xl",
              opacity: 0.8,
              delay: 0.3,
            },
            {
              icon: <Rocket className="text-blue-400/90" />,
              position: { bottom: "15%", left: "15%" },
              size: "lg",
              opacity: 0.8,
              delay: 0.7,
            },
            {
              icon: <BrainCircuit className="text-pink-400/90" />,
              position: { top: "40%", left: "25%" },
              size: "md",
              opacity: 0.7,
              delay: 0.5,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                About Us
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>

            <div className="space-y-6 text-lg text-gray-300">
              <h1 className="text-2xl font-bold">Your Local Pharmacy, Built on Trust and Care</h1>
              <p>
                At Corby Chemists, we believe a pharmacy should be more than just a place to collect medicines — it should be a place where you feel supported, understood, and cared for.
              </p>
              <p>
                For over 15 years, we have proudly served our local community, providing reliable prescriptions, genuine medicines, and professional guidance tailored to each individual. As a community-focused pharmacy, we take the time to listen, explain, and ensure every customer receives the care they deserve.
              </p>
              <p>
                Our experienced and licensed pharmacists work closely with patients, carers, and healthcare professionals to deliver safe, effective, and personalised healthcare solutions. Whether it’s a regular prescription, over-the-counter advice, or ongoing medication support, your health is always our priority.
              </p>
              <p className="text-xl font-semibold text-white">
                💊 What We Stand For :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <b>Personalised Care</b> – We treat every customer as an individual, not a number.
                </li>
                <li><b>Trust & Transparency</b> – Genuine medicines, clear advice, and honest guidance.</li>
                <li><b>Community Commitment</b> – Proudly supporting families and patients every day.</li>
                <li>
                  <b>Convenience & Reliability</b> – Fast refills, free delivery, and dependable service.
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <a href="#services">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white
                                        hover:from-blue-600 hover:to-purple-600 transition-all duration-300
                                        shadow-lg hover:shadow-xl px-8 py-4 rounded-full font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById("services");
                    if (targetElement) {
                      const yOffset = -80;
                      const y =
                        targetElement.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "auto" });
                    }
                  }}
                >
                  Explore Our Services
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-500"></div>

              {/* Main card content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Why Choose Corby Chemists?
                  </h3>
                </div>

                <div className="space-y-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Unwavering Commitment to Your Health
                      </h4>
                      <p className="text-gray-300 mt-2">
                        We put patient safety and wellbeing first in everything we do. From dispensing prescriptions to offering professional advice, our licensed pharmacists ensure every service meets the highest standards of care.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <BrainCircuit className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Affordable, Honest Pricing
                      </h4>
                      <p className="text-gray-300 mt-2">
                       Quality healthcare should be accessible. We offer fair pricing, accept most insurance plans, and provide cost-effective alternatives whenever possible without compromising on safety or quality.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="p-3 bg-pink-500/20 rounded-xl">
                      <Gem className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Trusted Local Expertise
                      </h4>
                      <p className="text-gray-300 mt-2">
                        As a community pharmacy with over 15 years of experience, we understand the unique needs of our neighbourhood. Our team combines local knowledge with professional pharmacy standards you can rely on.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Personalised Patient Care
                      </h4>
                      <p className="text-gray-300 mt-2">
                        No two patients are the same. We take time to listen, explain medications clearly, and support you with tailored advice because personal care makes a real difference.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="container mx-auto px-6 lg:px-8 py-24 relative overflow-hidden"
      >
        <FloatingSVGGroup
          elements={[
            {
              icon: <Cpu className="text-blue-400/80" />,
              position: { top: "10%", left: "5%" },
              size: "xl",
              opacity: 0.7,
              delay: 0.5,
            },
            {
              icon: <Code2 className="text-purple-400/80" />,
              position: { bottom: "20%", right: "5%" },
              size: "lg",
              opacity: 0.7,
              delay: 0.9,
            },
            {
              icon: <Layers3 className="text-green-400/80" />,
              position: { bottom: "40%", left: "30%" },
              size: "md",
              opacity: 0.6,
              delay: 1.3,
            },
          ]}
        />

        <h2 className="text-4xl font-bold text-center text-white mb-10 relative z-[1] font-heading">
          Our Services
          <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h2>
                  <h1 className="text-center mb-10 mt-0 text-3xl font-bold">Customized Care,Tailored Solutions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-[1]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="container mx-auto px-6 lg:px-8 py-24 relative overflow-hidden"
      >
        <div className="relative">
    <FloatingSVGGroup
      elements={[
        {
          icon: <Boxes className="text-orange-400/80" />,
          position: { top: "15%", left: "5%" },
          size: "lg",
          opacity: 0.7,
          delay: 0.8,
        },
        {
          icon: <Database className="text-purple-400/80" />,
          position: { bottom: "25%", right: "8%" },
          size: "lg",
          opacity: 0.7,
          delay: 1.2,
        },
        {
          icon: <Wand2 className="text-pink-400/80" />,
          position: { top: "40%", right: "20%" },
          size: "md",
          opacity: 0.7,
          delay: 0.6,
        },
      ]}
    />
  </div>

  {/* Section Heading */}
  <h2 className="text-4xl font-bold text-center text-white mb-20 relative font-heading">
    Why Choose Us?
    <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
  </h2>

  {/* MAIN TWO COLUMN LAYOUT (matches image) */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-[1]">

    {/* LEFT – IMAGE BLOCK */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <Image
        src={Why}
        alt="Pharmacy Products"
        className="w-full h-full object-cover"
      />

      

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur
                      grid grid-cols-3 text-center py-6">
        <div>
          <p className="text-xl font-bold text-white">15+</p>
          <p className="text-sm text-gray-300">Years of Service</p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">10K+</p>
          <p className="text-sm text-gray-300">Happy Customers</p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">24hr</p>
          <p className="text-sm text-gray-300">Fast Support</p>
        </div>
      </div>
    </div>

    {/* RIGHT – CONTENT BLOCK */}
    <div className="space-y-10">

      <div>
        <span className="uppercase tracking-widest text-sm text-gray-400">
          Why Our Products
        </span>
        <h3 className="text-4xl font-bold text-white mt-3">
          Quality You Can Trust
        </h3>
        <p className="text-gray-400 mt-5 leading-relaxed max-w-xl">
          We provide a wide range of trusted pharmacy products sourced from
          reliable manufacturers. Every product meets strict quality standards
          to ensure safety, effectiveness, and peace of mind for our customers.
        </p>
      </div>

     {/* FEATURE LIST (with icons) */}
<div className="space-y-5">

  {/* Genuine Medicines */}
  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
    <div className="p-3 rounded-xl bg-white/10">
      <ShieldCheck className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-2">
        Genuine Medicines
      </h4>
      <p className="text-gray-400 text-sm">
        All products are sourced from authorized suppliers and verified
        for authenticity.
      </p>
    </div>
  </div>

  {/* Wide Product Range */}
  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
    <div className="p-3 rounded-xl bg-white/10">
      <Boxes className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-2">
        Wide Product Range
      </h4>
      <p className="text-gray-400 text-sm">
        From daily essentials to specialized healthcare products, we have
        everything you need.
      </p>
    </div>
  </div>

  {/* Expert Guidance */}
  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
    <div className="p-3 rounded-xl bg-white/10">
      <Stethoscope className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-2">
        Expert Guidance
      </h4>
      <p className="text-gray-400 text-sm">
        Our pharmacists help you choose the right products based on your
        health needs.
      </p>
    </div>
  </div>

  {/* Easy Availability */}
  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
    <div className="p-3 rounded-xl bg-white/10">
      <Truck className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-2">
        Easy Availability
      </h4>
      <p className="text-gray-400 text-sm">
        Products available in-store and through quick delivery options.
      </p>
    </div>
  </div>

</div>
    </div>
  </div>

        {/* Open Source Section */}
        <div className="mt-32 relative z-0">
          {/* Header */}
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
      Caring Beyond Prescriptions
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
      At Corby Chemists, our commitment goes beyond dispensing medicines.
      We invest in community programs, digital tools, and care initiatives
      designed to make your health journey simpler, safer, and more personal.
    </p>
  </motion.div>

  {/* Main Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* LEFT – IMAGE / TRUST PANEL */}
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="lg:col-span-1 relative rounded-3xl overflow-hidden
                 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20
                 border border-white/10 shadow-xl"
    >
      <Image
        src={Caring}
        alt="Pharmacist assisting customer"
        className="w-full h-full object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-end p-8">
        <h3 className="text-2xl font-semibold text-white mb-2">
          Trusted Local Care
        </h3>
        <p className="text-gray-300 text-sm">
          Friendly pharmacists, familiar faces, and care you can rely on —
          right in your neighborhood.
        </p>
      </div>
    </motion.div>

    {/* RIGHT – INITIATIVES */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

      {[
        {
          title: "Medication Safety Programs",
          desc: "We actively educate patients on correct medication usage, side effects, and interactions to ensure safe and effective treatment.",
          icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
        },
        {
          title: "Digital Prescription Support",
          desc: "Easy prescription refills, reminders, and records help you stay on track with your treatment without stress.",
          icon: <Smartphone className="w-6 h-6 text-purple-400" />,
        },
        {
          title: "Community Health Awareness",
          desc: "We regularly support awareness initiatives for diabetes, heart health, vaccinations, and preventive care.",
          icon: <HeartPulse className="w-6 h-6 text-red-400" />,
        },
        {
          title: "Affordable Care Access",
          desc: "From insurance support to cost-effective alternatives, we help make quality healthcare accessible for everyone.",
          icon: <Wallet className="w-6 h-6 text-green-400" />,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="p-8 rounded-2xl
                     bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20
                     border border-white/10 backdrop-blur-md shadow-lg"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/10">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold text-white">
              {item.title}
            </h4>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Bottom Trust Stats */}
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
  >
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-3xl font-bold text-white">15+</h3>
      <p className="text-gray-400 text-sm">Years Serving the Community</p>
    </div>
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-3xl font-bold text-white">10k+</h3>
      <p className="text-gray-400 text-sm">Happy Patients</p>
    </div>
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-3xl font-bold text-white">24/7</h3>
      <p className="text-gray-400 text-sm">Care & Support</p>
    </div>
  </motion.div>
        </div>
      </section>

      {/* Careers Section */}
<section
  id="team"
  className="container mx-auto px-6 lg:px-8 py-36 relative overflow-hidden"
>
  <FloatingSVGGroup
    elements={[
      {
        icon: <Users className="text-white" />,
        position: { top: "12%", left: "6%" },
        size: "xl",
        opacity: 0.7,
        delay: 0.4,
      },
      {
        icon: <UserCircle2 className="text-white" />,
        position: { bottom: "15%", right: "6%" },
        size: "xl",
        opacity: 0.7,
        delay: 0.7,
      },
    ]}
  />

  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
      Careers at Corby Chemists
    </h2>
    <p className="text-gray-300 text-lg">
      Join Our Healthcare Team
    </p>
    <p className="text-gray-400 mt-2">📍 Bronx, NY</p>
  </motion.div>

  {/* Why Join */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto mb-24 p-10 rounded-3xl
               bg-white/5 border border-white/10 text-center"
  >
    <h3 className="text-2xl font-semibold text-white mb-4">
      Why Corby Chemists?
    </h3>
    <p className="text-gray-300 leading-relaxed">
      Join a dedicated healthcare team committed to serving the Bronx, NY
      community with compassion, expertise, and personalized pharmaceutical
      care.
    </p>
  </motion.div>

  {/* Benefits */}
<div className="mb-28">
  <h3 className="text-3xl font-semibold text-white text-center mb-12">
    Benefits & Perks
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {[
      {
        label: "Competitive Salary",
        icon: <DollarSign className="w-6 h-6 text-white" />,
      },
      {
        label: "Health Insurance",
        icon: <Heart className="w-6 h-6 text-white" />,
      },
      {
        label: "Paid Time Off",
        icon: <Calendar className="w-6 h-6 text-white" />,
      },
      {
        label: "Professional Development",
        icon: <TrendingUp className="w-6 h-6 text-white" />,
      },
      {
        label: "Flexible Scheduling",
        icon: <Clock className="w-6 h-6 text-white" />,
      },
      {
        label: "Employee Discounts",
        icon: <BadgeCheck className="w-6 h-6 text-white" />,
      },
    ].map((item, index) => (
      <div
        key={index}
        className="p-6 rounded-2xl text-center
                   bg-white/5 border border-white/10
                   flex flex-col items-center gap-4"
      >
        {/* Icon */}
       <div className="w-12 h-12 rounded-full 
                bg-white/10 
                backdrop-blur-md 
                border border-white/20
                shadow-lg
                flex items-center justify-center">
  {item.icon}
</div>


        {/* Text */}
        <p className="text-white font-medium text-sm text-center">
          {item.label}
        </p>
      </div>
    ))}
  </div>

  <p className="text-xs text-gray-400 text-center mt-4">
    T&amp;C Apply
  </p>
</div>

  {/* Core Values */}
  <div className="mb-28 text-center">
    <h3 className="text-3xl font-semibold text-white mb-10">
      Our Core Values
    </h3>

    <div className="flex flex-wrap justify-center gap-4">
      {[
        "Community First",
        "Excellence in Care",
        "Team Collaboration",
        "Continuous Learning",
      ].map((value, index) => (
        <span
          key={index}
          className="px-6 py-3 rounded-full  bg-white/10 
                backdrop-blur-md 
                border border-white/20
                shadow-lg text-white text-sm font-semibold"
        >
          {value}
        </span>
      ))}
    </div>
  </div>

  {/* Open Positions */}
      <div className="mb-28">
        <h3 className="text-3xl font-semibold text-white text-center mb-12">
          Current Openings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xl font-semibold text-white">
                  {job.role}
                </h4>
                <span className="text-sm text-white">{job.type}</span>
              </div>

              <p className="text-gray-300 text-sm mb-6">{job.desc}</p>

              <div className="flex gap-4">
                <button
                  onClick={() => setActiveJob(job)}
                  className="text-sm text-white hover:underline"
                >
                  View Requirements
                </button>

                <a
  href={`mailto:careers@corbychemists.com?subject=Application for ${job.role}`}
  className="ml-auto px-5 py-2 rounded-lg bg-white/10 
             backdrop-blur-md border border-white/20
             shadow-lg text-white text-sm font-semibold
             inline-flex items-center justify-center"
>
  Apply Now
</a>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveJob(null)}
          />

          {/* Modal */}
          <div className="relative z-50 max-w-2xl w-full mx-6 
                          rounded-3xl bg-gradient-to-br 
                          from-[#0b1220] via-[#0f172a] to-[#020617]
                          border border-white/10 shadow-2xl p-8">

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold text-white">
                {activeJob.role}
              </h3>
              <button
                onClick={() => setActiveJob(null)}
                className="w-9 h-9 rounded-full bg-white/10 
                           hover:bg-white/20 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              {activeJob.desc}
            </p>

            {/* Requirements */}
            <h4 className="text-lg font-semibold text-white mb-4">
              What We’re Looking For:
            </h4>

            <ul className="space-y-3">
              {activeJob.requirements.map((req: string, i: number) => (
                <li key={i} className="flex gap-3 text-gray-200 text-sm">
                  <span className="text-blue-400">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

  {/* CTA */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center p-12 rounded-3xl  bg-white/10 
                backdrop-blur-md 
                border border-white/20
                shadow-lg"
  >
    <h3 className="text-3xl font-bold text-white mb-4">
      Ready to Join Our Team?
    </h3>
    <p className="text-white/90 mb-8">
      Make a difference in the Bronx, NY community
    </p>

    <div className="flex justify-center gap-6">
      <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="px-6 py-3 rounded-lg bg-white text-black font-semibold"
>
  Contact Us
</button>

      {/* <button className="px-6 py-3 rounded-lg border border-white text-white font-semibold">
        View All Positions
      </button> */}
    </div>
  </motion.div>
</section>


      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-0">
          <FloatingSVGGroup
            elements={[
              {
                icon: <Users className="text-purple-400/80" />,
                position: { top: "10%", right: "5%" },
                size: "lg",
                opacity: 0.7,
                delay: 0.3,
              },
              {
                icon: <Gem className="text-blue-400/80" />,
                position: { bottom: "15%", left: "8%" },
                size: "md",
                opacity: 0.7,
                delay: 0.5,
              },
            ]}
          />

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 relative z-0"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-blue-400">Clients Say</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Hear from businesses that have trusted us with their projects.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-0">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative overflow-hidden bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-md"></div>
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-gray-950/50 backdrop-blur-md py-24 rounded-b-[4rem] border-b border-white/10 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <FloatingSVGGroup
            elements={[
              {
                icon: <Boxes className="text-blue-400/90" />,
                position: { top: "20%", right: "10%" },
                size: "xl",
                opacity: 0.8,
                delay: 0.7,
              },
              {
                icon: <Search className="text-purple-400/90" />,
                position: { bottom: "25%", left: "10%" },
                size: "lg",
                opacity: 0.7,
                delay: 0.4,
              },
            ]}
          />

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Frequently <span className="text-blue-400">Asked Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our Pharmacy.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="py-24 relative overflow-hidden bg-gray-950/60 backdrop-blur-md rounded-b-[4rem] mb-10 mt-10 rounded-t-[4rem] border-t border-white/10"
>
  <div className="container mx-auto px-6 lg:px-8 relative z-10">

    {/* Heading */}
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
        Get In Touch
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
        Visit Us Today
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Stop by or give us a call. Our friendly staff is here to help with all
        your pharmacy needs.
      </p>
      <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
    </motion.div>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Contact Info */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8">
        <h3 className="text-xl font-semibold text-white mb-6">
          Contact Information
        </h3>

        <div className="space-y-6">
          {[
            {
              icon: <Phone className="w-5 h-5 text-blue-400" />,
              label: "Phone",
              value: "+12127556632",
            },
            {
              icon: <Printer className="w-5 h-5 text-purple-400" />,
              label: "Fax",
              value: "+12127556632",
            },
            {
              icon: <Mail className="w-5 h-5 text-pink-400" />,
              label: "Email",
              value: "Corbychemists@gmail.com",
            },
            {
              icon: <MapPin className="w-5 h-5 text-green-400" />,
              label: "Address",
              value: "988 1st Ave, New York, NY 10022, United States",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400">
                  {item.label}
                </p>
                <p className="text-white font-medium text-sm">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Store Hours */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">
            Store Hours
          </h3>
        </div>

        <div className="space-y-4 text-gray-300 text-sm">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="px-3 py-1 rounded-full bg-white/10 
             backdrop-blur-md border border-white/20
             shadow-lg text-white">
              9:00 AM - 6:00 PM
            </span>
          </div>

          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="px-3 py-1 rounded-full bg-white/10 
             backdrop-blur-md border border-white/20
             shadow-lg text-white">
              9:00 AM - 2:00 PM
            </span>
          </div>

          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400">
              Closed
            </span>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-white/10 text-gray-300 text-sm">
          <strong className="text-white">Note:</strong> Walk-ins are always
          welcome. Most prescriptions ready in 10–15 minutes.
        </div>
      </div>

      {/* Map */}
      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md h-[420px]">
        <iframe
          title="Corby Chemists Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2525980388073!2d-73.9640174!3d40.7564687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e1473e8e9f%3A0x7753b411cfad2edb!2sCorby%20Chemists%20Pharmacy!5e0!3m2!1sen!2sin!4v1769096520979!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-20">
      <a
        href="https://www.google.com/maps/place/Corby+Chemists+Pharmacy/@40.7564687,-73.9640174,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258e1473e8e9f:0x7753b411cfad2edb!8m2!3d40.7564687!4d-73.9640174!16s%2Fg%2F1tgpc5k6!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                   bg-gradient-to-r from-blue-500 to-purple-500
                   text-white font-semibold shadow-lg
                   hover:from-blue-600 hover:to-purple-600 transition"
      >
        Get Directions →
      </a>
    </div>

  </div>
</section>


      {/* Footer - Enhanced with animated background text */}
      <footer className="relative py-12 bg-gray-950/50 backdrop-blur-md min-h-[320px] flex items-center rounded-t-[4rem] border-t border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            }}
            className="whitespace-nowrap h-full flex items-center"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-[15vw] font-black text-white/[0.03] tracking-tight select-none leading-none h-full flex items-center"
              >
                CORBY CHEMISTS&nbsp;
              </span>
            ))}
          </motion.div>
        </div>

        <FloatingSVGGroup
          elements={[
            {
              icon: <Rocket className="text-blue-400/60" />,
              position: { bottom: "60%", left: "5%" },
              size: "md",
              opacity: 0.3,
              delay: 0.3,
            },
            {
              icon: <BrainCircuit className="text-purple-400/60" />,
              position: { top: "30%", right: "8%" },
              size: "md",
              opacity: 0.3,
              delay: 0.7,
            },
          ]}
          maxElements={2}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* CorbyChemists Text */}
            <div className="text-center md:text-left">
              <motion.div
                className="flex items-center justify-center md:justify-start mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-heading tracking-tighter inline-block relative"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(96, 165, 250, 0)",
                      "0 0 15px rgba(96, 165, 250, 0.5)",
                      "0 0 5px rgba(96, 165, 250, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Corby<span className="font-light">Chemists</span>
                  <motion.div
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </motion.div>
              <p className="mt-2 text-gray-400 max-w-xs">
                Delivering trusted pharmacy care, quality medications, and personalized health services to our community.
              </p>

              <motion.div
                className="flex justify-center md:justify-start space-x-6 mt-6"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.a
                  href="https://www.facebook.com/CorbyChemists"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ y: -3, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="CorbyChemists Facebook page"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/chemists67652"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ y: -3, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="CorbyChemists X page"
                >
                  <X className="w-5 h-5" />
                </motion.a>
                {/* <motion.a
                  href="https://www.linkedin.com/company/CorbyChemists"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ y: -3, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="CorbyChemists LinkedIn page"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a> */}
              </motion.div>

              <motion.div
                className="text-gray-400 text-sm mt-6"
                whileHover={{ color: "#60A5FA" }}
              >
                © 2026 Corby Chemists. All rights reserved.
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-white mb-6">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                {[
                  { text: "Home", href: "#home" },
                  { text: "Services", href: "#services" },
                  { text: "Why Choose Us", href: "#products" },
                  { text: "Careers", href: "#team" },
                  { text: "Testimonials", href: "#testimonials" },
                  { text: "FAQ", href: "#faq" },
                  { text: "Contact Us", href: "#contact" },
                  { text: "Email Us", href: "mailto:corbychemists@gmail.com" },
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5, color: "#60A5FA" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact & Copyright */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h4>
              <motion.div
                className="space-y-5 text-gray-400"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0.9 }}
              >
                <motion.div
                  className="flex items-center justify-center md:justify-end gap-3"
                  whileHover={{ x: -5, color: "#60A5FA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>988 1st Ave, New York, NY 10022, US</span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center md:justify-end gap-3"
                  whileHover={{ x: -5, color: "#60A5FA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>
                    <a
                      href="tel:+12127556632"
                      aria-label="Call +12127556632"
                    >
                      +12127556632
                    </a>
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center md:justify-end gap-3"
                  whileHover={{ x: -5, color: "#60A5FA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>
                    <a
                      href="mailto:corbychemista@CorbyChemists.com"
                      aria-label="Email corbychemists@CorbyChemists.com"
                    >
                      corbychemists@CorbyChemists.com
                    </a>
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
