import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breacrumbs">
          <Link to="/message" className="link">
            MESSAGES
          </Link>{" "}
          {">"} JHON DOE {">"}
        </span>
        <div className="messages">
          <div className="item">
            <img src="/images/person03.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ipsam, itaque laboriosam ab perspiciatis nostrum sed asperiores
              praesentium, aliquam provident aliquid vitae facilis corporis
              voluptate, minima accusantium similique deserunt suscipit!
            </p>
          </div>
          <div className="item owner">
            <img src="/images/person03.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ipsam, itaque laboriosam ab perspiciatis nostrum sed asperiores
              praesentium, aliquam provident aliquid vitae facilis corporis
              voluptate, minima accusantium similique deserunt suscipit!
            </p>
          </div>
          <div className="item">
            <img src="/images/person03.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ipsam, itaque laboriosam ab perspiciatis nostrum sed asperiores
              praesentium, aliquam provident aliquid vitae facilis corporis
              voluptate, minima accusantium similique deserunt suscipit!
            </p>
          </div>
          <div className="item owner">
            <img src="/images/person03.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ipsam, itaque laboriosam ab perspiciatis nostrum sed asperiores
              praesentium, aliquam provident aliquid vitae facilis corporis
              voluptate, minima accusantium similique deserunt suscipit!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
