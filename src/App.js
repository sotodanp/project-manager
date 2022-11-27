import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import ProjectDetails from './pages/projectDetails/ProjectDetails'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import OnlineUsers from './components/onlineUsers/OnlineUsers'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <>
          {user && <Sidebar />}
          <div className='container'>
            <Navbar />
            <Routes>

              <Route path="/" element={user ? <Dashboard /> : <Navigate to='/login' />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' />} />
              <Route path="/create" element={user ? <Create /> : <Navigate to='/login' />} />
              <Route path="/projects/:id" element={user ? <ProjectDetails /> : <Navigate to='/login' />} />
              <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
          </div>
          {user && <OnlineUsers />}
        </>
      )}
    </div>
  );
}

export default App
