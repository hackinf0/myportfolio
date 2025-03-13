import { Youtube, Facebook, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">  
      <div className="max-w-3xl mx-auto text-center space-y-4"> 
        <h2 className="text-lg font-semibold">Henri Junior Houphouët</h2>
 
        <div className="flex justify-center space-x-6">
          <a
            href="https://youtube.com/hackinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://www.facebook.com/Hackinfo225"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/henri-junior-houphouet-6ba503208/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/hackinf0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <Github size={24} />
          </a>
        </div>
 
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Henri Junior Houphouët. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
