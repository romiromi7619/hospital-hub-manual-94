
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Modern healthcare management solution for patients and medical professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">Login</Button>
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-xl flex items-center justify-center animate-pulse-slow">
              <Heart className="h-20 w-20 text-white" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="font-medium">Healthcare at your fingertips</span>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">Save time, book online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
