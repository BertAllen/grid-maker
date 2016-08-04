;(function(){

    angular.module("gridMonster", [])
        .component("gridMaker", {
            templateUrl: "app/grid-maker.html",
            controller: GridCreator,
            controllerAs: "gc"
        });
    
    function GridCreator() {
        const gc = this;
        gc.test = "Hello from GridCreator!";

        gc.createGrid = function (size) {
            gc.newGrid = [];
            for (let row = 0; row < size; row++){
                gc.newGrid[row] = [];
                for (let col = 0; col < size; col++){
                    let cell = {
                        x: row,
                        y: col
                    }
                    gc.newGrid[row][col] = cell;
                }
            }
            return gc.newGrid;
        }//end createGrid


        
    }

}());