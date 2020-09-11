<template>
   <div class="hollow-dots-spinner">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
   </div>
</template>

<script>
</script>

<style>
.hollow-dots-spinner, .hollow-dots-spinner * {
   box-sizing: border-box;
}

.hollow-dots-spinner {
   height: 50px;
   width: 100%;
}

.hollow-dots-spinner .dot {
   width: 50px;
   height: 50px;
   margin: 0 calc(50px / 2);
   border: calc(25px / 5) solid #55ACEE;
   border-radius: 50%;
   float: left;
   transform: scale(0);
   animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
}

.hollow-dots-spinner .dot:nth-child(1) {
   animation-delay: calc(0ms * 1);
}

.hollow-dots-spinner .dot:nth-child(2) {
   animation-delay: calc(200ms * 1);
}

.hollow-dots-spinner .dot:nth-child(3) {
   animation-delay: calc(200ms * 2);
}

.hollow-dots-spinner .dot:nth-child(4) {
   animation-delay: calc(200ms * 3);
}


@keyframes hollow-dots-spinner-animation {
   50% {
      transform: scale(1);
      opacity: 1;
   }
   100% {
      opacity: 0;
   }
}
</style>