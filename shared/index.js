import Login from "../pages/admin/login";
import AdminLayout from "../layout/AdminLayout";

export const privateUserRoute = (Component) => {
  const Auth = (props) => {
    if (!isUser()) {
      return <Login />;
    } else return <AdminLayout><Component {...props} /></AdminLayout>;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

  export const isUser = () => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) return true;
      else return false;
    }
  };
  
