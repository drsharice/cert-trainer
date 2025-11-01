import { motion } from "framer-motion";

export default function ResourceCard({
  title,
  icon,
  link,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  link: string;
  color?: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      className={`group flex flex-col items-center justify-center gap-3 p-8 rounded-2xl text-center shadow-md border transition-all duration-300 ${color}`}
    >
      <div className="text-6xl group-hover:animate-bounce">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </motion.a>
  );
}
