import axios from "axios";
const KEY = "AIzaSyCYq7uZfrOnH5aItlaBGZnAFz3bhHqG5_M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
