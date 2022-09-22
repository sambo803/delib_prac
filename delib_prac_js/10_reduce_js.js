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
// 4.A while
// var numbers = [5, 10, 8, 3, 9];
// var min_num = numbers[0];
// var index = 0;
// while (index < numbers.length) {
//   if (numbers[index] < min_num) {
//     min_num = numbers[index];
//   }
//   index++;
// };
// console.log(min_num);

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
// 5.A while 
// var sports = ["volleyball", "basketball", "badminton"];
// var sum = 0;
// index = 0;
// while (index < sports.length) {
//   sum = sum + sports[index].length;
//   index++;
// };
// console.log(sum);

// 5.B. 
// var sports = ["volleyball", "basketball", "badminton"];
// sum = 0;
// sports.forEach(function (sport) {
//   sum = sum + sport.length;
// });
// console.log(sum);

// 5.C reduce
// var sports = ["volleyball", "basketball", "badminton"];
// var totalLength = sports.reduce(function (sum, sport) {
//   return sum + sport.length;
// }, 0);
// console.log(totalLength);


// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// 6.A. while
// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var lowestPrice = items[0];
// var index = 0;
// while (index < items.length) {
//   if (items[index].price < lowestPrice.price) {
//     lowestPrice = items[index];
//   };
//   index++;
// };
// console.log(lowestPrice);

// 6.B each
// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var lowestPrice = items[0];
// items.forEach(function (item) {
//   if (item.price < lowestPrice.price) {
//     lowestPrice = item;
//   }
// });
// console.log(lowestPrice);

// 6.C reduce
// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var cheapestItem = items.reduce(function (cheapestItem, item) {
//   if (item.price < cheapestItem.price) {
//     return item;
//   } else {
//     return cheapestItem;
//   }
// }, items[0]);
// console.log(cheapestItem);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.
// 7.A.
// var nums = [5, 10, 8, 3];
// var product = 1;
// var index = 0;
// while (index < nums.length) {
//   product = product * nums[index];
//   index++;
// };
// console.log(product);

// 7.B each
// var nums = [5, 10, 8, 3];
// var product = 1;
// nums.forEach(function (num) {
//   product = product * num;
// });
// console.log(product);

// 7.C reduce
// var nums = [5, 10, 8, 3];
// var product = nums.reduce(function (product, num) {
//   return product * num;
// }, 1);
// console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// 8.A while
// var strings = ["volleyball", "basketball", "badminton"];
// var combo = "-";
// var index = 0;
// while (index < strings.length) {
//   combo = combo + strings[index] + "-";
//   index++;
// };
// console.log(combo);

// 8.B each 
// var strings = ["volleyball", "basketball", "badminton"];
// var combo = "-";
// strings.forEach(function (string) {
//   combo += string + "-";
// });
// console.log(combo);

// 8.C reduce
// var strings = ["volleyball", "basketball", "badminton"];
// var bigWord = strings.reduce(function (total, string) {
//   return total + string + "-";
// }, "-");
// console.log(bigWord);

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.
// 9.A 
// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var shortestName = items[0];
// var index = 0;
// while (index < items.length) {
//   if (items[index].name.length < shortestName.name.length) {
//     shortestName = items[index];
//   };
//   index++;
// };
// console.log(shortestName);

// 9.B each
// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var shortestName = items[0];
// items.forEach(function (item) {
//   if (item.name.length < shortestName.name.length) {
//     shortestName = item;
//   }
// });
// console.log(shortestName);

// 9. C. reduce
// var items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];
// var shortestName = items.reduce(function (shortest, item) {
//   if (item.name.length < shortest.name.length) {
//     return item;
//   } else {
//     return shortest;
//   }
// }, items[0]);
// console.log(shortestName);

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

// 10.A while
// var nums = [5, 10, 8, 3];
// var max_num = nums[0];
// var index = 0;
// while (index < nums.length) {
//   if (nums[index] > max_num) {
//     max_num = nums[index];
//   }
//   index++;
// };
// console.log(max_num);

// 10.B each
// var nums = [5, 10, 8, 3];
// var max_num = nums[0];
// nums.forEach(function (num) {
//   if (num > max_num) {
//     max_num = num;
//   }
// });
// console.log(max_num);

// 10.C reduce
// var nums = [5, 10, 8, 3];
// var max_num = nums.reduce(function (max, num) {
//   if (max < num) {
//     return num;
//   } else {
//     return max;
//   } (nums[0], num)
// });
// console.log(max_num);

// # SOLUTIONS (using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
// JavaScript solutions: https://gist.github.com/peterxjang/130e1daf6d23f17a1426c8be6012ef21

// # SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
// JavaScript solutions: https://gist.github.com/peterxjang/1f6744f35fa0ab9f0c2726dc2e8c0b32

// # SOLUTIONS (using .reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35
// JavaScript solutions: https://gist.github.com/peterxjang/fb7b3fd6b61f34dbb27a90f24a6e59e9