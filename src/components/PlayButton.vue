<template>
   <button class="btn-lg" style="background-color: #55ACEE;" v-on:click="$emit('change')">{{message}}</button>
</template>

<script>
export default {
   data() {
      return {
         show: false,
         message: "Get Tweets!"
      };
   },
   props: ["replaying"],
   methods: {
      emitToParent () {
         this.$emit("change", this.show)
      }
   },
   created() {
      if (this.replaying) {
         this.message = "Play Again!";
      } 
   }
}
</script>

<style>
.btn-lg: {
	transition-duration: 0.4s !important;
}
.btn-lg:hover {
    border-width: thick;
    cursor: pointer;
}
</style>