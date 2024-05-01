import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ChangePass() {
    const [passwordData, setPasswordData] = useState({
        password: "",
        newPassword: "",
        confirmPassword: ""
    });

    const send = useNavigate();
    async function passwordChange(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");

        // Check if new password and confirm password match
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error("New password and confirm password do not match");
            return;
        };

        await axios.post("http://127.0.0.1:5656/api/change-password", passwordData, { headers: { Authorization: token } }).then((res) => {
            if (res.data.status) {
                toast.success(res.data.message);
                send("/");
            } else {
                toast.error(res.data.message);
            };
        });
    };

    return (
        <>
            <div className="profile-page">
                <h1>Change Password</h1><br />
                <form onSubmit={passwordChange}>
                    <div className="form-floating mb-3">
                        <input type="password" name="currentPassword" value={passwordData.password} onChange={(e) => setPasswordData({ ...passwordData, password: e.target.value })}
                            className="form-control w-50" id="currentPassword" placeholder="Current Password" required />
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" name="newPassword" value={passwordData.newPassword} onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                            className="form-control w-50" id="newPassword" placeholder="New Password" required />
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                            className="form-control w-50" id="confirmPassword" placeholder="Confirm Password" required />
                    </div>

                    <div className="login-btn">
                        <button type="submit" className="btn btn-primary text-white mt-3">Change Password</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ChangePass;
