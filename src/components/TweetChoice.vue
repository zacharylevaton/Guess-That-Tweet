<template>
   <div>
      <button class="choice" v-bind:value="choice" :disabled='isDisabled' v-bind:style="{backgroundColor: background}">{{ name }}</button>
   </div>
</template>

<script>
export default {
  data () {
     return {
        color: {true:"#90EE90", false:null}
     }
  },
  props: ["choice", "name", "disabled", "answer"],
  computed: {
     isDisabled: function () {
        return this.disabled;
     },
     background: function () {
        return this.color[this.answer && this.disabled];
     }
  }
}
</script>

<style>
.choice {
  margin-top: 1vw;
  width: 100%;
  font-size: .75em;
}

.choice: {
  transition-duration: 0.4s !important;
}
.choice:hover {
    border-width: thick;
    cursor: pointer;
}

.red {
  background-color: #ffcccb;
}

.green {
  background-color: #98FB98;
}
</style>