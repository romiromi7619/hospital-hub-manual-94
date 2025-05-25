
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatisticsSection from "@/components/StatisticsSection";
import ForUsersSection from "@/components/ForUsersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatisticsSection />
      <ForUsersSection />
      <Footer />
    </>
  );
};

export default Index;
