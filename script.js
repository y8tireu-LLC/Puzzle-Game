// script.js
document.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const emptyTile = document.querySelector('.tile.empty');

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (canSwap(tile, emptyTile)) {
                swapTiles(tile, emptyTile);
                if (isSolved(tiles)) {
                    alert('Congratulations! You solved the puzzle!');
                }
            }
        });
    });

    function canSwap(tile1, tile2) {
        const tile1Index = tiles.indexOf(tile1);
        const tile2Index = tiles.indexOf(tile2);
        const row1 = Math.floor(tile1Index / 3);
        const col1 = tile1Index % 3;
        const row2 = Math.floor(tile2Index / 3);
        const col2 = tile2Index % 3;

        return (
            (row1 === row2 && Math.abs(col1 - col2) === 1) ||
            (col1 === col2 && Math.abs(row1 - row2) === 1)
        );
    }

    function swapTiles(tile1, tile2) {
        const temp = tile1.textContent;
        tile1.textContent = tile2.textContent;
        tile2.textContent = temp;

        tile1.classList.toggle('empty');
        tile2.classList.toggle('empty');
    }

    function isSolved(tiles) {
        for (let i = 0; i < tiles.length - 1; i++) {
            if (tiles[i].textContent != i + 1) {
                return false;
            }
        }
        return true;
    }
});
