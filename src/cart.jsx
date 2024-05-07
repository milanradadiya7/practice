import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = useState({
        productName: "",
        ProductDescription: "",
        productPrice: "",
        productBrand: "",
        productwarranty: "",
        productReview: ""
    });

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const { userId } = useParams();
    function carts() {
        axios.get("http://127.0.0.1:5656/api/product-cartget/" + userId).then((res) => {
            console.log(res);
            if (res.data.status) {
                setCart(res.data.data)
                console.log("product Cart success");
            } else {
                console.log("product Cart fail");
            };
        });
    };

    useEffect(() => {
        carts();
    }, []);



    return (
        <>
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card" src="image/image-3.jpg" alt="img" /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">{cart.productName}</div>
                        <h1 class="display-5 fw-bolder">{cart.productBrand}</h1>
                        <span class="text-decoration-line-through">{cart.productPrice}</span>
                        <p>{cart.ProductDescription}</p>
                        <p >{cart.productwarranty}</p>
                        <p>{cart.productReview}</p>
                        <div class="d-flex">
                            <button className='btn btn-primary' onClick={decrement} >-</button>
                            <input class="form-control text-center me-3" value={count} style={{ maxWidth: "3rem" }} />
                            <button className='btn btn-primary' onClick={increment}>+</button>
                            <button class="btn btn-outline-primary flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Cart