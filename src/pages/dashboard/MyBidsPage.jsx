
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Search, ExternalLink, MessageSquare, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MyBidsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Mock data - replace with actual data fetching
  const bids = [
    { id: 1, projectTitle: "Quantum Entanglement Simulation", studentName: "StudentX92", bidAmount: "$80", status: "Pending", date: "2025-05-10" },
    { id: 2, projectTitle: "AI Creative Writing Assistant", studentName: "FutureAuthor", bidAmount: "$120", status: "Accepted", date: "2025-05-08" },
    { id: 3, projectTitle: "AR Historical Reconstruction", studentName: "HistoryBuffAR", bidAmount: "$150", status: "Rejected", date: "2025-05-05" },
  ];
  // const bids = []; // Test empty state

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "accepted": return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "rejected": return <XCircle className="h-5 w-5 text-red-500" />;
      case "pending": default: return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
        <div className="flex items-center mb-2">
          <Briefcase className="h-10 w-10 text-primary mr-3 tech-glow" />
          <h1 className="text-4xl md:text-5xl font-bold animated-gradient-text">My Bids</h1>
        </div>
        <p className="text-lg text-muted-foreground">Track the status of your bids on student projects.</p>
      </motion.div>

      {bids.length === 0 ? (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center py-20 glass-effect rounded-xl shadow-2xl"
        >
          <Briefcase className="h-20 w-20 mx-auto text-primary/50 mb-6" />
          <h3 className="text-2xl font-semibold mb-3 text-primary">You Haven't Placed Any Bids Yet</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Explore available student projects and place bids to offer your tutoring services.
          </p>
          <Button asChild size="lg">
            <Link to="/projects" className="flex items-center">
              <Search className="mr-2 h-5 w-5" /> Browse Tasks
            </Link>
          </Button>
        </motion.div>
      ) : (
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {bids.map((bid) => (
            <Card key={bid.id} className="glass-effect card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <CardTitle className="text-xl text-primary">{bid.projectTitle}</CardTitle>
                    <Badge variant={
                        bid.status === "Accepted" ? "success" : 
                        bid.status === "Rejected" ? "destructive" : "secondary"
                    } className="flex items-center gap-1.5">
                        {getStatusIcon(bid.status)}
                        {bid.status}
                    </Badge>
                </div>
                <CardDescription>
                  For: {bid.studentName} • Submitted: {bid.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">Your Bid: <span className="text-secondary">{bid.bidAmount}</span></p>
                {/* Placeholder for bid details or cover letter snippet */}
                <p className="text-sm text-muted-foreground mt-2">Your proposal highlighted your expertise in advanced quantum algorithms...</p>
              </CardContent>
              <CardFooter className="gap-2 flex-wrap justify-start sm:justify-end border-t border-primary/20 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/projects/${bid.id}`}> <ExternalLink className="mr-2 h-4 w-4"/> View Task</Link>
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4"/> Message Student
                </Button>
                {bid.status === "Pending" && (
                   <Button variant="destructive" size="sm" className="bg-orange-600/80 hover:bg-orange-600">Withdraw Bid</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MyBidsPage;
