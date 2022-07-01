import { privateUserRoute } from '../../shared'
import React, { useState, useEffect } from "react";
import { Button, Space, Table,Form,Col,Row,Input } from "antd";
import { EnvironmentFilled, SearchOutlined } from "@ant-design/icons";
import { useCandidateAdmin } from '../../hook/admin/useCandidate.admin';
import UploadApi from '../../api/admin/uploadApi.admin';
function CandidateList() {
  const [form] = Form.useForm();
  const pagination = {
    page: 1,
    size: 6,
  };
  const { candidateList, getCandidateList, candidateId, setCandidateId } = useCandidateAdmin();
  useEffect(() => {
    getCandidateList({ ...pagination });
  }, []);
  const onChange = (values) => {
    getCandidateList({...form.getFieldsValue(), page: values.current, size: pagination.size });
  };
  const onSearch = async (values) => {
    getCandidateList({ ...values, size: pagination.size });
  };
  return (
    <>
      <div style={{ display: "flex", padding: 12 }}>
      <Form form={form} onFinish={onSearch}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name={"CompanyName"}>
                <Input
                  prefix={<SearchOutlined />}
                  placeholder="Company name"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button
                  icon={<SearchOutlined />}
                  htmlType="submit"
                  type="primary"
                >
                  Search
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <Table
        scroll={{ x: 1000 }}
        loading={candidateList.loading}
        onChange={onChange}
        pagination={{
          pageSize: pagination.size,
          total: candidateList.total,
          defaultCurrent: 1,
        }}
        columns={[
          ...columns,
          {
            title: "CV",
            dataIndex: "CV",
            key: "CV",
            render: (item) => (
              <div style={{cursor: "pointer",textDecoration:"underline"}} onClick={()=>UploadApi.getFile(item,item)}>{item}</div>
            ),
          },
        ]}
        dataSource={candidateList.data}
      />
    </>
  );
}

export default privateUserRoute(CandidateList);
const columns = [
  {
    title: "Company name",
    dataIndex: ["Job","CompanyName"],
    key: "CompanyName",
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
  },
  {
    title: "SDT",
    dataIndex: "Phone",
    key: "phone",
  },
];
