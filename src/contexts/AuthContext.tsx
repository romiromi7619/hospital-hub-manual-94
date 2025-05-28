
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type UserRole = "patient" | "doctor" | "admin" | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call to verify credentials
    // For demo purposes, we'll simulate a successful login
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    let mockUser: User;
    
    if (email.includes("admin")) {
      mockUser = {
        id: "a-" + Math.random().toString(36).substr(2, 9),
        name: "Admin " + email.split("@")[0],
        email,
        role: "admin"
      };
    } else if (email.includes("doctor")) {
      mockUser = {
        id: "d-" + Math.random().toString(36).substr(2, 9),
        name: "Dr. " + email.split("@")[0],
        email,
        role: "doctor"
      };
    } else {
      mockUser = {
        id: "p-" + Math.random().toString(36).substr(2, 9),
        name: email.split("@")[0],
        email,
        role: "patient"
      };
    }
    
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    // In a real app, this would make an API call to create a user
    // For demo purposes, we'll simulate a successful registration
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = {
      id: role === "doctor" 
        ? "d-" + Math.random().toString(36).substr(2, 9)
        : role === "admin"
        ? "a-" + Math.random().toString(36).substr(2, 9)
        : "p-" + Math.random().toString(36).substr(2, 9),
      name,
      email,
      role
    };
    
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
