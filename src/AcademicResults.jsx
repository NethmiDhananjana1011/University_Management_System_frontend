import React, { useState } from 'react';
// Importing routing hook and required icons
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Home, FileText, Calendar, CreditCard, User, HelpCircle, Download, ChevronUp, ChevronDown, Medal, Star, LogOut } from 'lucide-react';

export default function AcademicResults() {
  const navigate = useNavigate();
  // State to manage which semester accordion is currently open
  const [openSemester, setOpenSemester] = useState(1);

  // Function to toggle semester details
  const toggleSemester = (id) => {
    setOpenSemester(openSemester === id ? null : id);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    // Main layout container
    <div className="flex h-screen bg-[#f4f7fe] font-sans">
      
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm z-10">
        
        {/* University Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#1e3a8a] text-white p-2 rounded-lg font-bold text-xl flex items-center justify-center w-10 h-10">
            N
          </div>
          <div className="text-[#1e3a8a] font-bold text-lg leading-tight">
            NEXUS<br/><span className="text-[10px] font-normal tracking-widest text-gray-800">UNIVERSITY</span>
          </div>
        </div>
        
        {/* Navigation Links (Matching the Academic Results UI) */}
        <nav className="flex-1 px-4 space-y-2 mt-4 text-sm font-medium">
          <a href="/student" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <Home size={18} /> Dashboard
          </a>
          {/* Active State for Academic Results */}
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg shadow-sm">
            <FileText size={18} /> Academic Results
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <Calendar size={18} /> Course Registration
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <CreditCard size={18} /> Fees
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <User size={18} /> Profile
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <HelpCircle size={18} /> Help
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-8 shadow-sm z-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-sm" 
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-blue-600 transition-colors">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                1
              </span>
            </button>
            
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-[#e0e7ff] rounded-full flex items-center justify-center text-[#1e5baf] font-bold overflow-hidden">
                <User size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800 leading-tight">Jane Doe ⌄</p>
              </div>
            </div>

            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium transition-colors border-l border-gray-200 pl-6">
              <LogOut size={20} />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 max-w-5xl">
          
          {/* Page Title & Download Button Row */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Academic Results</h1>
              <p className="text-sm text-gray-500 mt-1">Your progress so far, Jane</p>
            </div>
            
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium">
              Download Unofficial Transcript (PDF) <Download size={16} />
            </button>
          </div>

          {/* Academic Summary Highlight Card */}
          <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-xl p-6 mb-8 border border-blue-100 shadow-sm flex items-center gap-16">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">Academic Summary</p>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm text-gray-500">Cumulative GPA</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-4xl font-bold text-blue-500">3.85</span>
                <Medal size={28} className="text-yellow-500 fill-yellow-100" />
              </div>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-1">Total Credits Earned</p>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-blue-500">90</span>
                <Star size={24} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Semesters List (Accordion) */}
          <div className="space-y-4">
            
            {/* Semester 1 (Expanded by default) */}
            <div className={`bg-white rounded-xl border ${openSemester === 1 ? 'border-blue-300 shadow-md' : 'border-gray-200 shadow-sm'} overflow-hidden transition-all`}>
              <div 
                className={`p-4 flex justify-between items-center cursor-pointer ${openSemester === 1 ? 'bg-[#f0f9ff]' : 'hover:bg-gray-50'}`}
                onClick={() => toggleSemester(1)}
              >
                <h3 className="font-semibold text-gray-800">Semester 1: Fall 2024</h3>
                {openSemester === 1 ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
              </div>
              
              {openSemester === 1 && (
                <div className="p-4 border-t border-gray-100">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-2 px-4 text-sm font-medium text-gray-600 rounded-l-lg">Subject Name</th>
                        <th className="py-2 px-4 text-sm font-medium text-gray-600">Credits</th>
                        <th className="py-2 px-4 text-sm font-medium text-gray-600">Grade</th>
                        <th className="py-2 px-4 text-sm font-medium text-gray-600 rounded-r-lg">Grade Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm text-gray-800">Intro to Computer Science</td>
                        <td className="py-3 px-4 text-sm text-gray-600">4</td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">A</td>
                        <td className="py-3 px-4 text-sm text-gray-600">4.0</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm text-gray-800">Calculus I</td>
                        <td className="py-3 px-4 text-sm text-gray-600">3</td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">A</td>
                        <td className="py-3 px-4 text-sm text-gray-600">4.0</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm text-gray-800">Physics I</td>
                        <td className="py-3 px-4 text-sm text-gray-600">4</td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">B+</td>
                        <td className="py-3 px-4 text-sm text-gray-600">3.3</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-800">Writing Workshop</td>
                        <td className="py-3 px-4 text-sm text-gray-600">3</td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">A-</td>
                        <td className="py-3 px-4 text-sm text-gray-600">3.7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Semester 2 (Collapsed) */}
            <div className={`bg-white rounded-xl border ${openSemester === 2 ? 'border-blue-300 shadow-md' : 'border-gray-200 shadow-sm'} overflow-hidden transition-all`}>
              <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSemester(2)}
              >
                <h3 className="font-semibold text-gray-800">Semester 2: Spring 2025</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 hidden md:block">Illustrative summary: 14 Credits | GPA: 3.9</span>
                  {openSemester === 2 ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                </div>
              </div>
            </div>

            {/* Semester 3 (Collapsed) */}
            <div className={`bg-white rounded-xl border ${openSemester === 3 ? 'border-blue-300 shadow-md' : 'border-gray-200 shadow-sm'} overflow-hidden transition-all`}>
              <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSemester(3)}
              >
                <h3 className="font-semibold text-gray-800">Semester 3: Fall 2025</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 hidden md:block">Illustrative summary: 17 Credits | GPA: 3.8</span>
                  {openSemester === 3 ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                </div>
              </div>
            </div>

            {/* Footer Watermark */}
            <div className="text-right text-xs text-gray-400 mt-8 mb-4">
              © 2026 NEXUS UNIVERSITY
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}