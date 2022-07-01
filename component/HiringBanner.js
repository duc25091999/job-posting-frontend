import React from "react";
import { Button } from "antd";

function HiringBanner() {
  return (
    <div className="hiring-banner">
      <div>
        <img src="/send-mail.png" alt="MP Telecom logo" width={"100%"} />
      </div>
      <div className="hiring-banner-content">
        <div
          style={{
            fontSize: "43px",
            fontHeight: "50px",
            fontWeight: "bold",
            color: "#2E4E92",
          }}
        >
          MP Telecom Recruitment
        </div>
        <div
          style={{ textAlign: "start", width: "fit-content", margin: "auto" }}
        >
          <p style={{ fontSize: "1.25rem", color: "#458FF6" }}>
            &#10003; Professional service
          </p>
          <p style={{ fontSize: "1.25rem", color: "#458FF6" }}>
            &#10003;Intensive training
          </p>
          <p style={{ fontSize: "1.25rem", color: "#458FF6" }}>
            &#10003;Full equipment support
          </p>
        </div>
        <div>
          <Button type="primary">Apply now</Button>
        </div>
      </div>
    </div>
  );
}

export default HiringBanner;
