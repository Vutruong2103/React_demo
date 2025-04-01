import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
const items = [...Array(33).keys()];

function Items({ currentItems }) {
  return (
    <div className="items">
    {currentItems && currentItems.map((item) => (
      <div>
        <h3>Item #{item}</h3>
      </div>
    ))}
      </div>
  );
}

const PaginatedItems = ({ itemsPerPage }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

const TablePaginate = (props) => {
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
            <PaginatedItems itemsPerPage={4} />
        </>
    )
}

export default TablePaginate;