<template>
  <div class="footer">
    <div class="top">
      <p>For Guireg Capitaine</p>
      <p>The purpose of this project is to test my technical skills.</p>
    </div>
    <div class="bottom">
      <p>By Jules Calloc'h</p>
      <a href="https://github.com/sobekkkk">Github Profile</a>
    </div>

  </div>
</template>

<script>
export default {
    name:"Footer"

}
</script>

<style lang="scss">
.footer{
  height: 140px;
  border-top: 1px solid black;
  padding-top: 20px;

  .top{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p{
      font-size: 1.2rem;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      color: #1a1a1a;
      margin: 0px;
    }

  }

  .bottom{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    p{
      font-size: 1.2rem;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      color: #1a1a1a;
      margin: 0px;
    }

    a{
      font-size: 1.2rem;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      color: #1a1a1a;
      margin: 0px;
      text-decoration: none;
      outline: none;
    }
  }

}
</style>