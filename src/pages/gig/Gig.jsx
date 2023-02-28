import { Slider } from "infinite-react-carousel/lib";
import React from "react";
import "./Gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            FIVERR {">"} GRAPHIC & DESIGN {">"}
          </span>
          <h1> I will create ai generated art for you</h1>
          <div className="user">
            <img src="/images/person03.png" className="pp" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img src="/images/mman.png" alt="" />
            <img src="/images/mman.png" alt="" />
            <img src="/images/mman.png" alt="" />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iure sed non officiis tempora soluta accusantium, cupiditate enim
            voluptatem dolorem, reiciendis aliquam sequi dignissimos. Magni
            quasi odit repudiandae voluptatibus voluptatem?
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src="/images/person03.png" className="pp" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <div className="title">FROM</div>
                  <div className="desc">USA</div>
                </div>
                <div className="item">
                  <div className="title">FROM</div>
                  <div className="desc">USA</div>
                </div>
                <div className="item">
                  <div className="title">FROM</div>
                  <div className="desc">USA</div>
                </div>{" "}
                <div className="item">
                  <div className="title">FROM</div>
                  <div className="desc">USA</div>
                </div>{" "}
                <div className="item">
                  <div className="title">FROM</div>
                  <div className="desc">USA</div>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                rerum nulla veritatis nesciunt illum amet, reprehenderit
                laudantium animi magnam perferendis pariatur? Ab laboriosam
                possimus corporis quibusdam enim? Consequuntur, animi
                voluptatem!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="/images/person03.png" className="pp" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora odio rem perferendis, asperiores ex omnis, eius
                repellendus illum natus commodi mollitia blanditiis? Libero id
                asperiores beatae sapiente tenetur eum impedit?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <span>Yes</span>
                <img src="/images/like.png" alt="" />
                <span>No</span>
                <img src="/images/dislike.png" alt="" />
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="right">
          <div className="price">
            <h3>1 AI Generated Image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quam accusantium ullam aliquam quod?
          </p>
          <div className="detail">
            <div className="item">
              <img src="/images/clock.png" alt="" />
              <span>2 days delivery</span>
            </div>
            <div className="item">
              <img src="/images/recycle.png" alt="" />
              <span>2 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
          </div>
          <button>Countinue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
