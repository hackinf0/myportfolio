"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Folder, FileText, MessageCircle, MicVocal, Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/work", label: "Work", icon: <Briefcase size={20} /> },
  { href: "/projects", label: "Projects", icon: <Folder size={20} /> },
  { href: "/posts", label: "Posts", icon: <FileText size={20} /> },
  { href: "/conferences", label: "Conferences", icon: <MicVocal size={20} /> },
];

export default function Navbar() {
  const pathname = usePathname();  
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <>
      
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-lg px-6 py-3 rounded-full shadow-md border border-gray-700 flex items-center space-x-6 z-50">
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 transition-all ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
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
          className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-white transition-all"
        >
          <MessageCircle size={20} />
          <span className="text-sm">Say Hi</span>
        </a>

         
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

       
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 z-50 flex flex-col items-start p-6 w-64 shadow-lg transform transition-transform duration-300 ease-in-out">
        
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>

           
          <div className="flex flex-col space-y-6 mt-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 text-lg ${
                  pathname === item.href ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            
            <a
              href="mailto:henrijuniorhouphouet@gmail.com"
              className="flex items-center space-x-3 text-lg text-gray-300 hover:text-white transition-all"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={20} />
              <span>Say Hi</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
