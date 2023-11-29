<template>
<div>
    <h2>Meals</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Main Dish</th>
                <th>Side Dish 1</th>
                <th>Side Dish 2</th>
                <th>Fuel Type</th>
                <th>Meal Type</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="meal in meals" :key="meal.id">
                <td>{{ meal.id }}</td>
                <td>{{ meal.mealDate }}</td>
                <td>{{ meal.meal.mainDish }}</td>
                <td>{{ meal.meal.sideDish1 }}</td>
                <td>{{ meal.meal.sideDish2 }}</td>
                <td>{{ meal.meal.fuelType.fuelTypeName }}</td>
                <td>{{ meal.mealTypeName.mealTypeName }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';
import { GET_USER_TOKEN_GETTER, LOADING_SPINNER_SHOW_MUTATION } from '../store/storeconstants';
export default {
    data() {
        return {
            meals: [],
        };
    },
    computed: {
        ...mapGetters('auth', {
            token: GET_USER_TOKEN_GETTER,
        }),
    },
    mounted() {
        this.showLoading(true);
        axios
        .get('https://localhost:7026/api/UserMeal/${id}')
        .then(response => {
            this.formatMeals(response.data);
            this.showLoading(false);
        }).catch(() => {
            this.showLoading(false);
        });
    },
    methods: {
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        formatMeals(meals) {
        for (let id in meals) {
            this.meals.push({...meals[id], id: id})
        }
        console.log(this.meals);
        }
    }
};
</script>

<style scoped>
</style>

