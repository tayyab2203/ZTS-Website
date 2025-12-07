// src/pages/society/ZakariyanSociety.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Code2, 
  Users, 
  Lightbulb, 
  Zap, 
  BookOpen, 
  Github, 
  Mail, 
  MapPin, 
  MessageCircle,
  ArrowRight,
  Star,
  Award,
  Rocket
} from "lucide-react";

import LandingNavbar from "../../components/layout/LandingNavbar";
import Footer from "../../components/layout/Footer";
import TeamCarousel from "../../components/carousels/TeamCarousel";
import introVideo from "../../assets/videos/zts-intro.mp4";

// Import team member images
import teamImg1 from "../../assets/images/1.jpg";
import teamImg2 from "../../assets/images/2.jpg";
import teamImg3 from "../../assets/images/3.jpg";
import teamImg4 from "../../assets/images/4.jpg";
import teamImg5 from "../../assets/images/5.jpg";
import teamImg6 from "../../assets/images/6.jpg";
import teamImg7 from "../../assets/images/7.jpg";
import teamImg8 from "../../assets/images/8.jpg";
// import teamImg9 from "../../assets/images/9.jpg";
import sultanimg from "../../assets/images/sultan.jpg";
import femaleimg from "../../assets/images/zts.avif";

gsap.registerPlugin(ScrollTrigger);

