
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  CreditCard, 
  Package, 
  History,
  Star,
  Plus
} from "lucide-react";

const Purchase = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== "patient")) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  if (isLoading || !isAuthenticated || user?.role !== "patient") {
    return null;
  }

  const medications = [
    { id: 1, name: "Aspirin 100mg", price: 12.99, rating: 4.5, inStock: true, prescription: false },
    { id: 2, name: "Vitamin D3", price: 24.99, rating: 4.8, inStock: true, prescription: false },
    { id: 3, name: "Blood Pressure Monitor", price: 89.99, rating: 4.3, inStock: true, prescription: false },
    { id: 4, name: "Insulin Pen", price: 45.99, rating: 4.7, inStock: false, prescription: true },
    { id: 5, name: "Thermometer Digital", price: 19.99, rating: 4.4, inStock: true, prescription: false },
    { id: 6, name: "First Aid Kit", price: 34.99, rating: 4.6, inStock: true, prescription: false }
  ];

  const prescriptions = [
    { id: 1, medication: "Metformin 500mg", prescribedBy: "Dr. Smith", status: "Ready", refills: 2 },
    { id: 2, medication: "Lisinopril 10mg", prescribedBy: "Dr. Johnson", status: "Processing", refills: 1 },
    { id: 3, medication: "Atorvastatin 20mg", prescribedBy: "Dr. Smith", status: "Ready", refills: 3 }
  ];

  const orderHistory = [
    { id: 1, date: "2024-01-15", items: 3, total: 67.97, status: "Delivered" },
    { id: 2, date: "2024-01-10", items: 1, total: 24.99, status: "Delivered" },
    { id: 3, date: "2024-01-05", items: 2, total: 102.98, status: "Shipped" }
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Purchase Center</h1>
              <p className="text-gray-600">Order medications and medical supplies</p>
            </div>
            <Button>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
          </div>

          <Tabs defaultValue="shop" className="space-y-4">
            <TabsList>
              <TabsTrigger value="shop">Shop</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="history">Order History</TabsTrigger>
            </TabsList>

            <TabsContent value="shop" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {medications.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        {item.prescription && (
                          <Badge variant="outline">Prescription Required</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                        </div>
                        <Badge variant={item.inStock ? "default" : "destructive"}>
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">${item.price}</span>
                        <Button 
                          disabled={!item.inStock || item.prescription}
                          size="sm"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                      {item.prescription && (
                        <p className="text-xs text-gray-500 mt-2">
                          Upload prescription to purchase
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="prescriptions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Prescriptions</CardTitle>
                  <CardDescription>Manage and order your prescribed medications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prescriptions.map((prescription) => (
                      <div key={prescription.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{prescription.medication}</h4>
                          <p className="text-sm text-gray-600">Prescribed by {prescription.prescribedBy}</p>
                          <p className="text-sm text-gray-500">{prescription.refills} refills remaining</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant={prescription.status === "Ready" ? "default" : "secondary"}
                          >
                            {prescription.status}
                          </Badge>
                          <Button 
                            size="sm" 
                            disabled={prescription.status !== "Ready"}
                          >
                            Order Refill
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View your past orders and track shipments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Order #{order.id}</h4>
                          <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                          <p className="text-lg font-semibold text-primary">${order.total}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant={
                              order.status === "Delivered" ? "default" : 
                              order.status === "Shipped" ? "secondary" : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Package className="h-4 w-4 mr-2" />
                            Track
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Purchase;
