
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, Zap, Brain, Lightbulb } from "lucide-react";

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 hero-gradient opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--primary)) 1px, hsl(var(--background)) 1px);
            background-size: 20px 20px;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animated-gradient-text">
                Unlock Your Potential.
                <br />
                Connect with Expert Tutors.
              </h1>
              <p className="text-lg md:text-xl mb-10 text-muted-foreground">
                TutorXpert is your gateway to academic excellence. Post projects, find elite tutors, and master any subject with our cutting-edge personalized learning platform.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn}>
                  <Button size="lg" asChild>
                    <Link to="/projects/new">Post a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/tutors">Find a Tutor</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:block"
            >
              <div className="relative glass-effect p-2 rounded-lg tech-glow">
                <img  alt="Futuristic learning environment with holographic displays" className="w-full h-auto rounded-md" src="https://images.unsplash.com/photo-1633832694722-596af9c55964" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card/50 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">How TutorXpert Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our intelligent platform seamlessly connects students with qualified tutors in three streamlined steps.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: BookOpen, title: "1. Define Your Mission", description: "Submit your project details, learning objectives, and desired outcomes. Our AI helps refine your request." },
              { icon: Users, title: "2. Engage an Expert", description: "Browse AI-matched tutor profiles, review their credentials, and connect instantly via secure channels." },
              { icon: Award, title: "3. Achieve Mastery", description: "Collaborate with your tutor, leverage advanced learning tools, and conquer your academic goals." }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-effect p-8 rounded-xl card-hover">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto tech-glow">
                  <step.icon className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center text-primary">{step.title}</h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="text-center mt-16"
          >
            <Button asChild size="lg">
              <Link to="/how-it-works" className="flex items-center">
                Explore the Process <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Tutors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animated-gradient-text">Elite Tutors Network</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access our curated network of highly qualified tutors, verified for expertise and teaching prowess.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: "Dr. Anya Sharma", specialty: "Quantum Physics & AI", rating: 4.9, image: "Female scientist with futuristic interface" },
              { name: "Prof. Kenji Tanaka", specialty: "Cybersecurity & Blockchain", rating: 4.8, image: "Male coder with multiple monitors and glowing code" },
              { name: "Dr. Lena Petrova", specialty: "Bio-Engineering & Genomics", rating: 4.9, image: "Female researcher in a high-tech lab with DNA helix visuals" }
            ].map((tutor, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="glass-effect overflow-hidden card-hover"
              >
                <div className="h-56 overflow-hidden relative">
                  <img  alt={`Tutor ${tutor.name}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://images.unsplash.com/photo-1701229404076-5629809b331d" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-primary">{tutor.name}</h3>
                  <p className="text-muted-foreground mb-3">{tutor.specialty}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Zap key={i} className={`w-5 h-5 ${i < Math.floor(tutor.rating) ? "fill-current" : "text-gray-600"}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-muted-foreground">{tutor.rating}/5.0</span>
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/tutors/${index + 1}`}>View Profile</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="text-center mt-16"
          >
            <Button asChild size="lg">
              <Link to="/tutors" className="flex items-center">
                Discover All Tutors <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card/50 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from users who have transformed their learning with TutorXpert.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { name: "Jax R.", role: "AI Engineering Student", image: "Young male student with VR headset", quote: "TutorXpert's AI matching found me a specialist in neural networks. My project went from concept to reality in weeks!" },
              { name: "Dr. Eva Rostova", role: "Quantum Mechanics Tutor", image: "Professional woman in a futuristic setting", quote: "The platform's tools and global reach allow me to share my passion for quantum physics with eager minds worldwide. It's revolutionary." }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-effect p-8 rounded-xl card-hover">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img  alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-lg">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary/70 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="text-center"
          >
            <Zap className="h-16 w-16 text-primary-foreground mx-auto mb-6 tech-glow opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Learning?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Join the TutorXpert revolution. Sign up today and experience the future of personalized education.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/80">
                  <Link to="/signup">Get Started Today</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
