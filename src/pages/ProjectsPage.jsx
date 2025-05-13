
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Calendar, DollarSign, BookOpen, Zap, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const ProjectsPage = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const mockProjects = [
    { id: 1, title: "Quantum Entanglement Simulation", subject: "Physics", description: "Develop a Python simulation for quantum entanglement phenomena. Requires strong understanding of quantum mechanics and linear algebra.", budget: "150-250", deadline: "10 days", postedBy: "StudentX92", postedDate: "3 hours ago", status: "Open" },
    { id: 2, title: "Decentralized Voting System (Blockchain)", subject: "Computer Science", description: "Build a proof-of-concept decentralized voting application using Solidity and a modern JavaScript framework. Focus on security and transparency.", budget: "200-350", deadline: "14 days", postedBy: "CryptoLearn", postedDate: "1 day ago", status: "Open" },
    { id: 3, title: "AI-Powered Creative Writing Assistant", subject: "AI/ML", description: "Fine-tune a GPT-style model for specific creative writing genres. Need help with dataset preparation and model training.", budget: "100-180", deadline: "7 days", postedBy: "FutureAuthor", postedDate: "5 hours ago", status: "Open" },
    { id: 4, title: "CRISPR Gene Editing Protocol Design", subject: "Biology", description: "Design a detailed experimental protocol for a specific gene editing task using CRISPR-Cas9. Literature review and methodology required.", budget: "120-200", deadline: "12 days", postedBy: "BioInnovate", postedDate: "18 hours ago", status: "Open" },
    { id: 5, title: "AR Historical Site Reconstruction", subject: "AR/VR", description: "Create an augmented reality experience to reconstruct a local historical site. Requires Unity/Unreal Engine skills and 3D modeling.", budget: "250-400", deadline: "20 days", postedBy: "HistoryBuffAR", postedDate: "2 days ago", status: "Open" },
    { id: 6, title: "Algorithmic Trading Bot Strategy", subject: "Finance", description: "Develop and backtest a novel algorithmic trading strategy for cryptocurrency markets. Python and financial modeling skills needed.", budget: "180-300", deadline: "15 days", postedBy: "QuantStudent", postedDate: "1 day ago", status: "Open" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    filterProjects();
  }, [searchTerm, subjectFilter, budgetFilter, projects]);

  const filterProjects = () => {
    let tempFiltered = [...projects];
    if (searchTerm) {
      tempFiltered = tempFiltered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (subjectFilter) {
      tempFiltered = tempFiltered.filter(p => p.subject.toLowerCase() === subjectFilter.toLowerCase());
    }
    if (budgetFilter) {
      const [min, max] = budgetFilter.split("-").map(Number);
      tempFiltered = tempFiltered.filter(p => {
        const [pMin, pMax] = p.budget.split("-").map(Number);
        return pMax >= min && (max ? pMin <= max : true); // Handle open-ended max like "200+"
      });
    }
    setFilteredProjects(tempFiltered);
  };

  const handleSearch = e => setSearchTerm(e.target.value);
  const handleSubjectFilter = value => setSubjectFilter(value);
  const handleBudgetFilter = value => setBudgetFilter(value);

  const handleApplyToProject = (projectTitle) => {
    toast({
      title: "Application Transmitted",
      description: `Your intent to engage with project "${projectTitle}" has been securely logged.`,
      duration: 5000,
      className: "bg-card border-primary/50 text-foreground",
    });
  };

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

  const allSubjects = [...new Set(projects.map(p => p.subject))].sort();

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animated-gradient-text">Explore Student Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover innovative projects seeking expert guidance. Lend your skills and shape the future.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/projects/new"><PlusCircle className="mr-2 h-5 w-5" /> Post Your Project</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="glass-effect p-6 mb-10 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <Label htmlFor="search" className="mb-2 block text-primary">Search Projects</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/70" />
                <Input id="search" placeholder="Title, description, subject..." className="pl-10 bg-input border-primary/30 focus:border-primary focus:ring-primary" value={searchTerm} onChange={handleSearch} />
              </div>
            </div>
            <div>
              <Label htmlFor="subject" className="mb-2 block text-primary">Filter by Subject Area</Label>
              <Select onValueChange={handleSubjectFilter} value={subjectFilter}>
                <SelectTrigger id="subject" className="bg-input border-primary/30 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select subject area" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/50">
                  <SelectItem value="">All Subject Areas</SelectItem>
                  {allSubjects.map((s, i) => <SelectItem key={i} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget" className="mb-2 block text-primary">Budget Range ($)</Label>
              <Select onValueChange={handleBudgetFilter} value={budgetFilter}>
                <SelectTrigger id="budget" className="bg-input border-primary/30 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/50">
                  <SelectItem value="">Any Budget</SelectItem>
                  <SelectItem value="0-100">$0 - $100</SelectItem>
                  <SelectItem value="100-200">$100 - $200</SelectItem>
                  <SelectItem value="200-300">$200 - $300</SelectItem>
                  <SelectItem value="300-999999">$300+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary tech-glow"></div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">
                Found {filteredProjects.length} of {projects.length} active projects
              </p>
              <div className="flex items-center">
                <Filter className="h-5 w-5 mr-2 text-primary/70" />
                <span className="text-sm text-muted-foreground">Sort by: </span>
                <Select defaultValue="newest">
                  <SelectTrigger className="ml-2 text-sm bg-transparent border-none focus:ring-0 h-auto p-1 text-muted-foreground hover:text-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-primary/50">
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="budget_hl">Budget: High to Low</SelectItem>
                    <SelectItem value="deadline">Deadline: Soonest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <motion.div variants={fadeIn} className="text-center py-20 glass-effect rounded-xl shadow-2xl">
                <BookOpen className="h-16 w-16 mx-auto text-primary/50 mb-6" />
                <h3 className="text-2xl font-semibold mb-3 text-primary">No Projects Match Your Query</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Adjust your filters or check back soon for new opportunities.
                </p>
                <Button onClick={() => { setSearchTerm(""); setSubjectFilter(""); setBudgetFilter(""); }}>
                  Clear All Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={fadeIn}>
                    <Card className="h-full flex flex-col card-hover glass-effect">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">
                              Posted by {project.postedBy} • {project.postedDate}
                            </p>
                          </div>
                          <Badge variant={project.status === "Open" ? "success" : "secondary"}>{project.status}</Badge>
                        </div>
                        <Badge variant="outline" className="mt-2 inline-block">{project.subject}</Badge>
                      </CardHeader>
                      <CardContent className="py-2 flex-grow">
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <DollarSign className="h-4 w-4 text-primary/70 mr-2" />
                            <span>Budget: ${project.budget}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 text-primary/70 mr-2" />
                            <span>Deadline: {project.deadline}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-4 flex gap-3">
                        <Button variant="outline" className="flex-1" asChild>
                          <Link to={`/projects/${project.id}`}>View Details</Link>
                        </Button>
                        <Button className="flex-1" onClick={() => handleApplyToProject(project.title)}>
                          Apply Now <Zap className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
