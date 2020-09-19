import axios from "axios"

export default {
   async getTweets() {
      let running = true;
      while (running) {
         let baseUrl = "https://guess-that-tweet-zachlevaton.herokuapp.com/" || "http://localhost:3000";
         let res = await axios.post(baseUrl);
         while (!res.data) {
            res = await axios.post(baseUrl);
         }
         if (res.data.tweet.lang =="en" && !("retweeted_status" in res.data.tweet) && !res.data.tweet.in_reply_to_screen_name) {
            running = false
            return res.data;
         }
      }
   }
}