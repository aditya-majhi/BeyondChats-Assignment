import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ScrapedWebPagesProps {
  websiteUrl: string;
}

const ScrapedWebpages: React.FC<ScrapedWebPagesProps> = ({ websiteUrl }) => {
  const pages = [
    { url: `${websiteUrl}/about`, status: "done" },
    { url: `${websiteUrl}/products`, status: "processing" },
    { url: `${websiteUrl}/contact`, status: "pending" },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-[#09186D]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[98vw] md:w-[800px] bg-[#4D4C53] text-[#CDC6B4] shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#B79501]">
              Scraped Pages
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {pages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-[#3A3940] rounded-md hover:bg-[#45444B] transition-colors"
                  onClick={() => navigate(`/webpage-details/${index}`)}
                >
                  <div className="flex-1">
                    <p className="font-medium">{page.url}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {page.status === "done" ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Clock className="w-4 h-4 text-yellow-500" />
                    )}
                    <span className="hidden md:visible  text-xs md:text-sm capitalize">
                      {page.status}
                    </span>
                  </div>
                </motion.div>
              ))}

              <div className="flex justify-between items-center pt-4">
                <Button
                  variant="outline"
                  className="border-[#CDC6B4]/30 text-[#CDC6B4]"
                >
                  Previous
                </Button>
                <span>Page 1 of 3</span>
                <Button
                  variant="outline"
                  className="border-[#CDC6B4]/30 text-[#CDC6B4]"
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button
          className=" mt-5 w-full bg-gradient-to-r from-[#B79501] to-[#8A6E02] hover:from-[#8A6E02] hover:to-[#B79501]"
          onClick={() => navigate("/chatbot-integration")}
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
};

export default ScrapedWebpages;
