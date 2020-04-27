
import { ConwaysGameEngine} from '@monarchwadia/conways-game-engine';

const FONT = {
  [1]: "■",
  [0]: "▢",
  default: "? "
}

/**
 * 
 * @param {ConwaysGameEngine} engine 
 */
function renderer(engine) {
  const { world, config } = engine;
  const { rowSize, colSize } = config;

  let string = '';

  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      const value = world[row][col];
      const font = FONT[value] || FONT.default;
      string += font;
    }
    string += '\n';
  }

  return string;

  console.log(string);
}

/* exports.renderer = renderer; */
export default renderer;