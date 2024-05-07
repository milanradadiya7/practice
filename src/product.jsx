import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product() {

    const [product, setProduct] = useState([]);

    function ProductGet() {
        axios.get("http://127.0.0.1:5656/api/productget").then((res) => {
            if (res.data.status) {
                setProduct(res.data.data);
                console.log(res);
            } else {
                console.log("product not get");
            };
        });
    };

    useEffect(() => {
        ProductGet();
    }, [])

    function productRemove(_id) {
        axios.delete("http://127.0.0.1:5656/api/product-remove?id=" + _id).then((res) => {
            console.log(res);
            if (res.data.status) {
                ProductGet();
                console.log("product remove success");
            } else {
                console.log("product remove fail");
            };
        });
    };


    // function productTable() {
    //     return product.map(productList => {
    //         return (
    //                 <div class="col-3 mb-5">
    //                     <div class="card h-100">
    //                         {/* <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div> */}
    //                         <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
    //                         <div class="card-body p-4">
    //                             <div class="text-center">
    //                                 <h5 class="fw-bolder">{productList.productName}</h5>
    //                                 <div class="d-flex justify-content-center small text-warning mb-2">
    //                                     <FaStar fontSize={"20px"} />
    //                                     <FaStar fontSize={"20px"} />
    //                                     <FaStar fontSize={"20px"} />
    //                                     <FaStar fontSize={"20px"} />
    //                                     <FaStar fontSize={"20px"} />
    //                                 </div>
    //                                 <span class="text-muted text-decoration-line-through">{productList.productPrice}</span>
    //                             </div>
    //                         </div>
    //                         <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    //                             <div class="text-center"><Link class="btn btn-outline-primary mt-auto" href="#">Add to cart</Link></div>
    //                         </div>
    //                         <div className="d-flex">
    //                             <td><button className='btn btn-danger' onClick={() => productRemove(productList._id)}>Remove</button></td>
    //                             <td><Link to={"/product-update/" + productList._id} className='btn btn-success'>Edit</Link></td>
    //                         </div>
    //                     </div>
    //                 </div>
    //             // <tr>
    //             //     <td>{productList.productName}</td>
    //             //     <td>{productList.ProductDescription}</td>
    //             //     <td>{productList.productPrice}</td>
    //             //     <td>{productList.productBrand}</td>
    //             //     <td>{productList.productWarranty}</td>
    //             //     <td>{productList.productReview}</td>
    //             //     <td><button className='btn btn-danger' onClick={() => productRemove(productList._id)}>Remove</button></td>
    //             //     <td><Link to={"/product-update/" + productList._id} className='btn btn-success'>Edit</Link></td>
    //             // </tr>
    //         )
    //     })
    // }

    return (
        <>
            <a href="/product-create"><button class="btn btn-primary mb-3">Add List</button></a>

            {
                product.map(productList => {
                    return (
                        <div class="col-3 mb-5">
                            <div class="card h-100">
                                {/* <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div> */}
                                <img class="card" src="image/image-2.jpg" alt="img" />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">{productList.productName}</h5>
                                        <span class="text-muted text-decoration-line-through">{productList.ProductDescription}</span><br />
                                        <span class="text-muted text-decoration-line-through">{productList.productPrice}</span>
                                    </div>
                                </div>
                                <div class="card-footer justify-content-around  p-4 pt-0 border-top-0 bg-transparent d-flex">
                                    <div class="text-center"><Link to={"/product-cart/" + productList._id} class="btn btn-outline-primary mt-auto">Add to cart</Link></div>
                                    <div class="text-center"><Link to={"/buy"} class="btn btn-outline-primary mt-auto">Add to Buy</Link></div>
                                </div>
                                <div className="d-flex">
                                    <td><button className='btn btn-danger' onClick={() => productRemove(productList._id)}>Remove</button></td>
                                    <td><Link to={"/product-update/" + productList._id} className='btn btn-success'>Edit</Link></td>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {/* <Table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>productName</th>
                        <th>ProductDescription</th>
                        <th>productPrice</th>
                        <th>productBrand</th>
                        <th>productwarranty</th>
                        <th>productReview</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody> */}
            {/* {productTable()} */}
            {/* </tbody>
            </Table> */}
        </>
    )
}

export default Product