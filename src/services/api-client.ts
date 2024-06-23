import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "df5359e3d0924a388b2fe70bb5897f53",
  },
});
