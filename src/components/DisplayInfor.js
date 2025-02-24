import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'
// class DisplayInfor extends React.Component {

//     //render ra html
//     render() {
//         //destructuring array/obj
//         const { listUsers } = this.props;//object
//         return (
//             <div className="display-infor-container">
//                 {true && //sau && là khối html nếu đúng thì khối htlm thực hiện hiện
//                 //b3
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>my name is {user.name} </div>
//                                         <div>age {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr></hr>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    //destructuring array/obj
    const { listUsers } = props;//object

    //setShowHidelistUse bat dau bang set, cập nhật giá trị của isShowHidelistUser/ công cụ giúp cập nhật biến state
    const[isShowHidelistUser, setShowHidelistUser] = useState(true);//gán giá trị khởi tạo cho nó HOOK

    const handleShowHideListUser = () =>{
        setShowHidelistUser(!isShowHidelistUser);
    }
    useEffect(
        () =>{
        if(listUsers.length === 0){
            alert('You delete all the users')
        }
    },[listUsers]
    );
    return (
        <div className="display-infor-container">
            <div onClick={() => handleShowHideListUser()}>
                {isShowHidelistUser === true ? "hide list users" : "Show List users"}
            </div>

            {isShowHidelistUser && //sau && là khối html nếu đúng thì khối htlm thực hiện hiện
                //b3
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>my name is {user.name} </div>
                                    <div>age {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;