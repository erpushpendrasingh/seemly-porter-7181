import React from "react";
import {
  Wrapper,
  Wrap2,
  Wrap3,
  Tag,
  Child1,
  Child2,
  Child3,
} from "../StyledComponents/AllMens";
import { Link } from "react-router-dom";

const AllMens = () => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Wrapper>
        <p>Trending in menswear</p>
      </Wrapper>
      <Wrap2>
        <Link to="" style={{ textDecoration: "none", color: "black" }}>
          <h1>&#9989; Gucci Hollywood collection</h1>
        </Link>
        <Link to="" style={{ textDecoration: "none", color: "black" }}>
          <h1>&#9989; A.P.C. Petit New Standard jeans</h1>
        </Link>
        <Link to="" style={{ textDecoration: "none", color: "black" }}>
          <h1>&#9989; TOMS Alpargata shoes</h1>
        </Link>
      </Wrap2>
      <Tag>
        <h2>Browse & Shop</h2>
      </Tag>
      <Wrap3>
        <Child1>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-0424-1.jpg?auto=webp&quality=75&width=1024"
            alt=""
          />
          <p>Gucci New Sneaker Design</p>
          <p>Introducing Gucci's new sneaker design The Ryton.</p>
          <Link to="#"><button>Shop Now &#x203A;</button></Link>
        </Child1>
        <Child2>
          <img
            src="https://ceoworld.biz/wp-content/uploads/2020/01/running-shoes.jpg"
            alt=""
          />
          <p>Nugnes1920 Selection</p>
          <p>Discover all the best of FW21 collection.</p>
          <Link to="#"><button>Shop Now &#x203A;</button></Link>
        </Child2>
        <Child3>
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2019-07/30/19/asset/d3dc1a71e0eb/sub-buzz-1648-1564514039-1.jpg?crop=1080%3A1104%3B0%2C101&downsize=700%3A%2A&output-quality=auto&output-format=auto"
            alt=""
          />
          <p>Time To Update Your Shoe Game</p>
          <p>
            From Oxfords and Derbies to loafers and brogues, find dress shoes to
            fit every occasion in this edit.
          </p>
          <Link to="#"><button>Shop Now &#x203A;</button></Link>
        </Child3>
      </Wrap3>
      <Tag>
        <h2>Browse & Shop</h2>
      </Tag>
      <Wrap3>
        <Child1>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-0424-1.jpg?auto=webp&quality=75&width=1024"
            alt=""
          />
          <p>Sneaker considerations</p>
          <p>Introducing Gucci's new sneaker design The Ryton.</p>
          <Link to=""><button>Learn more &#x203A;</button></Link>
        </Child1>
        <Child2>
          <img
            src="https://images.unsplash.com/photo-1625177861882-322de511ab30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80"
            alt=""
          />
          <p>Military essentials</p>
          <p>Discover all the best of FW21 collection.</p>
          <Link to=""><button>Learn more &#x203A;</button></Link>
        </Child2>
        <Child3>
          <img
            src="https://images.pexels.com/photos/631986/pexels-photo-631986.jpeg?cs=srgb&dl=pexels-tobi-631986.jpg&fm=jpg"
            alt=""
          />
          <p>Time To Update Your Shoe Game</p>
          <p>
            From Oxfords and  find dress shoes to
            fit every occasion in this edit.
          </p>
          <Link to=""><button>Learn more &#x203A;</button></Link>
        </Child3>
      </Wrap3>
    </div>
  );
};

export default AllMens;
