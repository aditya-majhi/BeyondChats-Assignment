import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Building, Globe, Text } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SetupOrganisationProps {
  setWebsiteUrl: (url: string) => void;
}

const SetupOrganisation: React.FC<SetupOrganisationProps> = ({
  setWebsiteUrl,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-[#09186D]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[98vw] md:w-[600px] bg-[#4D4C53] text-[#CDC6B4] shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#B79501]">
              Company Setup
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CDC6B4]" />
                  <Input
                    placeholder="Company Name"
                    className="pl-10 border-[#CDC6B4]/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CDC6B4]" />
                  <Input
                    placeholder="Website URL"
                    className="pl-10 border-[#CDC6B4]/30"
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Text className="absolute left-3 top-4 w-4 h-4 text-[#CDC6B4]" />
                  <textarea
                    placeholder="Company Description"
                    className="w-full h-32 p-2 pl-10 bg-transparent border rounded-md border-[#CDC6B4]/30 focus:outline-none"
                  />
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-[#B79501] to-[#8A6E02] hover:from-[#8A6E02] hover:to-[#B79501]"
                onClick={() => navigate("/scraped-webpages")}
              >
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SetupOrganisation;
