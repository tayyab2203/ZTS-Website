import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-8">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold text-lg mb-3">ZTS</h4>
          <p className="text-slate-400">Student-led tech community at BZU focused on projects, learning, and collaboration.</p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="text-slate-400 hover:text-white"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="md:col-span-1 grid grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-semibold text-slate-200 mb-2">Explore</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button onClick={() => document.getElementById('zts-video')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white">About</button></li>
              <li><button onClick={() => document.getElementById('zts-courses')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white">Courses</button></li>
              <li><button onClick={() => document.getElementById('team-section')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white">Team</button></li>
              <li><button onClick={() => document.getElementById('faq-section')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-200 mb-2">Resources</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Guidelines</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-2">
          <h5 className="text-sm font-semibold text-slate-200 mb-2">Stay Updated</h5>
          <p className="text-slate-400 text-sm mb-3">Subscribe for short course announcements and events.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input aria-label="Email" type="email" placeholder="you@school.edu" className="w-full rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 focus:outline-none" />
            <button className="px-3 py-2 rounded-md bg-blue-500 text-white text-sm font-semibold">Subscribe</button>
          </form>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-slate-800 text-sm text-slate-500 text-center">
        <p>© {new Date().getFullYear()} Zakariyan Tech Society. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;