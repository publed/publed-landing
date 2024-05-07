import { useInView, motion, useAnimation } from 'framer-motion';

interface RevealProps {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = 'fit-content' }: RevealProps) => {
  return (
    <div style={{ position: 'relative', width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