const ZakariyanSociety = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const sectionsRef = useRef([]);
  const [showComingSoon, setShowComingSoon] = React.useState(false);

  const teamMembers = [
    {
      name: "Mr. Faizan Islam",
      role: "President",
      note: "Leads the overall direction and initiatives of ZTS.",
      image: teamImg1,
    },
    {
      name: "Miss Muneeza Qurashi",
      role: "Vice President (Female)",
      note: "Supports planning, coordination, and execution.",
      image: teamImg2,
    },
    {
      name: "Mr. Ali Ahmad",
      role: "Vice President (Male)",
      note: "Supports planning, coordination, and execution.",
      image: teamImg3,
    },
    {
      name: "Miss Wajeeha Naeem",
      role: "General Secretary",
      note: "Manages communications, documentation, and meetings.",
      image: femaleimg,
    },
    {
      name: "Mr. Asad Rao",
      role: "Joint Secretary",
      note: "Assists the General Secretary in duties.",
      image: teamImg4,

    },
    {
      name: "Mr. Abdul Ahad",
      role: "Event Head",
      note: "Organizes events, workshops, and bootcamps.",
      image: teamImg5,

    },
    {
      name: "Mr. Abdul Samad",
      role: "Editing Head",
      note: "Oversees content creation and media editing.",
      image: teamImg5,
    },
    {
      name: "Mr. Irfan ",
      role: "Graphics Head",
      note: "Designs visual materials and graphics for ZTS.",
      image: teamImg6,
    },
    {
      name: "Mr. Tayyab Sajjad",
      role: "Project Manager",
      note: "Leads project teams and ensures timely delivery.",
      image: teamImg7,
    },
    {
      name: "Mr. Fazal Abbas",
      role: "Finance Head",
      note: "Manages budgeting and financial planning for ZTS.",
      image: teamImg8,
    },
    {
      name: "Miss Faiza Muskan",
      role: "Social Media Head",
      note: "Handles social media presence and engagement.",
      image: femaleimg,
    },
    {
      name: "Miss Ayesha Mirza",
      role: "Discipline Head",
      note: "Maintains discipline and order within the society.",
      image: femaleimg,
    },
    {
      name: "Mr. Sultan",
      role: "Media Head (Male)",
      note: "Oversees photography and videography for events.",
      image: sultanimg,
    },
    {
      name: "Miss Farah Shaukat",
      role: "Media Head (Female)",
      note: "Oversees photography and videography for events.",
      image: femaleimg,
    },
  ];

  useEffect(() => {
    // Clear previous ScrollTriggers on re-mount (safety for SPA navigation)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    // Video card animation with scale
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    // Scroll-triggered sections with stagger
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
            markers: false,
          },
          delay: index * 0.08,
        }
      );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-900 border border-blue-500/50 rounded-xl p-8 max-w-md w-full shadow-2xl shadow-blue-500/20 animate-in fade-in zoom-in duration-300">
            <div className="text-center space-y-4">
              <div className="inline-block p-3 rounded-full bg-blue-500/20 border border-blue-500/50">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Coming Soon!</h3>
              <p className="text-slate-300 font-light">
                This website is under development. We're working hard to bring you an amazing platform. Stay tuned!
              </p>
              <div className="flex gap-2 pt-4">
                <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      <LandingNavbar />

      <main className="pt-20 md:pt-28 bg-slate-950 text-slate-100 min-h-screen relative overflow-x-hidden">
        {/* Professional animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-20 left-1/3 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-purple-500/12 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-slate-900 to-slate-950" />
          <div
            ref={heroRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-12 sm:py-16 lg:py-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-xs font-semibold text-blue-300 mb-6">🚀 Zakariyan Tech Society</span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                    Build Your Tech Future
                  </h1>
                </div>

                <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
                  Zakariyan Tech Society is a student-led initiative at BZU
                  focused on empowering students through real-world projects,
                  practical short courses, and a collaborative tech culture.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById("zts-courses");
                      el && el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group px-8 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition duration-300 flex items-center gap-2"
                  >
                    Explore Courses
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                  {/* <button
                    onClick={() => {
                      const el = document.getElementById("zts-video");
                      el && el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 rounded-lg text-sm font-semibold border-2 border-slate-600 hover:border-blue-400 text-slate-200 hover:text-white bg-slate-900/40 hover:bg-slate-900/80 transition duration-300 flex items-center gap-2"
                  >
                    <span>Watch Intro Video</span>
                  </button> */}
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Students</p>
                    <p className="text-3xl font-bold text-blue-300">100+</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Projects</p>
                    <p className="text-3xl font-bold text-cyan-300">2+</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Courses</p>
                    <p className="text-3xl font-bold text-purple-300">3+</p>
                  </div>
                </div>
              </div>

              {/* Right: Video */}
              <div id="zts-video" className="relative" ref={videoRef}>
                <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-1 shadow-2xl hover:shadow-blue-500/30 transition duration-500">
                  <div className="relative overflow-hidden rounded-xl aspect-video bg-black">
                    <video
                      src={introVideo}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-sm text-slate-300 font-medium">
                      Introductory video by core members
                    </p>
                    <p className="text-xs text-slate-400">
                      Zakariyan Tech Society
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 sm:py-24 bg-slate-950 relative">
          <div
            ref={(el) => (sectionsRef.current[0] = el)}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">About Us</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-lg text-slate-300 leading-relaxed font-light">
                    Zakariyan Tech Society (ZTS) is a community of motivated BZU students
                    who believe in learning by doing. We organize hands-on sessions,
                    projects, and short courses to help students move beyond theory and
                    build real skills in programming, development, and technology.
                  </p>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                    Whether you&apos;re just starting your tech journey or already
                    exploring advanced topics, ZTS provides a friendly and supportive
                    environment where you can learn, collaborate, and grow with your
                    peers.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="group border border-slate-700/50 bg-slate-900/40 rounded-xl p-5 hover:bg-slate-900/60 hover:border-blue-500/50 transition duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition">
                        <Lightbulb className="w-5 h-5 text-blue-300" />
                      </div>
                      <h3 className="font-semibold text-white">Project-Based Learning</h3>
                    </div>
                    <p className="text-sm text-slate-400 font-light">Build real projects with hands-on guidance and peer support.</p>
                  </div>

                  <div className="group border border-slate-700/50 bg-slate-900/40 rounded-xl p-5 hover:bg-slate-900/60 hover:border-emerald-500/50 transition duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition">
                        <Users className="w-5 h-5 text-emerald-300" />
                      </div>
                      <h3 className="font-semibold text-white">Open to All</h3>
                    </div>
                    <p className="text-sm text-slate-400 font-light">Students from any background welcome — no prior experience needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50 relative">
          <div
            ref={(el) => (sectionsRef.current[1] = el)}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">What We Do</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>
              <p className="text-lg text-slate-400 max-w-3xl font-light">
                Practical initiatives designed to build confidence and real-world skills.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Workshops & Bootcamps",
                  desc: "Hands-on sessions on web dev, programming, and tech tools.",
                  icon: Code2,
                  color: "blue"
                },
                {
                  title: "Projects & Collaborations",
                  desc: "Build real-world solutions with fellow students and mentors.",
                  icon: Rocket,
                  color: "purple"
                },
                {
                  title: "Short Courses",
                  desc: "Structured learning tracks designed for beginners.",
                  icon: BookOpen,
                  color: "cyan"
                },
                {
                  title: "Mentorship & Guidance",
                  desc: "Learn from seniors, get roadmap, and career guidance.",
                  icon: Users,
                  color: "emerald"
                },
              ].map((item) => {
                const IconComponent = item.icon;
                const colorClasses = {
                  blue: "border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 group-hover:border-blue-400",
                  purple: "border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 group-hover:border-purple-400",
                  cyan: "border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 group-hover:border-cyan-400",
                  emerald: "border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 group-hover:border-emerald-400"
                };
                const iconColors = {
                  blue: "text-blue-400",
                  purple: "text-purple-400",
                  cyan: "text-cyan-400",
                  emerald: "text-emerald-400"
                };
                const bgColors = {
                  blue: "bg-blue-500/10",
                  purple: "bg-purple-500/10",
                  cyan: "bg-cyan-500/10",
                  emerald: "bg-emerald-500/10"
                };
                return (
                  <div
                    key={item.title}
                    className="group border border-slate-700/50 bg-slate-900/40 hover:border-blue-500/50 hover:bg-slate-900/60 rounded-xl p-6 transition duration-300 cursor-pointer"
                  >
                    <div className="p-3 rounded-lg bg-slate-800/50 inline-block mb-4">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Short Courses Section */}
        <section
          id="zts-courses"
          className="py-20 sm:py-24 bg-slate-950 border-t border-slate-800/50 relative"
        >
          <div
            ref={(el) => (sectionsRef.current[2] = el)}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="space-y-12 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                  Upcoming Short Courses
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>
              <p className="text-lg text-slate-400 max-w-3xl font-light">
                Structured, beginner-friendly courses designed to build foundational skills in development and modern tech.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Web Development Basics",
                  level: "Beginner-Intermediate",
                  duration: "8 weeks (weekend Classes)",
                  focus: "HTML, CSS, basic JavaScript",
                },
                {
                  title: "UI/UX Design Fundamentals (FIgma)",
                  level: "Beginner-Intermediate",
                  duration: "8 weeks (weekend Classes)",
                  focus: "Design principles & Figma basics",
                },
                {
                  title: "Python & Problem Solving",
                  level: "Beginner",
                  duration: "2–3 weeks",
                  focus: "Programming basics & logic building",
                },
              ].map((course, idx) => (
                <div
                  key={course.title}
                  className="group border border-slate-700/50 bg-slate-900/40 hover:border-blue-500/50 hover:bg-slate-900/60 rounded-xl p-6 transition duration-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {course.title}
                    </h3>
                    <p className="text-sm text-blue-400/90 mb-4 font-light">
                      {course.focus}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-700/40">
                    <span className="px-3 py-1 rounded-full bg-slate-800/80 text-xs font-medium text-slate-300">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 text-xs font-medium text-blue-300 border border-blue-500/30">
                      {course.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-xs font-medium text-emerald-300 border border-emerald-500/30 ml-auto">
                      comming soon
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Form CTA */}
            <div className="border border-blue-500/40 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-blue-950/60 to-slate-950 hover:from-blue-900/60 transition duration-300 overflow-hidden relative">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-100 mb-2">
                    Register Your Interest
                  </h3>
                  <p className="text-sm sm:text-base text-blue-100/80 max-w-xl">
                    Fill out the interest form to get early updates when short course
                    registrations open. We&apos;ll notify you via WhatsApp or email with
                    schedules and details.
                  </p>
                </div>
                <button
                  onClick={() => {
                    // TODO: replace this with your actual Google Form URL
                    window.open(
                      "https://docs.google.com/forms/d/1Fka7hYWytXiStfZGyBPoAw0IsNGIj5Jwbt8TtsYnUY8/edit",
                      "_blank"
                    );
                  }}
                  className="group/btn px-6 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition duration-300 whitespace-nowrap flex items-center gap-2"
                >
                  Open Registration Form
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Project Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50 relative">
          <div
            ref={(el) => (sectionsRef.current[3] = el)}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                  Our Flagship Project
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6" />
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4">
                  Students Community Platform
                </h3>

                <p className="text-base text-slate-400 mb-6 leading-relaxed font-light">
                  A centralized portal where students can connect, interact, collaborate, and discover opportunities.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-slate-300 font-light">Student profiles & registration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-slate-300 font-light">Chat rooms & community spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-slate-300 font-light">Discover peers, skills, and opportunities</span>
                  </li>
                </ul>

                <button
                  onClick={() => {
                    setShowComingSoon(true);
                    setTimeout(() => setShowComingSoon(false), 3000);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition duration-300"
                >
                  Visit Platform
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-purple-600/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 sm:p-8 shadow-lg hover:border-blue-500/30 transition duration-300">
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Built by students, for students.
                    </h3>
                    <p className="text-base text-slate-400 leading-relaxed font-light">
                      Our commitment to creating meaningful, real-world solutions that directly benefit the BZU community.
                    </p>
                    <div className="pt-4 border-t border-slate-700/40">
                      <p className="text-sm text-slate-400 font-light">
                        Join our short courses and project teams to build solutions like this.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Advanced Carousel */}
        <section id="team-section" className="py-20 sm:py-24 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 right-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 left-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
          </div>

          <div
            ref={(el) => (sectionsRef.current[4] = el)}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="space-y-12 mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                  Meet the Team
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>
              <p className="text-lg text-slate-400 max-w-3xl font-light">
                Talented students and leaders driving innovation and community engagement at Zakariyan Tech Society.
              </p>
            </div>

            {/* Team Carousel Component with Enhanced Styling */}
            <div className="relative">
              <div className="bg-gradient-to-b from-blue-500/5 to-transparent rounded-3xl p-8 sm:p-10 border border-slate-700/30 backdrop-blur-sm">
                <TeamCarousel teamMembers={teamMembers} />
              </div>
              
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-full pointer-events-none" />
            </div>

            {/* Team Stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-slate-700/40 rounded-xl bg-slate-900/30 hover:bg-slate-900/60 transition duration-300">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Team Members</p>
                <p className="text-3xl font-bold text-blue-300">{teamMembers.length}</p>
              </div>
              <div className="text-center p-6 border border-slate-700/40 rounded-xl bg-slate-900/30 hover:bg-slate-900/60 transition duration-300">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Roles</p>
                <p className="text-3xl font-bold text-cyan-300">{new Set(teamMembers.map(m => m.role)).size}</p>
              </div>
              <div className="text-center p-6 border border-slate-700/40 rounded-xl bg-slate-900/30 hover:bg-slate-900/60 transition duration-300 col-span-2 sm:col-span-1">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Dedication</p>
                <p className="text-3xl font-bold text-purple-300">100%</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div
            ref={(el) => (sectionsRef.current[5] = el)}
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="space-y-12 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                  Frequently Asked Questions
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Who can join Zakariyan Tech Society?",
                  a: "Any BZU student interested in technology, development, or learning new skills can join – regardless of department or current skill level.",
                },
                {
                  q: "Do I need prior coding experience?",
                  a: "No. Our short courses and initiatives are designed to be beginner-friendly. We focus on helping you start from basics and grow step by step.",
                },
                {
                  q: "Is there any membership fee?",
                  a: "At this stage, there is no formal membership fee for joining the community. Some special workshops or courses may have minimal charges, which will be communicated clearly in advance.",
                },
                {
                  q: "Will I get certificates for courses or workshops?",
                  a: "For short courses and major workshops, we plan to provide participation or completion certificates, depending on the nature of the event.",
                },
                {
                  q: "How can I become a core team member?",
                  a: "We will periodically open applications for volunteers and core positions. Stay connected through our short course registration form and announcements.",
                },
              ].map((item, idx) => (
                <div
                  key={item.q}
                  className="group border border-slate-700/50 hover:border-blue-500/50 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl p-6 transition duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-blue-300">Q{idx + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-white mb-2">
                        {item.q}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Connect Section */}
        <section id="contact-section" className="py-20 sm:py-24 bg-slate-950 border-t border-slate-800/50 mb-10 relative">
          <div
            ref={(el) => (sectionsRef.current[6] = el)}
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="space-y-12 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                  Connect With Us
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>
            </div>

            <div className="border border-slate-700/50 bg-slate-900/40 hover:border-blue-500/50 hover:bg-slate-900/60 rounded-xl p-8 sm:p-10 transition duration-300">
              <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed font-light">
                Have questions or want to collaborate? Reach out to us and join our growing tech community.
              </p>

              <div className="space-y-5">
                {/* <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-300 mb-1">Email</p>
                    <p className="text-base text-slate-200 hover:text-blue-300 transition cursor-pointer">
                      zakariyan.tech.society@example.com
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-300 mb-1">Location</p>
                    <p className="text-base text-slate-200">Bahauddin Zakariya University (BZU)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-300 mb-1">WhatsApp</p>
                    <p className="text-base text-slate-200">
                      Join our updates group (link coming soon with short courses).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/40">
                <p className="text-sm text-slate-400 font-light">
                  This page is maintained by Zakariyan Tech Society as part of the Students Community Platform.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-10 pointer-events-none" />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ZakariyanSociety;
