import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, FileText, Download, Upload, Plus, Clock, FileUp, X, CheckCircle } from 'lucide-react';

export default function SubjectPage() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  
  const [userRole, setUserRole] = useState('student'); // 'student' හෝ 'lecturer'

  // Dummy Data - Notes සහ Assignments සඳහා
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Lecture 01 - Introduction', type: 'PDF', date: '2026-10-01' },
    { id: 2, title: 'Lecture 02 - Core Concepts', type: 'PPTX', date: '2026-10-08' },
  ]);

  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Assignment 01 - Basic Theory', dueDate: '2026-10-20', status: 'Pending' }
  ]);

  // අලුත් දේවල් දාන්න Modals වල States
  const [showMaterialModal, setShowMaterialModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    // ලොග් වෙලා ඉන්න කෙනාගේ Role එක අඳුරගැනීම
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role) {
      setUserRole(user.role);
    }
  }, []);

  // Lecturer - අලුත් Note එකක් දැමීම
  const handleAddMaterial = (e) => {
    e.preventDefault();
    const newMaterial = {
      id: materials.length + 1,
      title: newTitle,
      type: 'PDF',
      date: new Date().toISOString().split('T')[0]
    };
    setMaterials([...materials, newMaterial]);
    setNewTitle('');
    setShowMaterialModal(false);
  };

  // Lecturer - අලුත් Assignment එකක් දැමීම
  const handleAddAssignment = (e) => {
    e.preventDefault();
    const newAssign = {
      id: assignments.length + 1,
      title: newTitle,
      dueDate: newDate,
      status: 'Pending'
    };
    setAssignments([...assignments, newAssign]);
    setNewTitle('');
    setNewDate('');
    setShowAssignmentModal(false);
  };

  // Student - Assignment Submit කිරීම
  const handleStudentSubmit = (id) => {
    alert("File Uploading Interface will open here!");
    // මෙතනදී Assignment එක Submit කරාම Status එක වෙනස් කරනවා
    const updated = assignments.map(a => 
      a.id === id ? { ...a, status: 'Submitted' } : a
    );
    setAssignments(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Header Section */}
      <div className="bg-[#0f172a] text-white py-12 px-6 shadow-md relative">
        <button 
          onClick={() => navigate(-1)} // ආපසු යන්න
          className="absolute top-6 left-6 flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm font-medium bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
        >
          <ChevronLeft size={18} /> Back
        </button>
        <div className="max-w-5xl mx-auto mt-6">
          <span className="bg-blue-600 text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold mb-4 inline-block">
            {userRole === 'lecturer' ? 'Lecturer View' : 'Student View'}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{subjectId}</h1>
          <p className="text-blue-200 text-lg">Course Materials and Assignments Dashboard</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Course Materials Section (වම් පැත්ත) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FileText className="text-blue-600" /> Course Materials
            </h2>
            {userRole === 'lecturer' && (
              <button 
                onClick={() => setShowMaterialModal(true)}
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <Plus size={16} /> Add Material
              </button>
            )}
          </div>

          <div className="space-y-4">
            {materials.map((mat) => (
              <div key={mat.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-lg text-red-500 font-bold text-xs">
                    {mat.type}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{mat.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">Uploaded on: {mat.date}</p>
                  </div>
                </div>
                {/* Student ට සහ Lecturer ට දෙන්නටම Download කරන්න පුළුවන් */}
                <button className="text-gray-400 hover:text-blue-600 transition-colors p-2 bg-gray-50 rounded-full hover:bg-blue-50">
                  <Download size={20} />
                </button>
              </div>
            ))}
            {materials.length === 0 && <p className="text-gray-500 text-sm">No materials uploaded yet.</p>}
          </div>
        </div>

        {/* Assignments Section (දකුණු පැත්ත) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Clock className="text-orange-500" /> Assignments
            </h2>
            {userRole === 'lecturer' && (
              <button 
                onClick={() => setShowAssignmentModal(true)}
                className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors"
              >
                <Plus size={16} /> Add
              </button>
            )}
          </div>

          <div className="space-y-4">
            {assignments.map((assign) => (
              <div key={assign.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">{assign.title}</h3>
                <p className="text-xs text-red-500 font-medium mb-4 flex items-center gap-1">
                  Due: {assign.dueDate}
                </p>
                
                {userRole === 'student' ? (
                  assign.status === 'Submitted' ? (
                    <div className="w-full bg-green-50 text-green-700 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 border border-green-200">
                      <CheckCircle size={16} /> Submitted
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleStudentSubmit(assign.id)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <FileUp size={16} /> Submit Work
                    </button>
                  )
                ) : (
                  // Lecturer View of Assignment
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                    View Submissions
                  </button>
                )}
              </div>
            ))}
            {assignments.length === 0 && <p className="text-gray-500 text-sm">No active assignments.</p>}
          </div>
        </div>

      </div>

      {/* MODAL: Lecturer ට Material Add කරන්න */}
      {showMaterialModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">Add New Material</h3>
              <button onClick={() => setShowMaterialModal(false)} className="text-gray-500 hover:text-gray-800"><X size={20}/></button>
            </div>
            <form onSubmit={handleAddMaterial}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Material Title</label>
                <input 
                  type="text" required value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="e.g., Lecture 03 - Advanced Topic"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload File</label>
                <input type="file" required className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">Upload Material</button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Lecturer ට Assignment Add කරන්න */}
      {showAssignmentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">Create Assignment</h3>
              <button onClick={() => setShowAssignmentModal(false)} className="text-gray-500 hover:text-gray-800"><X size={20}/></button>
            </div>
            <form onSubmit={handleAddAssignment}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Assignment Title</label>
                <input 
                  type="text" required value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="e.g., Assignment 02"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input 
                  type="date" required value={newDate} onChange={(e) => setNewDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600">Create Assignment</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}