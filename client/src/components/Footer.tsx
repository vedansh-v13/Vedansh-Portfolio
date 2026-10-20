import { useState } from "react";
import { Linkedin, Instagram, Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("vedansh.wandalkar@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied to clipboard",
      description: "vedansh.wandalkar@gmail.com",
    });
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="py-14 bg-[#181719] border-t border-white/10 text-[#AAA7AE]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blush inline-block" />
            <span className="font-mono text-xs tracking-wider uppercase text-[#F5F4F6]">
              © {currentYear} Vedansh Wandalkar.
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-xs font-mono text-[#AAA7AE] hidden sm:inline">
              PRODUCT DESIGN & SYSTEMS
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/overcoming.eternal.recurrence/"
              className="btn-tactile text-[#AAA7AE] hover:text-[#F5F4F6] hover:bg-white/[0.06] active:scale-95 p-2 rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/vedansh-wandalkar/"
              className="btn-tactile text-[#AAA7AE] hover:text-[#F5F4F6] hover:bg-white/[0.06] active:scale-95 p-2 rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:vedansh.wandalkar@gmail.com"
              onClick={handleEmailClick}
              className="btn-tactile text-[#AAA7AE] hover:text-[#F5F4F6] hover:bg-white/[0.06] active:scale-95 p-2 rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush"
              aria-label="Email Vedansh Wandalkar"
              title={copied ? "Copied to clipboard!" : "Email vedansh.wandalkar@gmail.com (copies address)"}
            >
              {copied ? <Check size={18} className="text-blush" /> : <Mail size={18} />}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
