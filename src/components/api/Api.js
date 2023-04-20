import axios from "axios";
import React, {  useState } from 'react'

function Api(){

  const axios = require("axios");
  const [Teamid, setTeamid] = useState([]);
const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/teams',
  params: {page: '0'},
  headers: {
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    'X-RapidAPI-Key': 'b0644f67b5msh255b72e332085b3p106b2ajsn6220bb6c6f02'
  }
};

axios.request(options).then( res =>
	console.log(res.data)
).catch(function (error) {
	console.error(error);
});
}
export default Api;

//import axios from "axios";

//export default axios.create({
//    baseURL:  'https://api.coinstats.app/public/v1'   
//});