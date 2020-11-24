/*
--Step 1
Rules
If the number is divisible by 3, write “Foo” instead of the number
If the number is divisible by 5, add “Bar”
If the number is divisible by 7, add “Qix”
For each digit 3, 5, 7, add “Foo”, “Bar”, “Qix” in the digits order.
--Step 2
We have a new business request: we must keep a trace of 0 in numbers, each 0 must be replaced by char “*“.
*/

function fooBarQix(number) {
  const array = number.toString().split("");
  const length = array.length;
  let res = "";

  if (number % 3 === 0) res += "Foo";
  if (number % 5 === 0) res += "Bar";
  if (number % 7 === 0) res += "Qix";
  for (let i = 0; i < length; i++) {
    array[i] === "3"
      ? (res += "Foo")
      : array[i] === "5"
      ? (res += "Bar")
      : array[i] === "7"
      ? (res += "Qix")
      : array[i] === "0"
      ? (res += "*")
      : number % 3 === 0 || number % 5 === 0 || number % 7 === 0
      ? ""
      : (res += array[i]);
  }

  console.log(res);

  return res;
}

fooBarQix(105);

// Examples
// 1  => 1
// 2  => 2
// 3  => FooFoo (divisible by 3, contains 3)
// 4  => 4
// 5  => BarBar (divisible by 5, contains 5)
// 6  => Foo (divisible by 3)
// 7  => QixQix (divisible by 7, contains 7)
// 8  => 8
// 9  => Foo
// 10 => Bar*
// 13 => Foo
// 15 => FooBarBar (divisible by 3, divisible by 5, contains 5)
// 21 => FooQix
// 33 => FooFooFoo (divisible by 3, contains two 3)
// 51 => FooBar
// 53 => BarFoo
// 101   => 1*1
// 303   => FooFoo*Foo
// 105   => FooBarQix*Bar
// 10101 => FooQix**
