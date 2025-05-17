
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CheckCircle, Zap, Star, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const plans = [
    {
      name: "Student Basic",
      price: "Free",
      frequency: "",
      description: "For casual learners exploring the platform.",
      features: [
        "Browse tutor profiles",
        "View project listings",
        "Limited project posts (1 per month)",
        "Standard support",
      ],
      cta: "Get Started",
      link: "/signup",
      popular: false,
    },
    {
      name: "Student Pro",
      price: "$19",
      frequency: "/month",
      description: "For dedicated students seeking consistent support.",
      features: [
        "All Basic features",
        "Unlimited project posts",
        "Priority tutor matching",
        "Direct messaging with tutors",
        "Access to premium learning resources",
        "Priority support",
      ],
      cta: "Choose Pro",
      link: "/signup?plan=student_pro",
      popular: true,
    },
    {
      name: "Tutor Starter",
      price: "$29",
      frequency: "/month",
      description: "For new tutors building their presence.",
      features: [
        "Create a public tutor profile",
        "Bid on up to 10 projects per month",
        "Standard commission rate (15%)",
        "Basic analytics dashboard",
      ],
      cta: "Become a Tutor",
      link: "/signup?role=tutor&plan=tutor_starter",
      popular: false,
    },
    {
      name: "Tutor Premium",
      price: "$49",
      frequency: "/month",
      description: "For established tutors maximizing their reach.",
      features: [
        "All Starter features",
        "Unlimited project bids",
        "Reduced commission rate (10%)",
        "Advanced analytics and insights",
        "Featured tutor profile option",
        "Priority support",
      ],
      cta: "Go Premium",
      link: "/signup?role=tutor&plan=tutor_premium",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <Zap className="h-16 w-16 text-primary mx-auto mb-6 tech-glow" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animated-gradient-text">Flexible Pricing Plans</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to unlock your learning potential or grow your tutoring business. Transparent, fair, and designed for success.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={fadeIn} className="flex">
              <Card className={`w-full flex flex-col glass-effect card-hover ${plan.popular ? 'border-primary ring-2 ring-primary tech-glow' : 'border-primary/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-lg transform rotate-6">
                    POPULAR
                  </div>
                )}
                <CardHeader className="pb-4 text-center">
                  <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-secondary' : 'text-primary'}`}>{plan.name}</CardTitle>
                  <p className="text-4xl font-extrabold text-foreground mt-2">
                    {plan.price}
                    {plan.frequency && <span className="text-sm font-normal text-muted-foreground">{plan.frequency}</span>}
                  </p>
                  <CardDescription className="mt-1 min-h-[40px]">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 pt-2">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-6">
                  <Button asChild className={`w-full py-3 text-base ${plan.popular ? 'bg-secondary hover:bg-secondary/90' : ''}`}>
                    <Link to={plan.link}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose GlowUpTutors?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Quality Tutors", description: "Access a network of verified and highly-rated experts in diverse fields." },
              { icon: ShieldCheck, title: "Secure Platform", description: "Safe payments, secure messaging, and data privacy are our top priorities." },
              { icon: Zap, title: "Advanced Tools", description: "Utilize our cutting-edge learning and collaboration tools for an enhanced experience." },
            ].map((item, index) => (
              <div key={index} className="glass-effect p-8 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto tech-glow">
                  <item.icon className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">Not Sure Which Plan is Right for You?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is happy to help you find the best fit for your needs. Reach out to us for a personalized consultation.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
