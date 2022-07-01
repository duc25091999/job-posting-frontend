import API from "../api";
const JobApi = {
  getList: async (params={ page : 1, size : 6, Address : "", JobTitle : "", All:false }) => {
    try {
      const response = await API.get("/user/job",{ params : params}).then((res) => res.data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const response = await API.get(`/user/job/${id}`).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  register: async (id, value) => {
    try {
      const response = await API.put(`/user/job/register/${id}`, value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default JobApi;
