
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Lightbulb, Facebook, Instagram, Youtube, MessageSquare, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutUsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const teamMembers = [
    { name: "Dr. Alex Chen", role: "Founder & CEO", image: "Visionary leader with a tech background", bio: "Passionate about revolutionizing education through technology, Dr. Chen brings over 15 years of experience in AI and e-learning platforms." },
    { name: "Maria Rodriguez", role: "Head of Operations", image: "Experienced operations manager in a modern office", bio: "Maria ensures the seamless functioning of GlowUpTutors, focusing on user experience and platform efficiency. Her expertise lies in scaling tech startups." },
    { name: "Sam Lee", role: "Lead Developer", image: "Focused software developer coding on a laptop", bio: "Sam leads our talented development team, building the robust and intuitive features that power GlowUpTutors. He's an advocate for agile methodologies." },
  ];

  const faqItems = [
    {
      question: "What is GlowUpTutors's mission?",
      answer: "Our mission is to bridge the gap between students seeking knowledge and experts willing to share it, fostering a global community of learning and growth through an accessible, technologically advanced platform.",
    },
    {
      question: "How does GlowUpTutors ensure tutor quality?",
      answer: "We have a rigorous vetting process for all tutors, including verification of credentials, subject matter expertise assessments, and background checks (where applicable). We also utilize a rating and review system to maintain high standards.",
    },
    {
      question: "What subjects are covered on GlowUpTutors?",
      answer: "GlowUpTutors covers a vast range of subjects, from core academic disciplines like Math, Science, and Languages, to specialized fields in technology, arts, and professional development. Our network is constantly expanding.",
    },
    {
      question: "How can I know more about Xpert?",
      answer: "You can learn more about GlowUpTutors by exploring our 'How It Works' page, checking our blog for updates and insights, following us on social media, or contacting our support team directly. We're always happy to share more about our platform and vision!",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative py-24 md:py-40 overflow-hidden"
      >
        <div className="absolute inset-0 hero-gradient opacity-60 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(hsl(var(--primary)) 0.5px, transparent 0.5px), linear-gradient(to right, hsl(var(--primary)) 0.5px, hsl(var(--background)) 0.5px);
            background-size: 15px 15px;
          }
        `}</style>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Zap className="h-16 w-16 text-primary mx-auto mb-6 tech-glow" />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animated-gradient-text">
            About GlowUpTutors
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We are dedicated to revolutionizing the learning experience by connecting students with expert tutors through an innovative, accessible, and technologically advanced platform.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get In Touch <MessageSquare className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-card/50 border-y border-primary/10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded on the principle that education should be limitless, GlowUpTutors was born from a desire to make expert knowledge accessible to everyone, everywhere. We believe in the power of personalized learning to unlock potential and drive innovation.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary">The Spark of Innovation</h3>
              <p className="text-muted-foreground">
                Recognizing the challenges students face in finding specialized help and tutors struggle to reach a wider audience, GlowUpTutors was conceived as a dynamic bridge. Our platform leverages cutting-edge technology to create perfect matches, fostering meaningful educational connections.
              </p>
              <h3 className="text-2xl font-semibold text-secondary">Building the Future of Learning</h3>
              <p className="text-muted-foreground">
                From a small team of passionate educators and tech enthusiasts, we've grown into a vibrant community. Every feature, every connection, and every success story fuels our commitment to enhancing the educational landscape. We're not just a platform; we're a movement towards smarter, more effective learning.
              </p>
            </div>
            <motion.div variants={fadeIn} className="glass-effect p-2 rounded-lg tech-glow">
              <img  alt="Team collaborating on a futuristic interface" className="w-full h-auto rounded-md object-cover" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Lightbulb, title: "Innovation", description: "Constantly seeking creative solutions to enhance learning and teaching." },
              { icon: Users, title: "Community", description: "Fostering a supportive network of learners, tutors, and educators." },
              { icon: Zap, title: "Excellence", description: "Striving for the highest quality in our platform, tutors, and user experience." },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-center p-8 glass-effect card-hover h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto tech-glow">
                    <value.icon className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

       {/* Team Section - Placeholder */}
      <section className="py-20 bg-card/50 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Core Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The passionate minds dedicated to building the future of education.
            </p>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-center p-6 glass-effect card-hover h-full">
                  <div className="mb-4">
                    <img  alt={member.image} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary tech-glow" src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Media & FAQ Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Connect With Us</h2>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest news, insights, and community stories from GlowUpTutors. Follow us on your favorite platforms!
            </p>
            <div className="space-y-4">
              {[
                { name: "Facebook", icon: Facebook, href: "#", color: "text-blue-600 hover:text-blue-500" },
                { name: "Instagram", icon: Instagram, href: "#", color: "text-pink-500 hover:text-pink-400" },
                { name: "YouTube", icon: Youtube, href: "#", color: "text-red-600 hover:text-red-500" },
              ].map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                   className={`flex items-center p-4 rounded-lg glass-effect hover:ring-2 hover:ring-primary/50 transition-all duration-300 ${social.color}`}>
                  <social.icon className="h-8 w-8 mr-4" />
                  <span className="text-lg font-medium text-foreground">Follow us on {social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index} className="border-primary/20">
                  <AccordionTrigger className="text-left hover:no-underline text-lg text-foreground hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
