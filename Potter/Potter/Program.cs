using System;
using System.Collections.Generic;

namespace Potter
{
    /*
    One copy of any of the five books costs 8 EUR. 
    If, however, you buy two different books from the series, you get a 5% discount on those two books. 
    If you buy 3 different books, you get a 10% discount. With 4 different books, you get a 20% discount. 
    If you go the whole hog, and buy all 5, you get a huge 25% discount.

    Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR.

    For example, how much does this basket of books cost?
    2 copies of the first book
    2 copies of the second book
    2 copies of the third book
    1 copy of the fourth book
    1 copy of the fifth book
    answer :

    (4 * 8) - 20% [first book, second book, third book, fourth book] + (4 * 8) - 20% [first book, second book, third book, fifth book] = 51.20
    two sets of 4 books is cheaper than one of 5 books and one of 3 books
     */

    class Book
    {
        public int Number { get; set; }
        public int Price { get; set; }
        public int Copies { get; set; }
    }
    class Program
    {

        static void Main(string[] args)
        {
            Console.WriteLine("Start");

            var copies = new int[5];

            // user to input
            for(int i = 1; i <= 5; i++)
            {
                Console.WriteLine("Enter number of copies for book #{0}:", i);
                var s = Console.ReadLine();
                copies[i - 1] = int.Parse(s);
            }

            // initialise list
            var books = new List<Book> { new Book { Number = 1, Price = 8, Copies = copies[0] }, new Book { Number = 2, Price = 8, Copies = copies[1] }, new Book { Number = 3, Price = 8, Copies = copies[2] }, new Book { Number = 4, Price = 8, Copies = copies[3] }, new Book { Number = 5, Price = 8, Copies = copies[4] } };

            double price = 0;
            double discount2 = 0.05;
            double discount3 = 0.1;
            double discount4 = 0.2;
            double discount5 = 0.25;

            // calculate total copies
            int totalCopies = 0;
            foreach (Book book in books)
            {
                totalCopies += book.Copies;
            }
             
            // case 0
            if (totalCopies == 0)
            {
                Console.WriteLine("Total price: 0 Euros");
            }
            // case 1
            else if (totalCopies == 1)
            {
                Console.WriteLine("Total price: 8 Euros");

            }
            // case 2+
            else
            {
                // max value will tell us number of columns
                int max = 0;
                foreach (Book book in books)
                {
                    if (book.Copies > max)
                        max = book.Copies;
                }

                // if max is 1 than there is only one column
                if (max == 1)
                {
                    switch (totalCopies)
                    {
                        case 3:
                            price += (8 * 3 * (1 - discount3));
                            break;
                        case 4:
                            price += (8 * 4 * (1 - discount4));
                            break;
                        case 5:
                            price += (8 * 5 * (1 - discount5));
                            break;
                        default:
                            price += (8 * 2 * (1 - discount2));
                            break;
                    }
                } 
                // more than one column means different possible matrixes
                else
                {
                    // populate the array with 1s and/or 0s.
                    var matrix = new int[books.Count, max];
                    for (int i = 0; i < books.Count; i++)
                    {
                        int numCopies = books[i].Copies;
                        for (int j = 0; j < max; j++)
                        {
                            if (numCopies > 0)
                            {
                                matrix[i, j] = 1;
                                numCopies--;
                            }
                            else
                            {
                                matrix[i, j] = 0;
                            }
                        }
                    }

                    var sums = new int[max];
                    for (int j = 0; j < max; j++)
                    {
                        int columnSum = 0;
                        for (int i = 0; i < books.Count; i++)
                        {
                            columnSum += matrix[i, j];
                        }


                        //switch (columnSum)
                        //{
                        //    case 2:
                        //        price += (8 * 2 * (1 - discount2));
                        //        break;
                        //    case 3:
                        //        price += (8 * 3 * (1 - discount3));
                        //        break;
                        //    case 4:
                        //        price += (8 * 4 * (1 - discount4));
                        //        break;
                        //    case 5:
                        //        price += (8 * 5 * (1 - discount5));
                        //        break;
                        //    default:
                        //        price += 8;
                        //        break;
                        //}
                    }
                }
                Console.WriteLine("Total price: {0} Euros", price);
                Console.WriteLine("End");
            }
        }
    }
}
