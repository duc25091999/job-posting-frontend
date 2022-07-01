import React, { useState } from "react";
import CandidateApi from "../../api/user/candidateApi.user";
export function useCandidateUser() {
  const [candidateList, setCandidateList] = useState({
    loading: true,
    data: [],
  });
  const [candidateId, setCandidateId] = useState("");
  const createCandidate = async (values) => {
    const res = await CandidateApi.create(values);
    return res;
  };
  return {
    candidateList: candidateList,
    candidateId: candidateId,
    setCandidateId: setCandidateId,
    createCandidate: createCandidate,
  };
}
