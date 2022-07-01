import API from "../api";
const CandidateApi = {
  create: async (value) => {
    try {
      const response = await API.post("/user/candidate/create", value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default CandidateApi;
