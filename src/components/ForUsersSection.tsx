
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, User } from "lucide-react";

const ForUsersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">For Patients</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium">Easy appointment booking</h4>
                  <p className="text-gray-600 text-sm">
                    Schedule appointments with your preferred doctors at your convenience.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium">Medical history at your fingertips</h4>
                  <p className="text-gray-600 text-sm">
                    View your complete medical records, prescriptions, and test results anytime.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium">Secure communication</h4>
                  <p className="text-gray-600 text-sm">
                    Communicate directly with your healthcare providers through our secure platform.
                  </p>
                </div>
              </li>
            </ul>
            <Link to="/register" className="mt-6 inline-block">
              <Button>Register as Patient</Button>
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">For Doctors</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium">Efficient appointment management</h4>
                  <p className="text-gray-600 text-sm">
                    View and manage your appointment schedule efficiently in one dashboard.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium">Patient medical history access</h4>
                  <p className="text-gray-600 text-sm">
                    Access your patients' complete medical records for better informed care.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium">Digital prescription management</h4>
                  <p className="text-gray-600 text-sm">
                    Create, manage, and track prescriptions for your patients digitally.
                  </p>
                </div>
              </li>
            </ul>
            <Link to="/register" className="mt-6 inline-block">
              <Button>Register as Doctor</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForUsersSection;
