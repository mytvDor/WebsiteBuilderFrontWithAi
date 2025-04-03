import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const API_URL = "http://localhost:8000/api/auth";

export default function Auth() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [storedEmail, setStoredEmail] = useState(
    localStorage.getItem("email") || ""
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [currentView, setCurrentView] = useState("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          await axios.post(`${API_URL}/protected`, { token });
          setIsAuthenticated(true);
          setCurrentView("hello");
        } catch (error) {
          console.error("Token verification failed:", error);
          setIsAuthenticated(false);
          localStorage.removeItem("token");
          setToken("");
        }
      }
    };

    verifyToken();
  }, [token]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/signup`, { name, email, password });
      setRegisteredEmail(email);
      setCurrentView("verify");
    } catch (error) {
      // alert(error.response?.data?.msg || 'Registration failed');
      console.log(error.response?.data?.msg || "Registration failed");

      toast.error("Error! Something went wrong.");
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/verify-email`, {
        email: registeredEmail,
        otp,
      });
      setCurrentView("signin");
    } catch (error) {
      // alert(error.response?.data?.msg || "Verification failed");
      console.log(error.response?.data?.msg || "Verification failed");

      toast.error("Verification failed");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/signin`, {
        email,
        password,
      });
      const newToken = response.data.token;
      localStorage.setItem("token", newToken);
      localStorage.setItem("email", email);
      setToken(newToken);
      setIsAuthenticated(true);
      setCurrentView("hello");
    } catch (error) {
      // alert(error.response?.data?.msg || "Sign in failed");
      console.log(error.response?.data?.msg || "Sign in failed");

      toast.error("Sign in failed");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken("");
    setStoredEmail("");
    setIsAuthenticated(false);
    setCurrentView("signin");
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/forgot-password`, { email });
      setCurrentView("resetPassword");
    } catch (error) {
      // alert(error.response?.data?.msg || "Failed to send reset OTP");
      console.log(error.response?.data?.msg || "Failed to send reset OTP");

      toast.error("Failed to send reset OTP");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/reset-password`, {
        email,
        otp,
        newPassword,
      });
      // alert(
      //   "Password reset successful. Please sign in with your new password."
      // );
      toast.success("Password reset successfully!");
      setCurrentView("signin");
    } catch (error) {
      // alert(error.response?.data?.msg || "Password reset failed");
      console.log(error.response?.data?.msg || "Password reset failed");

      toast.error("Error! Password reset Failed");
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "register":
        return (
          <Card className="bg-gray-200 shadow-xl ring-1 ring-black/10">
            <Toaster position="top-center" />

            <CardHeader>
              <CardTitle className="text-black">Register</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    icon={<User className="w-4 h-4" />}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    icon={<Mail className="w-4 h-4" />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-black">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    icon={<Lock className="w-4 h-4" />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
              <Button
                variant="link"
                onClick={() => setCurrentView("signin")}
                className="mt-4 w-full"
              >
                Back to Sign In
              </Button>
            </CardContent>
          </Card>
        );
      case "verify":
        return (
          <Card className="bg-gray-200 shadow-xl ring-1 ring-black/10">
            <CardHeader>
              <CardTitle className="text-black">Verify Email</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerify} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-black">
                    Enter OTP
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    icon={<KeyRound className="w-4 h-4" />}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Verify
                </Button>
              </form>
            </CardContent>
          </Card>
        );
      case "signin":
        return (
          <Card className="bg-gray-200 shadow-xl ring-1 ring-black/0">
            <CardHeader>
              <CardTitle className="text-black">Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    icon={<Mail className="w-4 h-4" />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-black">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    icon={<Lock className="w-4 h-4" />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
              <div className="flex justify-between mt-4">
                <Button
                  variant="link"
                  onClick={() => setCurrentView("register")}
                >
                  Register
                </Button>
                <Button
                  variant="link"
                  onClick={() => setCurrentView("forgotPassword")}
                >
                  Forgot Password
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      case "hello":
        navigate("/websitedashboard");
        return null; // Prevent rendering the card in this case
      case "forgotPassword":
        return (
          <Card className="bg-gray-200 shadow-xl ring-1 ring-black/10">
            <CardHeader>
              <CardTitle className="text-black">Forgot Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    icon={<Mail className="w-4 h-4" />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send OTP
                </Button>
              </form>
              <Button
                variant="link"
                onClick={() => setCurrentView("signin")}
                className="mt-4 w-full"
              >
                Back to Sign In
              </Button>
            </CardContent>
          </Card>
        );
      case "resetPassword":
        return (
          <Card className="bg-gray-200 shadow-xl ring-1 ring-black/10">
            <CardHeader>
              <CardTitle className="text-black">Reset Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-black">
                    Enter OTP
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    icon={<KeyRound className="w-4 h-4" />}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-black">
                    New Password
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    icon={<Lock className="w-4 h-4" />}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="white text-black"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </form>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm p-4">{renderView()}</div>
    </div>
  );
}
