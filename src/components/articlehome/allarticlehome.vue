<template>
  <div>
    <Top />
    <All />
    <!-- <Test /> -->
  </div>
</template>

<script>
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import Top from "../articlehome/Top";
import All from "../articlehome/All";
// import Test from "../articlehome/Test";
export default {
  mounted(){
    Snackbar.open("Have Fun！！！！");
  },

  components: {
    Top,
    All
    // Test
  }
};
</script>


<style scoped>
</style>