import React from "react";
import JobListWithPagination from "../component/JobListWithPagination";
import TopBar from "../component/TopBar";
import { Button, Form, Row, Col, Input,DatePicker } from "antd";
import Footer from "../component/Footer";
import HiringBanner from "../component/HiringBanner";
import { useMpCandidateUser } from "../hook/user/useMpCandidate.user";
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
        <HiringBanner />
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
        <JobListWithPagination />
        <div
          style={{
            background: "#458FF6",
            borderRadius: 20,
            padding: "24px",
            display: "flex",
            justifyContent: "space-between",
            margin: "96px 0",
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
                    <Input size="large" placeholder="Fullname *" />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="DateOfBirth">
                    <DatePicker size="large" placeholder="Date of Birth *" style={{width:"100%"}} format={"DD/MM/YYYY"} />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="Phone">
                    <Input size="large" placeholder="Phonenumber*" />
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
