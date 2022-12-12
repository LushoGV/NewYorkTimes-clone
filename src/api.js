import axios from "axios";
import { KEY } from "./config.js";

export const getSectionData = async (section, setError) => {
    try {
      let res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${KEY}`);
      return res.data.results.filter(
        (element) => element.title !== "" && element.multimedia !== null
      );
    } catch (error) {
      setError(error.response.status)
      return null
    } 
}

export const getHomeData = async () => {
    let res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`);

    return res.data.results.filter(
      (element) => element.title !== "" && element.multimedia !== null
    );
}

export const getAsideData = async () => {

    const res = await axios.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${KEY}`);

    return res.data.results.filter(
        (element) => 
          element.item_type !== "Video" &&
          element.thumbnail_standard !== undefined
      );
}