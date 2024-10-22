import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Admin/LoginPage';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import StudentPortal from './pages/Student/StudentPortal';
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentPortal />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
