import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
export default function DisplayProducts() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/displayProducts")
      .then((res) => res.json())
      .then((res) => {setProduct(res.data)
    console.log(res.data)});
  }, []);
  function handleDelete(id){
      const obj = {id};
    fetch("http://localhost:5000/api/deleteProduct",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(res=> setProduct(res.data))
  }
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product ? (
              product.map((itm, indx) => {
                return (
                  <tr>
                    <td>{itm.name}</td>
                    <td>{itm.price}</td>
                    <td>
                      <Button className="btn-danger" onClick={()=>{handleDelete(itm._id)}}>Delete</Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
