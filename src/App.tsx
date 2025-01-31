import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegistration from "./pages/UserRegistration";
import EmailVerification from "./pages/EmailVerification";
import SetupOrganisation from "./pages/SetupOrganisation";
import ScrapedWebpages from "./pages/ScrapedWebpages";
import WebpageDetails from "./pages/WebpageDetails";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import Navbar from "./components/Navbar";
import ChatbotWidget from "./components/ChatbotWidget";
import { ThemeProvider } from "./components/ui/themeProvider";
import "./index.css";

const App: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState<string>("");

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container bg-[#0A192F] dark:bg-[#1C1E26] min-h-screen text-[#EDEDED] dark:text-[#F4A261] transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<UserRegistration />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route
              path="/setup-organisation"
              element={
                <>
                  <Navbar />
                  <SetupOrganisation setWebsiteUrl={setWebsiteUrl} />
                </>
              }
            />
            <Route
              path="/scraped-webpages"
              element={
                <>
                  <Navbar />
                  <ScrapedWebpages websiteUrl={websiteUrl} />
                </>
              }
            />
            <Route
              path="/webpage-details/:id"
              element={
                <>
                  <Navbar />
                  <WebpageDetails />
                </>
              }
            />
            <Route
              path="/chatbot-integration"
              element={
                <>
                  <Navbar />
                  <div className="container mx-auto p-6 animate-fade-in">
                    <ChatbotIntegration websiteUrl={websiteUrl} />
                    <ChatbotWidget />
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
