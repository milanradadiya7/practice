import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const send = useNavigate();
    function register(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:5656/api/register", user).then((data) => {
            if (data.data.status) {
                setUser(data.data);
                console.log(data.data.message);
                toast.success(data.data.message)
                send("/login");
            } else {
                console.log("Register Failed");
                toast.error(data.data.message);
            };
        });
    };

    return (
        <>
            <body className="bg-gradient-primary">
                <div className="container">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form onSubmit={register} className="user">
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" onChange={(e) => setUser({ ...user, firstName: e.target.value })} className="form-control form-control-user"
                                                        id="exampleFirstName" placeholder="First Name" required />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" onChange={(e) => setUser({ ...user, lastName: e.target.value })} className="form-control form-control-user"
                                                        id="exampleLastName" placeholder="Last Name" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control form-control-user"
                                                    id="exampleInputEmail" placeholder="Email Address" required />
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" required />
                                                </div>
                                            </div>

                                            <button className="btn btn-primary btn-user btn-block">
                                                Register Account
                                            </button>
                                            <hr />

                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to="/login">Already have an account? Login!</Link>
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

export default Register