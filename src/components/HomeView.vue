<template>
    <div class="home">
        <h1>Home Cooked</h1>
        <UsersList />
        <MealsList />
        <!-- <h1 v-else>else side</h1> -->
        <!-- <h1>{{ data }}</h1>
        <h1>{{ msg }}</h1> -->
        <!-- <button v-on:click="display">Toggle</button> -->
        <!-- <table class="loop-table">
            <tr>
                <td  class="loop-table">Id</td><td  class="loop-table">Name</td><td  class="loop-table">Email</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td  class="loop-table">{{ user.id }}</td>
                <td  class="loop-table">{{ user.name }}</td>
                <td  class="loop-table">{{ user.email }}</td>
            </tr>
        </table> -->
    </div>
</template>

<script>
import UsersList from './UsersList.vue';
import MealsList from './MealsList.vue';

export default {
    name: 'HomeView',
    components: {
    MealsList,
    UsersList
}
    // props: {
    //     data: String,
    //     msg: String
    // }, data()
    // {
    //     return {
    //         users: [
    //             {id:1,name:'Deanna',email:'deanna@test.com'},
    //             {id:2,name:'Mike',email:'mike@test.com'},
    //             {id:3,name:'Nick',email:'nick@test.com'},
    //             {id:4,name:'Audrey',email:'audrey@test.com'}
    //         ]
    //     }
    // }, methods:
    // {
    //     display()
    //     {
    //         this.show=!this.show
    //     }
    // }
}
</script>

<style scoped>

.home{
    background-color: #264653;
    padding: 10px;
}

.loop-table {
    border: 2px solid black;
}

h1 {
    font-weight: bold;
    padding: 10px;
    text-align: center;
    color: whitesmoke;
}

</style>