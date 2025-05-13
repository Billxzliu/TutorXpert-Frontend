
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Search, UserX } from "lucide-react";
import { Link } from "react-router-dom";

const MyFavouritesPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  // Mock data - replace with actual data fetching
  const favoriteTutors = [
    { id: 1, name: "Dr. Anya Sharma", specialty: "Quantum Physics & AI", image: "Female scientist with futuristic interface" },
    { id: 2, name: "Prof. Kenji Tanaka", specialty: "Cybersecurity & Blockchain", image: "Male coder with multiple monitors" },
  ];

  // const favoriteTutors = []; // Test empty state

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
        <div className="flex items-center mb-2">
          <Star className="h-10 w-10 text-yellow-400 mr-3 tech-glow" />
          <h1 className="text-4xl md:text-5xl font-bold animated-gradient-text">My Favourites</h1>
        </div>
        <p className="text-lg text-muted-foreground">Your handpicked list of top tutors.</p>
      </motion.div>

      {favoriteTutors.length === 0 ? (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center py-20 glass-effect rounded-xl shadow-2xl"
        >
          <UserX className="h-20 w-20 mx-auto text-primary/50 mb-6" />
          <h3 className="text-2xl font-semibold mb-3 text-primary">No Favourite Tutors Yet</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Start exploring and add tutors to your favourites list for quick access.
          </p>
          <Button asChild size="lg">
            <Link to="/tutors" className="flex items-center">
              <Search className="mr-2 h-5 w-5" /> Find Tutors
            </Link>
          </Button>
        </motion.div>
      ) : (
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {favoriteTutors.map((tutor) => (
            <Card key={tutor.id} className="glass-effect card-hover">
              <CardHeader>
                <img  alt={tutor.name} className="w-full h-48 object-cover rounded-t-lg mb-4" src="https://images.unsplash.com/photo-1701229404076-5629809b331d" />
                <CardTitle className="text-xl text-primary">{tutor.name}</CardTitle>
                <CardDescription>{tutor.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-2">
                <Button asChild className="flex-1">
                  <Link to={`/tutors/${tutor.id}`}>View Profile</Link>
                </Button>
                <Button variant="outline" className="flex-1 border-red-500/50 text-red-500 hover:bg-red-500/10 hover:text-red-400">
                  <UserX className="mr-2 h-4 w-4" /> Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MyFavouritesPage;
