import React from "react";
import { Form, Button } from "react-bootstrap";
import Formik, { useFormik } from "formik";
import * as Yup from "yup";
import DisplayStudent from "./DisplayProducts"
export default function AddProduct() {
  const ValidateProduct = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    price: Yup.string().required("Product price is required"),
  });
  const Formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    onSubmit: (values) => {
      console.log(values);
      
      fetch('http://localhost:5000/api/addProduct',{
          method:"POST",
          headers:{
              "content-type" : "application/json"
          },
          body: JSON.stringify(values) 
      })
    },
    validationSchema: ValidateProduct,
  });
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <Form className="shadow-lg p-3" onSubmit={Formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product"
              name="name"
              value={Formik.name}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.touched.name ? (
              <span style={{ color: "red" }}>
                {" "}
                {Formik.errors.name ? Formik.errors.name : ""}{" "}
              </span>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              name="price"
              value={Formik.price}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.touched.price ? (
              <span style={{ color: "red" }}>
                {Formik.errors.price ? Formik.errors.price : ""}
              </span>
            ) : (
              ""
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
