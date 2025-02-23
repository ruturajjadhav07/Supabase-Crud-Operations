import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Supabase from "../Config/Supabase";

const Read = () => {
  const [getData, setGetData] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="container">
      <h2 className="my-4 text-center">User List</h2>

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
