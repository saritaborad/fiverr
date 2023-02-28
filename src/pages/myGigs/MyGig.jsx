import React from "react";
import { Link } from "react-router-dom";
import "./MyGig.scss";

const MyGig = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" className="link">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGig;
