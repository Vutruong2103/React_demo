//import tới biến instance 
import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}

const getAllUser = () => {
    return axios.get('api/v1/participant/all');
}

const putUpdateUser = (id, username, role, image) => {
    //submit data
    const data = new FormData();

    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}
const DeleteUser = (userid) => {
    return axios.delete('api/v1/participant', { data: { id: userid } }); //id là tên ở phỉa api, còn userid là biến lưu giá trị để gán cho id
}

const postLogin = (userEmail, userPassword) => {
    return axios.post('/api/v1/login', { email: userEmail, password: userPassword });
}

const postRegister = (userEmail, userPassword, userUsername) => {
    return axios.post('/api/v1/register', { email: userEmail, password: userPassword, username: userUsername });
}
// cach viet nay giong voi tren
// const postLogin = (email, password) =>{
//     return axios.post('/api/v1.login', {email, password});
// }

//file này export ra nhiều biến nên dùng {}
export { postCreateNewUser, getAllUser, putUpdateUser, DeleteUser, postLogin, postRegister }