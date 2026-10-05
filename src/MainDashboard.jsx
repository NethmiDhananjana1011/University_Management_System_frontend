import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Mail, Phone, MapPin, LogOut, User, ChevronLeft } from 'lucide-react';
import seuslLogo from './assets/seusl-logo.png';
import campusBg from './assets/campusbg.jpg';

import appliedImg from "./assets/appliedscience.jpg";
import artsImg from "./assets/artsculture.jpg";
import islamicImg from "./assets/islamicarabic.jpg";
import managementImg from "./assets/managementcommerce.jpg";
import engineeringImg from "./assets/engineering .jpg";
import techImg from "./assets/technology.jpg";

export default function MainDashboard() {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  // අන්තර්ජාල ලින්ක් වෙනුවට ඔයාගේ Faculty පින්තූරම Slideshow එකට දැමීම
  const slides = [
    {
      title: "Welcome to South Eastern University of Sri Lanka",
      subtitle: "Established in 1995 as a premier center of higher education in Oluvil, Sri Lanka.",
      bgImage: campusBg
    },
    {
      title: "Faculty of Applied Sciences",
      subtitle: "Advancing knowledge in Biological, Mathematical, Chemical, and Physical Sciences.",
      bgImage: appliedImg
    },
    {
      title: "Faculty of Management & Commerce",
      subtitle: "Shaping future business leaders with excellence in Management, Finance and Marketing.",
      bgImage: managementImg
    },
    {
      title: "Faculty of Technology",
      subtitle: "Innovating the future with Bio-systems and Information & Communication Technology.",
      bgImage: techImg
    },
    {
      title: "Faculty of Engineering",
      subtitle: "Engineering solutions for tomorrow in Civil, Mechanical, Electrical and Computer Science.",
      bgImage: engineeringImg
    },
    {
      title: "Faculty of Arts & Culture",
      subtitle: "Exploring Social Sciences, Languages, Geography, and Humanities.",
      bgImage: artsImg
    },
    {
      title: "Faculty of Islamic Studies & Arabic Language",
      subtitle: "A unique center for Arabic Language and Islamic jurisprudence.",
      bgImage: islamicImg
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const faculties = [
    { id: 'applied', name: 'Faculty of Applied Sciences', image: appliedImg, desc: 'Departments: Biological, Mathematical, Chemical, Physical Sciences & Computer Science.' },
    { id: 'arts', name: 'Faculty of Arts & Culture', image: artsImg, desc: 'Departments: Languages, Social Sciences, Geography, Sociology, Economics & IT.' },
    { id: 'islamic', name: 'Faculty of Islamic Studies & Arabic Language', image: islamicImg, desc: 'Departments: Arabic Language and Islamic Studies.' },
    { id: 'management', name: 'Faculty of Management & Commerce', image: managementImg, desc: 'Departments: Accountancy & Finance, Management, MIT & Marketing.' },
    { id: 'engineering', name: 'Faculty of Engineering', image: engineeringImg, desc: 'Departments: Civil, Mechanical, Electrical, Computer Science & Engineering.' },
    { id: 'technology', name: 'Faculty of Technology', image: techImg, desc: 'Departments: Bio-systems Technology and Information & Communication Technology.' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleFacultyClick = (facultyId) => {
    navigate(`/faculty/${facultyId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col justify-between">

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img src={seuslLogo} alt="SEUSL Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-xs md:text-sm leading-tight">SOUTH EASTERN UNIVERSITY OF SRI LANKA</h1>
              <p className="text-[11px] text-gray-500">ශ්‍රී ලංකා අග්නිදිග විශ්වවිද්‍යාලය | இலங்கை தென்கிழக்குப் பல்கலைக்கழகம்</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#faculties" className="text-sm font-medium text-gray-700 hover:text-blue-600 hidden md:block">Faculties</a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 hidden md:block">About</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 hidden md:block">Contact</a>

            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                <div
                  onClick={() => navigate('/profile')}
                  className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm cursor-pointer hover:bg-blue-200 transition-colors shadow-sm"
                  title="View My Profile"
                >
                  <User size={18} />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                title="Logout"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>

        </div>
      </header>

      <div className="relative h-[480px] bg-slate-900 flex items-center justify-center overflow-hidden text-center">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.bgImage}
            alt="Campus Slide"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0 ${index === currentSlide ? 'opacity-85' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-blue-950/30 z-10"></div>

        <div className="relative z-20 max-w-3xl px-6 text-white">
          <span className="bg-blue-600 text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold mb-4 inline-block shadow-md">
            SEUSL Official Portal • Est. 1995
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 transition-all duration-500 drop-shadow-lg">
            {slides[currentSlide].title}
          </h2>
          <p className="text-base md:text-lg text-gray-100 mb-8 drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>
          <a
            href="#faculties"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
          >
            Explore Faculties <ChevronRight size={18} />
          </a>
        </div>

        <button onClick={prevSlide} className="absolute left-4 z-30 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full transition-colors backdrop-blur-sm">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 z-30 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full transition-colors backdrop-blur-sm">
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-blue-500 w-6' : 'bg-white/60'}`}
            />
          ))}
        </div>
      </div>

      <main id="faculties" className="max-w-7xl mx-auto px-6 py-16 flex-1 w-full">
        <div className="text-center mb-12">
          <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Academic Structure</h3>
          <h2 className="text-3xl font-bold text-gray-900">Select Your Faculty</h2>
          <p className="text-gray-500 mt-1">Choose your respective faculty to access departments, years, and semester subjects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((fac) => (
            <div
              key={fac.id}
              onClick={() => handleFacultyClick(fac.id)}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all cursor-pointer group overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <h4 className="absolute bottom-3 left-4 right-4 text-base md:text-lg font-bold text-white drop-shadow-md">
                    {fac.name}
                  </h4>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-sm font-semibold text-blue-600 border-t border-gray-100">
                <span>Access Department & Courses</span>
                <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </main>

      <section id="about" className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">About SEUSL</h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">South Eastern University of Sri Lanka</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 1995, the South Eastern University of Sri Lanka (SEUSL) is a prominent public research university located in Oluvil, Eastern Province. It operates with six full-fledged faculties, fostering academic excellence and professional skill development across diverse disciplines.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This portal serves as the unified Virtual Learning Environment (VLE) where students and academic staff seamlessly manage course enrollments, lecture notes, and assignments.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-gray-800 mb-4">Institutional Overview</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-600">1995</p>
                <p className="text-sm text-gray-500 mt-1">Established Year</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-600">6</p>
                <p className="text-sm text-gray-500 mt-1">Faculties</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-600">Public</p>
                <p className="text-sm text-gray-500 mt-1">University Type</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-600">Oluvil</p>
                <p className="text-sm text-gray-500 mt-1">Main Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Get in Touch</h3>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center shadow-sm">
              <MapPin className="text-blue-600 mb-3" size={24} />
              <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
              <p className="text-sm text-gray-500 text-center">University Park, Oluvil, Sri Lanka</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center shadow-sm">
              <Mail className="text-blue-600 mb-3" size={24} />
              <h4 className="font-semibold text-gray-800 mb-1">Official Website</h4>
              <p className="text-sm text-gray-500 text-center">www.seu.ac.lk</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center shadow-sm">
              <Phone className="text-blue-600 mb-3" size={24} />
              <h4 className="font-semibold text-gray-800 mb-1">Contact Support</h4>
              <p className="text-sm text-gray-500 text-center">+94 67 2255 062</p>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-[#0f172a] text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 South Eastern University of Sri Lanka. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">VLE Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}