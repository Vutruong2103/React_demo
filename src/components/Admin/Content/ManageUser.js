import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect, useState } from 'react';
import { getAllUser } from '../../../services/apiService';
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TablePaginate from "./TablePaginate";
//file cha lấy link của file con để xài file con 
const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setshowModalViewUser] = useState(false);
    const [showModalDeleteUser, setshowModalDeleteUser] = useState(false);
    //cục data để hiển thị
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [listUser, setListUser] = useState([])
    //chạy sau hàm return để hạn chế tối đa lỗi 
    useEffect(() => {
        fetchListUsers();
    }, []);
    //gọi api
    const fetchListUsers = async () => {
        //fet data về
        let res = await getAllUser();
        if (res.EC === 0) {
            //cập nhật lại state của react
            setListUser(res.DT)
        }
    }
    const handleClickBtnUpdate = (user) => {
        //mở modal ra
        setShowModalUpdateUser(true);
        //cập nhật data update
        setDataUpdate(user);
    }
    const handleClickBtnView = (user) => {
        //mở modal ra
        setshowModalViewUser(true);
        setDataUpdate(user);
    }
    //reset modal
    const resetUpdateData = () => {
        setDataUpdate({});
    }
    const handleClickBtnDelete = (user) =>{
        setshowModalDeleteUser(true);
        setDataDelete(user);//cập nhật biến dataDelete để hiển thị 
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                manage
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}> <FcPlus></FcPlus>Add new users</button>
                </div>
                <div className="table-users-container">
                    {/* có ds người dùng */}
                    <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    ></TableUser>
                    <TablePaginate></TablePaginate>
                </div>
                {/* fetchListUsers gọi lại api, cha gọi con */}
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchListUsers={fetchListUsers}></ModalCreateUser>
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                ></ModalUpdateUser>
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setshowModalViewUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                ></ModalViewUser>
                <ModalDeleteUser
                show={showModalDeleteUser} 
                setShow={setshowModalDeleteUser}
                dataDelete={dataDelete} //cập nhật xong bỏ vào đây
                fetchListUsers={fetchListUsers} //cap nhat lai danh sach khi da xoa 
                ></ModalDeleteUser>
            </div>
        </div>

    )
}
export default ManageUser;