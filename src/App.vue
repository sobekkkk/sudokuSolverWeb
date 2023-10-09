
<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>

</template>


<script>
import Home from "./page/Home.vue"
import Header from "./components/header.vue"
import Footer from './components/footer.vue'

export default{
  name: 'App',
  components : {
    Home,
    Footer,
    Header

  }


}


</script>



<style lang="scss">
@import url('./style/reset.css');

#app{
  font-family: 'Roboto', sans-serif;
  padding: 0px 20px;
  height: 100vh;
  border: 1px solid pink;

}


</style>
