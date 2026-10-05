import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Mail, Lock, EyeOff } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import StudentDashboard from './StudentDashboard';
import AcademicResults from './AcademicResults';
import seuslLogo from './assets/seusl-logo.png';
import campusBg from "./assets/campusbg.jpg";
import MainDashboard from './MainDashboard';
import FacultyPage from './FacultyPage';
import SubjectPage from './SubjectPage';
import newLoginBg from "./assets/new-login-bg.jpg";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const emailLower = email.toLowerCase();
    
    // --- 1. UI Testing සඳහා පමණක් දාපු කෙටි මාර්ගය (Bypass API) ---
    if (emailLower === 'admin@seu.ac.lk' || emailLower === 'lec@seu.ac.lk' || emailLower === 'student@seu.ac.lk') {
      
      if (emailLower.includes('admin')) {
        localStorage.setItem('user', JSON.stringify({ email: emailLower, role: 'admin' }));
        navigate('/admin');
      } else if (emailLower.includes('lec')) {
        localStorage.setItem('user', JSON.stringify({ email: emailLower, role: 'lecturer' }));
        navigate('/dashboard');
      } else {
        localStorage.setItem('user', JSON.stringify({ email: emailLower, role: 'student' }));
        navigate('/dashboard');
      }
      return; // මෙතනින් නවතිනවා, ඇත්තම Database එකට යන්නේ නෑ
    }

    // --- 2. ඇත්තම Database එකෙන් බලන කොටස (Real API) ---
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
        
        if (data.user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      } else {
        alert(data.message || 'Invalid email or password.');
      }
    } catch (error) {
      console.log('API Error:', error);
      alert('Unable to connect to the server.');
    }
  };

  return (
    <div className="flex h-screen w-full font-sans bg-white">

      {/* SEUSL Campus Image Section */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden p-12 bg-black">
        {/* පසුබිම් පින්තූරය */}
        <img
          src={newLoginBg} // ඔයා අලුතින් දාපු පින්තූරයේ නම මෙතනට දෙන්න
          alt="SEUSL Campus"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Blur එක සම්පූර්ණයෙන්ම අයින් කරලා, පින්තූරය පැහැදිලිව පේන්න අඳුරු තට්ටුව ගොඩක් අඩු කලാ */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* අන්තර්ගතය (Logo, Names, Welcome Text) */}
        <div className="relative z-20 w-full text-white">

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
      <Route path="/student/results" element={<AcademicResults />} />
      <Route path="/faculty/:facultyId" element={<FacultyPage />} />
      <Route path="/subject/:subjectId" element={<SubjectPage />} />
      <Route path="/profile" element={<StudentDashboard />} />
    </Routes>
  );
}