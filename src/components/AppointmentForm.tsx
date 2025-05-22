
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
];

const specialties = [
  "Cardiology", "Dermatology", "Orthopedics", "Neurology",
  "Pediatrics", "Obstetrics & Gynecology", "Ophthalmology", "Psychiatry"
];

const doctors = [
  { id: 1, name: "Dr. Sarah Miller", specialty: "Cardiology" },
  { id: 2, name: "Dr. James Wilson", specialty: "Dermatology" },
  { id: 3, name: "Dr. Emily Chen", specialty: "Orthopedics" },
  { id: 4, name: "Dr. Michael Brown", specialty: "Neurology" },
  { id: 5, name: "Dr. Jessica Lee", specialty: "Pediatrics" },
  { id: 6, name: "Dr. Robert Johnson", specialty: "Obstetrics & Gynecology" },
  { id: 7, name: "Dr. David Smith", specialty: "Ophthalmology" },
  { id: 8, name: "Dr. Lisa Thompson", specialty: "Psychiatry" }
];

interface AppointmentFormProps {
  onSuccess?: () => void;
}

const AppointmentForm = ({ onSuccess }: AppointmentFormProps) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [specialty, setSpecialty] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredDoctors = specialty
    ? doctors.filter(doctor => doctor.specialty === specialty)
    : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !specialty || !doctorId || !timeSlot) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      toast.success("Appointment scheduled successfully!");
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/dashboard");
      }
    }, 1500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Schedule an Appointment</CardTitle>
        <CardDescription>
          Fill out the form below to book your medical appointment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="specialty">Medical Specialty</Label>
            <Select 
              value={specialty} 
              onValueChange={(value) => {
                setSpecialty(value);
                setDoctorId("");
              }}
            >
              <SelectTrigger id="specialty">
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((spec) => (
                  <SelectItem key={spec} value={spec}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="doctor">Doctor</Label>
            <Select 
              value={doctorId} 
              onValueChange={setDoctorId}
              disabled={!specialty}
            >
              <SelectTrigger id="doctor">
                <SelectValue placeholder={specialty ? "Select doctor" : "First select a specialty"} />
              </SelectTrigger>
              <SelectContent>
                {filteredDoctors.map((doctor) => (
                  <SelectItem key={doctor.id} value={doctor.id.toString()}>
                    {doctor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Appointment Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return (
                      date < today ||
                      date.getDay() === 0 || // Sunday
                      date.getDay() === 6    // Saturday
                    );
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Appointment Time</Label>
            <Select 
              value={timeSlot} 
              onValueChange={setTimeSlot}
              disabled={!date || !doctorId}
            >
              <SelectTrigger id="time">
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Visit</Label>
            <Textarea
              id="reason"
              placeholder="Please briefly describe your symptoms or reason for appointment"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
