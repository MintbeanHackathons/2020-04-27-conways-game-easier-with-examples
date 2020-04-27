
//created empty array with nothing in it.
function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i<arr.length; i++) {
        arr [i] = new Array(rows);
    }
    return array;
}

let grid;
let cols;
let rows;
let resolution = 40;

function setup () {
    createCanvas(400, 400);
    //console.table.grid shows a table with all the values

    //iterate on every single row and col, filling it with a random number 0 or 1.
    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(10,10);
    for (let i=0; i< cols; i++) {
        for(let j=0; j<rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw () {

    background(0);
    for (let i=0; i< cols; i++) {
        for(let j=0; j<rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                rect(x, y, resolution, resolution);
            }
        }
    }
}

let next = make2DArray(cols, rows);

//Compute next based on grid
for (let i=0; i< cols; i++) {
    for(let j=0; j<rows; j++) {
    //count live neighbors
    let sum = 0;
    let neighbors = count(grid, i , j);
    
    
    /*sum += grid[i-1][j-1]
    sum += grid[i][j-1]
    sum += grid[i+1][j-1]
    sum += grid[i+1][j]
    sum += grid[i+1][j+1]
    sum += grid[i][j+1]
    sum += grid[i-1][j+1]
    sum += grid[i-1][j]*/

    }
}

    grid = next;

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i=-1; i< 2; i++) {
        for(let j=-1; j<2; j++) {
            sum += grid[i][j]
        }
    }
}