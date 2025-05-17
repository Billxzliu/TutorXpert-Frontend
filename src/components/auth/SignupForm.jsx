
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import TutorFormFields from "@/components/auth/TutorFormFields";
import { motion } from "framer-motion";
import { UserPlus, Zap } from "lucide-react";

const SignupForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const initialFormData = {
    firstName: "", lastName: "", email: "", password: "", confirmPassword: "", userType: "",
    phone: "", address: "", educationLevel: "", major: "", certifications: "",
    childrenCheck: "", subjects: "", hasExperience: false, experienceDetail: "",
    availableTimes: "", acceptShortNotice: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(currentFormData => {
      const updatedFormData = { ...currentFormData, [name]: value };
      if (name === "userType" && value === "student") {
        // Clear tutor fields if user switches to student
        return {
          ...updatedFormData, // Keep common fields and new userType
          phone: "",
          address: "",
          educationLevel: "",
          major: "",
          certifications: "",
          childrenCheck: "",
          subjects: "",
          hasExperience: false,
          experienceDetail: "",
          availableTimes: "",
          acceptShortNotice: false,
        };
      }
      return updatedFormData;
    });
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let requiredFields = ["firstName", "lastName", "email", "password", "confirmPassword", "userType"];
    if (formData.userType === "tutor") {
      requiredFields = [
        ...requiredFields, "phone", "address", "educationLevel", "major", "subjects", "availableTimes"
      ];
      if (formData.hasExperience && !formData.experienceDetail) {
        toast({ title: "Error", description: "Please provide details about your experience.", variant: "destructive", className: "bg-card border-destructive/50 text-foreground" });
        setIsSubmitting(false); return;
      }
    }

    for (const field of requiredFields) {
      if (!formData[field]) {
        toast({ title: "Error", description: `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`, variant: "destructive", className: "bg-card border-destructive/50 text-foreground" });
        setIsSubmitting(false); return;
      }
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({ title: "Error", description: "Passwords do not match.", variant: "destructive", className: "bg-card border-destructive/50 text-foreground" });
      setIsSubmitting(false); return;
    }
    
    setTimeout(() => {
      if (formData.email.includes("error")) {
        toast({ title: "Registration Failed", description: "This email is already registered.", variant: "destructive", className: "bg-card border-destructive/50 text-foreground" });
        setIsSubmitting(false); return;
      }
      
      const userToSave = { ...formData };
      delete userToSave.confirmPassword;
      userToSave.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(userToSave));
      
      toast({ title: "Account Synced!", description: "You are now part of the GlowUpTutors network.", className: "bg-card border-primary/50 text-foreground" });
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  const inputStyles = "bg-input border-primary/30 focus:border-primary focus:ring-primary placeholder:text-muted-foreground/70";
  const labelStyles = "text-primary/90 font-medium";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-1">
            <Label htmlFor="firstName" className={labelStyles}>First Name *</Label>
            <Input id="firstName" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required className={inputStyles} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName" className={labelStyles}>Last Name *</Label>
            <Input id="lastName" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required className={inputStyles} />
          </div>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="email" className={labelStyles}>Email Address *</Label>
          <Input id="email" name="email" type="email" placeholder="your.address@domain.tech" value={formData.email} onChange={handleChange} required className={inputStyles} />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-1">
            <Label htmlFor="password" className={labelStyles}>Password *</Label>
            <Input id="password" name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required className={inputStyles} />
            <p className="text-xs text-muted-foreground">Min. 8 characters, alphanumeric.</p>
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirmPassword" className={labelStyles}>Confirm Password *</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} required className={inputStyles} />
          </div>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="userType" className={labelStyles}>Select Role *</Label>
          <Select onValueChange={(value) => handleSelectChange("userType", value)} value={formData.userType} required>
            <SelectTrigger id="userType" className={inputStyles}>
              <SelectValue placeholder="Choose your role in the network" />
            </SelectTrigger>
            <SelectContent className="bg-card border-primary/50">
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="tutor">Tutor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {formData.userType === 'tutor' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-4 pt-4 border-t border-primary/20"
          >
            <h3 className="text-lg font-semibold text-secondary text-center">Tutor Profile Enhancement</h3>
            <TutorFormFields 
              formData={formData} 
              handleChange={handleChange} 
              handleSelectChange={handleSelectChange}
              handleCheckboxChange={handleCheckboxChange}
            />
          </motion.div>
        )}

        <div className="pt-6">
          <Button type="submit" className="w-full py-3 text-base" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin mr-3 h-5 w-5 border-t-2 border-b-2 border-primary-foreground rounded-full"></div>
                Processing Registration...
              </div>
            ) : (
              <>
                <UserPlus className="mr-2 h-5 w-5" /> Create Account & Engage
              </>
            )}
          </Button>
        </div>
        
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link to="/login" className="font-medium text-primary hover:text-primary/80 transition-colors">
            Log In to Network
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default SignupForm;
