import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginUserPage from './pages/login.user.page';
import { ToastContainer, Zoom } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        closeButton={false}
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Routes>
        <Route path="login" element={<LoginUserPage />} />
      </Routes>
    </>
  );
}

export default App;