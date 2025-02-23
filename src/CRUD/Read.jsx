import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
        // console.log("Fetched Data:", data);
        setGetData(data);
      }
    };

    fetchData();
  }, []);

  const Add = (e) => {
    e.preventDefault();
    navigate("/create");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-2">
        <h2 className=" text-center">User List</h2>

        <h2 className="btn btn-primary" onClick={Add}>
          Add
        </h2>
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
          </tr>
        </thead>
        <tbody>
          {getData.map((item, index) => (
            <tr key={item.id || index} className="text-center">
              <td>{index + 1}</td>
              <td>{new Date(item.created_at).toLocaleString().toString()}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>
                {item.instagram ? (
                  <a
                    href={`https://www.instagram.com/${item.instagram}`}
                    target="_blank"
                  >
                    {item.instagram}
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
