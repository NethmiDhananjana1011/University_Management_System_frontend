import React, { useState } from 'react';
import { Mail, Lock, EyeOff, ArrowRight, ShieldCheck, GraduationCap, Presentation } from 'lucide-react';

export default function App() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Laravel API එකට Request එක යැවීම
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Login සාර්ථක නම් Token එක Save කරගන්නවා
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login Successful! Welcome ' + data.user.name);
        // පසුව අපි මෙතනින් Dashboard එකට හරවලා යවනවා (Redirect)
      } else {
        // Login අසාර්ථක නම් Error එක පෙන්නනවා
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('System error. Is the Laravel server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Yedabhaga (Left Side - Branding) */}
      <div className="hidden md:flex md:w-1/2 relative bg-slate-200">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')" }}
        ></div>
        
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="bg-[#1e3a8a] text-white p-2 rounded-lg font-bold text-2xl flex items-center justify-center w-12 h-12">
            N
          </div>
          <div className="text-[#1e3a8a] font-bold text-xl leading-tight">
            NEXUS<br/><span className="text-sm font-normal tracking-widest text-gray-800">UNIVERSITY</span>
          </div>
        </div>

        <div className="absolute top-1/3 left-0 bg-[#5b8bc6]/90 backdrop-blur-sm text-white p-8 pr-16 rounded-r-xl max-w-md shadow-lg border-l-4 border-blue-400">
          <p className="text-lg mb-1 opacity-90">Welcome to</p>
          <h1 className="text-3xl font-bold mb-4 tracking-wide">NEXUS UNIVERSITY PORTAL</h1>
          <p className="text-sm mb-4 opacity-90">Your single access point to campus services.</p>
          <div className="flex items-center text-sm font-medium">
            <Lock size={16} className="mr-2" /> Secure
          </div>
        </div>
      </div>

      {/* Balabhaga (Right Side - Login Form) */}
      <div className="w-full md:w-1/2 bg-[#f0f4f8] flex flex-col justify-center items-center p-8 relative">
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-md overflow-hidden border border-gray-100">
          
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign In to Your Account</h2>

            {/* Error Message පෙන්වීම */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">University ID / Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="e.g., student@nexus.edu"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                  />
                  <EyeOff className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" size={18} />
                </div>
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-sm text-gray-500 hover:text-[#1e5baf] transition-colors">Forgot Password?</a>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#1e5baf] text-white py-2.5 rounded-lg hover:bg-blue-800 transition duration-200 flex justify-center items-center gap-2 font-medium mt-2 disabled:opacity-70"
              >
                {loading ? 'Signing In...' : 'Sign In'} <ArrowRight size={18} />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-3 border-t border-gray-100 bg-[#f8fafc]">
            <button
              onClick={() => setRole('admin')}
              type="button"
              className={`flex items-center justify-center gap-2 py-4 text-sm transition-colors ${role === 'admin' ? 'bg-blue-50 text-[#1e5baf] border-b-2 border-[#1e5baf] font-semibold' : 'text-gray-500 hover:bg-gray-100 font-medium'}`}
            >
              <ShieldCheck size={18} /> Admin
            </button>
            <button
              onClick={() => setRole('student')}
              type="button"
              className={`flex items-center justify-center gap-2 py-4 text-sm transition-colors ${role === 'student' ? 'bg-blue-50 text-[#1e5baf] border-b-2 border-[#1e5baf] font-semibold' : 'text-gray-500 hover:bg-gray-100 font-medium'}`}
            >
              <GraduationCap size={18} /> Student
            </button>
            <button
              onClick={() => setRole('lecturer')}
              type="button"
              className={`flex items-center justify-center gap-2 py-4 text-sm transition-colors ${role === 'lecturer' ? 'bg-blue-50 text-[#1e5baf] border-b-2 border-[#1e5baf] font-semibold' : 'text-gray-500 hover:bg-gray-100 font-medium'}`}
            >
              <Presentation size={18} /> Lecturer
            </button>
          </div>
        </div>

        <p className="absolute bottom-6 text-xs text-gray-400 font-medium">
          © 2026 NEXUS - All rights reserved.
        </p>
      </div>
    </div>
  );
}