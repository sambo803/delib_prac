// #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].
// 1.A. while
// var nums = [2, 32, 80, 18, 12, 3];
// var sm_nums = [];
// var index = 0;
// while (index < nums.length) {
//   var number = nums[index];
//   if (number < 20) {
//     sm_nums.push(number);
//   }
//   index++;
// }
// console.log(sm_nums);

// 1.B each
// var nums = [2, 32, 80, 18, 12, 3];
// var sm_nums = [];
// nums.forEach(function (number) {
//   if (number < 20) {
//     sm_nums.push(number)
//   };
// });
// console.log(sm_nums);

// 1.C select
// var nums = [2, 32, 80, 18, 12, 3];
// var sm_nums = nums.filter(function (number) {
//   return (number < 20);
// });
// console.log(sm_nums);

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].
// var strings = ["winner", "winner", "chicken", "dinner", "weebo"];
// var w_str = [];
// var index = 0;
// while (index < strings.length) {
//   if (strings[index][0] === "w") {
//     w_str.push(strings[index]);
//   }
//   index++;
// }
// console.log(w_str);

// 2.B each
// var strings = ["winner", "winner", "chicken", "dinner", "weebo"];
// var w_str = [];
// strings.forEach(function (string) {
//   if (string[0] === "w") {
//     w_str.push(string)
//   };
// });
// console.log(w_str);

// 2.C select
// var strings = ["winner", "winner", "chicken", "dinner", "weebo"];
// var w_str = strings.filter(function (string) {
//   return string[0] === "w";
// });
// console.log(w_str);

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].
// 3.A while 
// var arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var arr_hi = [];
// var index = 0;
// while (index < arr.length) {
//   var item = arr[index]
//   if (item.price > 5) {
//     arr_hi.push(item);
//   };
//   index++;
// }
// console.log(arr_hi);

// 3.B each
// var arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var arr_hi = [];
// arr.forEach(function (item) {
//   if (item.price > 5) {
//     arr_hi.push(item)
//       ;
//   }
// });
// console.log(arr_hi);

// 3.C filter (select)
// var arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var arr_hi = arr.filter(function (item) {
//   return item.price > 5;
// });
// console.log(arr_hi);

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].
// 4.A while 
// var nums = [2, 4, 5, 1, 8, 9, 7];
// var evens = [];
// var index = 0;
// while (index < nums.length) {
//   var num = nums[index];
//   if (num % 2 === 0) {
//     evens.push(num);
//   };
//   index++;
// };
// console.log(evens)

// 4.B each
// var nums = [2, 4, 5, 1, 8, 9, 7];
// var evens = [];
// nums.forEach(function (number) {
//   if (number % 2 === 0) {
//     evens.push(number);
//   };
// });
// console.log(evens);

// 4.C select(filter- javascript)
// var nums = [2, 4, 5, 1, 8, 9, 7];
// var evens = nums.filter(function (number) {
//   return number % 2 === 0;
// });
// console.log(evens);

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].
// 5.A while
// var arr_str = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var new_a = [];
// var index = 0;
// while (index < arr_str.length) {
//   if (arr_str[index].length < 4) {
//     new_a.push(arr_str[index]);
//   }
//   index++;
// }
// console.log(new_a);

//  5.B each
// var arr_str = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var new_a = [];
// arr_str.forEach(function (string) {
//   if (string.length < 4) {
//     new_a.push(string);
//   }
// })
// console.log(new_a);

// 5.C select(filter javascript)
// var arr_str = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var new_a = arr_str.filter(function (string) {
//   return string.length < 4;
// });
// console.log(new_a);

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

// 6.A.  while 
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var new_a = [];
// var index = 0;
// while (index < arr_h.length) {
//   var item = arr_h[index]
//   if (item.name.length < 6) {
//     new_a.push(item);
//   };
//   index++;
// };
// console.log(new_a);

// 6B. each
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var new_a = [];
// arr_h.forEach(function (short) {
//   if (short.name.length < 6) {
//     new_a.push(short);
//   };
// });
// console.log(new_a);

// 6.C filter
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var new_a = arr_h.filter(function (short) {
//   return short.name.length < 6;
// });
// console.log(new_a);


// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].
// 7.A. while
// var arr_nums = [8, 23, 0, 44, 1980, 3];
// var smalls = [];
// var index = 0;
// while (index < arr_nums.length) {
//   var number = arr_nums[index];
//   if (number < 10) {
//     smalls.push(number);
//   };
//   index++;
// };
// console.log(smalls);

// 7.B each
// var arr_nums = [8, 23, 0, 44, 1980, 3];
// var smalls = [];
// arr_nums.forEach(function (num) {
//   if (num < 10) {
//     smalls.push(num);
//   }
// });
// console.log(smalls);

// 7.C select(filter javascript)
// var arr_nums = [8, 23, 0, 44, 1980, 3];
// var new_a = arr_nums.filter(function (number) {
//   return number < 10;
// });
// console.log(new_a);


// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].
// 8.A while
// var strings = ["big", "little", "good", "bad"];
// var not_b = [];
// var index = 0;
// while (index < strings.length) {
//   var string = strings[index];
//   if (string[0] !== "b") {
//     not_b.push(string);
//   };
//   index++;
// };
// console.log(not_b);

// 8.B. each
// var strings = ["big", "little", "good", "bad"];
// var not_b = [];
// strings.forEach(function (word) {
//   if (word[0] !== "b") {
//     not_b.push(word);
//   }
// });
// console.log(not_b);

// 8.C select(filter in javascript)
// var strings = ["big", "little", "good", "bad"];
// var not_b = strings.filter(function (word) {
//   return word[0] !== "b";
// });
// console.log(not_b);


// #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].
// 9.A while
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var small_h = [];
// var index = 0;
// while (index < arr_h.length) {
//   if (arr_h[index].price < 10) {
//     small_h.push(arr_h[index]);
//   };
//   index++;
// };
// console.log(small_h);

// 9. B each
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var small_h = [];
// arr_h.forEach(function (item) {
//   if (item.price < 10) {
//     small_h.push(item);
//   }
// });
// console.log(small_h);


// 9.C 
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var small_h = arr_h.filter(function (item) {
//   return item.price < 10;
// });
// console.log(small_h);

// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
// 10.A while 
// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var odds = [];
// var index = 0;
// while (index < numbers.length) {
//   if (numbers[index] % 2 === 0) {
//     odds.push(numbers[index]);
//   }
//   index++;
// };
// console.log(odds);

// 10.B each
// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var odds = [];
// numbers.forEach(function (number) {
//   if (number % 2 === 1) {
//     odds.push(number);
//   }
// });
// console.log(odds);

// 10.C select (filter javascript)
// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var odds = numbers.filter(function (number) {
//   return number % 2 === 1;
// });
// console.log(odds);


// # SOLUTIONS (using while loop): https://gist.github.com/peterxjang/7de16ed43ea506e98df3fa15074b84f8
// # JavaScript solutions: https://gist.github.com/peterxjang/d204a0c689d201ceefe2b8e639cc3a27

// # SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/a702894841c7018ed8c127b647ae21f8
//JavaScript solutions: https://gist.github.com/peterxjang/9dc4ae6d3029d95b6d7e88f056809bb9

// # SOLUTIONS (using .select shortcut): https://gist.github.com/peterxjang/b8c8fb8b77b2cae7bb9cc62a3a434761
// JavaScript solutions: https://gist.github.com/peterxjang/88500dbd311a510940b6a693e65ec7f1