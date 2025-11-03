import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import DesktopNavbar from "./components/layout/DesktopNavbar";
import Footer from "./components/layout/Footer";
import MobileNavigation from "./components/layout/MobileNavigation";
import TopNav from "./components/layout/TopNav";

// This is the main root layout this component is used to render fixed header and footer and the child pages inside

const RootLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      {isMobile ? (
        <div className="fixed bottom-0 w-full">
          <MobileNavigation />
        </div>
      ) : (
        <DesktopNavbar />
      )}
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      {!isMobile && <Footer />}
    </div>
  );
};

export default RootLayout;
