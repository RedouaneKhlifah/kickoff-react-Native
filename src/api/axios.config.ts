import axios from "axios";

export default axios.create({
  baseURL: `https://api.sofascore.com/api/v1/`,
});
