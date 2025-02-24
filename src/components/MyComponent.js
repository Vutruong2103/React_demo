import React, { useState } from "react";
import AddUserInpor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "hoi dan it", age: "30" },
//             { id: 2, name: "quangvu", age: "20" },
//             { id: 3, name: "huy", age: "10" }
//         ]
//     }
//     //them nguoi dung
//     handleAddNewUser = (userObj) => {
//         console.log("check data: ", userObj)
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     //xoa 
//     handleDeleteUser = (userId) => {//b1
//         let listUserClone = this.state.listUsers;
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUserClone
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <AddUserInpor
//                     handleAddNewUser={this.handleAddNewUser}
//                 ></AddUserInpor>
//                 <hr></hr>
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}//b2
//                 ></DisplayInfor>
//             </div>
//         );
//     }
// }
const MyComponent = (props) => {
    //useState trả về 1 mảng nên dùng []
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "hoi dan it", age: "30" },
            { id: 2, name: "quangvu", age: "20" },
            { id: 3, name: "huy", age: "10" }
        ]
    )

    //them nguoi dung
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }
    //xoa 
    const handleDeleteUser = (userId) => {//b1
        let listUserClone = listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUsers([listUserClone])
        // this.setState({
        //     listUsers: listUserClone
        // })
    }
    //component cua react
    return (
        <div>
            <AddUserInpor
                handleAddNewUser={handleAddNewUser}
            ></AddUserInpor>
            <hr></hr>
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}//b2
            ></DisplayInfor>
        </div>
    )
}
export default MyComponent;