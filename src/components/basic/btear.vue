<template>
  <div class="bottom-tear-wrapper">
    <div class="bottom-tear-container">
      <slot>
      </slot>
    </div>
    <div class="tear-sheet-bottom-tear"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  }
}

</script>
<style scoped>
.tip-wrapper {
  display: block;
  cursor: pointer;
  position: relative;
}

.bottom-tear-container{
  border: 1px solid #d9d9d9;
  border-bottom: none;
  overflow: hidden;
}

.tear-sheet-bottom-tear {
  height: 10px;
  background-image: url(../../assets/images/bottom-tear.svg);
  background-repeat: no-repeat;
}
.tear-sheet-bottom-tear img{
  width:;
}


</style>
