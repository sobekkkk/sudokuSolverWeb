<template>
<div id="home" class="home">
    <div  class="main">
        <div class="title">
            <div class="main--title">
                <h1>Welcome to my Sudoku Solver</h1>
            </div>
            <div class="description">
                <p>This project is about testing my web skills</p>
            </div>
        </div>
        <div class="spacer"></div>
        <div class="mouse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z"
                    fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
                    fill="currentColor" />
            </svg>
            
            <div class="scroll">scroll</div>
        </div>
        <div class="spacer"></div>
        <div id="solver" class="sudoku">
            <table id="sudoku-grid">
                <tr v-for="(row, rowIndex) in sudokuBoard" :key="rowIndex">
                    <td v-for="(cell, colIndex) in row" :key="colIndex" :class="{ 'solve': cell !== 0}">
                        {{ cell }}
                    </td>
                </tr>
            </table>
            <div class="button--container">
                <button id="solve-button" @click="solveSudoku">Résoudre</button>
                <button id="refresh-button" @click="refreshPage">
                    Actualiser la Page
                </button>
            </div>
        </div>
        <div class="spacer--footer"></div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                sudokuBoard: [
                    [3, 4, 5, 0, 0, 0, 0, 0, 8],
                    [6, 1, 0, 0, 8, 3, 5, 4, 9],
                    [7, 9, 0, 0, 4, 5, 0, 0, 6],
                    [0, 0, 0, 1, 5, 7, 0, 0, 0],
                    [0, 0, 0, 0, 6, 4, 9, 0, 0],
                    [0, 7, 1, 9, 0, 0, 4, 0, 0],
                    [0, 0, 9, 0, 2, 0, 6, 0, 4],
                    [0, 5, 0, 0, 1, 0, 0, 0, 0],
                    [2, 0, 6, 0, 0, 0, 3, 0, 0],
                ],
            };
        },
        methods: {
            ///
            solveSudoku() {
                const board = this.sudokuBoard;

                function findEmptyCell(board) {
                    for (let i = 0; i < 9; i++) {
                        for (let j = 0; j < 9; j++) {
                            if (board[i][j] === 0) {
                                return [i, j];
                            }
                        }
                    }
                    return null;
                }

                function usedInRow(board, num, row) {
                    return board[row].includes(num);
                }

                function usedInCol(board, num, col) {
                    return board.map((row) => row[col]).includes(num);
                }

                function usedInSquare(board, num, row, col) {
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            if (board[i + row][j + col] === num) {
                                return true;
                            }
                        }
                    }
                    return false;
                }

                function isValid(board, num, row, col) {
                    return (
                        !usedInRow(board, num, row) &&
                        !usedInCol(board, num, col) &&
                        !usedInSquare(board, num, row - (row % 3), col - (col % 3))
                    );
                }

                const emptyCell = findEmptyCell(board);
                if (!emptyCell) {
                    return true;
                }

                const [row, col] = emptyCell;

                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, num, row, col)) {
                        board[row][col] = num;
                        if (this.solveSudoku()) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            },

            refreshPage() {
                location.reload();
            },
        },
    };
</script>

<style lang="scss">

@media screen and (max-width: 1114px)  {
    .home{
        .main{
            .title{
                .main--title{
                    h1{
                        text-align: center;
                    }
                }
                .description{
                    .p{
                        text-align: center;
                    }
                }
            }

            .spacer{
                width: 100%;
                margin-top: 10rem;
            }

            .spacer--footer{
                width: 100%;
                margin-top: 10rem;
            }

        }
    
    }
}




html { 
    scroll-behavior: smooth
}

@keyframes fadeIn {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

@keyframes HeroSlideIn {
    0% {
        transform: translateY(-10%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}


.home {
    width: 100%;


    .main {
        width: 100%;
        height: 100%;

        .title {
            margin: 150px 0px 0px 0px;
            width: 100%;
            height: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            animation: HeroSlideIn 1s forwards .2s ease;
            font-size: 0;
            will-change: transform, opacity, box-size;


            .main--title {
                font-family: 'Dela Gothic One', cursive;
                font-size: 1.8rem;
                color: #1a1a1a;
                position: relative;
            }
            .description {
                font-family: 'Roboto', sans-serif;
                font-size: 1.2rem;
                color: #1a1a1a;
                font-weight: bold;
                position: relative;
            }
        }

        .mouse {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            animation: HeroSlideIn 1s forwards .2s ease;
            font-size: 0;
            will-change: transform, opacity, box-size;

            svg {
                width: 50px;
                height: 50px;
                color: #D8B259;
            }

            .scroll {
                font-size: 1.2rem;
                color: #D8B259;
                font-weight: 800;
                position: relative;
            }
        }
        
        .sudoku {
            width: 100%;
            
            table {
                border-collapse: collapse;
                margin: 20px auto;
                border: 4px solid #D8B259;                
            }

            table tr:nth-child(3n) td,
            table tr:nth-child(3n + 3) td {
                border-bottom: 4px solid #D8B259;
            }

            table td:nth-child(3n) {
                border-right: 4px solid #D8B259;
            }

            td {
                width: 40px;
                height: 40px;
                text-align: center;
                border: 2px solid #D8B259;
                font-size: 20px;
                font-weight: bold;
                color: transparent; 
                transition: color 0.5s ease-in-out; 
                animation-fill-mode: both;
                animation-delay: 0.3s; 
                animation-duration: 0.3s;

                &:hover {
                    cursor: pointer;
                    background-color: #D8B259;
                    transition: background-color 0.2s ease-in-out;
                }
            }

            .solve {
                color: #1a1a1a; 
            }
        }

        .button--container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 50%;

            button {
                display: block;
                margin: 20px auto;
                padding: 10px 20px;
                background-color: #1a1a1a;
                color: #D8B259;
                border: none;
                cursor: pointer;
                transition: cubic-bezier(0.76, 0.06, 0.78, 1.27) .2s;

                &:hover {
                background-color: #D8B259;
                color: #1a1a1a;
                transform: scale(1.1);
                }
                
            } 
        } 
    }

    .spacer {
        width: 100%;
        margin-top: 25rem;
    }
    .spacer--footer{
        width: 100%;
        margin-top: 15rem;
    }
    .sudoku td:not(:empty) {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: both;
    }

}
</style>
