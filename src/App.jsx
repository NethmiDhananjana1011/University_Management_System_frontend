import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Mail, Lock, EyeOff } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import LecturerDashboard from './LecturerDashboard';
import StudentDashboard from './StudentDashboard';
import AcademicResults from './AcademicResults';
import seuslLogo from './assets/seusl-logo.png';
import campusBg from "./assets/campusbg.jpg";
import MainDashboard from './MainDashboard';
import FacultyPage from './FacultyPage';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // ලොග් වූ සැණින් සියලු දෙනාම Main Dashboard එකට යොමු කෙරේ
        navigate('/dashboard');
      } else {
        alert(data.message || 'Invalid email or password.');
      }
    } catch (error) {
      console.log('API Offline. Simulating role detection from email...');
      const emailLower = email.toLowerCase();
      
      // Testing වෙලාවේදීත් ලොග් වූ පසු Main Dashboard එකට යොමු කෙරේ
      if (emailLower.includes('admin') || emailLower.includes('lec') || emailLower.includes('staff') || emailLower.includes('student')) {
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }
    }
  };

  return (
    <div className="flex h-screen w-full font-sans bg-white">
      
      {/* SEUSL Campus Image Section */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden p-12">
        {/* පසුබිම් පින්තූරය */}
        <img 
          src={campusBg} 
          alt="SEUSL Campus" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* පින්තූරය මත සැහැල්ලු අඳුරු තට්ටුවක් */}
        <div className="absolute inset-0 bg-blue-950/50 backdrop-blur-[2px] z-10"></div>
        
        {/* අන්තර්ගතය (Logo, Names, Welcome Text) */}
        <div className="relative z-20 w-full text-white">
          
          {/* ලෝගෝ එක සහ භාෂා තුනෙන් නම */}
          <div className="flex items-center gap-5 mb-12">
            <div className="bg-white p-2 rounded-full shadow-xl w-20 h-20 flex items-center justify-center overflow-hidden shrink-0 border-2 border-white/80">
               <img src={seuslLogo} alt="SEUSL Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className="text-white flex flex-col justify-center drop-shadow-lg text-left">
              <span className="font-bold text-lg md:text-xl tracking-wide leading-tight">
                South Eastern University of Sri Lanka
              </span>
              <span className="font-semibold text-sm md:text-base mt-1 leading-tight text-blue-100">
                ශ්‍රී ලංකා අග්නිදිග විශ්වවිද්‍යාලය
              </span>
              <span className="font-semibold text-xs md:text-sm mt-0.5 leading-tight text-blue-100">
                இலங்கை தென்கிழக்குப் பல்கலைக்கழகம்
              </span>
            </div>
          </div>
          
          {/* Welcome Box */}
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome to</h1>
            <h2 className="text-3xl font-bold mb-4 text-blue-300 drop-shadow-sm">SEUSL PORTAL</h2>
            <p className="text-gray-100 mb-6 text-base">Your single access point to campus services.</p>
            <div className="flex items-center gap-2 text-sm text-gray-200 font-medium">
              <Lock size={16} /> Secure Access
            </div>
          </div>

        </div>
      </div>

      {/* Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50/50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign In to Your Account</h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-all text-sm"
                  placeholder="e.g., student@seu.ac.lk"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-all text-sm"
                  placeholder="••••••••"
                  required
                />
                <EyeOff className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" size={18} />
              </div>
              <div className="flex justify-end mt-3">
                <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-800">Forgot Password?</a>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1e5baf] text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors mt-2 flex items-center justify-center gap-2 shadow-md"
            >
              Sign In <span className="text-lg leading-none">→</span>
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<MainDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/lecturer" element={<LecturerDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/student/results" element={<AcademicResults />} />
      <Route path="/faculty/:facultyId" element={<FacultyPage />} />
    </Routes>
  );
}