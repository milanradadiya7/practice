import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function User() {
  const [userProfile, setuserProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    state: "",
    mobile: "",
    photo: null,
  });

  function userget() {
    var token = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:5656/api/user/" + userId, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          setuserProfile({
            firstName: res.data.data.firstName,
            lastName: res.data.data.lastName,
            email: res.data.data.email,
            country: res.data.data.country,
            state: res.data.data.state,
            mobile: res.data.data.mobile,
            photo: null,
          });
          console.log("profile get ");
        } else {
          console.log("no profile get");
        }
      });
  }

  const send = useNavigate();
  const { userId } = useParams();
  function user(e) {
    var token = localStorage.getItem("token");
    e.preventDefault();

    axios
      .putForm("http://127.0.0.1:5656/api/user-update/" + userId, userProfile, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          console.log(res.data);
          toast.success(res.data.message);
          send("/table");
        } else {
          toast.error(res.data.message);
          console.log("Profile data is not received");
        }
      });
  }

  useEffect(() => {
    userget();
  }, []);

  return (
    <>
      <div className="profile-page">
        <h1>Update Page</h1>
        <br />
        <form onSubmit={user}>
          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              value={userProfile.firstName}
              onChange={(e) =>
                setuserProfile({ ...userProfile, firstName: e.target.value })
              }
              className="form-control"
              id="floatingInput"
              placeholder="First Name"
            />
          </div>

          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              value={userProfile.lastName}
              onChange={(e) =>
                setuserProfile({ ...userProfile, lastName: e.target.value })
              }
              className="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              value={userProfile.email}
              onChange={(e) =>
                setuserProfile({ ...userProfile, email: e.target.value })
              }
              className="form-control w-50"
              id="floatingInput"
              placeholder="name@example.com"
            />
          </div>

          <select
            class="form-select col-sm-6 mb-3 form-control"
            aria-label="Default select example"
            value={userProfile.country}
            onChange={(e) =>
              setuserProfile({ ...userProfile, country: e.target.value })
            }
          >
            <option selected>Select the Country</option>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="caneda">caneda</option>
          </select>
          <select
            class="form-select col-sm-6 mb-3 form-control"
            aria-label="Default select example"
            value={userProfile.state}
            onChange={(e) =>
              setuserProfile({ ...userProfile, state: e.target.value })
            }
          >
            <option selected>Select the State</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Panjab">Panjab</option>
          </select>
          <div className="form-floating ">
            <input
              type="number"
              value={userProfile.mobile}
              onChange={(e) =>
                setuserProfile({ ...userProfile, mobile: e.target.value })
              }
              id="floatingInput"
              className="form-control w-50"
              placeholder="Mobile Number"
              required
            />
          </div>

          <div className="col-lg-12 mb-3">
            <div className="form-group">
              <label className="mont-font fw-600 font-xsss">Select Photo</label>{" "}
              <br />
              <input
                type="file"
                name="file"
                onChange={(e) =>
                  setuserProfile({ ...userProfile, photo: e.target.files[0] })
                }
                id="file"
              />
            </div>
          </div>

          <div className="login-btn">
            <button type="submit" className="btn btn-primary text-white mt-3">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default User;
