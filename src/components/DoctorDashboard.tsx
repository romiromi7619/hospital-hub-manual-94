
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Calendar, Clock, Users, FileText, Activity, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const DoctorDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const todaysAppointments = [
    {
      id: 1,
      patientName: "John Smith",
      age: 45,
      time: "09:00 AM",
      reason: "Annual checkup",
      status: "Checked In"
    },
    {
      id: 2,
      patientName: "Mary Johnson",
      age: 32,
      time: "10:30 AM",
      reason: "Follow-up",
      status: "Scheduled"
    },
    {
      id: 3,
      patientName: "Robert Brown",
      age: 58,
      time: "01:00 PM",
      reason: "Blood pressure",
      status: "Scheduled"
    }
  ];
  
  const stats = [
    { label: "Patients Seen Today", value: 5 },
    { label: "Pending Reports", value: 3 },
    { label: "Total Appointments", value: 12 },
    { label: "Weekly Goal", value: "78%" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
          <p className="text-gray-500">Doctor Dashboard</p>
        </div>
        <Button onClick={() => navigate("/calendar")}>
          View Schedule
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">
                {stat.label === "Weekly Goal" ? (
                  <div className="space-y-1">
                    <span>{stat.value}</span>
                    <Progress value={78} />
                  </div>
                ) : (
                  stat.value
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Today's Appointments
            </CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {todaysAppointments.length > 0 ? (
              <div className="space-y-4">
                {todaysAppointments.map((appointment) => (
                  <div 
                    key={appointment.id} 
                    className="flex justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                        {appointment.patientName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{appointment.patientName}</div>
                        <div className="text-sm text-gray-500">{appointment.age} years • {appointment.reason}</div>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <div className="flex items-center text-sm">
                        <Clock className="mr-1 h-4 w-4" />
                        {appointment.time}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full mt-1 ${
                        appointment.status === "Checked In" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-6">
                No appointments scheduled for today.
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
            <CardTitle>Patient Queue</CardTitle>
            <CardDescription>
              Waiting patients
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 border border-green-100 rounded-md">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center text-green-800 mr-3">
                  JD
                </div>
                <div>
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-xs text-gray-500">Waiting for 10 mins</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-8">
                <CheckCircle2 className="h-4 w-4 mr-1" /> Call In
              </Button>
            </div>
            
            <div className="flex justify-between items-center p-3 border rounded-md">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 mr-3">
                  TW
                </div>
                <div>
                  <div className="font-medium">Tom Wilson</div>
                  <div className="text-xs text-gray-500">Appointment at 11:30 AM</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-8">
                <CheckCircle2 className="h-4 w-4 mr-1" /> Call In
              </Button>
            </div>
            
            <div className="flex justify-between items-center p-3 border rounded-md">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 mr-3">
                  SK
                </div>
                <div>
                  <div className="font-medium">Sarah Kim</div>
                  <div className="text-xs text-gray-500">Appointment at 12:15 PM</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-8">
                <CheckCircle2 className="h-4 w-4 mr-1" /> Call In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Pending Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center p-2 hover:bg-accent rounded-md transition-colors">
                <div>
                  <p className="font-medium">Michael Scott</p>
                  <p className="text-sm text-gray-500">Blood work results</p>
                </div>
                <Button size="sm" variant="secondary">Review</Button>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-accent rounded-md transition-colors">
                <div>
                  <p className="font-medium">David Wilson</p>
                  <p className="text-sm text-gray-500">Post-operation checkup</p>
                </div>
                <Button size="sm" variant="secondary">Review</Button>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-accent rounded-md transition-colors">
                <div>
                  <p className="font-medium">Lisa Johnson</p>
                  <p className="text-sm text-gray-500">X-ray evaluation</p>
                </div>
                <Button size="sm" variant="secondary">Review</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="bg-primary/10 p-1 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm">You completed consultation with <span className="font-medium">James Wilson</span></p>
                  <p className="text-xs text-gray-400">Today at 9:30 AM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-secondary/10 p-1 rounded-full">
                  <FileText className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="text-sm">You submitted medical report for <span className="font-medium">Emma Thompson</span></p>
                  <p className="text-xs text-gray-400">Yesterday at 4:15 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-primary/10 p-1 rounded-full">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm">New appointment scheduled with <span className="font-medium">Robert Brown</span></p>
                  <p className="text-xs text-gray-400">Yesterday at 2:00 PM</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;
