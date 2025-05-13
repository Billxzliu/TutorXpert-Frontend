
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { List, Search, PlusCircle, Eye, Edit3, Trash2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const MyListingsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Mock data - replace with actual data fetching (for Tutors)
  const listings = [
    { id: 1, title: "Expert Quantum Physics Tutoring", subjects: ["Quantum Mechanics", "Relativity"], hourlyRate: "$75/hr", status: "Active", views: 120, applications: 5 },
    { id: 2, title: "Advanced AI & Machine Learning Guidance", subjects: ["Deep Learning", "NLP"], hourlyRate: "$80/hr", status: "Paused", views: 85, applications: 2 },
  ];
  // const listings = []; // Test empty state

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
        <div className="flex items-center mb-2">
          <List className="h-10 w-10 text-primary mr-3 tech-glow" />
          <h1 className="text-4xl md:text-5xl font-bold animated-gradient-text">My Tutor Listings</h1>
        </div>
        <p className="text-lg text-muted-foreground">Manage your tutoring service profiles and availability.</p>
         <div className="mt-6">
            <Button size="lg" asChild>
                <Link to="/dashboard/listings/new"><PlusCircle className="mr-2 h-5 w-5"/> Create New Listing</Link>
            </Button>
        </div>
      </motion.div>

      {listings.length === 0 ? (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center py-20 glass-effect rounded-xl shadow-2xl"
        >
          <List className="h-20 w-20 mx-auto text-primary/50 mb-6" />
          <h3 className="text-2xl font-semibold mb-3 text-primary">No Listings Created Yet</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Showcase your expertise by creating a tutor listing. Attract students looking for your skills.
          </p>
        </motion.div>
      ) : (
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {listings.map((listing) => (
            <Card key={listing.id} className="glass-effect card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <CardTitle className="text-xl text-primary">{listing.title}</CardTitle>
                    <Badge variant={listing.status === "Active" ? "success" : "secondary"}>{listing.status}</Badge>
                </div>
                <CardDescription className="flex flex-wrap gap-2 mt-1">
                    {listing.subjects.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-3 gap-4">
                <div>
                    <p className="text-sm text-muted-foreground">Hourly Rate</p>
                    <p className="text-lg font-semibold text-secondary">{listing.hourlyRate}</p>
                </div>
                 <div>
                    <p className="text-sm text-muted-foreground">Views</p>
                    <p className="text-lg font-semibold text-foreground">{listing.views}</p>
                </div>
                 <div>
                    <p className="text-sm text-muted-foreground">Applications</p>
                    <p className="text-lg font-semibold text-foreground">{listing.applications}</p>
                </div>
              </CardContent>
              <CardFooter className="gap-2 flex-wrap justify-start sm:justify-end border-t border-primary/20 pt-4">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4"/> View Listing
                </Button>
                <Button variant="outline" size="sm">
                  <Edit3 className="mr-2 h-4 w-4"/> Edit
                </Button>
                 <Button variant="destructive" size="sm" className="bg-red-700/80 hover:bg-red-700">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
                {listing.status === "Active" && (
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                        <Zap className="mr-2 h-4 w-4"/> Boost Listing
                    </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MyListingsPage;
