#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

# 1.A-using while loop
# arr = [2, 32, 80, 18, 12, 3]
# new_a = []
# index = 0
# while index < arr.length
#   if arr[index] < 20
#     new_a << arr[index]
#   end
#   index += 1
# end
# p new_a

# 1.B-using .each loop
# arr = [2, 32, 80, 18, 12, 3]
# new_a = []
# arr.each do |num|
#   if (num < 20)
#     new_a << num
#   end
# end
# p new_a

# 1.C-using .select loop
# arr = [2, 32, 80, 18, 12, 3]
# new_a = arr.select do |num|
#   num < 20
#   # new_a << num
# end
# p new_a

#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

# 2.A-using while loop
# arr = ["winner", "winner", "chicken", "dinner"]
# new_a = []
# index = 0
# while index < arr.length
#   if arr[index][0] == "w"
#     new_a << arr[index]
#   end
#   index += 1
# end
# p new_a

# 2.B-using .each loop
# arr = ["winner", "winner", "chicken", "dinner"]
# new_a = []
# arr.each do |str|
#   if str[0] == "w"
#     new_a << str
#   end
# end
# p new_a

# 2.C-using .select loop
# arr = ["winner", "winner", "chicken", "dinner"]
# new_a = arr.select do |str|
#   str[0] == "w"
# end
# p new_a

#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

#  3.A-using while loop
# items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# hi_hash = []
# index = 0
# while index < items.length
#   item = items[index]
#   if item[:price] > 5
#     hi_hash << item
#   end
#   index += 1
# end
# p hi_hash

# 3.B-using .each loop
# hashes = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# hi_hash = []
# hashes.each do |hash|
#   if hash[:price] > 5
#     hi_hash << hash
#   end
# end
# p hi_hash

# 3.C-using .select loop
# hashes = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# hi_hash = hashes.select do |hash|
#   hash[:price] > 5
# end
# p hi_hash

#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

# 4.A-using while loop
# arr = [2, 4, 5, 1, 8, 9, 7]
# new_a = []
# index = 0
# while index < arr.length
#   if arr[index] % 2 == 0
#     new_a << arr[index]
#   end
#   index += 1
# end
# p new_a

# 4.B-using .each loop
# arr = [2, 4, 5, 1, 8, 9, 7]
# new_a = []
# arr.each do |num|
#   if num % 2 == 0
#     new_a << num
#   end
# end
# p new_a

# 4.C-using .select loop
# arr = [2, 4, 5, 1, 8, 9, 7]
# new_a = arr.select do |num|
#   num % 2 == 0
# end
# p new_a

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

# 5.A-using while loop
# a = ["a", "man", "a", "plan", "a", "canal", "panama"]
# new_a = []
# index = 0
# while index < a.length
#   if a[index].length < 4
#     new_a << a[index]
#   end
#   index += 1
# end
# p new_a

# 5.B-using .each loop
# a = ["a", "man", "a", "plan", "a", "canal", "panama"]
# new_a = []
# a.each do |str|
#   if str.length < 4
#     new_a << str
#   end
# end
# p new_a

# 5.C-using .select loop
# a = ["a", "man", "a", "plan", "a", "canal", "panama"]
# new_a = a.select do |str|
#   str.length < 4
# end
# p new_a

#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

# 6.A-using while loop
# a_hash = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# new_a = []
# index = 0
# while index < a_hash.length
#   if a_hash[index][:name].length < 6
#     new_a << a_hash[index]
#   end
#   index += 1
# end
# p new_a

# 6.B-using .each loop
# a_hash = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# new_a = []
# a_hash.each do |str|
#   if str[:name].length < 6
#     new_a << str
#   end
# end
# p new_a

# 6.C-using .select loop
# a_hash = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# new_a = a_hash.select do |str|
#   str[:name].length < 6
# end
# p new_a

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

# 7.A-using while loop
# arr = [8, 23, 0, 44, 1980, 3]
# sm_num = []
# index = 0
# while index < arr.length
#   ar = arr[index]
#   if ar < 10
#     sm_num << ar
#   end
#   index += 1
# end
# p sm_num

# 7.B-using .each loop
# arr = [8, 23, 0, 44, 1980, 3]
# sm_num = []
# arr.each do |num|
#   if num < 10
#     sm_num << num
#   end
# end
# p sm_num

# 7.C-using .select loop
# arr = [8, 23, 0, 44, 1980, 3]
# sm_num = arr.select do |num|
#   num < 10
# end
# p sm_num

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

# 8.A-using while loop
# arr = ["big", "little", "good", "bad"]
# new_a = []
# index = 0
# while index < arr.length
#   if arr[index][0] != "b"
#     new_a << arr[index]
#   end
#   index += 1
# end
# p new_a

# 8.B-using .each loop
# arr = ["big", "little", "good", "bad"]
# new_a = []
# arr.each do |str|
#   if str[0] != "b"
#     new_a << str
#   end
# end
# p new_a

# 8.C-using .select loop
# arr = ["big", "little", "good", "bad"]
# new_a = arr.select do |str|
#   str[0] != "b"
# end
# p new_a

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

# 9.A-using while loop
# arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# low_p = []
# index = 0
# while index < arr.length
#   if arr[index][:price] < 10
#     low_p << arr[index]
#   end
#   index += 1
# end
# p low_p

# 9.B-using .each loop
# arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# low_p = []
# arr.each do |num|
#   if num[:price] < 10
#     low_p << num
#   end
# end
# p low_p

# 9.C-using .select loop
# arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# low_p = arr.select do |num|
#   num[:price] < 10
# end
# p low_p

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

# 10.A-using while loop
# arr = [2, 4, 5, 1, 8, 9, 7]
# odd_a = []
# index = 0
# while index < arr.length
#   if arr[index] % 2 == 1
#     odd_a << arr[index]
#   end
#   index += 1
# end
# p odd_a

# 10.B-using .each loop
# arr = [2, 4, 5, 1, 8, 9, 7]
# odd_a = []
# arr.each do |num|
#   if num % 2 == 1
#     odd_a << num
#   end
# end
# p odd_a

# 10.C-using .select loop
# arr = [2, 4, 5, 1, 8, 9, 7]
# odd_a = arr.select do |num|
#   num % 2 == 1
# end
# p odd_a

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/7de16ed43ea506e98df3fa15074b84f8
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/a702894841c7018ed8c127b647ae21f8
# SOLUTIONS (using .select shortcut): https://gist.github.com/peterxjang/b8c8fb8b77b2cae7bb9cc62a3a434761
