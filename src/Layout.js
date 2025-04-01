import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DasBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App></App>}>
                    <Route index element={<HomePage></HomePage>}></Route>
                    <Route path="User" element={<User></User>}></Route>

                </Route>
                {/* đường link từ sidebar tới manage-user */}
                <Route path="Admin" element={<Admin></Admin>}>
                    <Route index element={<DasBoard></DasBoard>}></Route>
                    <Route path="manage-user" element={<ManageUser></ManageUser>}></Route>
                </Route>

                <Route path="/login" element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>

            </Routes>

            {/* thanh thông báo */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            // theme="light"
            // transition={Bounce}
            />
        </>
    )
}
export default Layout;