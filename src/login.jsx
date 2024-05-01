import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const send = useNavigate();
    function login(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:5656/api/login", user).then((res) => {
            // console.log(res, "-----------")
            if (res.data.status) {
                localStorage.setItem("token", res.data.token);
                // console.log(res.data);
                toast.success(res.data.message);
                // send("/table");
                window.location.href = "/table";
            } else {
                toast.error(res.data.message);
            }
        });
    };

    return (
        <>
            <body className="bg-gradient-primary">

                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-xl-10 col-lg-12 col-md-9">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form onSubmit={login} className="user">
                                                    <div className="form-group">
                                                        <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control form-control-user"
                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                            placeholder="Enter Email Address..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })}
                                                            className="form-control form-control-user" id="exampleInputPassword"
                                                            placeholder="Password" />
                                                    </div>
                                                    <button className="btn btn-primary btn-user btn-block">
                                                        Login
                                                    </button>
                                                    <hr />
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <Link className="small" to="/register">Create an Account!</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </body>
        </>
    )
}

export default Login