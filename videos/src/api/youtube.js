import axios from 'axios';

const KEY = "AIzaSyC1PHIyH__J9J0a60DrBV7_hAksqsKTceI";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});