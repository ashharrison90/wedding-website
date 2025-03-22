function randomElement(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomColor() {
  const colours = ["#FEB662", "#F1784D", "#819766", "#F39AA0", "#7DB3D5"];
  return randomElement(colours);
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Tile {
  width: string;
  height: string;
  transformOrigin: string;
  transform: string;
  backgroundColor: string;
  animation: string;
  animationDelay: string;
  backfaceVisibility: 'hidden' | 'visible';
}

interface Square {
  transform: string;
  tile: Tile;
}

export const DiscoBallComponent = ({ size = 3 }: { size?: number }) => {
  const radius = 50 * size;
  const squareSize = 6.5 * size;
  const prec = 19.55;
  const fuzzy = 0.001;
  const inc = (Math.PI - fuzzy) / prec;

  let squares: Square[] = [];

  for (let t = fuzzy; t < Math.PI; t += inc) {
    const z = radius * Math.cos(t);
    const currentRadius =
      Math.abs(
        radius * Math.cos(0) * Math.sin(t) -
          radius * Math.cos(Math.PI) * Math.sin(t),
      ) / 2.5;
    const circumference = Math.abs(2 * Math.PI * currentRadius);
    const squaresThatFit = Math.floor(circumference / squareSize);
    const angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
    
    for (let i = angleInc / 2 + fuzzy; i < Math.PI * 2; i += angleInc) {
      const x = radius * Math.cos(i) * Math.sin(t);
      const y = radius * Math.sin(i) * Math.sin(t);

      const square: Square = {
        transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`,
        tile: {
          width: `${squareSize}px`,
          height: `${squareSize}px`,
          transformOrigin: "0 0 0",
          transform: `rotate(${i}rad) rotateY(${t}rad)`,
          backgroundColor: randomColor(),
          animation: "reflect 2s linear infinite",
          animationDelay: `${String(randomNumber(0, 20) / 10)}s`,
          backfaceVisibility: 'hidden'
        }
      };
      
      squares.push(square);
    }
  }

  return (
    <div id="discoBallOuter">
      <div id="discoBall">
        {squares.map((square) => {
          return (
            <div className="square" style={{ transform: square.transform}}>
              <div style={{ ...square.tile }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
