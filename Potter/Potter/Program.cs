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

    class Discount
    {
        public double Discount1 { get; }
        public double Discount2 { get; }
        public double Discount3 { get; }
        public double Discount4 { get; }
        public double Discount5 { get; }

        public Discount()
        {
            Discount1 = 0.00;
            Discount2 = 0.05;
            Discount3 = 0.10;
            Discount4 = 0.20;
            Discount5 = 0.25;
        }
    }

    class Books
    {
        public List<Book> Set { get; }

        public Books(Book book1, Book book2, Book book3, Book book4, Book book5)
        {
            Set.Add(book1);
            Set.Add(book2);
            Set.Add(book3);
            Set.Add(book4);
            Set.Add(book5);
        }

        public int TotalCopies()
        {
            int totalCopies = 0;
            foreach (Book book in Set)
            {
                totalCopies += book.Copies;
            }

            return totalCopies;
        }

        public int Max()
        {
            int max = 0;
            foreach (Book book in Set)
            {
                if (book.Copies > max)
                    max = book.Copies;
            }

            return max;
        }
    }

    class Program
    {

        static void Main(string[] args)
        {
            Console.WriteLine("Start");

            //var r = new Random();
            //var copies = new int[5] { r.Next(6), r.Next(6), r.Next(6), r.Next(6), r.Next(6) };
            var copies = new int[5];
            // user to input
            for(int i = 1; i <= 5; i++)
            {
                Console.WriteLine("Enter number of copies for book #{0}:", i);
                var s = Console.ReadLine();
                copies[i - 1] = int.Parse(s);
            }

            var book1 = new Book { Number = 1, Price = 8, Copies = copies[0] };
            var book2 = new Book { Number = 2, Price = 8, Copies = copies[1] };
            var book3 = new Book { Number = 3, Price = 8, Copies = copies[2] };
            var book4 = new Book { Number = 4, Price = 8, Copies = copies[3] };
            var book5 = new Book { Number = 5, Price = 8, Copies = copies[4] };

            // initialise
            var price = 0.00;
            var books = new Books(book1, book2, book3, book4, book5);
            var discounts = new Discount();
            var totalCopies = books.TotalCopies();
            var max = books.Max();

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
                // only one column
                if (max == 1)
                {
                    switch (totalCopies)
                    {
                        case 3:
                            price += (books.Set[2].Price * 3 * (1 - discounts.Discount3));
                            break;
                        case 4:
                            price += (books.Set[3].Price * 4 * (1 - discounts.Discount4));
                            break;
                        case 5:
                            price += (books.Set[4].Price * 5 * (1 - discounts.Discount5));
                            break;
                        default:
                            price += (books.Set[1].Price * 2 * (1 - discounts.Discount2));
                            break;
                    }
                } 
                // more than one column means different possible matrixes
                else
                {
                    // populate the array with 1s and/or 0s.
                    var matrix = new int[books.Set.Count, max];
                    for (int i = 0; i < books.Set.Count; i++)
                    {
                        // books.Set[i].Copies == max --> put 1 everywhere
                        if (books.Set[i].Copies == max)
                        {
                            for (int j = 0; j < max; j++)
                            {
                                matrix[i, j] = 1;
                            }
                        }
                        else
                        {
                            // books.Set[i].Copies < max --> check price dinamically --> keep MIN price
                            var numCopies = books.Set[i].Copies;
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
                    }
                }
                Console.WriteLine("Total price: {0} Euros", price);
                Console.WriteLine("End");
            }
        }
    }
}
