import React, { ChangeEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useNavigate } from "react-router-dom";

const EmailVerification: React.FC = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [code, setCode] = useState<Array<String>>(["", "", "", "", "", ""]);

  const navigate = useNavigate();

  const handleCode = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setCode((prevcode) =>
      prevcode.map((item, i) => (i === index ? e.target.value.slice(-1) : item))
    );

    if (e.target.value !== "") {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleValidation = () => {
    const isCodeValid = code.every((item) => item !== "");
    if (isCodeValid) {
      navigate("/setup-organisation");
    } else {
      alert("Please enter valid code");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#09186D]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[98vw] md:w-[400px] bg-[#4D4C53] text-[#CDC6B4] shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#B79501]">
              Verify Email
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              <div className="flex justify-center gap-3">
                {[...Array(6)].map((value, i) => (
                  <Input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={value}
                    ref={(el) => (inputRefs.current[i] = el)}
                    className="w-12 h-12 text-center text-xl font-bold border-[#CDC6B4]/30 focus:border-[#e0c135]"
                    onChange={(e) => handleCode(i, e)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                  />
                ))}
              </div>

              <Button
                className="w-full bg-gradient-to-r from-[#B79501] to-[#8A6E02] hover:from-[#8A6E02] hover:to-[#B79501]"
                onClick={() => handleValidation()}
              >
                Verify Code
              </Button>

              <p className="text-center text-sm">
                Didn't receive code?{" "}
                <button className="text-[#B79501] hover:underline">
                  Resend Code
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default EmailVerification;
