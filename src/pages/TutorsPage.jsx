import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Star, Clock, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import mockTutors from "@/data/mockTutors";
import MapView from "@/components/MapView";

const getDistanceKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const toRad = deg => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const TutorsPage = () => {
  const { toast } = useToast();
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("");
  const [userPosition, setUserPosition] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const cardRefs = useRef({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setTutors(mockTutors);
      setFilteredTutors(mockTutors);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => setUserPosition([pos.coords.latitude, pos.coords.longitude]),
        err => console.warn("Location access denied:", err.message)
      );
    }
  }, []);

  useEffect(() => {
    filterTutors();
  }, [searchTerm, subjectFilter, ratingFilter, distanceFilter, tutors, userPosition]);

  const filterTutors = () => {
    let tempFiltered = [...tutors];
    if (searchTerm) {
      tempFiltered = tempFiltered.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (subjectFilter) {
      tempFiltered = tempFiltered.filter(t => t.subjects.some(s => s.toLowerCase() === subjectFilter.toLowerCase()));
    }
    if (ratingFilter) {
      tempFiltered = tempFiltered.filter(t => t.rating >= parseFloat(ratingFilter));
    }
    if (distanceFilter && userPosition) {
      const maxKm = parseFloat(distanceFilter);
      tempFiltered = tempFiltered.filter(tutor => {
        if (typeof tutor.lat !== "number" || typeof tutor.lng !== "number") return false;
        const dist = getDistanceKm(userPosition[0], userPosition[1], tutor.lat, tutor.lng);
        return dist <= maxKm;
      });
    }
    setFilteredTutors(tempFiltered);
  };

  const handleSearch = e => setSearchTerm(e.target.value);
  const handleSubjectFilter = value => setSubjectFilter(value);
  const handleRatingFilter = value => setRatingFilter(value);

  const handleContactTutor = (tutorName) => {
    toast({
      title: "Connection Initiated",
      description: `Secure channel request sent to ${tutorName}. Awaiting confirmation.`,
      duration: 5000,
      className: "bg-card border-primary/50 text-foreground",
    });
  };

  const handleMapClick = (id) => {
    const element = cardRefs.current[id];
    if (element) {
      const scrollY = window.scrollY;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollTo({ top: scrollY });
      element.classList.add("ring", "ring-primary");
      setTimeout(() => element.classList.remove("ring", "ring-primary"), 2000);
    }
  };

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

  const allSubjects = [...new Set(tutors.flatMap(t => t.subjects))].sort();

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animated-gradient-text">Discover Elite Tutors</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigate our network of verified experts. Find the perfect guide for your academic mission.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="glass-effect p-6 mb-10 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <Label htmlFor="search" className="mb-2 block text-primary">Search Keywords</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/70" />
                <Input id="search" placeholder="Name, subject, expertise..." className="pl-10 bg-input border-primary/30 focus:border-primary focus:ring-primary" value={searchTerm} onChange={handleSearch} />
              </div>
            </div>
            <div>
              <Label htmlFor="subject" className="mb-2 block text-primary">Filter by Subject</Label>
              <Select onValueChange={handleSubjectFilter} value={subjectFilter}>
                <SelectTrigger id="subject" className="bg-input border-primary/30 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select subject discipline" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/50">
                  <SelectItem value="">All Disciplines</SelectItem>
                  {allSubjects.map((s, i) => <SelectItem key={i} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="rating" className="mb-2 block text-primary">Minimum Rating</Label>
              <Select onValueChange={handleRatingFilter} value={ratingFilter}>
                <SelectTrigger id="rating" className="bg-input border-primary/30 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select minimum rating" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/50">
                  <SelectItem value="">Any Rating</SelectItem>
                  <SelectItem value="4.5">4.5+ Stars</SelectItem>
                  <SelectItem value="4.0">4.0+ Stars</SelectItem>
                  <SelectItem value="3.5">3.5+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="distance" className="mb-2 block text-primary">Distance (km)</Label>
              <Select onValueChange={setDistanceFilter} value={distanceFilter}>
                <SelectTrigger id="distance" className="bg-input border-primary/30 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/50">
                  <SelectItem value="">All Distances</SelectItem>
                  <SelectItem value="5">Within 5 km</SelectItem>
                  <SelectItem value="10">Within 10 km</SelectItem>
                  <SelectItem value="20">Within 20 km</SelectItem>
                  <SelectItem value="50">Within 50 km</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 h-[700px]">
          <motion.div variants={staggerContainer} className="w-full md:w-[400px] overflow-y-auto space-y-6 pr-2">
            {filteredTutors.map((tutor) => (
              <motion.div key={tutor.id} variants={fadeIn} ref={el => cardRefs.current[tutor.id] = el}>
                <Card className="h-full flex flex-col card-hover glass-effect">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center mb-3">
                        <div className="mr-4 relative">
                          <img alt={`Tutor ${tutor.name}`} className="w-20 h-20 rounded-full object-cover border-2 border-primary tech-glow" src="https://images.unsplash.com/photo-1701229404076-5629809b331d" />
                          <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 border-2 border-card ring-1 ring-green-400"></span>
                        </div>
                        <div>
                          <CardTitle className="text-xl text-primary">{tutor.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{tutor.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center bg-primary/10 px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium text-yellow-400">{tutor.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {tutor.subjects.slice(0, 3).map((s, i) => <Badge key={i} variant="secondary">{s}</Badge>)}
                      {tutor.subjects.length > 3 && <Badge variant="outline">+{tutor.subjects.length - 3} more</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="py-2 flex-grow">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{tutor.bio}</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary/70 mr-2" />
                        <span>${tutor.hourlyRate}/hour</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Award className="h-4 w-4 text-primary/70 mr-2" />
                        <span>{tutor.experience}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 flex gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={`/tutors/${tutor.id}`}>View Full Profile</Link>
                    </Button>
                    <Button className="flex-1" onClick={() => handleContactTutor(tutor.name)}>
                      Connect <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl">
            <MapView tutors={filteredTutors} onTutorClick={handleMapClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsPage;
