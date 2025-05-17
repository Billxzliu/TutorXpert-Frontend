import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const NewTaskPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    budget: "",
    deadline: "",
    attachments: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, attachments: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.title || !formData.subject || !formData.description || !formData.budget || !formData.deadline) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      const projects = JSON.parse(localStorage.getItem("projects") || "[]");
      const newTask = {
        id: Date.now(),
        ...formData,
        postedBy: "You",
        postedDate: "Just now",
        status: "Open",
        attachments: formData.attachments.map(file => file.name)
      };

      projects.push(newTask);
      localStorage.setItem("projects", JSON.stringify(projects));

      toast({
        title: "Success!",
        description: "Your project has been posted successfully.",
      });

      setIsSubmitting(false);
      navigate("/projects");
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card/30 text-foreground py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold animated-gradient-text mb-4">Post a New Task</h1>
          <p className="text-lg text-muted-foreground">
            Share the details of your academic project to find the perfect tutor.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Card className="bg-card/80 backdrop-blur-xl">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle className="animated-gradient-text">Task Details</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Provide clear and detailed information to attract the right tutors.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Task Title *</Label>
                  <Input id="title" name="title" placeholder="E.g., Calculus Problem Set Help" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select onValueChange={(value) => handleSelectChange("subject", value)} value={formData.subject} required>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                      <SelectItem value="Physics">Physics</SelectItem>
                      <SelectItem value="Chemistry">Chemistry</SelectItem>
                      <SelectItem value="Biology">Biology</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="History">History</SelectItem>
                      <SelectItem value="Economics">Economics</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Task Description *</Label>
                  <Textarea id="description" name="description" placeholder="Describe your project in detail..." rows={5} value={formData.description} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range ($) *</Label>
                    <Select onValueChange={(value) => handleSelectChange("budget", value)} value={formData.budget} required>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20-30">$20 - $30</SelectItem>
                        <SelectItem value="30-50">$30 - $50</SelectItem>
                        <SelectItem value="50-70">$50 - $70</SelectItem>
                        <SelectItem value="70-100">$70 - $100</SelectItem>
                        <SelectItem value="100-150">$100 - $150</SelectItem>
                        <SelectItem value="150-200">$150 - $200</SelectItem>
                        <SelectItem value="200+">$200+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline *</Label>
                    <Select onValueChange={(value) => handleSelectChange("deadline", value)} value={formData.deadline} required>
                      <SelectTrigger id="deadline">
                        <SelectValue placeholder="Select deadline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1 day">1 day</SelectItem>
                        <SelectItem value="2 days">2 days</SelectItem>
                        <SelectItem value="3 days">3 days</SelectItem>
                        <SelectItem value="5 days">5 days</SelectItem>
                        <SelectItem value="1 week">1 week</SelectItem>
                        <SelectItem value="2 weeks">2 weeks</SelectItem>
                        <SelectItem value="1 month">1 month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachments">Attachments (Optional)</Label>
                  <Input id="attachments" type="file" multiple onChange={handleFileChange} className="cursor-pointer" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload any relevant documents, instructions, or examples (Max 5 files, 10MB each).
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => navigate("/projects")}>Cancel</Button>
                <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></div>
                      Posting...
                    </div>
                  ) : (
                    "Post Task"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default NewTaskPage;
