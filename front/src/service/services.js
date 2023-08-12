import axios from "axios"; // HTTP Client

const API_URL = "http://localhost:8080";
  
  const user = ({firstName, lastName, occupation, city, bio }) => {
    return axios.post(`${API_URL}/user`, {
        firstName,
         lastName,
          occupation,
           city,
            bio });
  };
const AuthService = {
    user
};
export default AuthService;
