
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, MessageSquare, CheckCircle, Clock } from "lucide-react";

const HowItWorksPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How GlowUpTutors Works</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Our platform connects students with expert tutors through a simple, effective process designed to ensure academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/tutors">Browse Tutors</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The GlowUpTutors Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to find the perfect tutor and get the help you need.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <BookOpen className="text-primary h-10 w-10" />,
                title: "1. Post Your Task",
                description: "Describe your academic needs, set your budget, and specify your timeline to get started.",
                details: [
                  "Create a detailed project description",
                  "Specify subject area and topics",
                  "Set your budget range",
                  "Choose a deadline that works for you"
                ]
              },
              {
                icon: <Users className="text-primary h-10 w-10" />,
                title: "2. Connect with Tutors",
                description: "Review profiles, credentials, and ratings to find the perfect tutor for your specific needs.",
                details: [
                  "Browse tutor profiles and specializations",
                  "Review ratings and student feedback",
                  "Message tutors to discuss your project",
                  "Select the best match for your needs"
                ]
              },
              {
                icon: <Award className="text-primary h-10 w-10" />,
                title: "3. Learn & Succeed",
                description: "Collaborate with your tutor, complete your project, and achieve your academic goals.",
                details: [
                  "Schedule sessions that fit your calendar",
                  "Collaborate through our secure platform",
                  "Receive personalized instruction",
                  "Complete your project successfully"
                ]
              }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-none shadow-lg card-hover">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <ul className="space-y-3 mt-6">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Students</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GlowUpTutors helps you find the perfect tutor to achieve your academic goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img  alt="Students learning" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1694532409273-b26e2ce266ea" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Access to Expert Tutors",
                  description: "Connect with qualified tutors across various subjects and specializations."
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />,
                  title: "Flexible Scheduling",
                  description: "Book sessions that fit your schedule and learning pace."
                },
                {
                  icon: <MessageSquare className="h-6 w-6 text-primary" />,
                  title: "Personalized Learning",
                  description: "Receive customized instruction tailored to your specific needs and learning style."
                },
                {
                  icon: <Award className="h-6 w-6 text-primary" />,
                  title: "Improved Academic Performance",
                  description: "Achieve better grades and deeper understanding of challenging subjects."
                }
              ].map((benefit, index) => (
                <motion.div key={index} variants={fadeIn} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div variants={fadeIn} className="pt-4">
                <Button asChild size="lg">
                  <Link to="/projects/new">Post Your Task</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Tutors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Tutors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our platform to connect with students and grow your tutoring business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6 order-2 lg:order-1"
            >
              {[
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Find New Students",
                  description: "Connect with students looking for your specific expertise and subject knowledge."
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />,
                  title: "Flexible Work Schedule",
                  description: "Create your own schedule and work as much or as little as you want."
                },
                {
                  icon: <MessageSquare className="h-6 w-6 text-primary" />,
                  title: "Secure Payments",
                  description: "Get paid promptly for your services through our secure payment system."
                },
                {
                  icon: <Award className="h-6 w-6 text-primary" />,
                  title: "Build Your Reputation",
                  description: "Earn reviews and ratings to showcase your expertise and attract more students."
                }
              ].map((benefit, index) => (
                <motion.div key={index} variants={fadeIn} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div variants={fadeIn} className="pt-4">
                <Button asChild size="lg">
                  <Link to="/signup">Become a Tutor</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <img  alt="Tutor teaching" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1701701046353-89f1a671c24b" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about using GlowUpTutors.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                question: "How do I find the right tutor for my needs?",
                answer: "You can browse tutor profiles, filter by subject expertise, review ratings and credentials, and even message tutors before making your selection to ensure they're the right fit for your specific needs."
              },
              {
                question: "How much does tutoring cost?",
                answer: "Tutoring rates vary based on subject, tutor experience, and session length. You can set your budget when posting a project, and tutors will apply based on your requirements."
              },
              {
                question: "How are sessions conducted?",
                answer: "Sessions can be conducted online through our secure platform, which includes video conferencing, screen sharing, and collaborative tools to enhance the learning experience."
              },
              {
                question: "What if I'm not satisfied with my tutor?",
                answer: "If you're not satisfied with your tutor, you can provide feedback and request a different tutor. We're committed to ensuring you have a positive learning experience."
              },
              {
                question: "How do I become a tutor on GlowUpTutors?",
                answer: "To become a tutor, sign up for an account, complete your profile with your qualifications and expertise, pass our verification process, and start applying to student projects."
              },
              {
                question: "Is my personal information secure?",
                answer: "Yes, we take data security seriously. All personal information is encrypted and stored securely, and we never share your information with third parties without your consent."
              }
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join GlowUpTutors today and take the first step toward academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
                <Link to="/signup">Create an Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/projects">Browse Tasks</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
