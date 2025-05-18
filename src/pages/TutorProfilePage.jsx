import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import {
  ArrowLeft,
  Zap,
  Star,
  Clock,
  BookOpen,
  Award,
  Calendar as CalendarIcon
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import mockTutors from "@/data/mockTutors";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TutorProfilePage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const tutor = mockTutors.find(t => String(t.id) === id);

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

      <Card className="max-w-3xl mx-auto shadow-2xl p-6 rounded-xl bg-card/80">
        <CardHeader className="flex flex-col items-center text-center">
          <img
            src={tutor.image || "https://source.unsplash.com/100x100/?face,portrait"}
            alt={tutor.name}
            className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary shadow-md"
          />
          <CardTitle className="text-3xl">{tutor.name}</CardTitle>
          <CardDescription className="text-muted-foreground">{tutor.title}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 mt-4">
          <div className="text-base leading-relaxed text-muted-foreground">{tutor.bio}</div>

          <div className="flex flex-wrap gap-2">
            {tutor.subjects.map((subj, idx) => (
              <Badge key={idx} className="text-sm">{subj}</Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center"><Star className="h-4 w-4 mr-2 text-yellow-400" /> Rating: {tutor.rating}</div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-2 text-blue-400" /> Rate: ${tutor.hourlyRate}/hr</div>
            <div className="flex items-center"><Award className="h-4 w-4 mr-2 text-green-400" /> {tutor.experience}</div>
            <div className="flex items-center"><BookOpen className="h-4 w-4 mr-2 text-violet-400" /> {tutor.education}</div>
          </div>

          {tutor.availableTime && (
            <div className="mt-6">
              <h3 className="text-md font-semibold text-primary mb-2">Availability Calendar</h3>
              <div className="rounded-lg overflow-hidden border border-border bg-muted/30 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                  {tutor.availableTime.map((slot, idx) => (
                    <div key={idx} className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-cyan-400" />
                      <span>{slot.day}: {slot.start} - {slot.end}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tutor.certifications && (
            <div>
              <h3 className="text-md font-semibold text-primary mb-1">Certifications</h3>
              <ul className="list-disc pl-6 text-muted-foreground text-sm">
                {tutor.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {tutor.reviews && tutor.reviews.length > 0 && (
            <div>
              <h3 className="text-md font-semibold text-primary mb-1">Student Reviews</h3>
              <div className="space-y-2">
                {tutor.reviews.map((rev, idx) => (
                  <div key={idx} className="p-3 bg-muted/30 rounded-lg shadow-inner">
                    <p className="text-sm"><strong>{rev.user}</strong>: {rev.comment}</p>
                    <p className="text-xs text-yellow-500">Rating: {rev.rating}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="mt-6 flex justify-center">
          <Button onClick={() =>
            toast({
              title: "Booking Started",
              description: `You've started booking ${tutor.name}.`,
            })
          }>
            Book a Session <Zap className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TutorProfilePage;
