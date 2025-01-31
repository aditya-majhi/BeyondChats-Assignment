import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#112240] p-4 shadow-lg fixed top-0 left-0 right-0 z-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Beyond Chats
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
