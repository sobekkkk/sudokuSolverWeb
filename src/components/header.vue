<template>
  <div class="header">
    <h1 class="logo">Sudoku<span class="dot">.</span>Solver</h1>
    <ul>
      <li><a href="#home">Home page</a></li>
      <li><a href="#solver">Solver</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"Header"

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Roboto:wght@100&display=swap');


.header{
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    ul{
      display: flex;
      list-style: none; 
      
      
      & li{
        font-family: 'Dela Gothic One', cursive;
        margin: 1.5rem 3rem;
        font-size: 1.2rem;
      } 
      
      & li :hover{
        cursor: pointer;
      }

      & a{
            outline: none;
            text-decoration: none;
            color: #D8B259;
          }
    }

    .logo{
      font-family: 'Dela Gothic One', cursive;
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      position: relative;
      z-index: 1;
      & .dot{
        color: #D8B259;
      }
    }
    
}

</style>