import axios from "axios"

export default {
   async getTweets() {
      let running = true;
      while (running) {
         let res = await axios.post("http://localhost:3000/");
         while (!res.data) {
            res = await axios.post("http://localhost:3000/");
         }
         if (res.data.tweet.lang =="en" && !("retweeted_status" in res.data.tweet) && !res.data.tweet.in_reply_to_screen_name) {
            running = false
            return res.data;
         }
      }
   }
}