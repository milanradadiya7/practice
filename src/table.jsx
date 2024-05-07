import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function UTable() {

    const [userTable, setUserTable] = useState([]);

    function table() {
        var token = localStorage.getItem("token");
        axios.get("http://127.0.0.1:5656/api/user-list", { headers: { Authorization: token } })
            .then((res) => {
                if (res.data.data) {
                    setUserTable(res.data.data);
                    console.log(res.data.data);
                } else {
                    console.log("user table is not received");
                };
            });
    };

    useEffect(() => {
        table();
    }, []);

    function UserRemove(_id) {
        var token = localStorage.getItem("token");
        axios.delete("http://127.0.0.1:5656/api/user-remove/" + _id, { headers: { Authorization: token } })
            .then((res) => {
                if (res.data.status) {
                    toast.success(res.data.message);
                    console.log(res.data.data);
                    table();
                } else {
                    toast.error(res.data.message);
                    console.log("user remove failed");
                };
            });
    };

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userTable.map(user => {
                            return (
                                <tr>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => UserRemove(user._id)} className='btn btn-danger'>Remove</button></td>
                                    <td><Link to={"/user/" + user._id} className='btn btn-success'>Edit</Link></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </>
    )
}

export default UTable;
