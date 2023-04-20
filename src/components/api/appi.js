import axios from "axios";

export default axios.create({
    baseURL:  'https://free-nba.p.rapidapi.com/'  ,
    params: {
        seasons: [2020],
        page: '1',
        per_page: '200',
        player_ids: '',
        dates: '',
        game_ids: ''
            },
    headers: {
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': 'b0644f67b5msh255b72e332085b3p106b2ajsn6220bb6c6f02'
}
});