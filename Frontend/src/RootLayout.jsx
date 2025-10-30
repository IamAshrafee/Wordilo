import React from "react";
import { Outlet } from "react-router";
import DesktopNavbar from "./components/layout/DesktopNavbar";
import Footer from "./components/layout/Footer";

// This is the main root layout this component is used to render fixed header and footer and the child pages inside

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DesktopNavbar />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
