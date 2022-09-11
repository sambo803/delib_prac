#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

# 1.A- using while loop
# arr = [5, 10, 8, 3]
# index = 0
# number = 0
# while index < arr.length
#   number = number + arr[index]
#   index += 1
# end
# p number

# 1. B- using .each loop
# arr = [5, 10, 8, 3]
# sum = 0
# arr.each do |num|
#   sum = sum + num
# end
# p sum

# 1.C- using .reduce method
# arr = [5, 10, 8, 3]
# sum = arr.reduce(0) do |sum, num|
#   sum + num
# end
# p sum

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

# 2.A - using while loop
# sports = ["volleyball", "basketball", "badminton"]
# word = ""
# index = 0
# while index < sports.length
#   sport = sports[index]
#   word = word + sport
#   index = index + 1
# end
# p word

# 2.B- using .each loop
# sports = ["volleyball", "basketball", "badminton"]
# word = ""
# sports.each do |sport|
#   word = word + sport
# end
# p word

# 2.C- using .reduce method
# arr = ["volleyball", "basketball", "badminton"]
# word = arr.reduce("") do |word, sport|
#   word + sport
# end
# p word

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

# 3.A - using while loop
# hash_prices = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# sum = 0
# index = 0
# while index < hash_prices.length
#   sum = sum + hash_prices[index][:price]
#   index += 1
# end
# p sum

# 3.B- using .each loop
# 3.C- using .reduce method
# arr_h = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# sum = arr_h.reduce(0) do |total, sum_num|
#   total + sum_num[:price]
# end
# p sum

#3.C- using .reduce method
# hash_items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# sum = hash_items.reduce(0) do |sum, price|
#   sum + price[:price]
# end
# p sum

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

# 4.A.A - using while loop
# numbers = [5, 10, 8, 3, 9]
# index = 0
# min_num = numbers[index]
# while index < numbers.length
#   if min_num >= numbers[index]
#     min_num = numbers[index]
#   end
#   index += 1
# end
# p min_num

# 4.B- using .each loop
# numbers = [5, 10, 8, 3, 9]
# min_num = numbers[0]
# numbers.each do |num|
#   if num < min_num
#     min_num = num
#   end
# end
# p min_num

# 4.C- using .reduce method
# numbers = [5, 10, 8, 3, 9]
# min_num = numbers.reduce(numbers[0]) do |min, number|
#   if number < min
#     number
#   else
#     min
#   end
# end
# p min_num

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

# 5. A - using while loop
# sports = ["volleyball", "basketball", "badminton"]
# length = 0
# index = 0
# while index < sports.length
#   length = length + sports[index].length
#   index += 1
# end
# p length

# 5.B- using .each loop
# sports = ["volleyball", "basketball", "badminton"]
# length_sum = 0
# sports.each do |sport|
#   length_sum = length_sum + sport.length
# end
# p length_sum

# 5.C- using .reduce method
# sports = ["volleyball", "basketball", "badminton"]
# tot_length = sports.reduce(0) do |length_sum, sport|
#   length_sum + sport.length
# end
# p tot_length

#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

# 6.A - using while loop
# array = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# low_hash = array[0]
# index = 0
# while index < array.length
#   if array[index][:price] < low_hash[:price]
#     low_hash = array[index]
#   end
#   index += 1
# end
# p low_hash

# 6.B- using .each loop
# array = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# low_hash = array[0]
# array.each do |price|
#   if price[:price] < low_hash[:price]
#     low_hash = price
#   end
# end
# p low_hash

# 6.C- using .reduce method
# items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# cheapest_item = items.reduce(items[0]) do |cheapest_item, item|
#   if item[:price] < cheapest_item[:price]
#     item
#   else
#     cheapest_item
#   end
# end

# p cheapest_item

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

# 7.A - using while loop
# numbers = [5, 10, 8, 3]
# index = 0
# product = 1
# while index < numbers.length
#   product = product * numbers[index]
#   index += 1
# end
# p product

# 7.B- using .each loop
# numbers = [5, 10, 8, 3]
# product = 1
# numbers.each do |num|
#   product = product * num
# end
# p product

# 7.C- using .reduce method
# numbers = [5, 10, 8, 3]
# product = numbers.reduce(1) do |product, num|
#   product * num
# end
# p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

# 8.A - using while loop
# strings = ["volleyball", "basketball", "badminton"]
# index = 0
# string = "-"
# while index < strings.length
#   string += "#{strings[index]}-"
#   index += 1
# end
# p string

# 8.B- using .each loop
# strings = ["volleyball", "basketball", "badminton"]
# string = "-"
# strings.each do |sport|
#   string += "#{sport}-"
# end
# p string

# 8.C- using .reduce method
# strings = ["volleyball", "basketball", "badminton"]
# string = strings.reduce("-") do |total, sport|
#   total + "#{sport}-"
# end
# p string

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

# 9.A - using while loop
# arr_hash = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# shortest = arr_hash[0]
# index = 0
# while index < arr_hash.length
#   if shortest[:name].length > arr_hash[index][:name].length
#     shortest = arr_hash[index]
#   end
#   index += 1
# end
# p shortest

# 9.B- using .each loop
# arr_hash = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# shortest = arr_hash[0]
# arr_hash.each do |len|
#   if shortest[:name].length > len[:name].length
#     shortest = len
#   end
# end
# p shortest

# 9.C- using .reduce method
# products = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
# shortest_name_product = products.reduce(products[0]) do |shortest, product|
#   if product[:name].length > shortest[:name].length
#     shortest
#   else
#     product
#   end
# end
# p shortest_name_product

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

# 10.A - using while loop
# numbers = [5, 10, 8, 3]
# max_num = 0
# index = 0
# while index < numbers.length
#   if numbers[index] > max_num
#     max_num = numbers[index]
#   end
#   index += 1
# end
# p max_num

# 10.B- using .each loop
# numbers = [5, 10, 8, 3]
# max_num = 0
# numbers.each do |number|
#   if number > max_num
#     max_num = number
#   end
# end
# p max_num

# 10.C- using .reduce method
# numbers = [5, 10, 8, 3]
# max_num = numbers.reduce(numbers[0]) do |number, max|
#   if number > max
#     number
#   else
#     max
#   end
# end
# p max_num

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
# SOLUTIONS (using .reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35
