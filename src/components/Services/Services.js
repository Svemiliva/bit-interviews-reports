import axios from "axios";

export const nesto =() => {
    const login = {
        "email": "dev@dev.com",
        "password": "developer"
      };
    axios.post("http://localhost:3333/login", login)
        .then(response => console.log(response.data.accessToken));
        
}
