import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Supabase from "../Config/Supabase";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [getData, setGetData] = useState([]);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await Supabase.from("users").select("*");
      if (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } else {
        setGetData(data);
      }
    };
    fetchData();
  }, []);

  const Add = () => {
    navigate("/create");
  };

  const handleDelete = async (id) => {
    const { error } = await Supabase.from("users").delete().eq("id", id);
    if (error) {
      console.error("Error deleting data:", error.message);
      setError(error.message);
    } else {
      setGetData((prevData) => prevData.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container fs-5">
      <div className="d-flex justify-content-between mt-2">
        <h2 className="text-center">User List</h2>
        <button className="btn btn-primary mb-2" onClick={Add}>Add</button>
      </div>

      {error && <div className="alert alert-danger">Error: {error}</div>}

      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col">SrNo</th>
            <th scope="col">Created At</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Instagram</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((item, index) => (
            <tr key={item.id} className="text-center">
              <td>{index + 1}</td>
              <td>{new Date(item.created_at).toLocaleString()}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>
                {item.instagram ? (
                  <a
                    href={`https://www.instagram.com/${item.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.instagram}
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                <i
                  className="bi bi-trash-fill btn"
                  onClick={() => handleDelete(item.id)}
                  style={{ color: "red" }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
