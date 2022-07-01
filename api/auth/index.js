import API from "../api";

export const login = async (param) => {
  try {
    const response = await API.post("/auth/login", param).then(
      (res) => res.data
    );
    if(response.success){
      setTokenUser(response)
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const checkTokenIfValid = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const setTokenUser = (params) => {
  const { token } = params;
  localStorage.setItem("accessToken", token);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
