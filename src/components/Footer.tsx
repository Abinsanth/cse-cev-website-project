
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cse text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-cse-accent mt-1" />
                <p className="text-white/90">
                  College of Engineering Vadakara<br />
                  Kozhikode, Kerala<br />
                  India - 673105
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cse-accent" />
                <p className="text-white/90">+91 495 2287246</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cse-accent" />
                <p className="text-white/90">csehod@cev.ac.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-cse-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-white/90 hover:text-cse-accent transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-cse-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="text-white/90 hover:text-cse-accent transition-colors">
                  Alumni
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-cse-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cse-accent transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cse-accent transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cse-accent transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-white/90">
                Subscribe to our newsletter to get updates on events and activities.
              </p>
              <div className="mt-3 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md flex-1 text-cse-text focus:outline-none"
                />
                <button className="bg-cse-accent hover:bg-cse-accent/90 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-white/70">
            © {currentYear} Department of Computer Science and Engineering, College of Engineering Vadakara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
