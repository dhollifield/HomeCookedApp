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
}
</script>

<style scoped>

.home{
    background-color: #0E0F10;
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