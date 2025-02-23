import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Supabase from "../Config/Supabase";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    instagram: "",
  });

  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const Add = async (e) => {
    e.preventDefault();

    const { name, email, number, instagram } = form;

    const { data, error } = await Supabase.from("users").insert([
      {
        name,
        email,
        number,
        instagram,
      },
    ]);

    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      //   console.log("User added:", data);
      setForm({
        name: "",
        email: "",
        number: "",
        instagram: "",
      });
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container col-md-4">
        <h1 className=" text-center text-muted">Add User</h1>
        <form onSubmit={Add}>
          <div className="form-group my-2">
            <input
              className="form-control"
              placeholder="Enter Name"
              type="text"
              name="name"
              value={form.name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <input
              className="form-control"
              placeholder="Enter Email"
              type="text"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <input
              className="form-control"
              placeholder="Enter number"
              type="text"
              name="number"
              value={form.number}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <input
              className="form-control"
              placeholder="Enter Instagram"
              type="text"
              name="instagram"
              value={form.instagram}
              required
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Add
          </button>
        </form>

        {error && <div className="alert alert-danger mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default Create;
