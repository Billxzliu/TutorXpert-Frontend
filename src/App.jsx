import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import TutorsPage from "@/pages/TutorsPage";
import TutorProfilePage from "@/pages/TutorProfilePage";
import TasksPage from "@/pages/TasksPage";
import TaskDetailsPage from "@/pages/TaskDetailsPage";
import NewTaskPage from "@/pages/NewTaskPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "@/pages/ContactPage";
import PricingPage from "@/pages/PricingPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import MyFavouritesPage from "@/pages/dashboard/MyFavouritesPage";
import MyMessagesPage from "@/pages/dashboard/MyMessagesPage";
// import PaymentMethodsPage from "@/pages/dashboard/PaymentMethodsPage";
import MyBidsPage from "@/pages/dashboard/MyBidsPage";
import MyListingsPage from "@/pages/dashboard/MyListingsPage";
import MyAppointmentsPage from "@/pages/dashboard/MyAppointmentsPage";
// import PayPage from "@/pages/PayPage";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import NotFoundPage from "@/pages/NotFoundPage";
import ProfilePage from "@/pages/dashboard/ProfilePage";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/tutors" element={<TutorsPage />} />
            <Route path="/tutors/:id" element={<TutorProfilePage />} />
            <Route path="/projects" element={<TasksPage />} />
            <Route path="/projects/:id" element={<TaskDetailsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/favourites" element={<MyFavouritesPage />} />
              <Route path="/dashboard/messages" element={<MyMessagesPage />} />
              {/* <Route path="/dashboard/payment-methods" element={<PaymentMethodsPage />} /> */}
              <Route path="/dashboard/bids" element={<MyBidsPage />} />
              <Route path="/dashboard/listings" element={<MyListingsPage />} />
              <Route path="/dashboard/appointments" element={<MyAppointmentsPage />} />
              <Route path="/dashboard/profile" element={<ProfilePage />} />
              <Route path="/projects/new" element={<NewTaskPage />} />
              {/* <Route path="/pay/:appointmentId" element={<PayPage />} /> */}
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
