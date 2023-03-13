import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './context/authContext';
import Main from './pages/Main';


function App() {
  return (
    <div className="App h-screen">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
