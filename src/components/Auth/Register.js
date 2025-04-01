import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";


const Register = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const navigate = useNavigate();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSignUp = async () => {
        const inValidEmail = validateEmail(email);
        if (!inValidEmail) {
            toast.error("invalid email")
            return;
        }
        if (!password) {
            toast.error("invalid password")
            return;
        }


        let data = await postRegister(email, password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <div className="Register-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button onClick={() => navigate('/login')}>Sign in</button>
            </div>
            <div className="title col-4 mx-auto">
                hoi dan it
            </div>
            <div className="welcom col-4 mx-auto">
                Truong Quang Vu
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email (*)</label>
                    <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="form-group pass-group">
                    <label>Password (*)</label>
                    <input type={isShowPassword ? "text" : "password"} className="form-control" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                    {isShowPassword ?
                        <span className="icons-eye" onClick={() => setIsShowPassword(false)}><VscEye></VscEye></span>
                        :
                        <span className="icons-eye" onClick={() => setIsShowPassword(true)}><VscEyeClosed></VscEyeClosed></span>
                    }
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <span className="forgot-password">Forgot password ?</span>
                <div>
                    <button className="btn-submit" onClick={() => handleSignUp()}>Sign Up</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate('/') }}> &#60;&#60; Go to home</span>
                </div>
            </div>
        </div>
    )
}
export default Register;