import { privateUserRoute } from "../../shared";
import React, { useState, useEffect } from "react";
import { Button, Space, Table, Form, Input, Col, Row } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CreateJobModal from "../../component/CreateJobModal";
import UpdateJobModal from "../../component/UpdateJobModal";
import { useJobAdmin } from "../../hook/admin/useJob.admin";
import { useVisible } from "../../hook/useVisible";
import moment from "moment";
import { SearchOutlined, EnvironmentFilled } from "@ant-design/icons";

function JobList() {
  const [form] = Form.useForm();
  const pagination = {
    page: 1,
    size: 10,
  };
  const { visible: updateJobModalOpen, setVisible: setUpdateJobModalOpen } =
    useVisible();
  const { visible: createJobModalOpen, setVisible: setCreateJobModalOpen } =
    useVisible();
  const { jobList, getJobList, jobId, setJobId } = useJobAdmin();
  useEffect(() => {
    getJobList({ ...pagination });
  }, []);
  const onChange = (values) => {
    getJobList({...form.getFieldsValue(), page: values.current, size: pagination.size });
  };
  const onSearch = async (values) => {
    getJobList({ ...values, size: pagination.size });
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding: 12 }}>
        <Form form={form} onFinish={onSearch}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name={"JobTitle"}>
                <Input
                  prefix={<SearchOutlined />}
                  placeholder="Enter job title, keyword"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name={"Area"}>
                <Input prefix={<EnvironmentFilled />} placeholder="Area" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button
                  icon={<SearchOutlined />}
                  block
                  htmlType="submit"
                  type="primary"
                >
                  Search
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button type="primary" onClick={() => setCreateJobModalOpen(true)}>
          Add job
        </Button>
      </div>
      <UpdateJobModal
        visible={updateJobModalOpen}
        setVisible={setUpdateJobModalOpen}
        loadList={getJobList}
        jobId={jobId}
        setJobId={setJobId}
      />
      <CreateJobModal
        visible={createJobModalOpen}
        setVisible={setCreateJobModalOpen}
        loadList={getJobList}
      />
      <Table
        scroll={{ x: 1000 }}
        loading={jobList.loading}
        pagination={{
          pageSize: pagination.size,
          total: jobList.total,
          defaultCurrent: 1,
        }}
        onChange={onChange}
        columns={[
          ...columns,
          {
            title: "Number of candidates",
            dataIndex: "Candidate",
            render: (item) => item.length,
          },
          {
            title: "",
            render: (item) => (
              <Space>
                <EditOutlined
                  onClick={() => {
                    setJobId(item._id);
                    setUpdateJobModalOpen(true);
                  }}
                  style={{ color: "#1890ff" }}
                />
              </Space>
            ),
          },
        ]}
        dataSource={jobList.data}
      />
    </>
  );
}

export default privateUserRoute(JobList);
const columns = [
  {
    title: "Company name",
    dataIndex: "CompanyName",
    key: "CompanyName",
  },
  {
    title: "Job title",
    dataIndex: "JobTitle",
    key: "JobTitle",
  },
  {
    title: "Area",
    dataIndex: "Area",
    key: "Area",
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "Address",
  },
  {
    title: "Department",
    dataIndex: "Department",
    key: "Department",
  },
  {
    title: "End date",
    dataIndex: "EndDate",
    key: "EndDate",
    render: (item) => moment(new Date(item)).format("DD/MM/YYYY"),
  },
];
