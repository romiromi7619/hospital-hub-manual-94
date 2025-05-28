
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  CreditCard, 
  Shield,
  TrendingUp,
  Activity,
  AlertTriangle,
  Settings
} from "lucide-react";

const AdminDashboard = () => {
  // Mock data for admin overview
  const systemStats = {
    totalUsers: 1250,
    totalDoctors: 45,
    totalPatients: 1205,
    totalAppointments: 3420,
    pendingAppointments: 23,
    revenue: 125000,
    activeIssues: 3
  };

  const recentActivity = [
    { id: 1, action: "New doctor registration", user: "Dr. Smith", time: "2 hours ago", type: "success" },
    { id: 2, action: "Payment failed", user: "John Doe", time: "3 hours ago", type: "error" },
    { id: 3, action: "Appointment cancelled", user: "Jane Wilson", time: "5 hours ago", type: "warning" },
    { id: 4, action: "New patient registration", user: "Mike Johnson", time: "6 hours ago", type: "success" }
  ];

  const systemIssues = [
    { id: 1, issue: "Server response time high", severity: "medium", time: "1 hour ago" },
    { id: 2, issue: "Payment gateway timeout", severity: "high", time: "2 hours ago" },
    { id: 3, issue: "Email notifications delayed", severity: "low", time: "4 hours ago" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">System overview and management</p>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          System Settings
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalAppointments}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${systemStats.revenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{systemStats.activeIssues}</div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Management */}
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="system">System Health</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Statistics</CardTitle>
                <CardDescription>Overview of platform users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Doctors</span>
                  <Badge variant="secondary">{systemStats.totalDoctors}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Patients</span>
                  <Badge variant="secondary">{systemStats.totalPatients}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pending Approvals</span>
                  <Badge variant="destructive">5</Badge>
                </div>
                <Button className="w-full">Manage Users</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest user actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                      </div>
                      <Badge 
                        variant={
                          activity.type === "success" ? "default" : 
                          activity.type === "error" ? "destructive" : "secondary"
                        }
                      >
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Management</CardTitle>
              <CardDescription>Monitor and manage all appointments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded">
                  <div className="text-2xl font-bold text-blue-600">{systemStats.totalAppointments}</div>
                  <p className="text-sm text-gray-600">Total Appointments</p>
                </div>
                <div className="text-center p-4 border rounded">
                  <div className="text-2xl font-bold text-yellow-600">{systemStats.pendingAppointments}</div>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>
                <div className="text-center p-4 border rounded">
                  <div className="text-2xl font-bold text-green-600">{systemStats.totalAppointments - systemStats.pendingAppointments}</div>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>
              <Button className="w-full">View All Appointments</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Revenue and payment management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Monthly Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mt-2">
                    ${(systemStats.revenue * 0.1).toLocaleString()}
                  </div>
                </div>
                <div className="p-4 border rounded">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Total Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mt-2">
                    ${systemStats.revenue.toLocaleString()}
                  </div>
                </div>
              </div>
              <Button className="w-full">View Financial Reports</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
              <CardDescription>Monitor system performance and issues</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-green-600" />
                <span>System Status: </span>
                <Badge variant="default">Operational</Badge>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Active Issues:</h4>
                {systemIssues.map((issue) => (
                  <div key={issue.id} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="text-sm font-medium">{issue.issue}</p>
                      <p className="text-xs text-gray-500">{issue.time}</p>
                    </div>
                    <Badge 
                      variant={
                        issue.severity === "high" ? "destructive" : 
                        issue.severity === "medium" ? "secondary" : "outline"
                      }
                    >
                      {issue.severity}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <Button className="w-full">View System Logs</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
