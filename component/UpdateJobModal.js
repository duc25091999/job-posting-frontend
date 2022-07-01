import React, { useEffect } from "react";
import { Modal, Form, Input, InputNumber, DatePicker } from "antd";
import { useJobAdmin } from "../hook/admin/useJob.admin";
import TextEditor from "./TextEditor";
import moment from "moment";

function UpdateJobModal({ visible, setVisible, loadList, jobId, setJobId }) {
  const [form] = Form.useForm();
  const { getJobById, updateJob } = useJobAdmin();
  useEffect(() => {
    if (jobId) {
      loadData();
    }
  }, [jobId]);

  const loadData = async () => {
    const res = await getJobById(jobId);
    if (res.success)
      form.setFieldsValue({
        ...res.data,
        EndDate:moment(new Date(res.data.EndDate), "DD/MM/YYYY") || moment(new Date().getDate(), "DD/MM/YYYY")
      });
  };
  const handleCancel = () => {
    setJobId("");
    setVisible(false);
    form.setFieldsValue({
      CompanyName: "",
      JobTitle: "",
      Area:"",
      Address: "",
      Salary: { Min: 0, Max: 0 },
      EndDate: moment(new Date().getDate(), "DD/MM/YYYY"),
      Department: "",
      JobDescription: "",
      Requirement: "",
      Benefit: "",
      Timetable: "",
    });
  };
  const handleOk = () => {
    form.submit();
  };
  const handleSubmit = async (values) => {
    const res = await updateJob(jobId, values);
    if (res.success) {
      setVisible(false);
      form.setFieldsValue({
        CompanyName: "",
        JobTitle: "",
        Area:"",
        Address: "",
        Salary: { Min: 0, Max: 0 },
        EndDate: moment(new Date().getDate(), "DD/MM/YYYY"),
        Department: "",
        JobDescription: "",
        Requirement: "",
        Benefit: "",
        Timetable: "",
      });
      loadList();
      setJobId("");
    }
  };
  return (
    <Modal
      title="Create job"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        form={form}
        name="create-brand"
        scrollToFirstError
        onFinish={handleSubmit}
      >
        <Form.Item
          name="CompanyName"
          label="Company name"
          rules={[
            {
              required: true,
              message: "Company name is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="JobTitle"
          label="Job title"
          rules={[
            {
              required: true,
              message: "Job title is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Area"
          label="Area"
          rules={[
            {
              required: true,
              message: "Area is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Address is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["Salary", "Min"]}
          label="Salary minimum"
          rules={[
            {
              required: true,
              message: "Salary minimum is required!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["Salary", "Max"]}
          label="Salary max"
          rules={[
            {
              required: true,
              message: "Salary max is required!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="EndDate"
          label="End date"
          rules={[
            {
              required: true,
              message: "End date is required!",
            },
          ]}
        >
          <DatePicker format={"DD/MM/YYYY"}/>
        </Form.Item>
        <Form.Item
          name="Department"
          label="Department"
          rules={[
            {
              required: true,
              message: "Department is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="JobDescription" label="Job description">
          <TextEditor />
        </Form.Item>
        <Form.Item name="Requirement" label="Requirement">
          <TextEditor />
        </Form.Item>
        <Form.Item name="Benefit" label="Benefit">
          <TextEditor />
        </Form.Item>
        <Form.Item name="Timetable" label="Timetable">
          <TextEditor />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UpdateJobModal;
