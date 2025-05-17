
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Video, MessageSquare, DollarSign, UserCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const MyAppointmentsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Mock data - replace with actual data fetching
  const appointments = [
    { id: 1, type: "student", tutorName: "Dr. Anya Sharma", subject: "Quantum Physics", date: "2025-05-20", time: "3:00 PM - 4:00 PM", status: "Upcoming", price: "$75" },
    { id: 2, type: "tutor", studentName: "Mark L.", subject: "AI Task Draft Review", date: "2025-05-18", time: "10:00 AM - 11:00 AM", status: "Completed", price: "$60" },
    { id: 3, type: "student", tutorName: "Prof. Kenji Tanaka", subject: "Cybersecurity Basics", date: "2025-05-22", time: "5:00 PM - 5:30 PM", status: "Upcoming", needsPayment: true, price: "$40" },
  ];
  // const appointments = []; // Test empty state
  const user = JSON.parse(localStorage.getItem("user")) || { userType: "student" };


  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
        <div className="flex items-center mb-2">
          <CalendarDays className="h-10 w-10 text-primary mr-3 tech-glow" />
          <h1 className="text-4xl md:text-5xl font-bold animated-gradient-text">My Appointments</h1>
        </div>
        <p className="text-lg text-muted-foreground">Manage your scheduled tutoring sessions.</p>
      </motion.div>

      {appointments.length === 0 ? (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center py-20 glass-effect rounded-xl shadow-2xl"
        >
          <CalendarDays className="h-20 w-20 mx-auto text-primary/50 mb-6" />
          <h3 className="text-2xl font-semibold mb-3 text-primary">No Appointments Scheduled</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {user.userType === "student" ? "Book a session with a tutor to get started." : "Your scheduled sessions with students will appear here."}
          </p>
          {user.userType === "student" && (
            <Button asChild size="lg">
              <Link to="/tutors">Find a Tutor</Link>
            </Button>
          )}
        </motion.div>
      ) : (
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {appointments.map((appt) => (
            <Card key={appt.id} className="glass-effect card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <CardTitle className="text-xl text-primary">{appt.subject}</CardTitle>
                    <Badge variant={appt.status === "Upcoming" ? "info" : appt.status === "Completed" ? "success" : "secondary"}>{appt.status}</Badge>
                </div>
                <CardDescription className="flex items-center text-sm">
                    <UserCircle className="h-4 w-4 mr-1.5"/>
                    {user.userType === "student" ? `With: ${appt.tutorName}` : `With: ${appt.studentName}`}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                 <div>
                    <p className="text-sm text-muted-foreground flex items-center"><Clock className="h-4 w-4 mr-1.5"/>Date & Time</p>
                    <p className="font-semibold text-foreground">{appt.date} at {appt.time}</p>
                </div>
                 <div>
                    <p className="text-sm text-muted-foreground flex items-center"><DollarSign className="h-4 w-4 mr-1.5"/>Session Fee</p>
                    <p className="font-semibold text-foreground">{appt.price}</p>
                </div>
              </CardContent>
              <CardFooter className="gap-2 flex-wrap justify-start sm:justify-end border-t border-primary/20 pt-4">
                {appt.status === "Upcoming" && (
                    <Button size="sm"><Video className="mr-2 h-4 w-4"/> Join Session</Button>
                )}
                {appt.needsPayment && user.userType === "student" && (
                     <Button size="sm" variant="destructive" asChild>
                        <Link to={`/pay/${appt.id}`}><DollarSign className="mr-2 h-4 w-4"/> Make Payment</Link>
                    </Button>
                )}
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4"/> Message {user.userType === "student" ? "Tutor" : "Student"}
                </Button>
                {appt.status === "Upcoming" && (
                    <Button variant="outline" size="sm">Reschedule</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MyAppointmentsPage;
