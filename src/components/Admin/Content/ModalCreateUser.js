import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService';


//thêm mới người dùng trong hộp thoại 
const ModalCreateUser = (props) => {
    //lấy dữ liệu vào props sử dụng
    const { show, setShow} = props;
    //setshow lấy từ props từ thèn cha setShowModalCreateUser cập nhật lại biến
    const handleClose = () => {
        setShow(false)
        //cập nhật lại biến thành rỗng khi nhấn X
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");


    //cập nhật ảnh thành urlurl
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0]);
        } else {
            //setPreviewImage("");
        }
    }
    //validate email
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    //ktra email, passwordword
    const handleSubmitCreateUser = async () => {
        //validate
        const inValidEmail = validateEmail(email);
        if (!inValidEmail) {
            toast.error("invalid email")
            return;
        }
        if (!password) {
            toast.error("invalid password")
            return;
        }


        let data = await postCreateNewUser(email, password, username, role, image);
        
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            //từ thèn con gọi ngược lên thằng cha ManageUser 
            await props.fetchListUsers();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow} >
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                            <option selected value="USER">USERS</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>
                    <div className='col-md-12'>
                        {/* htmlFor='lableUpload' sẽ lấy thuộc tính của id='lableUpload' */}
                        <label className='form-lable lable-upload' htmlFor='lableUpload'>
                            <FcPlus></FcPlus> Upload File Image</label>
                        <input type='file' id='lableUpload' hidden onChange={(event) => handleUploadImage(event)}></input>
                    </div>
                    <div className='col-md-12 img-preview'>
                        {previewImage ? <img src={previewImage}></img> : <span>Preview Image</span>}
                    </div>
                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser;