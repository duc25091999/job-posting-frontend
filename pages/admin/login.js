import React, { useState, useEffect } from "react";
import { Image, Typography, Form, Input, Row, Col, Button } from "antd";
import { checkTokenIfValid, login } from "../../api/auth/index";
import { useRouter } from "next/router";
const { Title, Text } = Typography;
function Login() {
  const router = useRouter();
  const [form] = Form.useForm();
  const onLogin = async () => {
    const res = await login(form.getFieldValue());
    if (res.success) {
      router.push("/admin/jobs");
    }
  };
  useEffect(() => {
    if (checkTokenIfValid()) {
      router.push("/admin/jobs");
    }
  }, []);
  return (
    <div style={{maxWidth:1000 , minWidth:300,width:"50%",margin:"auto",marginTop:"20%"}}>
      <div style={{fontSize:"2rem",fontWeight:"bold",textAlign:"center"}}>Login</div>
      <Form
        layout="vertical"
        form={form}
        onFinish={onLogin}
        style={{ width: "100%", marginTop: 24 }}
      >
        <Form.Item name="name" required>
          <Input
            placeholder="Name"
          ></Input>
        </Form.Item>
        <Form.Item name="password" required>
          <Input.Password
            placeholder="Password"
          ></Input.Password>
        </Form.Item>

        <Button type="primary" htmlType="submit" style={{position:"relative",left:"50%",transform:"translateX(-50%)"}}>
          Log in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
