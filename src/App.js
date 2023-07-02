
import './App.css';
import {useState, useEffect} from "react"
import axios from "axios"
import Pagination from './component/Pagination';

function App() {
  const[data, setData]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const[totalPosts, setTotalpost]=useState(0)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{setData(response.data)
    console.log(response.data)
    setTotalpost(response.data.length)}
    )
    .catch((error)=>{console.log(error)})
  },[])

  const lastPostIndex = currentPage + postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);


    const paginate =(pageNum)=>setCurrentPage(pageNum)
    const prevPage =(pageNum)=>setCurrentPage(currentPage-1)
    const nextPage =(pageNum)=>setCurrentPage(currentPage+1)
  
const showPagination = ()=>{
  return(
    <Pagination
    postsPerPage={postsPerPage}
    totalPosts={totalPosts}
    currentPage={currentPage}
    paginate={paginate}
    prevPage={prevPage}
    nextPage={nextPage}
    />
  )
}

showPagination();
  return (
    <>
<ul>
  {currentPosts.map((value,index)=>{return(
    <li  style={{listStyle:"none"}} key={index}>{index+1}. {value.title}</li>
  )})}
</ul>
<div>{showPagination()}</div>
    </>
  );
}

export default App;
