import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const WebpageDetails: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6 mt-10"
    >
      <div className="flex justify-start mb-6 items-center gap-3">
        <ArrowLeft onClick={() => navigate(-1)} />
        <h2 className="text-xl md:text-2xl font-bold">Webpage Details</h2>
      </div>
      <p className="text-lg">Details for webpage ID: {id}</p>
    </motion.div>
  );
};

export default WebpageDetails;
