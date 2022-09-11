import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Col, Row, Button, Stack, Badge } from "react-bootstrap";

import Spinner from "react-bootstrap/Spinner";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProductById = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
        console.log("Err", err);
      });
      dispatch(selectedProduct(response.data));
    };
    if (productId && productId !== "") fetchProductById();

    return () => dispatch(removeSelectedProduct());
  }, [productId, dispatch]);

  return (
    <Container>
      {Object.keys(product).length === 0 ? (
        <div className="text-center mt-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row gap={3}>
          <Col>
            <Image src={product.image} style={{ width: "350px" }} />
          </Col>
          <Col>
            <h1>{product.title}</h1>
            <Badge bg="light" text="dark" style={{ width: "100%" }} className="fs-3 my-2 text-start">
              <h3>{product.category}</h3>
            </Badge>
            <p>{product.description}</p>
            <h2 className="fs-2 my-2">${product.price}</h2>

            <Stack direction="horizontal" gap={2}>
              <Button variant="primary">Buy Now</Button>
              <Button variant="secondary">Add Cart</Button>
            </Stack>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
