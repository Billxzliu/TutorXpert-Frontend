
import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, DollarSign, Lock, CalendarDays, UserCircle, ArrowLeft } from "lucide-react";

const PayPage = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock appointment details - in a real app, fetch this based on appointmentId
  const appointmentDetails = {
    id: appointmentId,
    subject: "Cybersecurity Basics",
    tutorName: "Prof. Kenji Tanaka",
    date: "2025-05-22",
    time: "5:00 PM - 5:30 PM",
    price: 40.00,
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState("card_visa_4242");
  const [isProcessing, setIsProcessing] = React.useState(false);

  const mockPaymentMethods = [
    { id: "card_visa_4242", type: "Visa", last4: "4242", name: "Visa ending in 4242" },
    { id: "card_mc_5555", type: "Mastercard", last4: "5555", name: "Mastercard ending in 5555" },
    { id: "paypal_john_doe", type: "PayPal", email: "john.doe@example.com", name: "PayPal (john.doe@...)" },
  ];
  
  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful!",
        description: `Your payment of $${appointmentDetails.price.toFixed(2)} for "${appointmentDetails.subject}" has been confirmed.`,
        className: "bg-card border-green-500/50 text-foreground",
      });
      // In a real app, update appointment status and navigate
      navigate("/dashboard/appointments");
    }, 2000);
  };


  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const inputStyles = "bg-input border-primary/30 focus:border-primary focus:ring-primary";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card/30 text-foreground py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl"
      >
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Card className="glass-effect shadow-2xl">
          <CardHeader className="text-center border-b border-primary/20 pb-6">
            <DollarSign className="h-12 w-12 text-primary mx-auto mb-4 tech-glow" />
            <CardTitle className="text-3xl md:text-4xl animated-gradient-text">Complete Your Payment</CardTitle>
            <CardDescription className="text-muted-foreground text-lg">
              Securely pay for your upcoming session.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 space-y-8">
            {/* Appointment Details Summary */}
            <div className="p-6 rounded-lg border border-primary/20 bg-card/50 space-y-3">
              <h3 className="text-xl font-semibold text-secondary mb-3">Session Summary</h3>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Service:</span>
                <span className="font-medium text-foreground">{appointmentDetails.subject}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center"><UserCircle className="h-4 w-4 mr-1.5"/>Tutor:</span>
                <span className="font-medium text-foreground">{appointmentDetails.tutorName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center"><CalendarDays className="h-4 w-4 mr-1.5"/>Date & Time:</span>
                <span className="font-medium text-foreground">{appointmentDetails.date} at {appointmentDetails.time}</span>
              </div>
              <div className="border-t border-primary/20 my-3"></div>
              <div className="flex justify-between items-center text-xl">
                <span className="font-semibold text-primary">Total Amount:</span>
                <span className="font-bold text-primary">${appointmentDetails.price.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-2">
              <Label htmlFor="paymentMethod" className="text-lg font-semibold text-primary">Select Payment Method</Label>
              <Select value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
                <SelectTrigger id="paymentMethod" className={inputStyles + " h-12 text-base"}>
                  <SelectValue placeholder="Choose a payment method" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/50">
                  {mockPaymentMethods.map(method => (
                     <SelectItem key={method.id} value={method.id} className="py-3 text-base">
                       <div className="flex items-center">
                         <CreditCard className="h-5 w-5 mr-3 text-muted-foreground"/>
                         {method.name}
                       </div>
                     </SelectItem>
                  ))}
                   <SelectItem value="new_card" className="py-3 text-base text-blue-400">
                       <div className="flex items-center">
                         <PlusCircle className="h-5 w-5 mr-3"/>
                         Add New Card
                       </div>
                     </SelectItem>
                </SelectContent>
              </Select>
            </div>
             {selectedPaymentMethod === "new_card" && (
                <motion.div 
                    initial={{opacity: 0, height:0}} animate={{opacity:1, height: "auto"}} transition={{duration: 0.3}}
                    className="space-y-4 pt-4 border-t border-primary/20 mt-4"
                >
                     <div className="space-y-1">
                        <Label htmlFor="cardNumber" className="text-primary/90">Card Number</Label>
                        <Input id="cardNumber" placeholder="•••• •••• •••• ••••" className={inputStyles} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label htmlFor="cardExpiry" className="text-primary/90">Expiry (MM/YY)</Label>
                            <Input id="cardExpiry" placeholder="MM/YY" className={inputStyles} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="cardCVC" className="text-primary/90">CVC</Label>
                            <Input id="cardCVC" placeholder="•••" className={inputStyles} />
                        </div>
                    </div>
                </motion.div>
            )}


            <div className="flex items-center space-x-3 pt-4">
              <Lock className="h-6 w-6 text-green-500" />
              <p className="text-sm text-muted-foreground">
                Your transaction is secured with industry-standard encryption.
              </p>
            </div>
          </CardContent>
          <CardFooter className="border-t border-primary/20 pt-6">
            <Button 
              size="lg" 
              className="w-full py-3 text-lg" 
              onClick={handlePayment}
              disabled={isProcessing || !selectedPaymentMethod || (selectedPaymentMethod === "new_card" /* && form not filled */) }
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin mr-3 h-5 w-5 border-t-2 border-b-2 border-primary-foreground rounded-full"></div>
                  Processing Payment...
                </div>
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" /> Pay ${appointmentDetails.price.toFixed(2)} Securely
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default PayPage;
