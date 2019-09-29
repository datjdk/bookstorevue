<template>
  <div class="card" v-on:click="selectBook">
    <h2>{{book.title}}</h2>
    <i>by {{book.author}}</i>
    <br />
    {{book.year}}
  </div>
</template>

<script>
export default {
  props: ["book"],
  data: {},
  methods: {
    selectBook: function() {
      console.log(this.book);
      this.$emit('select', this.book);
    }
  }
};
</script>

<style scoped>
.card {
  width: 25%;
  padding: 5px;
  border-style: dotted;
  border-bottom-style: solid;
  margin: 10px;
}

.card:hover {
  cursor: grab;
  border-style: solid;
  border-color: #42b983;
}

</style>