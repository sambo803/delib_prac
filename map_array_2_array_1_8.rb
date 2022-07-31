#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

# 1.A- Using while loop
# a = [1, 2, 3]
# b = []
# index = 0
# while index < a.length
#   b << a[index] * 3
#   index += 1
# end
# p b

# 1.B- Using .each shortcut

# a = [1, 2, 3]
# b = []
# a.each do |num|
#   b << num * 3
# end
# p b

# 1.C- Using .map shortcut
# a = [1, 2, 3]
# b = a.map do |num|
#   num * 3
# end
# p b

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
#
# 2.A- Using while loop
# strings = ["dogs", "cats", "monkeys"]
# up_str = []
# index = 0
# while index < strings.length
#   up_str << strings[index].upcase
#   index += 1
# end
# p up_str

# 2.B- Using .each shortcut
# strings = ["dogs", "cats", "monkeys"]
# up_str = []
# strings.each do |string|
#   up_str << string.upcase
# end
# p up_str

# # 2.C- Using .map shortcut
# strings = ["dogs", "cats", "monkeys"]
# up_str = []
# strings.map do |str|
#   up_str << str.upcase
# end
# p up_str

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

# 3.A- Using while loop

# hashes = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }, { name: "Marco", age: 67 }]
# strings = []
# index = 0
# while index < hashes.length
#   strings << hashes[index][:name]
#   index += 1
# end
# p strings

# # 3.B- Using .each shortcut

# hashes = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }, { name: "Marco", age: 67 }]
# strings = []
# hashes.each do |hash|
#   strings << hash[:name]
# end
# p strings

# 3.C- Using .map shortcut

# hashes = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }, { name: "Marco", age: 67 }]
# strings = []
# hashes.map do |hash|
#   strings << hash[:name]
# end
# p strings

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

# 4.A- while loop
# a = [1, 2, 3]
# b = []
# index = 0
# while index < a.length
#   b << a[index] + 7
#   index += 1
# end
# p b

# 4.B- using .each loop
# a = [1, 2, 3]
# b = []
# a.each do |num|
#   b << num + 7
# end
# p b

# 4.C- using .map loop
# a = [1, 2, 3]
# b = []
# a.map do |num|
#   b << num + 7
# end
# p b

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

# 5.A- while loop
# a_s = ["doggy", "kitten"]
# a_l = []
# index = 0
# while index < a_s.length
#   a_l << a_s[index].length
#   index += 1
# end
# p a_l

# 5.B- using .each loop
# a_s = ["doggy", "kitten"]
# a_l = []
# a_s.each do |str|
#   a_l << str.length
# end
# p a_l

# 5.C- using .map loop
# a_s = ["dog", "kitten"]
# a_l = []
# a_s.map do |str|
#   a_l << str.length
# end
# p a_l

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

# 6.A- while loop
# a = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
# a_num = []
# index = 0
# while index < a.length
#   a_num << a[index][:age]
#   index += 1
# end
# p a_num

# 6.B- using .each loop
# a = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
# a_num = []
# a.each do |hash|
#   a_num << hash[:age]
# end
# p a_num

# 6.C- using .map loop
# a = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
# a_num = []
# a.map do |hash|
#   a_num << hash[:age]
# end
# p a_num

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

# 7.A- while loop
# a = [2, 4, 9]
# b = []
# index = 0
# while index < a.length
#   b << a[index].to_f / 2
#   index += 1
# end
# p b

# 7.B- .each loop
# a = [2, 4, 9]
# b = []
# a.each do |num|
#   b << (num.to_f) / 2
# end
# p b

# 7.C- .map loop
# a = [2, 4, 9]
# b = []
# a.map do |num|
#   b << (num.to_f) / 2
# end
# p b

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

# 8.A- while loop
# a = ["jolly", "merry", "happy"]
# b = []
# index = 0
# while index < a.length
#   b << a[index].slice(0)
#   index += 1
# end
# p b

# 8.B- .each loop
# a = ["jolly", "merry", "happy"]
# b = []
# a.each do |strings|
#   b << strings.slice(0)
# end
# p b

# 8.C- .map loop
# a = ["jolly", "merry", "happy"]
# b = []
# a.map do |strings|
#   b << strings.slice(0)
# end
# p b

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

# 9.A- while loop
# hashes = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
# nums = []
# index = 0
# while index < hashes.length
#   nums << (hashes[index][:age]) * 2
#   index += 1
# end
# p nums

# 9.B- .each loop
# hashes = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
# nums = []
# hashes.each do |hash|
#   nums << (hash[:age]) * 2
# end
# p nums

# # 9.C- .map loop
# hashes = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
# nums = []
# hashes.map do |hash|
#   nums << (hash[:age]) * 2
# end
# p nums

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

# 10.A- while loop
# a = [1, 2, 3]
# str = []
# index = 0
# while index < a.length
#   str << a[index].to_s
#   index += 1
# end
# p str

# 10.B- .each loop
# a = [1, 2, 3]
# str = []
# a.each do |num|
#   str << num.to_s
# end
# p str

# 10.C- .map loop
# a = [1, 2, 3]
# str = []
# a.map do |num|
#   str << num.to_s
# end
# p str

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbafh
# SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98
