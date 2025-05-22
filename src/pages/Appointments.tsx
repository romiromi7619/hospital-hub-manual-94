
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, X, Check, User } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "canceled";
  notes?: string;
}

const Appointments = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isBooking, setIsBooking] = useState(false);

  // Fetch appointments (simulated)
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
      return;
    }

    if (isAuthenticated) {
      // Simulate fetching appointments from API
      const mockAppointments: Appointment[] = [
        {
          id: 1,
          patientName: "John Smith",
          doctorName: "Dr. Emily Chen",
          specialty: "Orthopedics",
          date: "2025-05-25",
          time: "10:00 AM",
          status: "upcoming",
        },
        {
          id: 2,
          patientName: "John Smith",
          doctorName: "Dr. James Wilson",
          specialty: "Dermatology",
          date: "2025-06-01",
          time: "2:30 PM",
          status: "upcoming",
        },
        {
          id: 3,
          patientName: "John Smith",
          doctorName: "Dr. Lisa Thompson",
          specialty: "Psychiatry",
          date: "2025-04-15",
          time: "11:00 AM",
          status: "completed",
          notes: "Patient reported decreased anxiety levels. Recommended continuing current medication."
        },
        {
          id: 4,
          patientName: "John Smith",
          doctorName: "Dr. Sarah Miller",
          specialty: "Cardiology",
          date: "2025-03-20",
          time: "9:30 AM",
          status: "canceled",
        },
      ];

      setAppointments(mockAppointments);
    }
  }, [isAuthenticated, isLoading, navigate]);

  const upcomingAppointments = appointments.filter(app => app.status === "upcoming");
  const pastAppointments = appointments.filter(app => app.status === "completed");
  const canceledAppointments = appointments.filter(app => app.status === "canceled");

  const handleCancelAppointment = (id: number) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: "canceled" } : app
    ));
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p>Loading appointments...</p>
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Appointments</h1>
            <p className="text-gray-500">
              Manage your medical appointments
            </p>
          </div>
          {user?.role === "patient" && !isBooking && (
            <Button onClick={() => setIsBooking(true)} className="mt-4 md:mt-0">
              Book New Appointment
            </Button>
          )}
        </div>

        {isBooking ? (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Book an Appointment</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsBooking(false)}>
                <X className="h-4 w-4 mr-2" /> Cancel
              </Button>
            </div>
            <AppointmentForm onSuccess={() => setIsBooking(false)} />
          </div>
        ) : (
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming" className="flex-1">
                Upcoming ({upcomingAppointments.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="flex-1">
                Past ({pastAppointments.length})
              </TabsTrigger>
              <TabsTrigger value="canceled" className="flex-1">
                Canceled ({canceledAppointments.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-4">
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map((appointment) => (
                  <Card key={appointment.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-wrap md:flex-nowrap border-l-4 border-primary">
                        <div className="p-4 md:p-6 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-lg">{appointment.doctorName}</h3>
                              <p className="text-gray-500">{appointment.specialty}</p>
                            </div>
                            <div className="flex items-center mt-2 md:mt-0">
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => handleCancelAppointment(appointment.id)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center p-8 bg-accent rounded-lg">
                  <div className="text-gray-500">No upcoming appointments</div>
                  {user?.role === "patient" && (
                    <Button onClick={() => setIsBooking(true)} className="mt-4">
                      Book an Appointment
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="space-y-4">
              {pastAppointments.length > 0 ? (
                pastAppointments.map((appointment) => (
                  <Card key={appointment.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-wrap md:flex-nowrap border-l-4 border-gray-400">
                        <div className="p-4 md:p-6 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-lg">{appointment.doctorName}</h3>
                              <p className="text-gray-500">{appointment.specialty}</p>
                            </div>
                            <div className="flex items-center mt-2 md:mt-0">
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                                <Check className="h-3 w-3 mr-1" /> Completed
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4 mb-2">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                          {appointment.notes && (
                            <div className="mt-2 pt-2 border-t">
                              <div className="flex items-start">
                                <FileText className="h-4 w-4 mr-2 text-gray-500 mt-1" />
                                <p className="text-sm">{appointment.notes}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center p-8 bg-accent rounded-lg">
                  <div className="text-gray-500">No past appointments</div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="canceled" className="space-y-4">
              {canceledAppointments.length > 0 ? (
                canceledAppointments.map((appointment) => (
                  <Card key={appointment.id} className="overflow-hidden opacity-70">
                    <CardContent className="p-0">
                      <div className="flex flex-wrap md:flex-nowrap border-l-4 border-destructive">
                        <div className="p-4 md:p-6 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-lg">{appointment.doctorName}</h3>
                              <p className="text-gray-500">{appointment.specialty}</p>
                            </div>
                            <div className="flex items-center mt-2 md:mt-0">
                              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center">
                                <X className="h-3 w-3 mr-1" /> Canceled
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center p-8 bg-accent rounded-lg">
                  <div className="text-gray-500">No canceled appointments</div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </>
  );
};

export default Appointments;
