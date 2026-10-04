import React from 'react';
import { Search, Bell, Grid, Users, BookOpen, BarChart2, Settings, User } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-[#f4f7fe] font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm z-10">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#1e3a8a] text-white p-2 rounded-lg font-bold text-xl flex items-center justify-center w-10 h-10">
            N
          </div>
          <div className="text-[#1e3a8a] font-bold text-lg leading-tight">
            NEXUS<br/><span className="text-[10px] font-normal tracking-widest text-gray-800">UNIVERSITY</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4 text-sm font-medium">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-[#1e5baf] rounded-lg">
            <Grid size={18} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <Users size={18} /> Users
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <BookOpen size={18} /> Courses
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <BarChart2 size={18} /> Reports
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <Settings size={18} /> Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
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
              <div className="w-10 h-10 bg-[#e0e7ff] rounded-full flex items-center justify-center text-[#1e5baf] font-bold">
                <User size={18} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800 leading-tight">System Admin</p>
                <p className="text-xs text-gray-500">Admin User ⌄</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Total Students</p>
                  <p className="text-3xl font-bold text-gray-800">1,200</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                  <Users size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Active Courses</p>
                  <p className="text-3xl font-bold text-gray-800">85</p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-500">
                  <BookOpen size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Faculty Members</p>
                  <p className="text-3xl font-bold text-gray-800">60</p>
                </div>
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-500">
                  <User size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Lower Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area Placeholder */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Attendance Trends</h2>
              <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg text-gray-400 bg-gray-50">
                <BarChart2 size={40} className="mb-2 text-gray-300" />
                <p className="text-sm">Chart will be rendered here</p>
                <p className="text-xs mt-1">(We can add Recharts library later)</p>
              </div>
            </div>
            
            {/* Recent Notices */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Recent Notices</h2>
              <div className="space-y-5">
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-sm font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">Campus Event: Guest Lecture by Dr. Smith</p>
                  <p className="text-xs text-gray-500 mt-1">June 15</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <p className="text-sm font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">New Student Orientation Schedule Released</p>
                  <p className="text-xs text-gray-500 mt-1">June 10</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <p className="text-sm font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">Faculty Meeting: Semester Review</p>
                  <p className="text-xs text-gray-500 mt-1">June 5</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}