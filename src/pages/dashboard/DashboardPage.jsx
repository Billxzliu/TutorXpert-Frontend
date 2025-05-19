
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Star, Send, CreditCard, Briefcase, List, CalendarDays, User, Settings, PlusCircle, Search } from "lucide-react";

const DashboardPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const user = JSON.parse(localStorage.getItem("user")) || { firstName: "User", role: "student" };
  const isTutor = user.role === "tutor";

  const studentQuickLinks = [
    { name: "Find a Tutor", path: "/tutors", icon: Search, color: "text-blue-400" },
    { name: "Post New Task", path: "/projects/new", icon: PlusCircle, color: "text-green-400" },
    { name: "My Appointments", path: "/dashboard/appointments", icon: CalendarDays, color: "text-purple-400" },
    { name: "My Messages", path: "/dashboard/messages", icon: Send, color: "text-pink-400" },
  ];

  const tutorQuickLinks = [
    { name: "Browse Tasks", path: "/projects", icon: Search, color: "text-blue-400" },
    { name: "My Listings", path: "/dashboard/listings", icon: List, color: "text-green-400" },
    { name: "My Bids", path: "/dashboard/bids", icon: Briefcase, color: "text-purple-400" },
    { name: "My Schedule", path: "/dashboard/appointments", icon: CalendarDays, color: "text-orange-400" },
  ];
  
  const quickLinks = isTutor ? tutorQuickLinks : studentQuickLinks;

  const overviewStats = isTutor ? [
    { label: "Active Listings", value: user.activeListings || 5, icon: List },
    { label: "Pending Bids", value: user.pendingBids || 12, icon: Briefcase },
    { label: "Upcoming Sessions", value: user.upcomingSessions || 3, icon: CalendarDays },
    { label: "Total Earnings", value: `$${user.totalEarnings || 1250}`, icon: CreditCard },
  ] : [
    { label: "Active Tasks", value: user.activeTasks || 2, icon: PlusCircle },
    { label: "Favorited Tutors", value: user.favoritedTutors || 8, icon: Star },
    { label: "Upcoming Appointments", value: user.upcomingAppointments || 4, icon: CalendarDays },
    { label: "Unread Messages", value: user.unreadMessages || 3, icon: Send },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card/30 text-foreground py-8 px-4 md:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold animated-gradient-text mb-2">Welcome Back, {user.firstName}!</h1>
        <p className="text-lg text-muted-foreground">Here's your personalized command center for GlowUpTutors.</p>
      </motion.div>

      {/* Overview Stats */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      >
        {overviewStats.map((stat, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="glass-effect card-hover h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary">{stat.label}</CardTitle>
                <stat.icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">Current status</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Quick Links */}
      <motion.section variants={fadeIn} initial="hidden" animate="visible" className="mb-10">
         <h2 className="text-2xl font-semibold text-primary mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={link.path}>
                <Card className="glass-effect card-hover group transition-all duration-300 hover:border-primary">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300 tech-glow`}>
                       <link.icon className={`h-10 w-10 ${link.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{link.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Placeholder for Recent Activity or Important Notifications */}
      <motion.section variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-2xl font-semibold text-primary mb-6">Recent Activity</h2>
        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="text-center text-muted-foreground py-12">
              <List className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Your recent activity will appear here.</p>
              <p className="text-sm">No new notifications at the moment.</p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

       {/* Navigation to other dashboard parts */}
      <motion.section variants={fadeIn} initial="hidden" animate="visible" className="mt-10">
        <h2 className="text-2xl font-semibold text-primary mb-6">Manage Your Account</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Profile Settings", path: "/dashboard/profile", icon: User },
            { name: "Account Security", path: "/dashboard/security", icon: Settings },
            { name: "Notification Preferences", path: "/dashboard/notifications", icon: Send },
          ].map(item => (
             <motion.div key={item.name} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to={item.path}>
                    <Card className="glass-effect card-hover group transition-all duration-300 hover:border-secondary">
                        <CardContent className="p-6 flex items-center">
                            <div className="p-3 rounded-full bg-secondary/10 mr-4 group-hover:bg-secondary/20 transition-colors duration-300 tech-glow">
                                <item.icon className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-md font-medium text-foreground group-hover:text-secondary transition-colors duration-300">{item.name}</h3>
                        </CardContent>
                    </Card>
                </Link>
             </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default DashboardPage;
