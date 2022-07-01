import { privateUserRoute } from "../../shared";
import React, { useState, useEffect } from "react";
import { Button, Space, Table, Form, Col, Row, Input } from "antd";
import { EnvironmentFilled, SearchOutlined } from "@ant-design/icons";
import { useMpCandidateAdmin } from "../../hook/admin/useMpCandidate.admin";
import moment from "moment";
function CandidateList() {
  const [form] = Form.useForm();
  const pagination = {
    page: 1,
    size: 6,
  };
  const { candidateList, getCandidateList, candidateId, setCandidateId } =
    useMpCandidateAdmin();
  useEffect(() => {
    getCandidateList({ ...pagination });
  }, []);
  const onChange = (values) => {
    getCandidateList({
      ...form.getFieldsValue(),
      page: values.current,
      size: pagination.size,
    });
  };

  return (
    <>
      <Table
        scroll={{ x: 1000 }}
        loading={candidateList.loading}
        onChange={onChange}
        pagination={{
          pageSize: pagination.size,
          total: candidateList.total,
          defaultCurrent: 1,
        }}
        columns={[...columns]}
        dataSource={candidateList.data}
      />
    </>
  );
}

export default privateUserRoute(CandidateList);
const columns = [
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
    title: "Phone number",
    dataIndex: "Phone",
    key: "phone",
  },
  {
    title: "DoB",
    dataIndex: "DateOfBirth",
    key: "DateOfBirth",
    render: (item) => moment(new Date(item)).format("DD/MM/YYYY"),
  },
];
