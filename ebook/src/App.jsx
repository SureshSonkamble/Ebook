import axios from 'axios'
import {useEffect, useState } from "react";
function App() {
const [data, SetData]=useState([])
  const [search, setSearch] = useState("");
  let api=()=>{

    axios.get("https://codingshika.com/MYAPP/API/ebook.php?nm=")
    .then(res=>{
      SetData(res.data.posts.post)
      console.log(res.data)
    })
  }
//onload 
     useEffect(()=>{
     api()
     },[])
     const filteredBooks = data.filter((data) =>
    data.NAME.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
        <div className="container my-4">
      <h3 className="text-center mb-4 fw-bold">📚 E-Books Library</h3>

      {/* Search Box */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search book..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {filteredBooks.map((data) => (
          <div className="col-md-4" key={data.ID}>
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img
                src={data.IMG}
                className="card-img-top p-3"
                alt={data.NAME}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{data.NAME}</h5>
              </div>
              <div className="card-footer bg-white border-0 text-center mb-3">
                <a
                  href={data.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-pill px-4"
                >
                  Read PDF
                </a>
              </div>
            </div>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <p className="text-center text-muted">No books found</p>
        )}
      </div>
    </div>    
     
    </>
  )
}

export default App
