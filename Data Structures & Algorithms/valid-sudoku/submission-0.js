class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        // how do we check valid soduko ?
        let check = true;
        const n = board.length;
        let sudoku = new Set();
        for(let i =0 ; i < n ; i++){
            for(let j=0 ; j < n ; j++){
                let val = board[i][j]
                if(val == ".") continue;
                // Each row must contain the digits 1-9 without duplicates.
                // Each column must contain the digits 1-9 without duplicates.
                // Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
                let row = `${val} in row ${i}`
                let col = `${val} in col ${j}`
                let subBox = `${val} in ${Math.floor(i/3)}-${Math.floor(j/3)}`
                if(sudoku.has(row) || sudoku.has(col) || sudoku.has(subBox)){
                    return false;
                }else{
                    sudoku.add(row);
                    sudoku.add(col);
                    sudoku.add(subBox);
                }
            }
        }
        return check;
    }
}
