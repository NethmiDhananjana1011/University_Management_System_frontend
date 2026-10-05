import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Book, ChevronLeft, Lock, Unlock, Search, X } from 'lucide-react';

// විශ්වවිද්‍යාලයේ පීඨ සහ ඒවාට අදාළ දෙපාර්තමේන්තු
const facultyConfig = {
  technology: {
    name: 'Faculty of Technology',
    departments: ['Information & Communication Technology', 'Biosystems Technology']
  },
  applied: {
    name: 'Faculty of Applied Sciences',
    departments: ['Biological Sciences', 'Physical Sciences', 'Mathematical Sciences', 'Chemical Sciences']
  },
  arts: {
    name: 'Faculty of Arts & Culture',
    departments: ['Social Sciences', 'Languages', 'Geography', 'Economics']
  },
  islamic: {
    name: 'Faculty of Islamic Studies & Arabic Language',
    departments: ['Islamic Studies', 'Arabic Language']
  },
  management: {
    name: 'Faculty of Management & Commerce',
    departments: ['Management', 'Accountancy & Finance', 'Marketing', 'Information Systems']
  },
  engineering: {
    name: 'Faculty of Engineering',
    departments: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Computer Engineering']
  }
};

// විෂයයන් දත්ත ගබඩාව (ඔබ ලබාදුන් දත්ත ඇතුළත්ව)
const subjectsData = {
  technology: {
    'Information & Communication Technology': {
      'Year 1': {
        'Semester I': [
          { code: 'CIS11011', name: 'Essential of ICT and PC Application' },
          { code: 'SWT11012', name: 'Fundamental of Programming' },
          { code: 'CIS11022', name: 'Database Design' },
          { code: 'CIS11032', name: 'Logic Designing and Computer Organization' },
          { code: 'CIS11051', name: 'Practical for Database Design' },
          { code: 'SWT11022', name: 'Practical for Fundamental of Programming' },
          { code: 'CIS11042', name: 'Practical for Essential of ICT and PC Application' },
          { code: 'CMS11012', name: 'Mathematics for ICT' },
          { code: 'CMS11022', name: 'English I' }
        ]
      }
    },
    'Biosystems Technology': {
      'Year 1': {
        'Semester I': [
          { code: 'BSE 11022', name: 'Hydrology and Meteorology' },
          { code: 'BSE 11031', name: 'Mathematics for Technology' },
          { code: 'AAT 11022', name: 'Introduction to Fisheries' },
          { code: 'AEE 11012', name: 'Principles of Economics' }
        ]
      }
    }
  }
};

export default function FacultyPage() {
  const { facultyId } = useParams();
  const navigate = useNavigate();
  
  const faculty = facultyConfig[facultyId];
  
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  
  const [subjects, setSubjects] = useState([]);
  
  // Enrollment Key Modal State
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [enrollmentKey, setEnrollmentKey] = useState('');
  const [error, setError] = useState('');

  // Dropdowns වලින් දත්ත තෝරන විට අදාළ විෂයයන් Load කිරීම
  useEffect(() => {
    if (selectedDept && selectedYear && selectedSemester) {
      const deptData = subjectsData[facultyId]?.[selectedDept];
      const yearData = deptData?.[selectedYear];
      const semData = yearData?.[selectedSemester];
      
      setSubjects(semData || []);
    } else {
      setSubjects([]);
    }
  }, [selectedDept, selectedYear, selectedSemester, facultyId]);

  if (!faculty) {
    return <div className="p-10 text-center">Faculty Not Found</div>;
  }

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setEnrollmentKey('');
    setError('');
    setShowKeyModal(true);
  };

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    
    // Testing සඳහා Enrollment Key එක '12345' ලෙස සකසා ඇත.
    if (enrollmentKey === '12345') {
      setShowKeyModal(false);
      // මීළඟට අපි හදන Subject Page එකට යොමු කිරීම (Course Material / Assignments සඳහා)
      navigate(`/subject/${selectedSubject.code.replace(/\s+/g, '')}`); 
    } else {
      setError('Invalid Enrollment Key. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Header section */}
      <div className="bg-blue-950 text-white py-12 px-6 shadow-md relative">
        <button 
          onClick={() => navigate('/dashboard')}
          className="absolute top-6 left-6 flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm font-medium bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
        >
          <ChevronLeft size={18} /> Back to Dashboard
        </button>
        <div className="max-w-5xl mx-auto text-center mt-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{faculty.name}</h1>
          <p className="text-blue-200">Select your Department, Year, and Semester to view available course modules.</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              <option value="">-- Select Department --</option>
              {faculty.departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Academic Year</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              disabled={!selectedDept}
            >
              <option value="">-- Select Year --</option>
              {['Year 1', 'Year 2', 'Year 3', 'Year 4'].map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Semester</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              disabled={!selectedYear}
            >
              <option value="">-- Select Semester --</option>
              {['Semester I', 'Semester II'].map(sem => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Subjects Display Section */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        {selectedDept && selectedYear && selectedSemester && (
          <div className="mb-6 border-b border-gray-200 pb-4 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Course Modules</h2>
              <p className="text-gray-500 text-sm mt-1">{selectedDept} • {selectedYear} • {selectedSemester}</p>
            </div>
            <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
              {subjects.length} Subjects Found
            </div>
          </div>
        )}

        {subjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjects.map((subject, index) => (
              <div 
                key={index} 
                onClick={() => handleSubjectClick(subject)}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition-all flex items-start gap-4 group"
              >
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Book size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{subject.code}</h4>
                  <p className="text-sm text-gray-600 mt-1">{subject.name}</p>
                </div>
                <div className="text-gray-400 group-hover:text-blue-600">
                  <Lock size={18} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          selectedDept && selectedYear && selectedSemester && (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200 border-dashed">
              <Search className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-gray-700">No subjects found</h3>
              <p className="text-gray-500 mt-1">Please check back later or select a different semester.</p>
            </div>
          )
        )}
      </div>

      {/* Enrollment Key Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="bg-blue-950 p-6 text-white relative">
              <button 
                onClick={() => setShowKeyModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-800 p-2 rounded-lg">
                  <Lock size={20} className="text-blue-200" />
                </div>
                <h3 className="font-bold text-lg">Course Enrollment</h3>
              </div>
              <p className="text-blue-200 text-sm">{selectedSubject?.code} - {selectedSubject?.name}</p>
            </div>
            
            <form onSubmit={handleEnrollmentSubmit} className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Enrollment Key</label>
                <input 
                  type="password"
                  value={enrollmentKey}
                  onChange={(e) => {
                    setEnrollmentKey(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter module key provided by lecturer"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    error ? 'border-red-300 focus:ring-red-200 bg-red-50' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'
                  }`}
                  required
                />
                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                <p className="text-xs text-gray-500 mt-2">Hint for testing: use <strong>12345</strong></p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => setShowKeyModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Unlock size={18} /> Enroll Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}