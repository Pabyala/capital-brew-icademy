import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import SigninUserPage from './pages/signin.user.page';
import SignupUserPage from './pages/signup.user.page';
import ForgotPasswordPage from './pages/forgot-password.page';
import AccountLayout from './pages/page-layout/account.layout';
import MainLayout from './pages/page-layout/main.layout';
import UnauthorizedPage from './pages/unauthorized.page';
import NotFoundPage from './pages/not-found.page';
import HomePage from './pages/home.page';
import LoadingPage from './pages/loading.page';
import BranchOptionPage from './pages/branch-option.page';
import MyOrders from './pages/my-orders';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        closeButton={false}
        autoClose={500}
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
        <Route path='/' element={<MainLayout/>}>
          <Route path="unauthorized" element={<UnauthorizedPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
          
          <Route path='/account' element={<AccountLayout/>}>
            <Route path="signin" element={<SigninUserPage />} />
            <Route path="signup" element={<SignupUserPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          
          <Route path="/home" element={<HomePage />} />
          <Route path="/my-order" element={<MyOrders />} />
          <Route path="/cb-branch" element={<BranchOptionPage />} />
          <Route path="loading" element={<LoadingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;