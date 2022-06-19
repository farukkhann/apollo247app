



import { useState } from "react";
import axios from "axios";

export const AddData = () => {
  const [data, setData] = useState({});

  function handlechange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post("http://localhost:8080/products", data).then(alert("sent"));
  };
  return (
    <form onSubmit={handlesubmit} className="addstudent">
      <div>
        title:{" "}
        <input
          onChange={handlechange}
          type="text"
          name="title"
          className="title"
          placeholder="enter title"
        />
      </div>
      <div>
        {" "}
        Manfacturer:
        <input
          onChange={handlechange}
          type="text"
          name="Manfacturer"
          className="Manfacturer"
          placeholder="Manfacturer"
        />
      </div>
      <div>
        {" "}
        size:
        <input
          onChange={handlechange}
          type="text"
          name="size"
          className="size"
          placeholder="size"
        />
      </div>

      <div>
        description{" "}
        <input
          onChange={handlechange}
          type="text"
          name="description"
          className="description"
          placeholder="description"
        />
      </div>
      <div>
        type:{" "}
        <input
          onChange={handlechange}
          type="text"
          name="type"
          placeholder="type returnable or not"
        />{" "}
      </div>
      <div>
        Expires:{" "}
        <input
          onChange={handlechange}
          type="text"
          name="exires_on"
          placeholder="expires on"
        />{" "}
      </div>
      <div>
        <label htmlFor="">country</label>
        <input type="text" name="country_origin" id="" placeholder="country origin" onChange={handlechange} />
      </div>
      <div> 
      <label htmlFor="">manfacturer address</label>

         <input type="text" name="Manfacturer_address" id="" placeholder="manfacturing address" onChange={handlechange} />
      </div>
      <div>
      <label htmlFor="">price</label>
      <input type="Number" placeholder="price" onChange={handlechange} name="price" id="" />
      </div>
      <div>
        <label htmlFor="">category</label>
      <input type="text"  name="category" id="" onChange={handlechange} placeholder="category" />
      </div>
      <div>
        <label htmlFor="">image</label>
      <input type="text"  name="image" id="" onChange={handlechange} placeholder="image" />
      </div>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
};
