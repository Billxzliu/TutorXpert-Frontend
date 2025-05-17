import React, { useState, useEffect, useRef } from "react";
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
import mockTasks from "@/data/mockTasks";

const cityCoordinates = {
  "Sydney, Australia": { top: "53.5%", left: "76.5%" },
  "Melbourne, Australia": { top: "72.2%", left: "77.5%" },
  "Brisbane, Australia": { top: "44%", left: "75.5%" },
  "Adelaide, Australia": { top: "65.2%", left: "64.2%" },
  "Canberra, Australia": { top: "61.5%", left: "73.4%" },
  "Perth, Australia": { top: "66.1%", left: "30.5%" },
  "Darwin, Australia": { top: "24.5%", left: "50.8%" },
  "Hobart, Australia": { top: "86.2%", left: "80.3%" },
  "Gold Coast, Australia": { top: "49.2%", left: "77.2%" }
};

const TasksPage = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const taskRefs = useRef({});

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
      description: `You have expressed interest in "${taskTitle}". The task poster will be notified.`,
      duration: 5000,
      className: "bg-card border-primary/50 text-foreground",
    });
  };

  const scrollToCard = (taskId) => {
    const target = taskRefs.current[taskId];
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
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

        <div className="flex flex-col md:flex-row gap-6 h-[700px]">
          <motion.div variants={staggerContainer} className="w-full md:w-[400px] overflow-y-auto space-y-6 pr-2">
            {filteredTasks.map(task => (
              <motion.div key={task.id} variants={fadeIn} ref={el => taskRefs.current[task.id] = el}>
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
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="h-4 w-4 text-primary/70 mr-2" />
                        <span>${task.budget}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary/70 mr-2" />
                        <span>{task.deadline}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <BookOpen className="h-4 w-4 text-primary/70 mr-2" />
                        <span>{task.location}</span>
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

          <div className="relative flex-1 rounded-xl overflow-hidden">
            <img src="/map.png" alt="Australia Map" className="w-full h-full object-contain" />
            {filteredTasks.map(task => {
              const coords = cityCoordinates[task.location];
              if (!coords) return null;
              return (
                <div
                  key={task.id}
                  onClick={() => scrollToCard(task.id)}
                  className="absolute bg-primary text-background text-xs px-3 py-1 rounded-full font-semibold shadow-md cursor-pointer hover:bg-secondary"
                  style={{ top: coords.top, left: coords.left, transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap' }}
                >
                  {task.subject}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
