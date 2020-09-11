<template>
   <div id="loading" v-if="loading">
      <Loading></Loading>
      <h2 class="pt-3">Fetching Tweets,</h2>
      <h2>Hang Tight!</h2>
   </div>
   <div v-else>
      {{tweet.tweet.text}}
      <ul style="list-style-type:none; padding-left:0;">
         <li v-for="(choice, index) in tweet.choices" :key="index">
            <TweetChoice :disabled="disabled" :name="tweet.names[index]" :answer="tweet.answer == choice" :choice="choice" @click="buttonPress($event)"></TweetChoice>
         </li>
      </ul>
   </div>
</template>

<script>
import TweetService from "@/services/TweetService";
import TweetChoice from "@/components/TweetChoice";
import Loading from "@/components/Loading";

export default {
   components: {
      Loading,
      TweetChoice
   },
   data () {
      return {
         tweet: {},
         loading: true,
         answer: null,
         choice: null,
         disabled: false
      }
   },
   created() {
      this.loading = true
      this.getTweetData(); 
   },
   methods: {
      async getTweetData() {
         TweetService.getTweets().then(
            (tweet => {
               this.tweet = tweet;
               this.loading = false;
               this.answer = tweet.answer;
            }).bind(this)
         );
      },
      buttonPress (e) {
         this.choice = parseInt(e.target.value);
         this.$emit('clicked', this.answer == this.choice);
         if (this.choice){
            this.disabled = !this.disabled;
         }
         if (this.choice == this.answer) {
            this.score += 1;
         }
      }
   }
}
</script>

<style>
#loading {
   position: relative;
   text-align: center;
   width: 40%;
   left: 30%;
   top: 10vw;
}

div h1 {
   font-size: 3vw;
}
</style>