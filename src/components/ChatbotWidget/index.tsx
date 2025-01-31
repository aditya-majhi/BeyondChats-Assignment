import React from "react";
import { motion } from "framer-motion";

const ChatbotWidget: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 bg-[#F4A261] text-white p-4 rounded-full shadow-lg cursor-pointer"
    >
      💬 Chat
    </motion.div>
  );
};

export default ChatbotWidget;
