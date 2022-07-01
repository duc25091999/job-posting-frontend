import API from "../api";
const UploadApi = {
  getFile: async (id,name) => {
    try {
      const response = await API.get(`/files/${id}`,{responseType:"blob"})
      console.log(response)
      downloadfile(response.data,name);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
const downloadfile = (data,name) => {
  const blob = new Blob([data], { type: "application/pdf" });
  const href = window.URL.createObjectURL(blob);
  const theLink = document.createElement("a");
  theLink.href = href;
  theLink.download = name + ".pdf";
  document.body.appendChild(theLink);
  theLink.click();
  document.body.removeChild(theLink);
};
export default UploadApi;
