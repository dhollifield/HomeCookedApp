<template>
    <div class="home">
        <h1>Home Cooked</h1>
        <UsersList />
        <MealsList />
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