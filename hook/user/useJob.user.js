import React, { useState } from "react";
import JobApi from "../../api/user/jobApi.user";
export function useJobUser() {
  const [jobList, setJobList] = useState({
    loading: true,
    data: [],
    total:0,
  });
  const [job, setJob] = useState({
    loading: true,
    data: {},
  });
  const [jobId, setJobId] = useState("");
  const getJobList = async (params) => {
    setJobList({ ...jobList, loading: true });
    const res = await JobApi.getList(params);
    setJobList({ ...jobList,total:res.total, data: res.data, loading: false });
  };
  const getJobById = async (id) => {
    const res = await JobApi.getById(id);
    setJob({ ...job, data: res.data, loading: false })
  };
  const registerJob = async (id, values) => {
    const res = await JobApi.register(id, values);
    return res;
  };
  return {
    jobList: jobList,
    jobId: jobId,
    job:job,
    setJobId: setJobId,
    setJobList:setJobList,
    getJobList: getJobList,
    getJobById: getJobById,
    registerJob:registerJob
  };
}
