import axios from "axios";
import { useEffect, useState } from "react";

interface abc {
  id: number;
  title: string;
  body: string;
}

const ApiGet = () => {
  const [info, setInfo] = useState<abc[]>([]); // Correct initialization for an array of posts
  const [matched, setMatched] = useState<abc | null>(null); // Updated to store a single object, not an array

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setInfo(res.data))
      .catch((error) => console.error(error)); // Error handling added
  }, []); // Added dependency array to avoid infinite requests

  const showitem = (id: number) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((val) => {
      setMatched(val.data); // Set the matched post object
    });
  };

  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {info.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.title}</td>
              <td>{val.body}</td>
              <td>
                <button
                  onClick={() => showitem(val.id)}
                  className="btn btn-success" // Corrected className
                >
                  Show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="card">
        <h1>User Information:</h1>
        <div className="card-body">
          {matched ? (
            <div>
              <p>Id: {matched.id}</p>
              <p>Title: {matched.title}</p>
              <p>Body: {matched.body}</p>
            </div>
          ) : (
            <p>No user information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiGet;
