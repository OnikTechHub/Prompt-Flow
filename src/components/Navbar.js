"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { 
  Menu, X, Bell, User, LogOut, Settings, 
  Sparkles, ChevronDown, Check, Home, Compass, 
  LayoutDashboard, Terminal, History, UserCheck
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Determine active section purely from path/pathname
  let activeSection = "home";
  if (pathname === "/explore") {
    activeSection = "explore";
  } else if (pathname === "/pricing") {
    activeSection = "pricing";
  } else if (pathname === "/about") {
    activeSection = "about";
  } else if (pathname === "/contact") {
    activeSection = "contact";
  } else if (pathname === "/dashboard/workspace") {
    activeSection = "workspace";
  } else if (pathname === "/dashboard/history") {
    activeSection = "history";
  } else if (pathname === "/dashboard/templates" || pathname?.startsWith("/dashboard/templates/")) {
    activeSection = "templates";
  } else if (pathname === "/dashboard/prompt-improver") {
    activeSection = "improver";
  } else if (pathname === "/dashboard" || pathname?.startsWith("/dashboard")) {
    activeSection = "dashboard";
  } else if (pathname === "/") {
    activeSection = "home";
  }

  // Check scroll position for glassmorphic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const dashboardTabs = ["dashboard", "profile", "templates", "settings"];

    if (id === "home") {
      router.push("/");
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === "about") {
      router.push("/about");
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === "contact") {
      router.push("/contact");
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === "workspace") {
      router.push("/dashboard/workspace");
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === "improver") {
      router.push("/dashboard/prompt-improver");
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === "history") {
      router.push("/dashboard/history");
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === "explore") {
      router.push("/explore");
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === "pricing") {
      router.push("/pricing");
      setIsMobileMenuOpen(false);
      return;
    }

    if (dashboardTabs.includes(id)) {
      const tabName = id === "dashboard" ? "overview" : id;
      router.push(`/dashboard?tab=${tabName}`);
      setIsMobileMenuOpen(false);
      return;
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

  const mockNotifications = [
    { id: 1, text: "GPT-4o-mini generation completed", time: "2m ago", unread: true },
    { id: 2, text: "Weekly token allowance reset", time: "1h ago", unread: true },
    { id: 3, text: "Welcome to Prompt-Flow!", time: "1d ago", unread: false },
  ];

  // Shared nav-link styling helper: pill-style item with a sliding "flow" underline
  const navLinkClass = (id) =>
    `group relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 ${
      activeSection === id
        ? "text-white"
        : "text-slate-400 hover:text-slate-100"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Ambient flow line — signature accent that lives above the dock */}
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex h-16 items-center justify-between transition-all duration-500 ${
            scrolled ? "mt-3 mb-2" : "mt-0"
          }`}
        >
          <div
            className={`flex h-full w-full items-center justify-between rounded-[20px] px-3 transition-all duration-500 ${
              scrolled
                ? "border border-white/10 bg-[#0a0620]/85 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(6,182,212,0.15)]"
                : "border border-transparent bg-transparent"
            }`}
          >
            {/* Logo */}
            <div
              className="flex items-center gap-2.5 cursor-pointer select-none"
              onClick={(e) => handleLinkClick(e, "home")}
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-cyan-500 to-violet-600 shadow-[0_0_18px_-2px_rgba(34,211,238,0.55)]">
                <Sparkles className="h-4.5 w-4.5 text-white" strokeWidth={2.25} />
                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#030014] ring-1 ring-cyan-400/60">
                  <span className="absolute inset-[2px] rounded-full bg-cyan-400 animate-pulse" />
                </span>
              </div>
              <span className="text-[17px] font-bold tracking-tight text-white">
                Prompt<span className="text-slate-500 font-medium">-</span>Flow
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  AI
                </span>
              </span>
            </div>

            {/* Desktop Navigation Links — pill dock with individual active chips */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1">
              {!isAuthenticated ? (
                // Logged Out links
                <>
                  <a href="#home" onClick={(e) => handleLinkClick(e, "home")} className={navLinkClass("home")}>
                    {activeSection === "home" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <span className="relative">Home</span>
                  </a>
                  <a href="#explore" onClick={(e) => handleLinkClick(e, "explore")} className={navLinkClass("explore")}>
                    {activeSection === "explore" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <span className="relative">Explore</span>
                  </a>
                  <a href="#about" onClick={(e) => handleLinkClick(e, "about")} className={navLinkClass("about")}>
                    {activeSection === "about" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <span className="relative">About</span>
                  </a>
                  <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")} className={navLinkClass("contact")}>
                    {activeSection === "contact" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <span className="relative">Contact</span>
                  </a>
                </>
              ) : (
                // Logged In links
                <>
                  <a href="#home" onClick={(e) => handleLinkClick(e, "home")} className={navLinkClass("home")}>
                    {activeSection === "home" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <Home className="relative h-3.5 w-3.5" />
                    <span className="relative">Home</span>
                  </a>
                  <a href="#explore" onClick={(e) => handleLinkClick(e, "explore")} className={navLinkClass("explore")}>
                    {activeSection === "explore" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <Compass className="relative h-3.5 w-3.5" />
                    <span className="relative">Explore</span>
                  </a>
                  <a href="#dashboard" onClick={(e) => handleLinkClick(e, "dashboard")} className={navLinkClass("dashboard")}>
                    {activeSection === "dashboard" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <LayoutDashboard className="relative h-3.5 w-3.5" />
                    <span className="relative">Dashboard</span>
                  </a>
                  <a href="#workspace" onClick={(e) => handleLinkClick(e, "workspace")} className={navLinkClass("workspace")}>
                    {activeSection === "workspace" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <Terminal className="relative h-3.5 w-3.5" />
                    <span className="relative">AI Workspace</span>
                  </a>
                  <a href="#history" onClick={(e) => handleLinkClick(e, "history")} className={navLinkClass("history")}>
                    {activeSection === "history" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <History className="relative h-3.5 w-3.5" />
                    <span className="relative">My History</span>
                  </a>
                  <a href="#profile" onClick={(e) => handleLinkClick(e, "profile")} className={navLinkClass("profile")}>
                    {activeSection === "profile" && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 ring-1 ring-cyan-400/30" />
                    )}
                    <UserCheck className="relative h-3.5 w-3.5" />
                    <span className="relative">Profile</span>
                  </a>
                </>
              )}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              {!isAuthenticated ? (
                <>
                  <button 
                    onClick={() => router.push("/login")}
                    className="px-4 py-2 text-[13px] font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => router.push("/register")}
                    className="relative px-5 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-[13px] font-bold text-[#030014] hover:shadow-[0_0_20px_-2px_rgba(34,211,238,0.6)] transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  >
                    Register
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  {/* Notifications Bell Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={toggleNotifications}
                      className="relative p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
                    >
                      <Bell className="h-[18px] w-[18px]" />
                      <span className="absolute top-1.5 right-1.5 h-[7px] w-[7px] rounded-full bg-gradient-to-br from-pink-400 to-rose-500 ring-2 ring-[#030014]" />
                    </button>

                    {isNotificationsOpen && (
                      <div className="absolute right-0 mt-3 w-80 origin-top-right rounded-2xl border border-white/10 bg-[#0a0620]/95 backdrop-blur-xl p-3 text-slate-200 shadow-2xl shadow-black/60 ring-1 ring-cyan-500/10 focus:outline-none">
                        <div className="flex items-center justify-between px-1 pb-2.5 mb-1 border-b border-white/[0.06]">
                          <span className="font-semibold text-[13px] tracking-wide">Notifications</span>
                          <span className="text-[11px] font-medium text-cyan-400 cursor-pointer hover:text-cyan-300">Mark all read</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          {mockNotifications.map((notif) => (
                            <div key={notif.id} className="flex gap-2.5 p-2 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer">
                              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${notif.unread ? "bg-cyan-400" : "bg-slate-700"}`} />
                              <div className="min-w-0">
                                <p className="text-[12.5px] leading-snug font-medium text-slate-200">{notif.text}</p>
                                <span className="text-[10.5px] text-slate-500">{notif.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Profile User Avatar Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={toggleProfileDropdown}
                      className="flex items-center gap-1.5 p-1 pr-2 rounded-full border border-white/10 bg-white/[0.03] hover:border-cyan-400/40 hover:bg-white/[0.07] transition-all cursor-pointer"
                    >
                      <img 
                        src="https://i.ibb.co.com/dsJvS71N/pngtree-avatar-of-a-brunette-man-png-image-13379740.png" 
                        alt="User avatar" 
                        className="h-7 w-7 rounded-full object-cover ring-1 ring-white/10"
                      />
                      <ChevronDown className={`h-3.5 w-3.5 text-slate-500 transition-transform duration-200 hidden sm:block ${isProfileDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isProfileDropdownOpen && (
                      <div className="absolute right-0 mt-3 w-56 origin-top-right rounded-2xl border border-white/10 bg-[#0a0620]/95 backdrop-blur-xl p-1.5 text-slate-200 shadow-2xl shadow-black/60 ring-1 ring-cyan-500/10 focus:outline-none">
                        <div className="px-3 py-2.5 border-b border-white/[0.06] mb-1">
                          <p className="text-[11px] text-slate-500">Signed in as</p>
                          <p className="text-[13px] font-semibold truncate text-white">{user?.email || "alex.morgan@prompt-flow.ai"}</p>
                        </div>
                        <button 
                          onClick={(e) => { handleLinkClick(e, "profile"); setIsProfileDropdownOpen(false); }}
                          className="flex w-full items-center gap-2.5 px-3 py-2 text-[13px] text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all cursor-pointer"
                        >
                          <User className="h-4 w-4 text-slate-500" />
                          Profile
                        </button>
                        <button 
                          onClick={(e) => { handleLinkClick(e, "settings"); setIsProfileDropdownOpen(false); }}
                          className="flex w-full items-center gap-2.5 px-3 py-2 text-[13px] text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all cursor-pointer"
                        >
                          <Settings className="h-4 w-4 text-slate-500" />
                          Settings
                        </button>
                        <div className="h-px bg-white/[0.06] my-1.5" />
                        <button 
                          onClick={() => {
                            logout();
                            setIsProfileDropdownOpen(false);
                          }}
                          className="flex w-full items-center gap-2.5 px-3 py-2 text-[13px] font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-all cursor-pointer"
                        >
                          <LogOut className="h-4 w-4" />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburguer Menu Button */}
            <div className="flex md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.06] focus:outline-none transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mx-4 mb-3 rounded-[20px] border border-white/10 bg-[#0a0620]/95 backdrop-blur-xl shadow-2xl shadow-black/50">
          <div className="space-y-0.5 px-3 py-4">
            {!isAuthenticated ? (
              // Logged Out mobile menu links
              <>
                <a 
                  href="#home" 
                  onClick={(e) => handleLinkClick(e, "home")}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "home" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  Home
                  {activeSection === "home" && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
                </a>
                <a 
                  href="#explore" 
                  onClick={(e) => handleLinkClick(e, "explore")}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "explore" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  Explore
                  {activeSection === "explore" && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, "about")}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "about" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  About
                  {activeSection === "about" && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "contact" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  Contact
                  {activeSection === "contact" && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
                </a>
                <div className="h-px bg-white/[0.06] my-3" />
                <div className="flex flex-col gap-2 px-1">
                  <button 
                    onClick={() => { router.push("/login"); setIsMobileMenuOpen(false); }}
                    className="w-full py-2.5 text-center text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-xl transition-all cursor-pointer"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => { router.push("/register"); setIsMobileMenuOpen(false); }}
                    className="w-full py-2.5 text-center text-sm font-bold text-[#030014] bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl hover:shadow-[0_0_20px_-2px_rgba(34,211,238,0.5)] transition-all cursor-pointer"
                  >
                    Register
                  </button>
                </div>
              </>
            ) : (
              // Logged In mobile menu links
              <>
                <a 
                  href="#home" 
                  onClick={(e) => handleLinkClick(e, "home")}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "home" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Home className="h-[18px] w-[18px] text-cyan-400" />
                  Home
                </a>
                <a 
                  href="#explore" 
                  onClick={(e) => handleLinkClick(e, "explore")}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "explore" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Compass className="h-[18px] w-[18px] text-cyan-400" />
                  Explore
                </a>
                <a 
                  href="#dashboard" 
                  onClick={(e) => handleLinkClick(e, "dashboard")}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "dashboard" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <LayoutDashboard className="h-[18px] w-[18px] text-cyan-400" />
                  Dashboard
                </a>
                <a 
                  href="#workspace" 
                  onClick={(e) => handleLinkClick(e, "workspace")}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "workspace" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Terminal className="h-[18px] w-[18px] text-cyan-400" />
                  AI Workspace
                </a>
                <a 
                  href="#history" 
                  onClick={(e) => handleLinkClick(e, "history")}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "history" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <History className="h-[18px] w-[18px] text-cyan-400" />
                  My History
                </a>
                <a 
                  href="#profile" 
                  onClick={(e) => handleLinkClick(e, "profile")}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                    activeSection === "profile" ? "text-white bg-white/[0.05]" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <UserCheck className="h-[18px] w-[18px] text-cyan-400" />
                  Profile
                </a>
                <div className="h-px bg-white/[0.06] my-3" />

                {/* Profile detail inside Mobile drawer */}
                <div className="flex items-center gap-3 px-3 py-2">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop" 
                    alt="User avatar" 
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-400/60"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{user?.name || "Alex Morgan"}</p>
                    <p className="text-xs text-slate-500">{user?.email || "alex.morgan@prompt-flow.ai"}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 px-1">
                  <button 
                    onClick={(e) => handleLinkClick(e, "profile")}
                    className="flex items-center justify-center gap-2 py-2 text-sm text-slate-300 hover:text-white bg-white/[0.04] rounded-xl hover:bg-white/[0.08] transition-all cursor-pointer"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </button>
                  <button 
                    onClick={(e) => handleLinkClick(e, "profile")}
                    className="flex items-center justify-center gap-2 py-2 text-sm text-slate-300 hover:text-white bg-white/[0.04] rounded-xl hover:bg-white/[0.08] transition-all cursor-pointer"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>
                </div>
                 <button 
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-2 mx-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 rounded-xl transition-all cursor-pointer"
                  style={{ width: "calc(100% - 8px)" }}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
