<template>
  <div>
    <Top />
    <Author />
    <Comment />
    <CommentPost />
  </div>
</template>

<script>
import Top from "../commenthome/Top";
import Author from "../commenthome/Author";
import Comment from "../commenthome/Comment";
import CommentPost from "../commenthome/CommentPost";
export default {
  components: {
    Top,
    Author,
    Comment,
    CommentPost
  }
};
</script>