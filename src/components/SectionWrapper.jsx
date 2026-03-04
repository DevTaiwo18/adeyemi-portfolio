import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-20 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
