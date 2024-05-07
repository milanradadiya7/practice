import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function ProductUpdate() {

    const [productUpdate, setProductUpdate] = useState({
        productName: "",
        ProductDescription: "",
        productPrice: "",
        productBrand: "",
        productWarranty: "",
        productReview: ""
    })

    const { userId } = useParams();
    function updateget() {
        axios.get("http://127.0.0.1:5656/api/product-updateget/" + userId).then((res) => {
            console.log(res);
            if (res.data.status) {
                setProductUpdate(res.data.data)
                console.log("product updateget success");
            } else {
                console.log("product updateget fail");
            };
        });
    };

    useEffect(() => {
        updateget();
    }, [])


    function updatepost(e) {
        e.preventDefault();
        axios.put("http://127.0.0.1:5656/api/product-update/" + userId, productUpdate).then((res) => {
            console.log(res, "....................");
            if (res.data.status) {
                console.log("product update successfull");
            } else {
                console.log("product update fail");
            }
        })
    }


    return (
        <><Container>
            <Form onSubmit={updatepost} >
                <Button href="/product" variant='primary' className='mb-3'>Back</Button>
                <Row>
                    <Col xs={5}>
                        <Form.Group className="mb-2" controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" value={productUpdate.productName} onChange={(e) => setProductUpdate({ ...productUpdate, productName: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="productDescription">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter product description" value={productUpdate.ProductDescription} onChange={(e) => setProductUpdate({ ...productUpdate, ProductDescription: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="productPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter product price" value={productUpdate.productPrice} onChange={(e) => setProductUpdate({ ...productUpdate, productPrice: e.target.value })} pattern="^\d+(\.\d{1, 2})?$" />
                        </Form.Group>
                    </Col>

                    <Col xs={5}>
                        <Form.Group className="mb-2" controlId="productBrand">
                            <Form.Label>Product Brand</Form.Label>
                            <Form.Control type="text" placeholder="Enter product brand" value={productUpdate.productBrand} onChange={(e) => setProductUpdate({ ...productUpdate, productBrand: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="productwarranty">
                            <Form.Label>Product Warranty Information</Form.Label>
                            <Form.Control type="text" placeholder="Enter product warranty information" value={productUpdate.productWarranty} onChange={(e) => setProductUpdate({ ...productUpdate, productWarranty: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="productReview">
                            <Form.Label>Product Reviews</Form.Label>
                            <Form.Control type="text" placeholder="Enter product reviews" value={productUpdate.productReview} onChange={(e) => setProductUpdate({ ...productUpdate, productReview: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" className="w-25 ms-5">Save Data</Button>
            </Form>
        </Container></>
    )
}

export default ProductUpdate