<template>
    <div>
        <app-header></app-header>

        <table class="form">
            <tr>
                <td class="right">Name</td>
                <td><input v-model="book.title"/></td>
            </tr>
            <tr>
                <td class="right">Author</td>
                <td><input v-model="book.author"/></td>
            </tr>
            <tr>
                <td class="right">Published in</td>
                <td><input v-model.number="book.year" type="number"></td>
            </tr>
            <tr>
                <td></td>
                <td style="text-align: left;">
                    <button v-show="!updating" v-on:click="addNew">Add</button>
                    <button v-show="updating" v-on:click="update">Update</button>
                    <button v-show="updating" v-on:click="cancelUpdate">Cancel</button>
                </td>
            </tr>
        </table>
        <br>
        
        <h1>Book list</h1>
        <table class="form">
            <tr>
                <td class="right">Search</td>
                <td><input v-on:keyup="lookUp" v-model="searchKey"/> </td>
                <td><button v-bind:class="{ hide: !searching, show: searching }" v-on:click="clearSearch">Clear</button></td>
            </tr>
        </table>
        <br>
        
        <div v-if="!searching">
            <div v-for="book in books">
                <book-card v-on:select="updateForm" class="card" v-bind:book="book"></book-card>
            </div>
        </div>
        <div v-else>
            <div v-for="book in filterResult">
                <book-card v-on:select="updateForm" class="card" v-bind:book="book"></book-card>
            </div>
        </div>
        <app-footer style="clear: left;" v-bind:developer="developer" v-bind:year="year"></app-footer>

    </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import Card from './Card.vue'

export default {
    props: ["developer", "year"],
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'book-card': Card
    },
    data: function() {
        return {
            searchKey: "",
            searching: false,
            updating: false,
            book: {
                title: "",
                author: "",
                year: 2019
            },
            books: [
                {title: "banana", author: "jim", year: 2018},
                {title: "apple", author: "jack", year: 1994},
                {title: "orange", author: "hahnah", year: 2004},
                {title: "durian", author: "jon", year: 1994},
                {title: "chilli pepper", author: "alice", year: 1994},
                {title: "cucumber", author: "hana", year: 2014},
                {title: "watermelon", author: "tom", year: 2011},
                {title: "cheese", author: "mark", year: 1957},
                {title: "orion", author: "thomas", year: 1976},
                {title: "lemon", author: "bucky", year: 1985}
            ],
            filterResult: [],
        }
    },
    methods: {
        addNew: function() {
            console.log("add new book.");

            if(this.book.title.length == 0 || this.book.author.length == 0 || this.book.year.length == 0) {
                alert("All fields arre required!");
                return;
            }

            this.books.splice(0, 0, JSON.parse(JSON.stringify(this.book)));
            this.clearFormInput();
        },
        update: function() {
            console.log("update book.");
            this.book = {};
            this.updating = false;
        },
        clearFormInput:function(){
            this.book.title="";
            this.book.author="";
            this.book.year = null;
        },
        lookUp: function(){
            console.log(this.searchKey);
            let result = [];
            for(var i=0; i < this.books.length; i++) {
                let item = this.books[i];
                if(item.title.includes(this.searchKey)){
                    result.push(item)
                }
            }
            this.filterResult = result;

            if(this.searchKey.length > 0) {
                this.searching = true;
            } else {
                console.log("clear search.");
                this.searching = false;
                this.filterResult = this.books;
            }
        },
        clearSearch: function() {
            console.log("clear search.");
            this.searchKey = "";
            this.searching = false;
            this.filterResult = this.books;
        },
        updateForm: function(selectedBook){
            console.log("update form from selected book.");
            this.book = selectedBook;
            this.updating = true;
        },
        cancelUpdate: function(){
            console.log("cancel update.");
            this.updating = false;
            this.book = {};
        }
    }
}
</script>

<style scoped>
.form {
  margin: auto;
  padding: 10px;
}

.right {
    text-align: right;
}

.hide {
    visibility: hidden;
}

.show {
    visibility: visible;
}

.card {
    float: left;
    padding: 7px;
}

</style>