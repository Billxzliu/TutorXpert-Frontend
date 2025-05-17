import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu, X, Zap, Info, MessageCircle, DollarSign, UserCircle, Search, PlusCircle, List, LogOut, LayoutDashboard, Star, Send, CreditCard, Briefcase, CalendarDays, Home, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser && parsedUser.isLoggedIn) {
        setIsLoggedIn(true);
        setUser(parsedUser);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    closeMenu();
    navigate("/");
  };

  const getInitials = (name) => {
    if (!name) return "GU";
    const names = name.split(' ');
    if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
    return names[0][0].toUpperCase() + names[names.length - 1][0].toUpperCase();
  };

  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Pricing", path: "/pricing" },
    { name: "Browse Tasks", path: "/projects" },
    { name: "Become a Tutor", path: "/signup?tutor=true" }
  ];

  const mainNavItems = [];

  const searchTutorsDropdownItems = [
    { name: "Search Tutors", path: "/tutors", icon: <Search className="mr-2 h-4 w-4" /> },
    { name: "Post a Task", path: "/projects/new", icon: <PlusCircle className="mr-2 h-4 w-4" /> },
  ];

  const NavLink = ({ to, children, className }) => (
    <Link
      to={to}
      onClick={closeMenu}
      className={`relative inline-flex items-center px-1 pt-1 text-sm font-medium group transition-colors duration-200 ${
        location.pathname === to
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      } ${className}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${location.pathname === to ? 'scale-x-100' : ''}`}></span>
    </Link>
  );

  const MobileNavLink = ({ to, children, icon }) => (
    <Link
      to={to}
      onClick={closeMenu}
      className={`flex items-center pl-3 pr-4 py-3 border-l-4 text-base font-medium transition-colors duration-200 ${
        location.pathname === to
          ? "bg-primary/10 border-primary text-primary"
          : "border-transparent text-muted-foreground hover:bg-accent hover:text-foreground"
      }`}
    >
      {icon} {children}
    </Link>
  );

  return (
    <nav className="bg-card/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-primary/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center">
              <Zap className="h-8 w-8 text-primary mr-2 tech-glow" />
              <span className="text-3xl font-bold animated-gradient-text">
                GlowUpTutors
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:ml-6 md:space-x-6 items-center">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
            ))}

            {mainNavItems.map((item) => (
              <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative inline-flex items-center px-2 pt-3 text-sm font-medium group text-muted-foreground hover:text-foreground">
                  Search Tutors
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-primary/30 text-foreground">
                {searchTutorsDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.path} className="flex items-center cursor-pointer">
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-9 w-9 border-2 border-primary tech-glow">
                      <AvatarImage src={user.avatarUrl || `https://avatar.vercel.sh/${user.email}.png`} alt={user.firstName || user.email} />
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {getInitials(user.firstName || user.email)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-card border-primary/30 text-foreground" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : 'User Profile'}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="flex items-center cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500 hover:!text-red-400 focus:bg-red-500/10 focus:text-red-400">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
