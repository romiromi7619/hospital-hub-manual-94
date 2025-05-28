
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  FileText, 
  DollarSign, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Upload,
  Download
} from "lucide-react";

const Insurance = () => {
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

  const insuranceInfo = {
    provider: "Blue Cross Blue Shield",
    policyNumber: "BC123456789",
    groupNumber: "GRP001",
    memberId: "MB987654321",
    effectiveDate: "2024-01-01",
    renewalDate: "2024-12-31",
    status: "Active",
    deductible: 1500,
    deductibleUsed: 450,
    outOfPocketMax: 5000,
    outOfPocketUsed: 750
  };

  const claims = [
    { 
      id: 1, 
      date: "2024-01-20", 
      provider: "Dr. Smith", 
      service: "Annual Checkup", 
      amount: 250, 
      covered: 200, 
      status: "Approved" 
    },
    { 
      id: 2, 
      date: "2024-01-15", 
      provider: "Lab Corp", 
      service: "Blood Test", 
      amount: 120, 
      covered: 100, 
      status: "Processing" 
    },
    { 
      id: 3, 
      date: "2024-01-10", 
      provider: "Pharmacy", 
      service: "Prescription", 
      amount: 85, 
      covered: 70, 
      status: "Approved" 
    }
  ];

  const benefits = [
    { service: "Preventive Care", coverage: "100%", limit: "No limit" },
    { service: "Primary Care Visit", coverage: "90%", limit: "$25 copay" },
    { service: "Specialist Visit", coverage: "80%", limit: "$50 copay" },
    { service: "Emergency Room", coverage: "70%", limit: "$200 copay" },
    { service: "Prescription Drugs", coverage: "85%", limit: "Tier based" },
    { service: "Mental Health", coverage: "90%", limit: "$30 copay" }
  ];

  const documents = [
    { id: 1, name: "Insurance Card", type: "ID Card", date: "2024-01-01" },
    { id: 2, name: "Benefits Summary", type: "Policy", date: "2024-01-01" },
    { id: 3, name: "2023 Tax Form 1095-A", type: "Tax Document", date: "2024-01-31" }
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Insurance Center</h1>
              <p className="text-gray-600">Manage your health insurance and claims</p>
            </div>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>

          {/* Insurance Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Insurance Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Provider</label>
                    <p className="text-lg font-semibold">{insuranceInfo.provider}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">{insuranceInfo.status}</Badge>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Policy Number</label>
                    <p className="font-mono">{insuranceInfo.policyNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Member ID</label>
                    <p className="font-mono">{insuranceInfo.memberId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Effective Date</label>
                    <p>{insuranceInfo.effectiveDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Renewal Date</label>
                    <p>{insuranceInfo.renewalDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Coverage Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Deductible</span>
                    <span className="text-sm">${insuranceInfo.deductibleUsed} / ${insuranceInfo.deductible}</span>
                  </div>
                  <Progress 
                    value={(insuranceInfo.deductibleUsed / insuranceInfo.deductible) * 100} 
                    className="h-2"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Out-of-Pocket Max</span>
                    <span className="text-sm">${insuranceInfo.outOfPocketUsed} / ${insuranceInfo.outOfPocketMax}</span>
                  </div>
                  <Progress 
                    value={(insuranceInfo.outOfPocketUsed / insuranceInfo.outOfPocketMax) * 100} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="claims" className="space-y-4">
            <TabsList>
              <TabsTrigger value="claims">Claims</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="claims" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Claims</CardTitle>
                  <CardDescription>Track your submitted insurance claims</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {claims.map((claim) => (
                      <div key={claim.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{claim.service}</h4>
                          <p className="text-sm text-gray-600">{claim.provider} • {claim.date}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-sm">Billed: ${claim.amount}</span>
                            <span className="text-sm">Covered: ${claim.covered}</span>
                            <span className="text-sm">Your Cost: ${claim.amount - claim.covered}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant={
                              claim.status === "Approved" ? "default" : 
                              claim.status === "Processing" ? "secondary" : "destructive"
                            }
                          >
                            {claim.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Coverage Benefits</CardTitle>
                  <CardDescription>Your insurance coverage details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{benefit.service}</h4>
                          <p className="text-sm text-gray-600">{benefit.limit}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">{benefit.coverage}</div>
                          <div className="text-sm text-gray-500">Coverage</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Insurance Documents</CardTitle>
                  <CardDescription>Access and manage your insurance documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-8 w-8 text-blue-600" />
                          <div>
                            <h4 className="font-medium">{doc.name}</h4>
                            <p className="text-sm text-gray-600">{doc.type} • {doc.date}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
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

export default Insurance;
