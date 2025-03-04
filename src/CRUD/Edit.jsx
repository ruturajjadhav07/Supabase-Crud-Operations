import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Supabase from "../Config/Supabase";

const Edit = () => {
  const [data, setData] = useState("");

  let navigate = useNavigate();

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const submit = () => {};
  const back = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container col-md-4">
        <form className="shadow p-4 rounded">
          <h1 className="text-center text-muted">Edit Details</h1>
          <div className="form-group">
            <input
              className="form-control my-2"
              placeholder="Username"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              placeholder="Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              placeholder="Instagram"
              required
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-primary w-100"
            type="button"
            onClick={submit}
          >
            Submit
          </button>
          <button
            className="btn btn-secondary w-100 my-2"
            type="button"
            onClick={back}
          >
            Back
          </button>
        </form>
        {data}
      </div>
    </div>
  );
};

export default Edit;
