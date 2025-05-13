
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

const NotFoundPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center glass-effect p-10 md:p-16 rounded-xl shadow-2xl max-w-lg w-full"
      >
        <AlertTriangle className="h-24 w-24 text-destructive mx-auto mb-8 tech-glow" />
        <h1 className="text-6xl md:text-7xl font-extrabold text-destructive mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" /> Go to Homepage
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
