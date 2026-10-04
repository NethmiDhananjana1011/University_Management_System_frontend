import React from 'react';
// Importing useNavigate for routing/redirection
import { useNavigate } from 'react-router-dom';
// Importing required icons from lucide-react
import { Search, Bell, Home, Book, Library, CreditCard, Settings, User, LogOut, Calendar, AlertCircle, FileText, CheckCircle } from 'lucide-react';

export default function StudentDashboard() {
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
    <div className="flex h-screen bg-[#f4f7fe] font-sans">
      
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
            <Book size={18} /> My Courses
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <Library size={18} /> Library
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <CreditCard size={18} /> Fees
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <Settings size={18} /> Settings
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
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-sm" 
            />
          </div>

          {/* Top Right Actions (Notifications, Profile & Logout) */}
          <div className="flex items-center gap-6">
            
            {/* Notification Bell with Badge */}
            <button className="relative text-gray-400 hover:text-blue-600 transition-colors">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                1
              </span>
            </button>
            
            {/* User Profile Details */}
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-[#e0e7ff] rounded-full flex items-center justify-center text-[#1e5baf] font-bold overflow-hidden">
                <User size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800 leading-tight">Jane Doe</p>
                <p className="text-xs text-gray-500">B.Sc. in Computer Science ⌄</p>
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
          
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Student Dashboard</h1>
          
          {/* Top Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Welcome Message Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <User size={32} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Welcome back, Jane!</h2>
                <p className="text-sm text-gray-500 mt-1">You have a new notice in the Library section.</p>
              </div>
            </div>

            {/* Academic Summary (GPA) Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center items-center relative overflow-hidden">
              <h3 className="text-sm font-semibold text-gray-800 mb-4 absolute top-4 left-4">Academic Summary</h3>
              {/* Semi-circle visual placeholder for GPA */}
              <div className="mt-6 relative w-24 h-12 bg-gray-200 rounded-t-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 origin-bottom transform rotate-45"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-2xl font-bold text-gray-800">GPA: 3.8</p>
              </div>
            </div>

            {/* Credit Progress Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
               <div className="absolute -top-3 right-4 bg-white border border-gray-200 text-xs text-gray-500 px-3 py-1 rounded shadow-sm">
                 <p>ID: JDOE001</p>
                 <p>Faculty: Engineering & Technology</p>
                 <p>Semester: Fall 2024</p>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-4 mt-6">Credit Progress</h3>
               <div className="flex justify-between text-sm mb-1">
                 <span className="text-gray-500">Credits Earned: 95</span>
                 <span className="text-gray-800 font-medium">Req: 120</span>
               </div>
               {/* Progress Bar */}
               <div className="w-full bg-gray-200 rounded-full h-2.5">
                 <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: '79%' }}></div>
               </div>
            </div>

          </div>

          {/* Main Content Grid (Courses & Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column (My Courses - spans 2 columns) */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">My Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Course 1 */}
                <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-24 bg-gradient-to-r from-blue-400 to-blue-300 flex items-center justify-center text-white">
                    <Book size={40} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2">Database Systems</h3>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>80% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded transition-colors">Go to Course</button>
                      <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium py-2 rounded transition-colors">View Grades</button>
                    </div>
                  </div>
                </div>

                {/* Course 2 */}
                <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-24 bg-gradient-to-r from-indigo-400 to-indigo-300 flex items-center justify-center text-white">
                    <FileText size={40} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2">Algorithms</h3>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>65% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                      <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded transition-colors">Go to Course</button>
                      <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium py-2 rounded transition-colors">Lecture Notes</button>
                    </div>
                  </div>
                </div>

                {/* Course 3 */}
                <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-24 bg-gradient-to-r from-cyan-400 to-cyan-300 flex items-center justify-center text-white">
                    <Settings size={40} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2">Web Engineering</h3>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>92% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                      <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded transition-colors">Go to Course</button>
                      <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium py-2 rounded transition-colors">Project Sub.</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (Deadlines & Notices) */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Upcoming Deadlines */}
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-md font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar size={18} className="text-blue-500"/> Upcoming Deadlines
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 w-2 h-2 bg-red-400 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-800">Algorithms Project</p>
                      <p className="text-xs text-gray-500">June 20</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 w-2 h-2 bg-orange-400 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-800">Web Engineering Essay</p>
                      <p className="text-xs text-gray-500">June 22</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-800">Database Systems Quiz</p>
                      <p className="text-xs text-gray-500">June 25</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Notices */}
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-md font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <AlertCircle size={18} className="text-blue-500"/> Notices
                </h2>
                <ul className="space-y-4">
                  <li className="text-sm border-l-2 border-blue-500 pl-3">
                    <p className="font-medium text-gray-800">Library Notice: New Research Access</p>
                    <p className="text-xs text-gray-500">June 18</p>
                  </li>
                  <li className="text-sm border-l-2 border-gray-200 pl-3">
                    <p className="font-medium text-gray-800">Campus Wifi Maintenance</p>
                    <p className="text-xs text-gray-500">June 19</p>
                  </li>
                  <li className="text-sm border-l-2 border-gray-200 pl-3">
                    <p className="font-medium text-gray-800">Course Registration Opens Soon</p>
                    <p className="text-xs text-gray-500">June 17</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}