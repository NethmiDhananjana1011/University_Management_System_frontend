import React from 'react';
// Importing useNavigate for routing/redirection
import { useNavigate } from 'react-router-dom';
// Importing required icons from lucide-react
import { Search, Bell, Home, BookOpen, FileText, CheckSquare, Calendar, User, LogOut, UploadCloud, PlusCircle, MoreHorizontal, MapPin } from 'lucide-react';

export default function LecturerDashboard() {
  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = () => {
    // Clear saved authentication data from browser storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect back to the login page
    navigate('/');
  };

  return (
    // Main layout container (Full screen height)
    <div className="flex h-screen bg-[#f8fafc] font-sans">
      
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm z-10">
        
        {/* University Logo and Branding */}
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#1e3a8a] text-white p-2 rounded-lg font-bold text-xl flex items-center justify-center w-10 h-10">
            N
          </div>
          <div className="text-[#1e3a8a] font-bold text-lg leading-tight">
            NEXUS<br/><span className="text-[10px] font-normal tracking-widest text-gray-800">UNIVERSITY</span>
          </div>
        </div>
        
        {/* Navigation Menu Links */}
        <nav className="flex-1 px-4 space-y-2 mt-4 text-sm font-medium">
          {/* Active state for Dashboard */}
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-[#1e5baf] rounded-lg border-l-4 border-[#1e5baf]">
            <Home size={18} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <BookOpen size={18} /> My Modules
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <FileText size={18} /> Assignments
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <CheckSquare size={18} /> Grading
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <Calendar size={18} /> Schedule
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-8 shadow-sm z-0">
          
          {/* Search Bar */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-sm" 
            />
          </div>

          {/* Top Right Actions (Notifications, Profile & Logout) */}
          <div className="flex items-center gap-6">
            
            {/* Notification Bell with Badge */}
            <button className="relative text-gray-400 hover:text-blue-600 transition-colors">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                2
              </span>
            </button>
            
            {/* User Profile Details */}
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-[#e0e7ff] rounded-full flex items-center justify-center text-[#1e5baf] font-bold overflow-hidden">
                <User size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800 leading-tight">Lecturer ⌄</p>
                <p className="text-xs text-gray-500">Lecturer Profile</p>
              </div>
            </div>

            {/* Logout Button */}
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium transition-colors border-l border-gray-200 pl-6"
              title="Logout"
            >
              <LogOut size={20} />
            </button>

          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          
          {/* Header Title & Date */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Lecturer Dashboard</h1>
            <p className="text-sm text-gray-500">Monday, Oct 26, 2026, 9:00 AM</p>
          </div>
          
          {/* Welcome Banner */}
          <div className="bg-[#e0f2fe] border border-[#bae6fd] rounded-xl p-5 mb-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#0369a1]">Welcome back, Professor Smith!</h2>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column (Spans 2 columns) - Schedule & Submissions */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Today's Schedule Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">Today's Schedule</h2>
                  <MoreHorizontal className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
                </div>
                
                {/* Timeline Items */}
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-16 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  
                  {/* Event 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-end w-1/4 pr-4">
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-800">9:00 AM</p>
                        <p className="text-xs text-gray-500">10:30 AM</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-3/4 pl-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                           9:00 AM - 10:30 AM
                        </p>
                        <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                          <MapPin size={14} className="text-blue-500" /> Database Systems (Room 302)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Event 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-end w-1/4 pr-4">
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-800">1:00 PM</p>
                        <p className="text-xs text-gray-500">2:30 PM</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-3/4 pl-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                           1:00 PM - 2:30 PM
                        </p>
                        <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                          <MapPin size={14} className="text-blue-500" /> Algorithms (Lecture Hall B)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Recent Submissions Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Recent Submissions</h2>
                    <p className="text-xs text-gray-500">Latest assignments per completed</p>
                  </div>
                  <MoreHorizontal className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
                </div>
                
                <div className="flex items-center gap-8">
                  {/* Circular Progress Placeholder */}
                  <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-8 border-blue-100">
                    <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-r-transparent border-t-transparent transform rotate-45"></div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">78%</p>
                      <p className="text-[10px] text-gray-500 uppercase">Complete</p>
                    </div>
                  </div>
                  
                  {/* Submission Details */}
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Latest Assignment:</p>
                    <p className="text-base font-semibold text-gray-800">Database Project</p>
                    <p className="text-sm text-gray-600 mt-2">78/100 Students Submitted</p>
                    <p className="text-sm text-blue-600 font-medium mt-1">78% Completed</p>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Column (Spans 1 column) - Quick Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Quick Actions</h2>
                
                <div className="space-y-4">
                  {/* Action Button 1 */}
                  <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-[#bae6fd] bg-[#f0f9ff] hover:bg-[#e0f2fe] transition-colors group">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-blue-500 group-hover:text-blue-600">
                      <UploadCloud size={24} />
                    </div>
                    <span className="font-semibold text-gray-800">Upload Lecture Notes</span>
                  </button>

                  {/* Action Button 2 */}
                  <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors group">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-blue-500 group-hover:text-blue-600">
                      <PlusCircle size={24} />
                    </div>
                    <span className="font-semibold text-gray-800">Create New Assignment</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}