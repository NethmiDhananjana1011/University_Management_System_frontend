import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, GraduationCap, ChevronLeft, Award, BookOpen } from 'lucide-react';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: 'student@seu.ac.lk', role: 'student' });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserData(user);
    }
  }, []);

  // උදාහරණ ප්‍රතිඵල දත්ත (Dummy Data)
  const academicResults = [
    { id: 1, semester: 'Year 1 - Semester I', gpa: '3.82', credits: 15, status: 'Completed' },
    { id: 2, semester: 'Year 1 - Semester II', gpa: '3.65', credits: 18, status: 'Completed' },
    { id: 3, semester: 'Year 2 - Semester I', gpa: 'Pending', credits: 16, status: 'Ongoing' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-16">
      
      {/* Header Section */}
      <div className="bg-[#0f172a] text-white py-12 px-6 shadow-md relative">
        <button 
          onClick={() => navigate('/dashboard')}
          className="absolute top-6 left-6 flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm font-medium bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
        >
          <ChevronLeft size={18} /> Back to Dashboard
        </button>
        <div className="max-w-5xl mx-auto mt-6 flex items-center gap-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-lg">
            <User size={48} />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">My Student Profile</h1>
            <p className="text-blue-200 flex items-center gap-2">
              <Mail size={16} /> {userData.email}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Side: Profile Details */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 border-b pb-3 mb-4 flex items-center gap-2">
              <GraduationCap className="text-blue-600" /> Academic Info
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-800">Registration Number</p>
                <p>SEU/IS/22/045</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Faculty</p>
                <p>Faculty of Technology</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Degree Program</p>
                <p>BSc Hons in Information & Communication Technology</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Current Status</p>
                <span className="inline-block mt-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Active Undergraduate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Academic Results */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Award className="text-orange-500" /> Academic Performance
              </h2>
              <div className="text-right">
                <p className="text-xs text-gray-500 font-semibold uppercase">Current CGPA</p>
                <p className="text-2xl font-extrabold text-blue-600">3.73</p>
              </div>
            </div>

            <div className="space-y-4">
              {academicResults.map((result) => (
                <div key={result.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{result.semester}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{result.credits} Credits Earned</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${result.gpa === 'Pending' ? 'text-gray-400' : 'text-gray-800'}`}>
                      {result.gpa === 'Pending' ? 'Pending' : `GPA: ${result.gpa}`}
                    </p>
                    <p className={`text-xs font-semibold mt-0.5 ${result.status === 'Completed' ? 'text-green-600' : 'text-orange-500'}`}>
                      {result.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}