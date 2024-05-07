import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Profile() {

    const [userProfile, setuserProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        state: "",
        mobile: "",
        photo: null,
    });
    function profile() {
        var token = localStorage.getItem("token");
        console.log(token, "profile get token..............");
        axios.get("http://127.0.0.1:5656/api/profile", { headers: { Authorization: token } }).then((res) => {
            if (res.data.data) {
                setuserProfile(res.data.data)
                console.log(res.data.data);
            } else {
                console.log("Profile data is not received");
            };
        });
    };

    useEffect(() => {
        profile();
    }, []);
    const send = useNavigate();

    function profileUpdate(e) {
        var token = localStorage.getItem("token");
        e.preventDefault();
        axios.postForm(process.env.REACT_APP_API + "/api/profile-update", userProfile, { headers: { Authorization: token } }).then((res) => {
            console.log(res.data);
            if (res.data.status) {
                console.log(res.data.status);
                toast(res.data.message)
                send("/")
            } else {
                console.log("not profile update ");
            };
        });
    };



    return (
        <>
            <div className="profile-page">
                <h1 >Profile Page</h1><br />
                <form onSubmit={profileUpdate}>

                    <div className="form-floating mb-3 w-50">
                        <input type="text" value={userProfile.firstName} onChange={(e) => setuserProfile({ ...userProfile, firstName: e.target.value })}
                            className="form-control" id="floatingInput" placeholder="First Name" />
                    </div>

                    <div className="form-floating mb-3 w-50">
                        <input type="text" value={userProfile.lastName} onChange={(e) => setuserProfile({ ...userProfile, lastName: e.target.value })}
                            className="form-control" id="floatingInput" placeholder="Last Name" />
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" value={userProfile.email} onChange={(e) => setuserProfile({ ...userProfile, email: e.target.value })}
                            className="form-control w-50" id="floatingInput" placeholder="name@example.com" />
                    </div>

                    <div className="login-btn">
                        <button type="submit" className="btn btn-primary text-white mt-3">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile