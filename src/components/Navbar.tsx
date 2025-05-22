
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-4 md:px-6 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-primary text-2xl font-bold">MediCare</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/appointments" className="text-gray-600 hover:text-primary transition-colors">
                Appointments
              </Link>
              {user?.role === "doctor" && (
                <Link to="/patients" className="text-gray-600 hover:text-primary transition-colors">
                  Patients
                </Link>
              )}
              <div className="ml-4 flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {user?.role === "doctor" ? "Doctor" : "Patient"}: {user?.name}
                </span>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-primary transition-colors">
                Login
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
          <div className="flex flex-col p-4 space-y-3">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/appointments" 
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Appointments
                </Link>
                {user?.role === "doctor" && (
                  <Link 
                    to="/patients" 
                    className="text-gray-600 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Patients
                  </Link>
                )}
                <div className="pt-2 border-t">
                  <div className="text-sm text-gray-500 mb-2">
                    {user?.role === "doctor" ? "Doctor" : "Patient"}: {user?.name}
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="w-full">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
