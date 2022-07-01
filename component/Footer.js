import React from "react";
import {
  FacebookFilled,
  YoutubeFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 30px",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div>
          <img src="/hotline.png" alt="MP Telecom hotline" />
        </div>
        <div
          style={{
            gap: 12,
            color: "#FFFFFF",
            alignItems: "end",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "fit-content",
              background: "#458FF6",
              padding: 12,
              fontStyle: "italic",
              borderRadius: "10px",
            }}
          >
            Online support
          </div>
          <div
            style={{
              fontSize: "25px",
              background: "#458FF6",
              padding: 12,
              fontStyle: "italic",
              borderRadius: "10px",
            }}
          >
            Have a chat with us
          </div>
        </div>
      </div>

      <div
        className={styles.footer}
        style={{
          backgroundColor: "#458FF6",
          padding: "56px 134px",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              width: "fit-content",
              padding: "20px 40px",
            }}
          >
            <img src="/mp-logo.png" alt="MP Telecom logo" width={200} />
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <FacebookFilled style={{ fontSize: "3rem" }} />
            <YoutubeFilled style={{ fontSize: "3rem" }} />
            <LinkedinFilled style={{ fontSize: "3rem" }} />
          </div>
        </div>

        <div
          className={styles.footerContent}
          style={{ display: "flex", justifyContent: "space-between", gap: 24 }}
        >
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>Head Office:</span> Toronto,
              ON Canada
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Toronto:</span> Toronto
              address
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Vancouver:</span> Vancouver
              address
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Quebec:</span> Quebec address
            </p>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Services</div>
            <p>Outsourcing Service Contact Center</p>
            <p>Telesales Call Out Service</p>
            <p>HR Outsourcing and Soft Skills Training</p>
            <p>Technical assistance</p>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Solution</div>
            <p>Customer information management (CRM) software</p>
            <p>AI Call Center Solution</p>
            <p>MP Contact Center Solution</p>
            <p>OTC call out solution</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
