<template>
  <div id="app">
    <!--<PlayButton :replaying="false" v-on:childToParent="onPlayClick" v-on:change="show = !show" v-if="!show"></PlayButton>-->

    <div id="upper" v-if="!show">
       <WelcomeMessage></WelcomeMessage>
    </div>
    <div id="lower" v-if="!show">
       <div id="left">
          <PlayButton :replaying="false" v-on:childToParent="onPlayClick" v-on:change="show = !show"></PlayButton>
       </div>
       <div id="right">
          Score: {{score}}
       </div>
    </div>

    <div id="content" v-if="show">
       <div id="upper" v-if="replay">
          <GuessTweet @clicked="scoreUpdate"></GuessTweet>
       </div>
       <div id="upper" v-else>
          <GuessTweet @clicked="scoreUpdate"></GuessTweet>
       </div>
       <div id="lower">
          <div id="left">
             <PlayButton id="replay" :replaying="true" v-on:childToParent="onReplayClick" v-on:change="replay = !replay"></PlayButton>
          </div>
          <div id="right">
             Score: {{score}}
          </div>
       </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import PlayButton from "@/components/PlayButton";
import GuessTweet from "@/components/GuessTweet";
import WelcomeMessage from "@/components/WelcomeMessage";

export default {
   data () {
      return {
         show: false,
         replay: false,
         score: 0
      }
   },
   components: {
      PlayButton,
      GuessTweet,
      WelcomeMessage
   },
   methods: {
    onPlayClick (value) {
       this.show = value;
    },
    onReplayClick (value) {
       this.replay = value;
    },
    scoreUpdate (value) {
      if (value) {
         this.score += 1;
      }
    }
  }
}
</script>

<style>
div div {
  font-size: 2vw;
}

#upper {
   min-height: 26vw;
   max-height: 26vw;
}

#lower {
   min-height: 5.5vw;
   padding: 10px;
   border: 1px solid #55ACEE;
   box-shadow:  -1px 1px #55ACEE,
                -2px 2px #55ACEE,
                -3px 3px #55ACEE,
                -4px 4px #55ACEE,
                -5px 5px #55ACEE;
}

.replay {
  width: 100%;
  color: white;
}
</style>
