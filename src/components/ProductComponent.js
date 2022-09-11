import React from "react";
import { useSelector } from "react-redux";

import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product, idx) => (
    <Col key={idx}>
      <Link to={`products/${product.id}`}>
        <Card className="card-hover" style={{ height: "500px", cursor: "pointer" }}>
          <Card.Img variant="top" src={product.image} style={{ height: "350px", margin: "0 auto" }} />
          <Card.Body>
            <Card.Title className="fw-bold fs-5">{product.title}</Card.Title>
            <Card.Subtitle className="fs-6">${product.price}</Card.Subtitle>
            <Card.Text>{product.category}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  ));

  return (
    <div>
      <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-5">
        {renderList}
      </Row>
    </div>
  );
};

export default ProductComponent;
