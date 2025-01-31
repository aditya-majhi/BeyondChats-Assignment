import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Mail, Lock, User, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserRegistration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#09186D]">
      <motion.h1 className="text-2xl md:text-3xl mb-4 font-bold text-[#CDC6B4]">
        Beyond Chats
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[98vw] md:w-[400px] bg-[#4D4C53] text-[#CDC6B4] shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#B79501]">
              Create Account
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {/* Name Input */}
              <div className="space-y-2">
                <Label>Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CDC6B4]" />
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="pl-10 border-[#CDC6B4]/30"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CDC6B4]" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 border-[#CDC6B4]/30"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CDC6B4]" />
                  <Input
                    type="password"
                    placeholder="********"
                    className="pl-10 border-[#CDC6B4]/30"
                  />
                </div>
              </div>

              {/* Company Input */}
              <div className="space-y-2">
                <Label>Company (Optional)</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CDC6B4]" />
                  <Input
                    type="text"
                    placeholder="Company Name"
                    className="pl-10 border-[#CDC6B4]/30"
                  />
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-[#B79501] to-[#8A6E02] hover:from-[#8A6E02] hover:to-[#B79501]"
                onClick={() => navigate("verify-email")}
              >
                Sign Up
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[#CDC6B4]/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-[#4D4C53] px-2 text-[#CDC6B4]">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full border-[#CDC6B4]/30 text-[#CDC6B4] hover:bg-[#CDC6B4]/10"
              onClick={() => navigate("verify-email")}
            >
              Google
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default UserRegistration;
