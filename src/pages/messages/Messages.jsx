import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Sarita",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis praesentium, assumenda suscipit vitae rerum? Quisquam neque ducimus quis porro tenetur? Tempore sed eos nobis est porro corporis in assumenda.`;
  return (
    <div className="message">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 90)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 90)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 90)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 90)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
