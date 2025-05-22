
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import PatientDashboard from "@/components/PatientDashboard";
import DoctorDashboard from "@/components/DoctorDashboard";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-32 mt-2" />
              </div>
              <Skeleton className="h-10 w-32" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Skeleton className="h-80 w-full" />
              <Skeleton className="h-80 w-full" />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {user?.role === "doctor" ? <DoctorDashboard /> : <PatientDashboard />}
      </div>
    </>
  );
};

export default Dashboard;
