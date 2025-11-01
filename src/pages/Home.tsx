import { motion } from "framer-motion";
import { FaDatabase, FaMicrosoft } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import ResourceCard from "../components/ResourceCard";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-white to-emerald-50 text-gray-900 overflow-hidden">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-10 md:mb-12"
      >
        Welcome to <span className="text-emerald-600">Cert Trainer</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-lg text-gray-600 mb-10 max-w-2xl px-4"
      >
        Study smarter with curated resources for Microsoft Azure Data
        Fundamentals, Azure AI Engineer, and Google AI Engineer certifications.
        Click below to explore official learning paths.
      </motion.p>

      {/* Resource Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl px-6 md:px-0"
      >
        {/* Microsoft DP-900 */}
        <ResourceCard
          title="Microsoft Azure Data Fundamentals (DP-900)"
          icon={<FaDatabase className="text-sky-600" />}
          link="https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/"
          color="hover:shadow-sky-200"
        />

        {/* Azure AI */}
        <ResourceCard
          title="Azure AI Engineer (AI-102)"
          icon={<FaMicrosoft className="text-blue-600" />}
          link="https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/"
          color="hover:shadow-blue-200"
        />

        {/* Google AI */}
        <ResourceCard
          title="Google AI & ML Engineer"
          icon={<SiGoogle className="text-rose-500" />}
          link="https://cloud.google.com/learn/training/machinelearning-ai"
          color="hover:shadow-rose-200"
        />
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 text-sm text-gray-500 text-center"
      >
        ✨ Holiday Edition 2025 · Sharice’s Study Portal ✨
      </motion.footer>
    </div>
  );
}
