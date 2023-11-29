<template>
    <div class="child">
        <h1>Meals</h1>
        <div v-for="meal in meals" :key="meal.id" class="meals">
                <p class="loop-table">MAIN DISH: {{ meal.mainDish }}</p>
                <p class="loop-table">SIDE DISH: {{ meal.sideDish1 }}</p>
                <p class="loop-table">SIDE DISH: {{ meal.sideDish2 }}</p>
                <p class="loop-table">FUEL TYPE: {{ meal.fuelType.fuelTypeName }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            meals: []
        }
    },
    methods: {
        getMeals() {
            fetch('https://localhost:7026/api/Meal')
                .then(response => response.json())
                .then(data => this.meals = data)
        }
    },
    mounted() {
        this.getMeals()
    }
}
</script>

<style scoped>
.child {
    background-color: #f4a261;
    padding: 30px;
    margin: 20px;
}

.meals {
    background-color: whitesmoke;
    border: 2px solid black;
    padding: 10px;
}

</style>