import API from "../api";
const MPCandidateApi = {
  getList: async (params={ page : 1, size : 10 }) => {
    try {
      const response = await API.get("/admin/mp",{ params : params}).then((res) => res.data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const response = await API.get(`/admin/mp/${id}`).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  create: async (value) => {
    try {
      const response = await API.post("/admin/mp/create", value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await API.delete(`/admin/delete/mp/${id}`).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (id, value) => {
    try {
      const response = await API.put(`/admin/update/mp/${id}`, value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default MPCandidateApi;
