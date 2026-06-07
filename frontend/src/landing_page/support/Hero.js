import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div
          className="col-6"
          style={{
            paddingTop: "1rem",
            paddingBottom: "3rem",
            paddingLeft: "16.5rem",
          }}
        >
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: How do I activate F&O..." className="mb-3" />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
          <a href="">Learn how to create a ticket</a>
        </div>
        <div
          className="col-6"
          style={{ padding: "1rem 10rem", lineHeight: "2" }}
        >
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Scheduled maintenance for Coin</a>
            </li>
            <li>
              <a href="">Additional exposure margin on securities under MWPL</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
