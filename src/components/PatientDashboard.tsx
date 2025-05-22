
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Calendar, Clock, User, FileText, Activity } from "lucide-react";

const PatientDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const upcomingAppointments = [
    {
      id: 1,
      doctorName: "Dr. Smith",
      specialty: "Cardiology",
      date: "2025-05-25",
      time: "10:00 AM",
    },
    {
      id: 2,
      doctorName: "Dr. Johnson",
      specialty: "Dermatology",
      date: "2025-06-01",
      time: "2:30 PM",
    }
  ];
  
  const healthStats = [
    { label: "Last Visit", value: "April 15, 2025" },
    { label: "Blood Type", value: "O+" },
    { label: "Weight", value: "70 kg" },
    { label: "Height", value: "175 cm" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
          <p className="text-gray-500">Patient Dashboard</p>
        </div>
        <Button onClick={() => navigate("/appointments")}>
          Book Appointment
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Appointments
            </CardTitle>
            <CardDescription>
              Your scheduled medical appointments
            </CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div 
                    key={appointment.id} 
                    className="flex justify-between p-3 bg-accent rounded-md"
                  >
                    <div>
                      <div className="font-medium">{appointment.doctorName}</div>
                      <div className="text-sm text-gray-500">{appointment.specialty}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end text-sm">
                        <Calendar className="mr-1 h-4 w-4" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center justify-end text-sm text-gray-500">
                        <Clock className="mr-1 h-4 w-4" />
                        {appointment.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-6">
                No upcoming appointments. Book one now!
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => navigate("/appointments")}>
              View All Appointments
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Health Information
            </CardTitle>
            <CardDescription>
              Your personal health records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {healthStats.map((stat, index) => (
                <div key={index} className="flex justify-between py-2 border-b last:border-0">
                  <span className="text-gray-500">{stat.label}</span>
                  <span className="font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="flex-1 mr-2">
              <FileText className="mr-2 h-4 w-4" />
              Medical Records
            </Button>
            <Button variant="outline" className="flex-1">
              <Activity className="mr-2 h-4 w-4" />
              Test Results
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>
            Your recent medical activities and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 bg-accent p-3 rounded-md">
              <div className="bg-primary/10 p-1 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Lab results uploaded</p>
                <p className="text-sm text-gray-500">
                  Dr. Johnson uploaded your blood test results
                </p>
                <p className="text-xs text-gray-400">May 18, 2025 - 10:23 AM</p>
              </div>
            </li>
            <li className="flex items-start space-x-3 bg-accent p-3 rounded-md">
              <div className="bg-secondary/10 p-1 rounded-full">
                <Calendar className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-medium">Appointment rescheduled</p>
                <p className="text-sm text-gray-500">
                  Your dental appointment has been moved to June 3rd
                </p>
                <p className="text-xs text-gray-400">May 15, 2025 - 3:45 PM</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDashboard;
