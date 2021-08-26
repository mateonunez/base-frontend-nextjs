import MainFooter from 'components/Footers/MainFooter';
import MainNavbar from 'components/Navbars/MainNavbar';
import { motion } from 'framer-motion';

export default function MainLayout({ children }) {
  const variants = {
    hidden: { opacity: 0, x: -500, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 }
  };

  return (
    <>
      <MainNavbar fixed />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ duration: 1 }}>
        {children}
      </motion.main>
      <MainFooter />
    </>
  );
}
