import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Settings, LogOut, ShieldCheck, UserPlus, FileText, Activity } from 'lucide-react';
import seuslLogo from './assets/seusl-logo.png';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  // Dummy Data for Admin Stats
  const stats = [
    { title: 'Total Students', count: '1,245', icon: <Users size={24} className="text-blue-600" />, bg: 'bg-blue-100' },
    { title: 'Total Lecturers', count: '142', icon: <ShieldCheck size={24} className="text-purple-600" />, bg: 'bg-purple-100' },
    { title: 'Active Courses', count: '86', icon: <BookOpen size={24} className="text-orange-600" />, bg: 'bg-orange-100' },
    { title: 'System Status', count: 'Online', icon: <Activity size={24} className="text-green-600" />, bg: 'bg-green-100' }
  ];

  const recentUsers = [
    { id: 'SEU/IS/22/045', name: 'Nethmi Dhananjana', role: 'Student', faculty: 'Technology', status: 'Active' },
    { id: 'EMP/102', name: 'Dr. A.B. Perera', role: 'Lecturer', faculty: 'Technology', status: 'Active' },
    { id: 'SEU/AS/21/112', name: 'Kasun Kumara', role: 'Student', faculty: 'Applied Sciences', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex">
      
      {/* Sidebar - Left Navigation */}
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col hidden md:flex h-screen sticky top-0">
        <div className="p-6 flex items-center gap-3 border-b border-gray-800">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
            <img src={seuslLogo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h2 className="font-bold text-sm leading-tight">SEUSL PORTAL</h2>
            <p className="text-[10px] text-gray-400">Admin Control Panel</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Activity size={18} /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${activeTab === 'users' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Users size={18} /> Manage Users
          </button>
          <button 
            onClick={() => setActiveTab('courses')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${activeTab === 'courses' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <BookOpen size={18} /> Course Management
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Settings size={18} /> System Settings
          </button>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all text-sm font-medium"
          >
            <LogOut size={18} /> Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-gray-800 capitalize">{activeTab}</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500">Welcome, System Administrator</span>
            <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
              <ShieldCheck size={20} />
            </div>
          </div>
        </header>

        {/* Dynamic Content Based on Active Tab */}
        <div className="p-8">
          
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.bg}`}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">{stat.title}</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.count}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Users Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="font-bold text-gray-800">Recently Added Accounts</h3>
                  <button className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                    <UserPlus size={16} /> Add New
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-xs">
                      <tr>
                        <th className="px-6 py-4">ID / Reg No</th>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Role</th>
                        <th className="px-6 py-4">Faculty</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {recentUsers.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">{user.id}</td>
                          <td className="px-6 py-4 text-gray-700">{user.name}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${user.role === 'Lecturer' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{user.faculty}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                              {user.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* Other Tabs Placeholder */}
          {activeTab !== 'dashboard' && (
            <div className="flex flex-col items-center justify-center h-96 bg-white rounded-2xl border border-gray-100 border-dashed animate-in fade-in duration-300">
              <Settings size={48} className="text-gray-300 mb-4 animate-spin-slow" />
              <h2 className="text-xl font-bold text-gray-700 capitalize">{activeTab} Module</h2>
              <p className="text-gray-500 mt-2">This section is currently under development.</p>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}