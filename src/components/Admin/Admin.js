import SideBar from "./SideBar";
import './Admin.scss'; //bỏ đường dẫn tới file này để dùng csscss
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from 'react-router-dom';


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                {/* truyền collapsed qua cho SideBar để bắt và thực hiện*/}
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)}></FaBars>
                </div>
                <div className="admin-main">
                    <Outlet></Outlet>
                </div>

            </div>
 
        </div>
    )
}
export default Admin;