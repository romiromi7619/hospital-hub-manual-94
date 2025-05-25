
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ClipboardCheck, User } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our hospital management system streamlines medical processes, improving both patient experience and staff efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Easy Appointment Scheduling</h3>
              <p className="text-gray-600">
                Book, reschedule, or cancel appointments with your healthcare providers at any time, from anywhere.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Digital Medical Records</h3>
              <p className="text-gray-600">
                Access your complete medical history, test results, and prescriptions in one secure location.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Dedicated Patient Portal</h3>
              <p className="text-gray-600">
                Manage your healthcare journey with our user-friendly patient dashboard designed for easy navigation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
