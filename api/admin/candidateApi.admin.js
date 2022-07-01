import API from "../api";
const CandidateApi = {
  getList: async (params={ page : 1, size : 10, CompanyName : "" }) => {
    try {
      const response = await API.get("/admin/candidate",{ params : params}).then((res) => res.data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const response = await API.get(`/admin/candidate/${id}`).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  create: async (value) => {
    try {
      const response = await API.post("/admin/candidate/create", value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await API.delete(`/admin/candidate/delete/${id}`).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (id, value) => {
    try {
      const response = await API.put(`/admin/candidate/update/${id}`, value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default CandidateApi;
