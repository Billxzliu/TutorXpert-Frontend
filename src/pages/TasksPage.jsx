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

const TasksPage = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

const mockTasks = [
  { id: 1, title: "Quantum Entanglement Simulation", subject: "Physics", description: "Develop a Python simulation for quantum entanglement phenomena. Requires strong understanding of quantum mechanics and linear algebra.", budget: "150-250", deadline: "10 days", postedBy: "StudentX92", postedDate: "3 hours ago", status: "Open" },
  { id: 2, title: "Decentralized Voting System (Blockchain)", subject: "Computer Science", description: "Build a proof-of-concept decentralized voting application using Solidity and a modern JavaScript framework. Focus on security and transparency.", budget: "200-350", deadline: "14 days", postedBy: "CryptoLearn", postedDate: "1 day ago", status: "Open" },
  { id: 3, title: "AI-Powered Creative Writing Assistant", subject: "Computer Science", description: "Fine-tune a GPT-style model for specific creative writing genres. Need help with dataset preparation and model training.", budget: "100-180", deadline: "7 days", postedBy: "FutureAuthor", postedDate: "5 hours ago", status: "Open" },
  { id: 4, title: "CRISPR Gene Editing Protocol Design", subject: "Biology", description: "Design a detailed experimental protocol for a specific gene editing task using CRISPR-Cas9. Literature review and methodology required.", budget: "120-200", deadline: "12 days", postedBy: "BioInnovate", postedDate: "18 hours ago", status: "Open" },
  { id: 5, title: "AR Historical Site Reconstruction", subject: "Engineering", description: "Create an augmented reality experience to reconstruct a local historical site. Requires Unity/Unreal Engine skills and 3D modeling.", budget: "250-400", deadline: "20 days", postedBy: "HistoryBuffAR", postedDate: "2 days ago", status: "Open" },
  { id: 6, title: "Algorithmic Trading Bot Strategy", subject: "Economics", description: "Develop and backtest a novel algorithmic trading strategy for cryptocurrency markets. Python and financial modeling skills needed.", budget: "180-300", deadline: "15 days", postedBy: "QuantStudent", postedDate: "1 day ago", status: "Open" },
  { id: 7, title: "Mathematics Olympiad Problem Set Design", subject: "Mathematics", description: "Create challenging and original problem sets for high school math competitions. Include solutions and difficulty ratings.", budget: "80-150", deadline: "5 days", postedBy: "MathNerd", postedDate: "4 hours ago", status: "Open" },
  { id: 8, title: "Academic Essay Review - British Literature", subject: "English", description: "Proofread and provide critical feedback for an undergraduate essay on Victorian literature.", budget: "50-100", deadline: "3 days", postedBy: "LitMajor21", postedDate: "6 hours ago", status: "Open" },
  { id: 9, title: "Chemical Reaction Simulation with Python", subject: "Chemistry", description: "Write code to simulate basic chemical kinetics and thermodynamics for a high school teaching demo.", budget: "100-200", deadline: "6 days", postedBy: "ChemGeek", postedDate: "10 hours ago", status: "Open" },
  { id: 10, title: "Civil Engineering Bridge Design Report", subject: "Engineering", description: "Help prepare a professional report for a capstone civil engineering project. Focus on load analysis and CAD schematics.", budget: "150-250", deadline: "9 days", postedBy: "BuildMaster", postedDate: "1 day ago", status: "Open" },
  { id: 11, title: "Timeline and Source Evaluation for WWII", subject: "History", description: "Construct a source-based timeline of key WWII events. Emphasis on critical analysis of primary documents.", budget: "90-130", deadline: "4 days", postedBy: "History4All", postedDate: "3 hours ago", status: "Open" },
  { id: 12, title: "Design a Philosophy Logic Puzzle Set", subject: "Social Studies", description: "Create logic puzzles inspired by classic philosophical paradoxes and dilemmas. Suitable for classroom use.", budget: "70-120", deadline: "5 days", postedBy: "EthicsThinker", postedDate: "2 hours ago", status: "Open" },
  { id: 13, title: "Experimental Design: Learning Styles in Children", subject: "Psychology", description: "Assist in designing a small-scale experiment evaluating the effectiveness of different teaching methods.", budget: "130-220", deadline: "7 days", postedBy: "EduLab", postedDate: "5 hours ago", status: "Open" },
  { id: 14, title: "Survey Study on Mental Health in Teens", subject: "Psychology", description: "Support statistical analysis and reporting for a psychology survey study. SPSS or R experience preferred.", budget: "110-180", deadline: "8 days", postedBy: "MindMatters", postedDate: "9 hours ago", status: "Open" }
];



  useEffect(() => {
    const timer = setTimeout(() => {
      setTasks(mockTasks);
      setFilteredTasks(mockTasks);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    filterTasks();
  }, [searchTerm, subjectFilter, budgetFilter, tasks]);

  const filterTasks = () => {
    let tempFiltered = [...tasks];
    if (searchTerm) {
      tempFiltered = tempFiltered.filter(t =>
        t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (subjectFilter) {
      tempFiltered = tempFiltered.filter(t => t.subject.toLowerCase() === subjectFilter.toLowerCase());
    }
    if (budgetFilter) {
      const [min, max] = budgetFilter.split("-").map(Number);
      tempFiltered = tempFiltered.filter(t => {
        const [pMin, pMax] = t.budget.split("-").map(Number);
        return pMax >= min && (max ? pMin <= max : true);
      });
    }
    setFilteredTasks(tempFiltered);
  };

  const handleSearch = e => setSearchTerm(e.target.value);
  const handleSubjectFilter = value => setSubjectFilter(value);
  const handleBudgetFilter = value => setBudgetFilter(value);

  const handleApplyToTask = (taskTitle) => {
    toast({
      title: "Application Submitted",
      description: `You have expressed interest in \"${taskTitle}\". The task poster will be notified.`,
      duration: 5000,
      className: "bg-card border-primary/50 text-foreground",
    });
  };

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

  const allSubjects = [...new Set(tasks.map(t => t.subject))].sort();

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animated-gradient-text">Explore Student Tasks</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse exciting student-led tasks looking for skilled collaborators. Help shape innovative outcomes.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/projects/new"><PlusCircle className="mr-2 h-5 w-5" /> Post Your Task</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="glass-effect p-6 mb-10 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <Label htmlFor="search" className="mb-2 block text-primary">Search Tasks</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/70" />
                <Input id="search" placeholder="Search by title, skills, or subject..." className="pl-10 bg-input border-primary/30 focus:border-primary focus:ring-primary" value={searchTerm} onChange={handleSearch} />
              </div>
            </div>
            <div>
              <Label htmlFor="subject" className="mb-2 block text-primary">Filter by Subject</Label>
              <Select onValueChange={handleSubjectFilter} value={subjectFilter}>
                <SelectTrigger id="subject" className="bg-input border-primary/30 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Choose a subject area" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/50">
                  <SelectItem value="">All Subjects</SelectItem>
                  {allSubjects.map((s, i) => <SelectItem key={i} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget" className="mb-2 block text-primary">Budget</Label>
              <Select onValueChange={handleBudgetFilter} value={budgetFilter}>
                <SelectTrigger id="budget" className="bg-input border-primary/30 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/50">
                  <SelectItem value="">Any</SelectItem>
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
                Showing {filteredTasks.length} of {tasks.length} tasks
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

            {filteredTasks.length === 0 ? (
              <motion.div variants={fadeIn} className="text-center py-20 glass-effect rounded-xl shadow-2xl">
                <BookOpen className="h-16 w-16 mx-auto text-primary/50 mb-6" />
                <h3 className="text-2xl font-semibold mb-3 text-primary">No Tasks Found</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Try adjusting filters or check back later for new student tasks.
                </p>
                <Button onClick={() => { setSearchTerm(""); setSubjectFilter(""); setBudgetFilter(""); }}>
                  Reset Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredTasks.map((task) => (
                  <motion.div key={task.id} variants={fadeIn}>
                    <Card className="h-full flex flex-col card-hover glass-effect">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-primary">{task.title}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">
                              Posted by {task.postedBy} • {task.postedDate}
                            </p>
                          </div>
                          <Badge variant={task.status === "Open" ? "success" : "secondary"}>{task.status}</Badge>
                        </div>
                        <Badge variant="outline" className="mt-2 inline-block">{task.subject}</Badge>
                      </CardHeader>
                      <CardContent className="py-2 flex-grow">
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{task.description}</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <DollarSign className="h-4 w-4 text-primary/70 mr-2" />
                            <span>Budget: ${task.budget}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 text-primary/70 mr-2" />
                            <span>Deadline: {task.deadline}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-4 flex gap-3">
                        <Button variant="outline" className="flex-1" asChild>
                          <Link to={`/projects/${task.id}`}>View Details</Link>
                        </Button>
                        <Button className="flex-1" onClick={() => handleApplyToTask(task.title)}>
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

export default TasksPage;
