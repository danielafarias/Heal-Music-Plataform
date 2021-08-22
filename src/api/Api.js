import axios from 'axios';


const baseUrl = 'https://api.deezer.com';

export const getTrackChart = async () => {
  const response = await axios.get(baseUrl + `/chart/0/tracks`)
  console.log(response)
  return response.data;
}
