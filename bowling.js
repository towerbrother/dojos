/*

Create a program, which, given a valid sequence of rolls for one line of American Ten-Pin Bowling, produces the total score for the game. 
Here are some things that the program will not do:
- We will not check for valid rolls.
- We will not check for correct number of rolls and frames.
- We will not provide scores for intermediate frames.

We can briefly summarize the scoring for this form of bowling:
- Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
- In each frame, the bowler gets up to two tries to knock down all the pins.
-- If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
-- If in two tries he knocks them all down, this is called a “spare” and his score for the frame is ten plus the number of pins knocked down on his next throw 
   (in his next turn).
-- If on his first try in the frame he knocks down all the pins, this is called a “strike”. His turn is over, and his score for the frame is 
   ten plus the simple total of the pins knocked down in his next two rolls.
-- If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. 
- These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: 
  the bonus throws are only used to calculate the score of the final frame.
- The game score is the total of all frame scores.

*/

function whatFrame(frame) {
  if (frame) {
    if (frame.includes("-")) return "missed";
    if (frame.includes("/")) return "spare";
    if (frame.includes("X")) return "strike";
    if (Number(frame)) return "number";
  } else {
    return null;
  }
}

function bowling(rolls) {
  const start = window.performance.now();
  let score = 0;
  const array = rolls.split(" ");

  for (let i = 0; i < 10; i++) {
    if (whatFrame(array[i]) === "missed") {
      score += Number(array[i][0]);
    }

    if (whatFrame(array[i]) === "spare") {
      score += 10;

      if (whatFrame(array[i + 1])) {
        score +=
          whatFrame(array[i + 1]) === "strike" ? 10 : Number(array[i + 1][0]);
      }
    }

    if (whatFrame(array[i]) === "strike") {
      score += 10;
      if (whatFrame(array[i + 1])) {
        score +=
          whatFrame(array[i + 1]) === "strike" ? 10 : Number(array[i + 1][0]);
      }
      if (whatFrame(array[i + 2])) {
        score +=
          whatFrame(array[i + 2]) === "strike" ? 10 : Number(array[i + 2][0]);
      }
    }

    if (whatFrame(array[i]) === "number") {
      score += Number(array[i]);
    }
  }

  const end = window.performance.now();
  const elapsed = end - start;
  console.log(`time: ${elapsed.toFixed(5)} ms`, `score: ${score}`);

  return score;
}

bowling("9- 9- 9- 9- 9- 9- 9- 9- 9- X X 8");

/*

X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150

... 8-       81 += 8          
... 7/ 9     81 = 10 + 9      
... X 9-     81 = 10 + 9
... X X X    81 = 10 + 10 + 10
... X X 8    81 = 10 + 10 + 8

*/
