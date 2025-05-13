
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Send, MessageSquare, Bot, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hello! I'm TutorXpert Support Bot. How can I assist you today?" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({ title: "Error", description: "Please fill all fields.", variant: "destructive", className: "bg-card border-destructive/50 text-foreground" });
      setIsSubmitting(false);
      return;
    }
    // Simulate API call
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "We'll get back to you soon.", className: "bg-card border-primary/50 text-foreground" });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChatInputChange = (e) => setChatInput(e.target.value);

  const handleSendChatMessage = () => {
    if (!chatInput.trim()) return;
    const newUserMessage = { sender: "user", text: chatInput.trim() };
    setChatMessages(prev => [...prev, newUserMessage]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { sender: "bot", text: "Thanks for your message! A human agent will review this shortly if I can't help. What else can I do?" };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const inputStyles = "bg-input border-primary/30 focus:border-primary focus:ring-primary placeholder:text-muted-foreground/70";
  const labelStyles = "text-primary/90 font-medium";

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <MessageSquare className="h-16 w-16 text-primary mx-auto mb-6 tech-glow" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animated-gradient-text">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Whether you have questions, feedback, or need support, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
            <Card className="glass-effect p-2">
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form and our team will get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <Label htmlFor="name" className={labelStyles}>Full Name *</Label>
                      <Input id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={inputStyles} />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email" className={labelStyles}>Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className={inputStyles} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="subject" className={labelStyles}>Subject *</Label>
                    <Input id="subject" name="subject" placeholder="Reason for contacting" value={formData.subject} onChange={handleChange} required className={inputStyles} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message" className={labelStyles}>Message *</Label>
                    <Textarea id="message" name="message" placeholder="Your detailed message..." value={formData.message} onChange={handleChange} required rows={5} className={inputStyles} />
                  </div>
                  <Button type="submit" className="w-full py-3 text-base" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin mr-3 h-5 w-5 border-t-2 border-b-2 border-primary-foreground rounded-full"></div>
                        Sending...
                      </div>
                    ) : ( <> <Send className="mr-2 h-5 w-5" /> Send Message </> )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="space-y-8">
            <Card className="glass-effect p-2">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Other ways to reach us or find information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <a href="mailto:support@tutorxpert.com" className="text-muted-foreground hover:text-primary transition-colors">support@tutorxpert.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Call Us (Support Line)</h4>
                    <p className="text-muted-foreground">+1 (800) 555-XPRT (9778)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Our Headquarters</h4>
                    <p className="text-muted-foreground">123 FutureTech Ave, Innovation City, TX 75001</p>
                  </div>
                </div>
              </CardContent>
            </Card>
             {/* Chatbot Placeholder */}
            <Card className="glass-effect p-2">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                        <Bot className="h-7 w-7 text-primary mr-3" /> Live Chat Support
                    </CardTitle>
                    <CardDescription>Need quick answers? Try our AI Support Assistant.</CardDescription>
                </CardHeader>
                <CardContent>
                    {!isChatOpen ? (
                        <Button onClick={() => setIsChatOpen(true)} className="w-full">
                            <MessageSquare className="mr-2 h-5 w-5" /> Open Chat
                        </Button>
                    ) : (
                        <div className="border border-primary/30 rounded-lg p-4 h-96 flex flex-col bg-input/50">
                            <div className="flex-grow space-y-3 overflow-y-auto pr-2 mb-4 custom-scrollbar">
                                {chatMessages.map((msg, index) => (
                                    <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${
                                            msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                        }`}>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 pt-2 border-t border-primary/20">
                                <Input
                                    type="text"
                                    placeholder="Type your message..."
                                    value={chatInput}
                                    onChange={handleChatInputChange}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()}
                                    className={inputStyles}
                                />
                                <Button onClick={handleSendChatMessage} size="icon" variant="ghost" className="text-primary hover:text-primary/80">
                                    <Send className="h-5 w-5" />
                                </Button>
                            </div>
                             <Button onClick={() => setIsChatOpen(false)} variant="outline" size="sm" className="mt-4 self-end">Close Chat</Button>
                        </div>
                    )}
                </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
       <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.5);
          border-radius: var(--radius);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary));
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
