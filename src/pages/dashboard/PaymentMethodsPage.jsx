
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, PlusCircle, Trash2, Edit3, ShieldCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const PaymentMethodsPage = () => {
  const { toast } = useToast();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "Visa", last4: "4242", expiry: "12/2028", isDefault: true },
    { id: 2, type: "Mastercard", last4: "5555", expiry: "06/2027", isDefault: false },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCardInfo, setNewCardInfo] = useState({ number: "", expiry: "", cvc: "", name: "" });
  const [editingMethod, setEditingMethod] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCardInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleAddMethod = (e) => {
    e.preventDefault();
    // Basic validation
    if (!newCardInfo.number || !newCardInfo.expiry || !newCardInfo.cvc || !newCardInfo.name) {
      toast({ title: "Error", description: "Please fill all card details.", variant: "destructive" });
      return;
    }
    const newMethod = {
      id: Date.now(),
      type: newCardInfo.number.startsWith("4") ? "Visa" : newCardInfo.number.startsWith("5") ? "Mastercard" : "Card",
      last4: newCardInfo.number.slice(-4),
      expiry: newCardInfo.expiry,
      isDefault: paymentMethods.length === 0, // Make first card default
    };
    setPaymentMethods(prev => [...prev, newMethod]);
    setShowAddForm(false);
    setNewCardInfo({ number: "", expiry: "", cvc: "", name: "" });
    toast({ title: "Success", description: "Payment method added." });
  };
  
  const handleEditMethod = (method) => {
    setEditingMethod(method);
    setNewCardInfo({ number: `•••• •••• •••• ${method.last4}`, expiry: method.expiry, cvc: '•••', name: 'Cardholder Name' });
    setShowAddForm(true);
  }

  const handleUpdateMethod = (e) => {
    e.preventDefault();
     if (!newCardInfo.expiry || !newCardInfo.name) {
      toast({ title: "Error", description: "Please fill expiry and name.", variant: "destructive" });
      return;
    }
    setPaymentMethods(prev => prev.map(pm => pm.id === editingMethod.id ? {...pm, expiry: newCardInfo.expiry } : pm));
    setShowAddForm(false);
    setNewCardInfo({ number: "", expiry: "", cvc: "", name: "" });
    setEditingMethod(null);
    toast({ title: "Success", description: "Payment method updated." });
  }

  const handleDeleteMethod = (id) => {
    setPaymentMethods(prev => prev.filter(pm => pm.id !== id));
    toast({ title: "Success", description: "Payment method removed." });
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(prev => prev.map(pm => ({ ...pm, isDefault: pm.id === id })));
    toast({ title: "Success", description: "Default payment method updated." });
  };
  
  const inputStyles = "bg-input border-primary/30 focus:border-primary focus:ring-primary placeholder:text-muted-foreground/70";
  const labelStyles = "text-primary/90 font-medium";


  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
        <div className="flex items-center mb-2">
          <CreditCard className="h-10 w-10 text-primary mr-3 tech-glow" />
          <h1 className="text-4xl md:text-5xl font-bold animated-gradient-text">Payment Methods</h1>
        </div>
        <p className="text-lg text-muted-foreground">Manage your saved payment options for seamless transactions.</p>
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-8">
        <Button onClick={() => { setShowAddForm(true); setEditingMethod(null); setNewCardInfo({ number: "", expiry: "", cvc: "", name: "" }); }} size="lg">
          <PlusCircle className="mr-2 h-5 w-5" /> Add New Payment Method
        </Button>
      </motion.div>

      {showAddForm && (
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-10">
          <Card className="glass-effect p-2">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{editingMethod ? "Edit Payment Method" : "Add New Card"}</CardTitle>
              <CardDescription>Your card information is securely stored.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={editingMethod ? handleUpdateMethod : handleAddMethod} className="space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="cardNumber" className={labelStyles}>Card Number</Label>
                  <Input id="cardNumber" name="number" placeholder="•••• •••• •••• ••••" value={newCardInfo.number} onChange={handleInputChange} required={!editingMethod} className={inputStyles} disabled={!!editingMethod} />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <Label htmlFor="cardExpiry" className={labelStyles}>Expiry Date (MM/YYYY)</Label>
                    <Input id="cardExpiry" name="expiry" placeholder="MM/YYYY" value={newCardInfo.expiry} onChange={handleInputChange} required className={inputStyles} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="cardCVC" className={labelStyles}>CVC</Label>
                    <Input id="cardCVC" name="cvc" placeholder="•••" value={newCardInfo.cvc} onChange={handleInputChange} required={!editingMethod} className={inputStyles} disabled={!!editingMethod} />
                  </div>
                </div>
                 <div className="space-y-1">
                  <Label htmlFor="cardName" className={labelStyles}>Name on Card</Label>
                  <Input id="cardName" name="name" placeholder="Cardholder Name" value={newCardInfo.name} onChange={handleInputChange} required className={inputStyles} />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <p className="text-xs text-muted-foreground">Your payment information is encrypted and secure.</p>
                </div>
                <div className="flex justify-end gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => {setShowAddForm(false); setEditingMethod(null);}}>Cancel</Button>
                  <Button type="submit">{editingMethod ? "Update Card" : "Add Card"}</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        {paymentMethods.length === 0 && !showAddForm ? (
          <div className="text-center py-20 glass-effect rounded-xl shadow-2xl">
            <CreditCard className="h-20 w-20 mx-auto text-primary/50 mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-primary">No Payment Methods Added</h3>
            <p className="text-muted-foreground">Add a card to get started with payments on GlowUpTutors.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {paymentMethods.map(method => (
              <Card key={method.id} className={`glass-effect card-hover ${method.isDefault ? 'ring-2 ring-primary' : 'border-primary/20'}`}>
                <CardHeader className="flex flex-row justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <CreditCard className="mr-3 h-6 w-6"/> {method.type} ending in {method.last4}
                    </CardTitle>
                    <CardDescription>Expires: {method.expiry}</CardDescription>
                  </div>
                  {method.isDefault && <Badge variant="secondary">Default</Badge>}
                </CardHeader>
                <CardFooter className="gap-2 flex-wrap justify-start sm:justify-end border-t border-primary/20 pt-4">
                  {!method.isDefault && (
                    <Button variant="outline" size="sm" onClick={() => handleSetDefault(method.id)}>Set as Default</Button>
                  )}
                   <Button variant="outline" size="sm" onClick={() => handleEditMethod(method)}>
                     <Edit3 className="mr-2 h-4 w-4"/> Edit
                   </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm" className="bg-red-700/80 hover:bg-red-700">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-card border-primary/50">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-primary">Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your payment method.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel asChild><Button variant="outline">Cancel</Button></AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDeleteMethod(method.id)} asChild>
                            <Button variant="destructive">Delete</Button>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentMethodsPage;
