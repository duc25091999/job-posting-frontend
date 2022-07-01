import React, { useState } from "react";
import JobApi from "../../api/admin/jobApi.admin";
export function useJobAdmin() {
  const [jobList, setJobList] = useState({
    loading: true,
    data: [],
    total: 0,
  });
  const [jobId, setJobId] = useState("");
  const getJobList = async (params) => {
    setJobList({ ...jobList, loading: true });
    const res = await JobApi.getList(params);
    setJobList({
      ...jobList,
      total: res.total,
      data: res.data,
      loading: false,
    });
  };
  const getJobById = async (id) => {
    const res = await JobApi.getById(id);
    return res;
  };
  const createJob = async (values) => {
    const res = await JobApi.create(values);
    return res;
  };
  const updateJob = async (id, values) => {
    const res = await JobApi.update(id, values);
    return res;
  };
  const deleteJob = async (id) => {
    const res = await JobApi.delete(id);
    return res;
  };
  const registerJob = async (id, values) => {
    const res = await JobApi.register(id, values);
    return res;
  };
  return {
    jobList: jobList,
    jobId: jobId,
    setJobId: setJobId,

    getJobList: getJobList,
    getJobById: getJobById,
    createJob: createJob,
    updateJob: updateJob,
    deleteJob: deleteJob,
    registerJob: registerJob,
  };
}
