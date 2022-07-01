import API from "../api";
const JobApi = {
  getList: async (params={ page : 1, size : 6, Area : "", JobTitle : "", All: true }) => {
    try {
      const response = await API.get("/admin/job", { params : params}).then((res) => res.data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const response = await API.get(`/admin/job/${id}`).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  create: async (value) => {
    try {
      const response = await API.post("/admin/job/create", value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await API.delete(`/admin/job/delete/${id}`).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (id, value) => {
    try {
      const response = await API.put(`/admin/job/update/${id}`, value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  register: async (id, value) => {
    try {
      const response = await API.put(`/admin/job/register/${id}`, value).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default JobApi;
