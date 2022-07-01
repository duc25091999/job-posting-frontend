import React, { useState } from "react";
import CandidateApi from "../../api/admin/candidateApi.admin";
export function useCandidateAdmin() {
  const [candidateList, setCandidateList] = useState({
    loading: true,
    data: [],
  });
  const [candidateId, setCandidateId] = useState("");
  const getCandidateList = async (params) => {
    setCandidateList({ ...candidateList, loading: true });
    const res = await CandidateApi.getList(params);
    setCandidateList({
      ...candidateList,
      total: res.total,
      data: res.data,
      loading: false,
    });
  };
  const getCandidateById = async (id) => {
    const res = await CandidateApi.getById(id);
    return res;
  };
  const deleteCandidate = async (id) => {
    const res = await CandidateApi.delete(id);
    return res;
  };
  const createCandidate = async (values) => {
    const res = await CandidateApi.create(values);
    return res;
  };
  const updateCandidate = async (id, values) => {
    const res = await CandidateApi.update(id, values);
    return res;
  };
  return {
    candidateList: candidateList,
    candidateId: candidateId,
    setCandidateId: setCandidateId,
    getCandidateList: getCandidateList,
    getCandidateById: getCandidateById,
    createCandidate: createCandidate,
    updateCandidate: updateCandidate,
    deleteCandidate: deleteCandidate,
  };
}
