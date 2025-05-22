
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import Navbar from "@/components/Navbar";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "patient" | "doctor";
}

const Register = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, control, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
    defaultValues: {
      role: "patient"
    }
  });

  const password = watch("password");

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await registerUser(data.name, data.email, data.password, data.role);
      toast.success("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to register. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-70px)] flex items-center justify-center p-4 bg-accent/50">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>
              Enter your details to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe"
                  {...register("name", { 
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters"
                    }
                  })}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  placeholder="your.email@example.com" 
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password"
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: value => value === password || "Passwords do not match"
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label>Account Type</Label>
                <Controller
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <RadioGroup 
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="patient" id="patient" />
                        <Label htmlFor="patient">Patient</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="doctor" id="doctor" />
                        <Label htmlFor="doctor">Doctor</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Creating account..." : "Register"}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-center w-full text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Register;
