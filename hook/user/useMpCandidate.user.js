import React, { useState } from "react";
import mpCandidateApi from "../../api/user/mpCandidate.user";
export function useMpCandidateUser() {
  const [candidateList, setCandidateList] = useState({
    loading: true,
    data: [],
  });
  const [candidateId, setCandidateId] = useState("");
  const createCandidate = async (values) => {
    const res = await mpCandidateApi.create(values);
    return res;
  };
  return {
    candidateList: candidateList,
    candidateId: candidateId,
    setCandidateId: setCandidateId,
    createCandidate: createCandidate,
  };
}
