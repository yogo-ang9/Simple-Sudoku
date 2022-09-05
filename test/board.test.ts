import { Board } from '../src/models/iboard';

describe("test board creation",()=>{
    it("should create cells, rows, columns and blocks with init value",()=>{
        let sampleCells = [
            2, 0, 4, 6, 1, 0, 0, 0, 5,
            0, 0, 5, 0, 0, 0, 0, 3, 0,
            6, 0, 0, 0, 7, 0, 0, 0, 8,
            0, 0, 0, 0, 0, 5, 0, 0, 3,
            0, 0, 2, 0, 0, 0, 5, 4, 9,
            0, 0, 0, 0, 9, 0, 0, 8, 2,
            9, 8, 0, 7, 5, 0, 0, 0, 0,
            0.4, 0, 0, 2, 6, 0, 9, 7,
            0, 0, 0, 1, 3, 0, 0, 0, 0
        ];
        let target = new Board(sampleCells);
        
    });
});