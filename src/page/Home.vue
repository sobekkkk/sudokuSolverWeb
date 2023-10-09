<template>
<div class="home">
    <div class="main">
        <div class="title">
            <div class="main--title"><h1>Welcome to my Sudoku Solver</h1></div>
            <div class="description"><p>This project is about to test my web skills </p></div>
        </div>
        <div class="mouse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z" fill="currentColor" /></svg>
            <div class="scroll">scroll</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style lang="scss">
.home{
    border: 1px solid green;
    width: 100%;
    height: 80vh;

    .main{
        width: 100%;
        height: 100%;

        .title{
            margin: 150px 0px 0px 0px;
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;


            .main--title{
                font-family: 'Dela Gothic One', cursive;
                font-size: 1.8rem;
                color: #1a1a1a;
                position: relative;
            }

            .description{
                font-family: 'Roboto', sans-serif;
                font-size: 1.2rem;
                color: #1a1a1a;
                font-weight: bold;
                position: relative;
            }
        }

        .mouse{
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            svg{
                width: 50px;
                height: 50px;
                color: #D8B259;
            }


            .scroll{
                font-size: 1.2rem;
                color: #D8B259;
                font-weight: 800;
                position: relative;
            }
        }
    }


}
</style>