import React from "react";
import JobList from "../component/JobList";
import TopBar from "../component/TopBar";
import { Button, Form, Row, Col, Input, DatePicker } from "antd";
import AboutCard from "../component/AboutCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Footer from "../component/Footer";
import { useMpCandidateUser } from "../hook/user/useMpCandidate.user";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function Home() {
  const [form] = Form.useForm();
  const { createCandidate } = useMpCandidateUser();
  const onSubmit = (values) => {
    createCandidate({
      ...values,
    });
  };
  return (
    <>
      <div
        className="content-container"
        style={{
          maxWidth: 1600,
          margin: "auto",
          padding: "0 105px",
        }}
      >
        <TopBar />
      </div>
      <div
        style={{
          maxWidth: 2000,
          margin: "auto",
          padding: "0",
          width: "100%",
        }}
      >
        <img
          src="/home-banner.png"
          alt="MP Telecom logo"
          style={{ width: "100%" }}
        />
      </div>
      <div
        id="hiring"
        className="content-container"
        style={{
          maxWidth: 1600,
          margin: "auto",
          padding: "0 150px",
          marginTop: "100px",
        }}
      >
        <JobList />
      </div>

      <div
        className="content-container"
        style={{
          maxWidth: 1600,
          margin: "auto",
          padding: "0 150px",
          marginTop: "100px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            className="underline-title-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/arrow-logo.png" alt="MP Telecom logo" />
            <div
              style={{
                fontWeight: 700,
                fontSize: 43,
                lineHeight: "50px",
                color: "#262626",
                marginLeft: "24px",
              }}
            >
              Recruit{" "}
              <span
                style={{
                  color: "rgba(69, 143, 246, 1)",
                }}
              >
                MP Telecom
              </span>
            </div>
          </div>
          <div
            style={{
              color: "#CCD2E9",
              marginBottom: 48,
            }}
          >
            Dont miss the opportunity to become a member of the great family of
            MP Telecom with wide future career development opportunities and
            income levels interesting.
          </div>
        </div>

        <div
          className="hiring-section"
          style={{ display: "flex", gap: 24, alignItems: "center" }}
        >
          <div style={{ flex: 1 }}>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>{" "}
              Are you a fresh graduate?
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Worried about job opportunities? Skills and experience?
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Are you looking for a stable working environment with an
              attractive income? guide?
            </p>
            <p className="underline-title-left">
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Do you want to work in a large company?
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#4979D1",
                fontWeight: "bold",
              }}
            >
              All will be answered when coming to MP Telecom.
            </p>
          </div>
          <div style={{ width: "55%", maxWidth: 600 }}>
            <img
              src="/hiring-images.png"
              alt="MP Telecom logo"
              width={"100%"}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/welcome.png"
            alt="MP Telecom logo"
            style={{ width: "75%", maxWidth: 900, margin: "48px 0" }}
          />
        </div>

        <div
          className="reqirement-section"
          style={{ display: "flex", gap: 24, alignItems: "center" }}
        >
          <div style={{ width: "55%", maxWidth: 800, minWidth: 300 }}>
            <img src="/group-member.png" alt="MP Telecom logo" width={"100%"} />
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#4979D1",
                fontWeight: "bold",
              }}
              className="underline-title-left"
            >
              We are looking for candidates with the characteristics
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Under 35 years old
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Graduated from high school
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Loud, clear, easy-to-listen voice (no lisp, stammer, local accent
              )
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Capable of working regular hours or rotating shifts according to
              schedule personal, any 01 day off/week.
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Patience, peace & take care of customers is fun in life.
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Basic office computing.
            </p>
          </div>
        </div>

        <div
          className="underline-title-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "48px 0",
          }}
        >
          <img src="/arrow-logo.png" alt="MP Telecom logo" />
          <div
            style={{
              fontWeight: 700,
              fontSize: 43,
              lineHeight: "50px",
              color: "#262626",
            }}
            id="training"
          >
            <span
              style={{
                color: "rgba(69, 143, 246, 1)",
                marginLeft: 24,
              }}
            >
              Training
            </span>
          </div>
        </div>

        <div
          className="training-section"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: "url('/training-bg.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            padding: "96px 0",
          }}
        >
          <div style={{ width: "50%", maxWidth: 600 }}>
            <div>
              <img
                width={"100%"}
                src="/training-image-1.png"
                alt="MP Telecom logo"
              />
            </div>

            <div
              style={{
                padding: 24,
                borderRadius: "21px",
                color: "white",
                backgroundColor: "rgba(69, 143, 246, 1)",
                position: "relative",
                top: 48,
                left: "-48px",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  lineHeight: "56px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                MP Telecom brings you:
              </div>
              <p>
                {" "}
                <span style={{ margin: "0 12px" }}>&#9679;</span>Attractive
                income
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                Fully enjoy social insurance + health insurance + other welfare
                regimes.
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Professional
                working environment, dynamic
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Long term
                stable job
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>There are many
                opportunities for advancement and development
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                Other benefits according to the Law and regulations of the
                company.{" "}
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                Regularly organize movement activities, team building{" "}
              </p>
            </div>
          </div>
          <div style={{ width: "50%", maxWidth: 600 }}>
            <div
              style={{
                padding: 24,
                borderRadius: "21px",
                color: "white",
                backgroundColor: "rgba(69, 143, 246, 1)",
                position: "relative",
                left: 48,
                top: "-48px",
              }}
            >
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  lineHeight: "56px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Training MP Telecom
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span>
                With a team of experienced and professional staff, MP Telecom
                will help you strengthen and improve your professional skills
                careers such as:
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Listening
                skills
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Feedback skills
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Customer care
                skills
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Consulting
                skills
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span>MP Telecom
                has a clear development roadmap for each employee. In
                particular, the policy of internal training and external
                training helps employees develop themselves quickly.
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span>
                MP Telecom recognizes all employees efforts to bring about the
                fairest and most transparent results, promote new positions and
                have a clear promotion path...
              </p>
            </div>
            <div>
              <img
                width={"100%"}
                src="/training-image-2.png"
                alt="MP Telecom logo"
              />
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            className="underline-title-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/arrow-logo.png" alt="MP Telecom logo" />
            <div
              id="aboutus"
              style={{
                fontWeight: 700,
                fontSize: 43,
                lineHeight: "50px",
                color: "#262626",
                marginLeft: 24,
              }}
            >
              About us{" "}
              <span
                style={{
                  color: "rgba(69, 143, 246, 1)",
                }}
              >
                MP Telecom
              </span>
            </div>
          </div>
          <div
            style={{
              color: "#CCD2E9",
              margin: "24px 0",
            }}
          >
            MP TELECOM is a leading company in Vietnam specializing in providing
            Contact Center and Business Process Outsourcing – BPO solutions and
            services thanks to the close combination of three main platforms:
            <br /> People - Technology - Solutions.
          </div>
        </div>
        <div
          className="about-us-section"
          style={{
            maxWidth: 815,
            margin: "auto",
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            backgroundImage: "url('/about-us-bg.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            padding: "48px 24px",
          }}
        >
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Customer Information Management"}
            content={"Customer Information Management"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Customer Information Management"}
            content={"Customer Information Management"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Customer Information Management"}
            content={"Customer Information Management"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Customer Information Management"}
            content={"Customer Information Management"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Customer Information Management"}
            content={"Customer Information Management"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Customer Information Management"}
            content={"Customer Information Management"}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" ghost>
            Learn more
          </Button>
        </div>
        <div
          style={{
            background: "#458FF6",
            borderRadius: 20,
            padding: "24px",
            display: "flex",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <div
            className="send-mail-bg"
            style={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            <img src="/send-mail.png" alt="MP Telecom logo" width={"100%"} />
          </div>
          <div>
            <div
              id="register"
              style={{
                textAlign: "center",
                color: "white",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "50px",
                lineHeight: "59px",
                fontWeight: "900",
                fontStyle: "italic",
                marginBottom: "24px",
              }}
            >
              Apply now
            </div>
            <Form form={form} onFinish={onSubmit}>
              <Row gutter={12}>
                <Col span={16} offset={4}>
                  <Form.Item name="Name">
                    <Input size="large" placeholder="Full name *" />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="DateOfBirth">
                    <DatePicker
                      size="large"
                      placeholder="DD/MM/YY *"
                      style={{ width: "100%" }}
                      format={"DD/MM/YYYY"}
                    />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="Phone">
                    <Input size="large" placeholder="Phone number*" />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="Email">
                    <Input size="large" placeholder="Email*" />
                  </Form.Item>
                </Col>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Form.Item>
                    <Button block size="large" htmlType="submit" type="primary">
                      Apply now
                    </Button>
                  </Form.Item>
                </div>
              </Row>
            </Form>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            margin: 60,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 43,
              lineHeight: "50px",
              color: "#262626",
            }}
          >
            <span
              style={{
                color: "rgba(69, 143, 246, 1)",
              }}
            >
              Client
            </span>
            Partner
          </div>
        </div>
        <Slider
          {...settings}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 60,
          }}
        >
          {[
            "viettel",
            "mobifone",
            "vinaphone",
            "vietnamobile",
            "vtv",
            "anvien",
          ].map((item) => (
            <div key={item}>
              <img style={{ margin: "auto" }} src={`/${item}.png`} alt={item} />
            </div>
          ))}
        </Slider>
      </div>
      <div
        style={{
          maxWidth: 2000,
          margin: "auto",
          padding: "0",
          width: "100%",
        }}
      >
        <Footer />
      </div>
    </>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      style={{ fontSize: "2rem", color: "#458FF6" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      style={{ fontSize: "2rem", color: "#458FF6" }}
      onClick={onClick}
    />
  );
}
