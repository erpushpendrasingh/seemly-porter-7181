import React from "react";
import "./HelpCenter.css";

const HelpCenter = () => {
  return (
    <div>
      <div className="top">
        <div className="image">
          <img
            src="https://static.lystit.com/static/n/pr_campaigns/year_in_fashion_2020/images/logo.a9c5dfdd1a8b.png"
            alt=""
          />
        </div>
        <div className="mid">
          <p>HOW CAN WE HELP YOU TODAY?</p>
          <input type="text" placeholder="SEARCH LYST HELP" />
          <div className="particle">
            <p>Popular articles:</p>
            <span>
              Getting Started Checklist,<span> Where's my order?, </span>
              <span>What is Klarna?</span>
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="headers">
        <div className="heading">
          <p>&#11088; PROMOTED ARTICLES</p>
        </div>
        <div>
          <li>Placing a new order with Lyst</li>
          <li>Where is my order?</li>
          <li>Item authenticity</li>
          <li>Do you have my size?</li>
          <li>What's the shipping policy?</li>
          <li>What's the return policy?</li>
        </div>
        <hr />
      </div>
      <div className="cardment">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEntFpUu6aCU2lST7Zj6S9HHERJOssQkV-g&usqp=CAU"
            alt=""
          />
          <p>ORDERS</p>
          <p>Amendments, cancellations...</p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-vqmCPv7J0JD-PUvQMFGRpmtSbLrVWkflw&usqp=CAU"
            alt=""
          />
          <p>PAYMENT AND PROMOTIONS</p>
          <p>Klarna, promo codes, currencies...</p>
        </div>
        <div>
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3217433/t-shirt-icon-sm.png"
            alt=""
          />
          <p>RETAILERS, PRODUCTS AND SIZING</p>
          <p>Unknown size, wrong image...</p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dQMMchi6Nc1kKOn7rCue-ABssctAVZQOag&usqp=CAU"
            alt=""
          />
          <p>SHIPPING</p>
          <p>Delivery policy, taxes or duty...</p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCDFXynmjYxGZ-B377A7pcZNbTzGTiVPY6w&usqp=CAU"
            alt=""
          />
          <p>RETURNS</p>
          <p>Returns policy, exchanges...</p>
        </div>
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p>ACCOUNTS AND EMAILS</p>
          <p>Password reset, unsubscribe from marketing, account deletion...</p>
        </div>
      </div>
      <div className="contact">
        <div>
            <h2>PREFER TO CONTACT US?</h2>
        </div>
        <div>
            <p>You can reach our dedicated customer care team by email:</p>
            <span>customercare@ly.st</span>
        </div>
        <div>
            <p>Please note that for order tracking updates, amendments or cancellations, you will need to contact the retailer fulfilling your order directly</p>
        </div>
        <div>
            <h2>REGISTERED OFFICE</h2>
        </div>
        <div>
            <p>Lyst Limited</p>
            <p>Floor 7, The Minster Building</p>
            <p>21 Mincing Lane</p>
            <p>London</p>
            <p>EC3R 7AG</p>
        </div>
        <div className="btn">
            <button>Contact Customer Care</button>
            <button>
                <img src="data:image/png;base64,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" alt="" width="20"/>
                Massage us on WhatsApp
            </button>
        </div>
      </div>
      <hr />
        <div className="last">
            <p>Lyst Help Center</p>
            <hr />
            <p>Back to Lyst.com</p>
        </div>
    </div>
  );
};

export default HelpCenter;
