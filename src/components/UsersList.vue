<template>
    <div class="child">
        <h1>Users</h1>
        <div v-for="user in users" :key="user.id" class="users">
                <p class="loop-table">NAME: {{ user.firstName }} {{  user.lastName }}</p>
                <p class="loop-table">EMAIL: {{ user.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        getUsers() {
            fetch('https://localhost:7026/api/User')
                .then(response => response.json())
                .then(data => this.users = data)
        }
    }, 
    mounted() {
        this.getUsers()
    }
}
</script>

<style scoped>
.child {
    background-color: #e9c46a;
    padding: 30px;
    margin: 20px;
}

.users {
    background-color: whitesmoke;
    border: 2px solid black;
    padding: 10px;
}

</style>