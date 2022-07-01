import API from "../api";
const mpCandidateApi = {
  create: async (value) => {
    try {
      const response = await API.post("/user/candidate/mp/create", value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default mpCandidateApi;
