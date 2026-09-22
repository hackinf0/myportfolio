"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Folder, FileText, MessageCircle, MicVocal, GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";

const navItems = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/work", label: "Work", icon: <Briefcase size={20} /> },
  { href: "/projects", label: "Projects", icon: <Folder size={20} /> },
  { href: "/research", label: "Research", icon: <GraduationCap size={20} /> },
  { href: "/posts", label: "Posts", icon: <FileText size={20} /> },
  { href: "/conferences", label: "Conferences", icon: <MicVocal size={20} /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-lg px-6 py-3 rounded-full shadow-md border border-border flex items-center space-x-6 z-50">

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 transition-all ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
                {isActive && <span className="w-2 h-2 bg-yellow-500 rounded-full ml-1"></span>}
              </Link>
            );
          })}
        </div>


        <a
          href="mailto:henrijuniorhouphouet@gmail.com"
          className="hidden md:flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all"
        >
          <MessageCircle size={20} />
          <span className="text-sm">Say Hi</span>
        </a>

        <ThemeToggle className="hidden md:flex" />


        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>


      {menuOpen && (
        <div className="fixed inset-0 bg-background/95 z-50 flex flex-col items-start p-6 w-64 shadow-lg transform transition-transform duration-300 ease-in-out">

          <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>


          <div className="flex flex-col space-y-6 mt-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 text-lg ${
                  pathname === item.href ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}


            <a
              href="mailto:henrijuniorhouphouet@gmail.com"
              className="flex items-center space-x-3 text-lg text-muted-foreground hover:text-foreground transition-all"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={20} />
              <span>Say Hi</span>
            </a>

            <ThemeToggle className="flex items-center space-x-3 text-lg" showLabel />
          </div>
        </div>
      )}
    </>
  );
}
