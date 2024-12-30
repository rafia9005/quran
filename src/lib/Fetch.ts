import axios from "axios";

export const Fetch = axios.create({
  baseURL: "https://api.quran.gading.dev",
  headers: {
    "Content-Type": "application/json"
  }
})
