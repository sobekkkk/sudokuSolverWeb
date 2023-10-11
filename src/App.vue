
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
    Header,
    Footer
    

  }


}


</script>



<style lang="scss">

#app{
  font-family: 'Roboto', sans-serif;
  padding: 0px 20px;


}


</style>
