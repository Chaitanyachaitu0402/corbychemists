import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCircle2,
  DollarSign,
  Heart,
  Calendar,
  TrendingUp,
  Clock,
  BadgeCheck,
  X,
} from "lucide-react";
import FloatingSVGGroup from "@/components/ui/FloatingSVGGroup";

/* =======================
   Types
======================= */
interface Job {
  role: string;
  type: string;
  desc: string;
  requirements: string[];
}

/* =======================
   Data
======================= */
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

/* =======================
   Component
======================= */
const CareersSection: React.FC = () => {
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  return (
    <section
      id="team"
      className="container mx-auto px-6 lg:px-8 py-36 relative overflow-hidden "
    >
      {/* Floating Icons */}
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Careers at Corby Chemists
        </h2>
        <p className="text-gray-300 text-lg">Join Our Healthcare Team</p>
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
            { label: "Competitive Salary", icon: <DollarSign className="w-6 h-6 text-white" /> },
            { label: "Health Insurance", icon: <Heart className="w-6 h-6 text-white" /> },
            { label: "Paid Time Off", icon: <Calendar className="w-6 h-6 text-white" /> },
            { label: "Professional Development", icon: <TrendingUp className="w-6 h-6 text-white" /> },
            { label: "Flexible Scheduling", icon: <Clock className="w-6 h-6 text-white" /> },
            { label: "Employee Discounts", icon: <BadgeCheck className="w-6 h-6 text-white" /> },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10
                         flex flex-col items-center gap-4 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20
                              flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-white font-medium text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">T&amp;C Apply</p>
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
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20
                         text-white text-sm font-semibold"
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
                             border border-white/20 text-white text-sm font-semibold"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setActiveJob(null)}
          />

          <div className="relative z-50 max-w-2xl w-full mx-6 rounded-3xl
                          bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#020617]
                          border border-white/10 p-8">
            <div className="flex justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">
                {activeJob.role}
              </h3>
              <button
                onClick={() => setActiveJob(null)}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <p className="text-gray-300 mb-6">{activeJob.desc}</p>

            <h4 className="text-lg font-semibold text-white mb-4">
              What We’re Looking For:
            </h4>

            <ul className="space-y-3">
              {activeJob.requirements.map((req, i) => (
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
        className="text-center p-12 rounded-3xl bg-white/10 border border-white/20"
      >
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Join Our Team?
        </h3>
        <p className="text-white/90 mb-8">
          Make a difference in the Bronx, NY community
        </p>

        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 rounded-lg bg-white text-black font-semibold"
        >
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

export default CareersSection;
