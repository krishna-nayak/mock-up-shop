import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import axios from "axios";

import { setProducts } from "../redux/actions/productActions.js";

import Container from "react-bootstrap/Container";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
        console.log("Err", err);
      });
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <Container>
      <ProductComponent />
    </Container>
  );
};

export default ProductListing;
