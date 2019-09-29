<template>
    <div id="my-header">
        <!-- <img :src="logo" /> -->
        <h1>Book store Vuejs app</h1>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            // logo: require('./assets/logo.png')
        };
    },
    methods: {

    }
}
</script>

<style scoped>
#my-header {
    border-bottom-style: solid;
    padding: 5px;
    margin-bottom: 20px;
    background-color: #42b983;
    color: #fff;
}
</style>