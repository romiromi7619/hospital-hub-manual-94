import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ClipboardCheck, Clock, Heart, User, Activity, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
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
      
      {/* Features Section */}
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
      
      {/* Statistics Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Medical Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* For Doctors & Patients Section */}
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
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-4">Care Point</h2>
              <p className="max-w-xs">
                Modern healthcare management solution for patients and medical professionals.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-medium mb-4">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Company</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Appointments</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Medical Records</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Billing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Care Point. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              <span>HIPAA Compliant & Secure</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
