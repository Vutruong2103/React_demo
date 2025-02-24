import React, { useState } from "react";

// class AddUserInpor extends React.Component{
//         //state cach react kiem soat data cua component
//         state = {
//             name: '',
//             address: 'quang nam',
//             age: ''
//         };

//         handleOnChangInput = (event) => {
//             this.setState({
//                 name: event.target.value //target la o input, value gia tri cua input
//             })
//         }
//         handleOnChangAge = (event) => {
//             this.setState({
//                 age: event.target.value //target la o input, value gia tri cua input
//             })
//         }

//         handleOnSubmit = (event) => {
//             event.preventDefault();//ngăn chặn việc load lại trang
//             //console.log(this.state)
//             this.props.handleAddNewUser({
//                 id: Math.floor((Math.random()*100)+1) + '-random',
//                 name: this.state.name,
//                 age: this.state.age
//             });
//         }
//     render(){
//         return(
//             <div>
//                 my name is {this.state.name} I'm {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name: </label>
//                     <input
//                         type="text"
//                         value={this.state.name}
//                         onChange={(event) => this.handleOnChangInput(event)}
//                     ></input>
//                     <button>Submit</button>

//                     <label>Your age: </label>
//                     <input
//                         type="text"
//                         value={this.state.age}
//                         onChange={(event) => this.handleOnChangAge(event)}
//                     ></input>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInpor = (props) => {
    // state = {
    //             name: '',
    //             address: 'quang nam',
    //             age: ''
    //         };
    const [name, setName] = useState('');
    const [address, setAddress] = useState('quang nam');
    const [age, setAge] = useState('');

    const handleOnChangInput = (event) => {
        setName(event.target.value)
        // this.setState({
        //     name: event.target.value //target la o input, value gia tri cua input
        // })
    }
    const handleOnChangAge = (event) => {
        setAge(event.target.value)
        // this.setState({
        //     age: event.target.value //target la o input, value gia tri cua input
        // })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();//ngăn chặn việc load lại trang
        //console.log(this.state)
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }
    return (
        <div>
            my name is {name} I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => handleOnChangInput(event)}
                ></input>
                <button>Submit</button>

                <label>Your age: </label>
                <input
                    type="text"
                    value={age}
                    onChange={(event) => handleOnChangAge(event)}
                ></input>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInpor;