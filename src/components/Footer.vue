<template>
    <div id="footer">
        <p>developed by {{developer}} - {{year}}</p>
    </div>
</template>

<script>
export default {
    props:["developer", "year"],
    data: function(){
        return {
            
        };
    }
}
</script>

<style scoped>
p {
    color: #ffffff;
}

#footer {
    background-color: #222;
    padding: 10px;
}
</style>