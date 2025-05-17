
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/auth/SignupForm";
import { Zap, Users, Brain } from "lucide-react";

const SignupPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="glass-effect p-8 md:p-10 rounded-xl shadow-2xl"
        >
          <div className="text-center mb-8">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4 tech-glow" />
            <h1 className="text-3xl md:text-4xl font-bold animated-gradient-text">Join GlowUpTutors</h1>
            <p className="text-muted-foreground mt-2">
              Unlock your potential. Connect, learn, and grow with us.
            </p>
          </div>
          
          <SignupForm />
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-card text-muted-foreground rounded-full">Or sign up with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" className="w-full flex items-center justify-center py-3">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                <span className="text-blue-500">Google</span>
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center py-3">
                <Brain className="h-5 w-5 mr-2 text-purple-500" />
                 <span className="text-purple-500">Neuralink ID</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
