<template>
  <div id="forumhome">
    <Top />
    <Secend />
    <Tiles />
    <SecendTiles />

    <Footer />
    
  </div>
</template>


<script>
import Top from "../forumHome/Top";
import Secend from "../forumHome/Secend";
import Tiles from "../forumHome/Tiles";
import Footer from "../forumHome/Footer";
import SecendTiles from "../forumHome/SecendTiles";


export default {
  components: {
    Top,
    Secend,
    Tiles,
    Footer,
    SecendTiles,
    
  }
};
</script>

