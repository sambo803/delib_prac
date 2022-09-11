
// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].
// 1.A. While loop
// var a = [4, 6, 9];
// var a2 = [];
// var index = 0;
// while (index < a.length) {
//   a2.push(a[index] * 3);
//   index++;
// }
// console.log(a2);

// 1.B. Each Loop 
// var a = [3, 5, 9];
// var a2 = [];
// a.forEach(function (number) {
//   a2.push(number * 3);
// });
// console.log(a2);

// 1.C. .map loop
// var a = [2, 4, 7];
// var a2 = a.map(times_3)
// function times_3(number) {
//   return number * 3;
// }
// console.log(a2);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
// 2.A. while 
// var a_str = ["hello", "goodbye"];
// var index = 0;
// var new_a = [];
// while (index < a_str.length) {
//   new_a.push(a_str[index].toUpperCase());
//   index++;
// }
// console.log(new_a);

// 2.B.each loop
// var arr = ["hi_there", "aloha"];
// new_a = [];
// arr.forEach(function (string) {
//   new_a.push(string.toUpperCase());
// })
// console.log(new_a);

// 2.C. .map
// var arr = ["dogs", "cats"];
// var new_a = arr.map(upcaser)
// function upcaser(string) {
//   return string.toUpperCase();
// };
// console.log(new_a);


// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].
// 3.A. while
// var arr_h = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// var str_a = [];
// var index = 0;
// while (index < arr_h.length) {
//   str_a.push(arr_h[index]["name"]);
//   index++;
// }
// console.log(str_a);

// 3.B. each 
// var arr_h = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// var str_a = [];
// arr_h.forEach(function (person) {
//   str_a.push(person.name);
// })
// console.log(str_a);

// 3.C. map
// var arr_h = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// var str_a = arr_h.map(string_array)
// function string_array(string) {
//   return string.name;
// }
// console.log(str_a);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].
// 4. A. while 
// var arr = [1, 4, 9];
// var arr2 = [];
// var index = 0;
// while (index < arr.length) {
//   arr2.push(arr[index] + 7);
//   index++;
// }
// console.log(arr2);

//4.B each
// var arr = [1, 4, 9];
// var arr2 = [];
// arr.forEach(function (number) {
//   arr2.push(number + 7);
// })
// console.log(arr2);

// 4.C map
// var arr = [1, 4, 9];
// var arr2 = arr.map(function (number) {
//   return number + 7;
// })
// console.log(arr2);
//
// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].
// 5.A. while
// var strings = ["hello", "goodbye"];
// var str_len = [];
// var index = 0;
// while (index < strings.length) {
//   str_len.push(strings[index].length)
//   index++;
// }
// console.log(str_len);

// 5.B. each
// var strings = ["hello", "goodbye"];
// var str_len = [];
// strings.forEach(function (string) {
//   str_len.push(string.length);
// })
// console.log(str_len);

// 5.C. map
// var strings = ["hello", "goodbye"];
// var new_str = strings.map(function (length) {
//   return length.length;
// });
// console.log(new_str);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
// 6.A. while
// arr_h = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// new_a = [];
// var index = 0;
// while (index < arr_h.length) {
//   new_a.push(arr_h[index]["age"]);
//   index++;
// }
// console.log(new_a);

// 6.B. each
// var arr_h = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// var nums = [];
// arr_h.forEach(function (person) {
//   nums.push(person.age);
// });
// console.log(nums);

// 6.C map
// var arr_h = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// var ages = arr_h.map(function (age) {
//   return age["age"];
// })
// console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].
// 7.A. while
// var arr = [2, 4, 7];
// var new_a = [];
// var index = 0;
// while (index < arr.length) {
//   new_a.push(arr[index] / 2);
//   index++;
// }
// console.log(new_a);

// 7.B. each
// var nums = [4, 6, 9];
// var halved = [];
// nums.forEach(function (number) {
//   halved.push(number / 2);
// });
// console.log(halved);

// 7.C map
// var nums = [4, 6, 9];
// var halved = nums.map(function (number) {
//   return number / 2;
// });
// console.log(halved);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].
// 8.A. while
// var arr = ["hello", "goodbye"];
// var new_a = [];
// var index = 0;
// while (index < arr.length) {
//   new_a.push(arr[index].charAt(0));
//   index++;
// }
// console.log(new_a);

// 8.B each
// var strings = ["hello", "goodbye"];
// var first_chr = [];
// strings.forEach(function (string) {
//   first_chr.push(string.charAt(0));
// });
// console.log(first_chr);

// 8. C map
// var strings = ["hello", "goodbye"];
// var first_chr = strings.map(function (string) {
//   return string.charAt(0);
// })
// console.log(first_chr);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].
// 9. A. while
// var people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// var ages = [];
// var index = 0;
// while (index < people.length) {
//   ages.push(people[index].age * 2);
//   index++;
// }
// console.log(ages);

// 9.B each
// var people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// var ages = [];
// people.forEach(function (age) {
//   ages.push(age.age * 2);
// });
// console.log(ages);

// 9.C map
// var people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
// var age_doub = people.map(function (age) {
//   return age.age * 2;
// });
// console.log(age_doub);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].
// 10.A. while
// var numbers = [4, 7, 9];
// strings = [];
// var index = 0;
// while (index < numbers.length) {
//   strings.push(numbers[index].toString());
//   index++;
// }
// console.log(strings);

// 10.B each
// var numbers = [4, 7, 9];
// var strings = [];
// numbers.forEach(function (number) {
//   strings.push(number.toString())
// });
// console.log(strings);

// 10.C map
// var numbers = [4, 7, 9];
// var strings = numbers.map(function (number) {
//   return number.toString();
// });
// console.log(strings);

// # SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
// while- javascript solns:  https://gist.github.com/peterxjang/706de9f23684a285907b38f5a79b4bb2


// # SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
// each- JavaScript solutions: https://gist.github.com/peterxjang/d679e6653dcda24baae5ecba0549a9e5


// # SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98
// .map-  JavaScript solutions: https://gist.github.com/peterxjang/2b34f7d16557112230dc9ec7ed647c63