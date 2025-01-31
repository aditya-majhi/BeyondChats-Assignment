import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Mail,
  MessageCircle,
  CheckCircle,
  X,
  Share,
  Terminal,
  ChevronRight,
} from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

interface ChatbotIntegrationProps {
  websiteUrl: string;
}

const ChatbotIntegration: React.FC<ChatbotIntegrationProps> = ({
  websiteUrl,
}) => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const { width, height } = useWindowSize();

  const integrationCode = `<script>
  window.chatbotConfig = {
    apiKey: 'YOUR_API_KEY',
    theme: 'dark'
  }
</script>
<script src="https://cdn.chatbot.com/v1/widget.js"></script>`;

  const handleTestIntegration = () => {
    setTimeout(() => {
      setIntegrationStatus(Math.random() > 0.5 ? "success" : "error");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#09186D] p-4 mt-10">
      {integrationStatus === "success" && width && height && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={400}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl"
      >
        <Card className="bg-[#4D4C53]/90 backdrop-blur-lg border-[#CDC6B4]/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-[#B79501]">
              Chatbot Integration
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Test Chatbot Section */}
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-[#B79501]" />
                    Live Preview
                  </h3>
                  <p className="text-[#CDC6B4]/80">
                    Test the chatbot directly on your website
                  </p>
                </div>

                <div className="flex-1">
                  <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-[#CDC6B4]/20">
                    <iframe
                      src={websiteUrl}
                      className="w-full h-full"
                      title="Client Website Preview"
                    />

                    <AnimatePresence>
                      {showChatbot && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-[#09186D]/80 flex items-center justify-center"
                        >
                          <div className="text-center space-y-4">
                            <div className="animate-pulse">
                              <MessageCircle className="w-12 h-12 text-[#B79501] mx-auto" />
                            </div>
                            <Button
                              onClick={() => setShowChatbot(false)}
                              variant="outline"
                              className="border-[#B79501] text-[#B79501] hover:bg-[#B79501]/10"
                            >
                              Close Preview
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <Button
                  onClick={() => setShowChatbot(true)}
                  className="bg-gradient-to-r from-[#B79501] to-[#8A6E02] hover:from-[#8A6E02] hover:to-[#B79501] flex-1"
                >
                  Test Chatbot
                </Button>
                <Button
                  variant="outline"
                  className="border-[#CDC6B4]/30 text-[#CDC6B4] hover:bg-[#CDC6B4]/10 flex-1"
                >
                  <Share className="w-4 h-4 mr-2" />
                  Share Feedback
                </Button>
              </div>
            </section>

            {/* Integration Section */}
            <section className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-[#B79501]" />
                  Integration Setup
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-[#3A3940] rounded-lg">
                      <h4 className="font-medium mb-2">Quick Install</h4>
                      <code className="block p-3 bg-[#4D4C53] rounded-md text-sm break-all">
                        {integrationCode}
                      </code>
                      <div className="flex gap-2 mt-4">
                        <Button
                          onClick={() => {
                            navigator.clipboard.writeText(integrationCode);
                            alert("Code copied to clipboard");
                          }}
                          size="sm"
                          className="bg-[#B79501] hover:bg-[#8A6E02]"
                        >
                          Copy Code
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#CDC6B4]/30"
                        >
                          <Mail className="hidden md:visible w-4 h-4 mr-2" />
                          Email Instructions
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-4 bg-[#3A3940] rounded-lg">
                      <h4 className="font-medium mb-2">Installation Guide</h4>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[#B79501]" />
                          Add code to website's &lt;head&gt; section
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[#B79501]" />
                          Replace YOUR_API_KEY with actual key
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[#B79501]" />
                          Position using CSS variables
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleTestIntegration}
                className="w-full bg-gradient-to-r from-[#B79501] to-[#8A6E02] hover:from-[#8A6E02] hover:to-[#B79501] h-12 text-lg"
              >
                Verify Integration
              </Button>
            </section>

            {/* Results Section */}
            <AnimatePresence>
              {integrationStatus !== "idle" && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-xl ${
                    integrationStatus === "success"
                      ? "bg-green-500/10 border-green-500/20"
                      : "bg-red-500/10 border-red-500/20"
                  } border`}
                >
                  {integrationStatus === "success" ? (
                    <div className="space-y-6 text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                      <h4 className="text-2xl font-bold">
                        Integration Successful!
                      </h4>
                      <div className="flex flex-wrap gap-4 justify-center pt-4">
                        {["Twitter", "Facebook", "LinkedIn"].map((platform) => (
                          <Button
                            key={platform}
                            variant="outline"
                            className="border-[#CDC6B4]/30 text-[#CDC6B4] hover:bg-[#CDC6B4]/10"
                          >
                            <Share className="w-4 h-4 mr-2" />
                            Share on {platform}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6 text-center">
                      <X className="w-16 h-16 text-red-500 mx-auto" />
                      <h4 className="text-2xl font-bold">
                        Integration Required
                      </h4>
                      <p className="text-[#CDC6B4]/80">
                        Please complete the installation steps first
                      </p>
                      <Button
                        onClick={() => setIntegrationStatus("idle")}
                        className="bg-[#B79501] hover:bg-[#8A6E02]"
                      >
                        Retry Verification
                      </Button>
                    </div>
                  )}
                </motion.section>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ChatbotIntegration;
