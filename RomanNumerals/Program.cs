using System;

namespace RomanNumerals
{
    class Roman
    {
        public int Numeral { get; set; }
        public char Char { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Enter 1 if you want number-to-roman, enter 2 if you want roman-to-number");
            var line = Console.ReadLine();

            Console.WriteLine();
            
            if (line == "1")
            {
                var numbers = new int[] { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
                var romans = new string[] { "M", "CM", "D", "DC", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };

                var length = romans.Length;
                var stringResult = string.Empty;

                Console.WriteLine("Enter a number:");
                          
                var number = Int32.Parse(Console.ReadLine());

                for(int i = 0; i < length; i++)
                {
                    while (numbers[i] <= number)
                    {
                        stringResult += romans[i];
                        number -= numbers[i];
                    }
                }

                Console.WriteLine("Result: {0}", stringResult);

            }
            else
            {

                var romans = new Roman[] { new Roman {Char='M', Numeral=1000}, new Roman { Char = 'D', Numeral = 500 }, new Roman { Char = 'C', Numeral = 100 }, new Roman { Char = 'L', Numeral = 50 }, new Roman { Char = 'X', Numeral = 10 }, new Roman { Char = 'V', Numeral = 5 }, new Roman { Char = 'I', Numeral = 1 } };
                
                int result = 0;

                Console.WriteLine("Enter a roman:");
                var roman = Console.ReadLine();
                char[] romanCharArray = roman.ToCharArray();
                var romanLength = romanCharArray.Length;
                int index = 0;

                while (index < romanLength)
                {
                    if (romans[0].Char.Equals(romanCharArray[index]))
                    {
                        result += romans[0].Numeral;
                        index++;
                        continue;
                    }

                    if (romans[1].Char.Equals(romanCharArray[index]))
                    {
                        if (index + 1 < romanLength && romans[2].Char.Equals(romanCharArray[index + 1])) 
                        {
                            result = romans[1].Numeral - romans[2].Numeral;
                            index += 2;
                            continue;
                        }
                        
                        result += romans[1].Numeral;
                        index++;
                        continue;
                    }

                    if (romans[2].Char.Equals(romanCharArray[index]))
                    {
                        if (index + 1 < romanLength && romans[0].Char.Equals(romanCharArray[index + 1])) 
                        {
                            result = romans[0].Numeral - romans[2].Numeral;
                            index += 2;
                            continue;
                        }
                        
                        result += romans[2].Numeral;
                        index++;
                        continue;
                    }

                    if (romans[3].Char.Equals(romanCharArray[index]))
                    {
                        result += romans[3].Numeral;
                        index++;
                        continue;
                    }

                    if (romans[4].Char.Equals(romanCharArray[index]))
                    {
                        if (index + 1 < romanLength && romans[3].Char.Equals(romanCharArray[index + 1])) 
                        {
                            result = romans[3].Numeral - romans[4].Numeral;
                            index += 2;
                            continue;
                        }
                        if (index + 1 < romanLength && romans[2].Char.Equals(romanCharArray[index + 1])) 
                        {
                            result = romans[2].Numeral - romans[4].Numeral;
                            index += 2;
                            continue;
                        }

                        result += romans[4].Numeral;
                        index++;
                        continue;
                    }

                    if (romans[5].Char.Equals(romanCharArray[index]))
                    {
                        result += romans[5].Numeral;
                        index++;
                        continue;
                    }

                    if (romans[6].Char.Equals(romanCharArray[index]))
                    {
                        if(index + 1 < romanLength && romans[5].Char.Equals(romanCharArray[index + 1])) 
                        {
                            result = romans[5].Numeral - romans[6].Numeral;
                            index += 2;
                            continue;
                        }
                        if(index + 1 < romanLength && romans[4].Char.Equals(romanCharArray[index + 1])) 
                        {
                            result = romans[4].Numeral - romans[6].Numeral;
                            index += 2;
                            continue;
                        }
                        result += 1;
                        index++;
                        continue;
                    }
                }

                Console.WriteLine("Result: {0}", result);
            }
        }
    }
}
