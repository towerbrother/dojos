using System;
using System.Collections.Generic;
using System.Linq;

namespace Bowling
{
    //Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
    //In each frame, the bowler gets up to two tries to knock down all the pins.
    //If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
    //If in two tries he knocks them all down, this is called a “spare” and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
    //If on his first try in the frame he knocks down all the pins, this is called a “strike”. His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
    //If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively.These bonus throws are taken as part of the same turn.
    //If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
    //The game score is the total of all frame scores.

    class Program
    {

        static void Main(string[] args)
        {

            int points = 0;

            //var inputSequence = "X X X X X X X X X X X X"; //300
            //var inputSequence = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-"; //90
            //var inputSequence = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5"; //150
            //var inputSequence = "9- 9- 9- 9- 9- 9- 9- 9- 9- 8"; //89
            //var inputSequence = "9- 9- 9- 9- 9- 9- 9- 9- 9- 7/ 9"; //100
            //var inputSequence = "9- 9- 9- 9- 9- 9- 9- 9- 9- X 9"; //100
            var inputSequence = "9- 9- 9- 9- 9- 9- 9- 9- 9- X X X"; //111
            //var inputSequence = "9- 9- 9- 9- 9- 9- 9- 9- 9- X X 8"; //109

            List<string> sequence = inputSequence.Split(" ").OfType<string>().ToList();

            if(sequence[9].Length == 3)
            {
                var temp = sequence[9].Substring(0, 2);
                sequence.Add(sequence[9][2].ToString());
                sequence[9] = temp;
            }

            Console.WriteLine("Start");
            Console.WriteLine(inputSequence);

            for (int i = 0; i < 10; i++)
            {

                // base case
                if (sequence[i].Contains("-"))
                {
                    points += Int32.Parse(sequence[i][0].ToString());
                }

                // spare case
                if (sequence[i].Contains("/"))
                {
                    points += 10;

                    if (i + 1 < sequence.Count)
                    {
                        points += (sequence[i + 1][0] == 'X' ? 10 : Int32.Parse(sequence[i + 1][0].ToString()));
                    }

                }

                // strike case
                if (sequence[i].Contains("X"))
                {
                   points += 10;

                    if (i + 1 < sequence.Count)
                    {
                        points += (sequence[i + 1][0] == 'X' ? 10 : Int32.Parse(sequence[i + 1][0].ToString()));
                    }

                    if (i + 2 < sequence.Count)
                    {
                        points += (sequence[i + 2][0] == 'X' ? 10 : Int32.Parse(sequence[i + 2][0].ToString()));
                    }

                }
            }

            Console.WriteLine("Total points: {0}", points);
            Console.WriteLine("End");
        }
    }
}
