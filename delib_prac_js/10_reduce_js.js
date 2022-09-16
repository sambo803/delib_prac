// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.
// 1.A. 
// var nums = [5, 10, 8, 3];
// var sum = 0;
// index = 0;
// while (index < nums.length) {
//   sum = sum + nums[index];
//   index++;
// };
// console.log(sum);

// 1.B 
// var nums = [5, 10, 8, 3];
// var sum = 0;
// nums.forEach(function (num) {
//   sum = sum + num;
// });
// console.log(sum);

// 1.C reduce
// var nums = [5, 10, 8, 3];
// var sum = nums.reduce(function (sum, num) {
//   return sum + num;
// }, 0);
// console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".
// 2.A while
// var arr_str = ["volleyball", "basketball", "badminton"];
// var string = "";
// var index = 0;
// while (index < arr_str.length) {
//   string = string + arr_str[index];
//   index++;
// };
// console.log(string);

// 2.B each
// var arr_str = ["volleyball", "basketball", "badminton"];
// var string = "";
// arr_str.forEach(function (word) {
//   string = string + word;
// });
// console.log(string);

// 2.C reduce
// var arr_str = ["volleyball", "basketball", "badminton"];
// var string = arr_str.reduce(function (string, sport) {
//   return string = string + sport;
// }, "");
// console.log(string);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.
// 3.A. while 
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var price_sum = 0;
// var index = 0;
// while (index < arr_h.length) {
//   price_sum = price_sum + arr_h[index]["price"];
//   index++;
// };
// console.log(price_sum);

// 3.B each
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var price_sum = 0;
// arr_h.forEach(function (item) {
//   price_sum += item.price;
// });
// console.log(price_sum);

// 3.C reduce
// var arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var totalPrice = arr_h.reduce(function (sum, item) {
//   return sum + item.price;
// }, 0);
// console.log(sum);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.
// 4.B. each 
// var numbers = [5, 10, 8, 3, 9];
// min_num = numbers[0];
// numbers.forEach(function (num) {
//   if (num < min_num) {
//     min_num = num;
//   };
// });
// console.log(min_num);

// 4.C select
// var numbers = [5, 10, 8, 3, 9];
// var min_num = numbers.reduce(function (min, num) {
//   if (num < min) {
//     return num;
//   } else {
//     return min;
//   }
// }, numbers[0]);
// console.log(min_num);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.


// # SOLUTIONS (using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
// JavaScript solutions: https://gist.github.com/peterxjang/130e1daf6d23f17a1426c8be6012ef21

// # SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
// JavaScript solutions: https://gist.github.com/peterxjang/1f6744f35fa0ab9f0c2726dc2e8c0b32

// # SOLUTIONS (using .reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35
// JavaScript solutions: https://gist.github.com/peterxjang/fb7b3fd6b61f34dbb27a90f24a6e59e9