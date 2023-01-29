import axios from "axios";

const options = {
  method: "GET",
  URL : 'https://youtube-v31.p.rapidapi.com',
  params: {
    maxResults: "50",
  },
  headers: {
    'X-RapidAPI-Key': '3f7f931880mshfc79a666d4df171p1d0fefjsn32180af50fb2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};
export const Api = async (url) => {
  const { data } = await axios.get(`${options.URL}/${url}`, options);  
return data;
}