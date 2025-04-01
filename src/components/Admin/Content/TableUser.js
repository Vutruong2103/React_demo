
const TableUser = (props) => {
    //cập nhật listUser. để render ra mảng màn hình thì tạo ra state và khi có data dom thì gọi api
    //const {listUser} = props.listUser;
    const { listUser } = props;


    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* item tượng trưng cho từng phần tử mà muốn lặp bên trong cái arr, index chỉ ra phần tử này là phần tử bao nhiêu trong cái mảng đang lặp  */}
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            // cho cái key kh bị trùng với index
                            <tr key={`table-users-${index}`} >
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className='btn btn-secondary' onClick={() => props.handleClickBtnView(item)}>View</button>
                                    <button className='btn btn-warning mx-3' onClick={() => props.handleClickBtnUpdate(item)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => props.handleClickBtnDelete(item)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                    }
                    {listUser && listUser.length > 0 &&
                        <tr>
                            {/* colSpan={'55'} 4 cột thành 1 */}
                            <td colSpan={'5'} >Not found data</td>
                        </tr>}

                </tbody>
            </table>
        </>
    )
}

export default TableUser;