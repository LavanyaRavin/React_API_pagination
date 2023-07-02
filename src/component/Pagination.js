import React from "react";
import "./Pagination.css"

function Pagination(props) {
  const {
    postsPerPage,
    totalPosts,
    currentPage,
    paginate,
    prevPage,
    nextPage,
  } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{display:"flex", flexDirection:"row",justifyContent:"center", gap:"10px"}}>

    {currentPage !== 1 && (
        <li style={{listStyle:"none"}}>
          <button
            style={{ cursor: "pointer" }}
            type="primary"
            onClick={() => prevPage()}
          >
            Previos
          </button>
        </li>
      )}

    {pageNumbers.map((num)=>(
        <li style={{listStyle:"none"}} key={num}>
          <a
          href="#"
            style={{ cursor: "pointer" }}
            className="page-link"
            onClick={() => paginate(num)}
          >
            {num}
          </a>
        </li>
      ))}

    {pageNumbers.length!== currentPage && (
        <li style={{listStyle:"none"}}>
          <button
            style={{ cursor: "pointer" }}
            type="primary"
            onClick={() => nextPage()}
          >
            Next
          </button>
        </li>
      )}



    </div>
  );
}

export default Pagination;
