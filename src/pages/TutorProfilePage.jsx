import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Star, Clock, BookOpen, Award, Zap, MessageSquare, CalendarPlus, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for a single tutor profile
const mockTutors = [
  {
    id: "1",
    name: "Dr. Anya Sharma",
    title: "Quantum Physics & AI Specialist",
    subjects: ["Quantum Computing", "Machine Learning", "AI Ethics", "Theoretical Physics", "Advanced Algorithms"],
    rating: 4.9,
    hourlyRate: 75,
    experience: "12+ years",
    bio: "Pioneering researcher in quantum AI, dedicated to making complex theories accessible. MIT Ph.D. with extensive teaching experience at graduate and undergraduate levels. Published in numerous high-impact journals.",
    image: "Female scientist with futuristic interface",
    education: "Ph.D. in Quantum Physics, MIT",
    certifications: ["Certified AI Professional", "Advanced Theoretical Physics Instructor"],
    availability: "Mon-Fri: 5 PM - 9 PM EST, Sat: 10 AM - 4 PM EST",
    reviews: [
      { user: "StudentX92", rating: 5, comment: "Dr. Sharma is an incredible tutor! She explained quantum entanglement in a way I finally understood." },
      { user: "AI_Learner", rating: 5, comment: "Her insights into AI ethics were invaluable for my research." }
    ]
  },
  {
    id: "2",
    name: "Prof. Kenji Tanaka",
    title: "Cybersecurity & Blockchain Architect",
    subjects: ["Network Security", "Cryptography", "DeFi", "Smart Contracts", "Ethical Hacking"],
    rating: 4.8,
    hourlyRate: 80,
    experience: "10 years",
    bio: "Ex-Silicon Valley security lead, now demystifying digital defense and decentralized systems. Stanford M.S. and active contributor to open-source security projects. Passionate about mentoring the next generation of cyber professionals.",
    image: "Male coder with multiple monitors and glowing code",
    education: "M.S. in Computer Science (Security Focus), Stanford",
    certifications: ["CISSP", "Certified Blockchain Expert"],
    availability: "Weekends Only, Flexible Hours",
    reviews: [
      { user: "CryptoLearn", rating: 5, comment: "Prof. Tanaka's expertise in DeFi is unmatched. Highly recommended!" },
      { user: "SecureDev", rating: 4.5, comment: "Great practical examples in cryptography." }
    ]
  }
];

const TutorProfilePage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const tutor = mockTutors.find(t => t.id === id);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (!tutor) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p>Tutor not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen p-8 text-foreground bg-background"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Button variant="outline" asChild className="mb-6">
        <Link to="/tutors"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutors</Link>
      </Button>
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl">{tutor.name}</CardTitle>
          <CardDescription>{tutor.title}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-muted-foreground">{tutor.bio}</div>
          <div className="flex flex-wrap gap-2">
            {tutor.subjects.map((subj, idx) => (
              <Badge key={idx}>{subj}</Badge>
            ))}
          </div>
          <div className="text-sm text-secondary">Experience: {tutor.experience}</div>
          <div className="text-sm text-secondary">Rate: ${tutor.hourlyRate}/hr</div>
        </CardContent>
        <CardFooter>
          <Button variant="default">Book a Session</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TutorProfilePage;
