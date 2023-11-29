<script>
import NavBar from './components/NavBar.vue';
import  TheLoader from './components/TheLoader.vue'
import { mapState } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState({
      showLoading: state => state.showLoading
    })
  },
  components: {
    NavBar,
    TheLoader
  },
}
</script>

<template>
  <NavBar />
  <TheLoader v-if="showLoading"></TheLoader>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
 /* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}  */
</style>