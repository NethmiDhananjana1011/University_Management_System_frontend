import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import LecturerDashboard from './LecturerDashboard';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // ... tumcha aadhicha handleLogin code ithe theva ...
}

export default function App() {
  return (
    // Ithe aadhi <Router> hota, to kaun takla aahe. Fakt Routes theva.
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/lecturer" element={<LecturerDashboard />} />
    </Routes>
  );
}