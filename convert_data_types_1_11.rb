#  1. Convert an array of arrays into a hash.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

# 1.
# arr_nums = [[1, 3], [8, 9], [2, 16]]
# new_hash = {}
# index = 0
# while index < arr_nums.length
#   new_hash[arr_nums[index][0]] = arr_nums[index][1]
#   index += 1
# end
# p new_hash

#  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
#     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

# 2.

# items = [{ id: 1, color: "blue", price: 32 }, { id: 2, color: "red", price: 12 }]
# index = 0
# new_hash = {}
# while index < items.length
#   new_hash[items[index][:id]] = items[index]
#   index += 1
# end
# p new_hash

#  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
#     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

# 3.
# word = "bookkeeper"
# letter_frequencies = {}
# index = 0
# while index < word.length
#   letter = word[index]
#   if letter_frequencies[letter] == nil   #Not understanding this!!
#     letter_frequencies[letter] = 0
#   end
#   letter_frequencies[letter] += 1
#   index += 1
# end
# p letter_frequencies

#  4. Convert a hash into an array of arrays.
#     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

# 4.
# things = { "chair" => 100, "book" => 14 }
# name_price_pairs = []
# things.each do |name, price|
#   name_price_pairs << [name, price]
# end
# p name_price_pairs

#  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
#     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

# 5.
# people = { 321 => { name: "Alice", age: 31 }, 322 => { name: "Maria", age: 27 } }
# people_arr = []

# people.each do |id, person|
#   person[:id] = id
#   people_arr << person
# end
# p people_arr

#  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
#     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

# 6.
# my solution
# arr_strings = ["do", "or", "do", "not"]
# new_hash = {}
# freqs = []
# index = 0
# while index < arr_strings.length
#   freqs << arr_strings.count(arr_strings[index])
#   index += 1
# end
# p freqs
# index_2 = 0
# while index_2 < freqs.length
#   new_hash[:arr_strings[index_2]] = freqs[index_2]
#   index_2 += 1
# end
# p new_hash

# correct solution
# arr_strings = ["do", "or", "do", "not"]
# new_hash = {}
# index = 0
# while index < arr_strings.length
#   word = arr_strings[index]
#   if new_hash[word] == nil
#     new_hash[word] = 0
#   end
#   new_hash[word] += 1
#   index = index + 1
# end
# p new_hash

#  7. Convert a hash into a flat array containing all the hash’s keys and values.
#     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

# 7.
# hash_1 = { "a" => 1, "b" => 2, "c" => 3, "d" => 4 }
# flat_array = []
# index = 0

# hash_1.each do |key, value|
#   flat_array << key
#   flat_array << value
# end
# p flat_array

#  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
#     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

# 8.
# price_hash = { "chair" => 75, "book" => 15 }
# items = [{ name: "chair", color: "red", weight: 10 }, { name: "book", color: "black", weight: 1 }]
# combined_hash = {}
# index = 0
# while index < items.length
#   item = items[index]
#   name = item[:name]
#   color = item[:color]
#   weight = item[:weight]
#   price = price_hash[name]
#   combined_hash[name] = { price: price, color: color, weight: weight }
#   index += 1
# end
# p combined_hash

#  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
#     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

# 9.

# (My solution (works... Not DRY though)):
# hash_array = [{ author: "Jeff Smith", title: "Bone" }, { author: "George Orwell", title: "1984" }, { author: "Jeff Smith", title: "RASL" }]
# auth_books = {}
# index = 0
# js_array = []
# go_array = []
# while index < hash_array.length
#   if hash_array[index][:author] == "Jeff Smith"
#     js_array << hash_array[index][:title]
#   elsif hash_array[index][:author] == "George Orwell"
#     go_array << hash_array[index][:title]
#   end
#   index += 1
#   auth_books["Jeff Smith"] = js_array
#   auth_books["George Orwell"] = go_array
# end
# p auth_books

# Peterxjang soln:
books = [{ author: "Jeff Smith", title: "Bone" }, { author: "George Orwell", title: "1984" }, { author: "Jeff Smith", title: "RASL" }]
books_hash = {}
index = 0
while index < books.length
  book = books[index]
  author = book[:author]
  title = book[:title]
  if books_hash[author] == nil
    books_hash[author] = []
  end
  books_hash[author] << title
  index += 1
end
p books_hash
# 10. Given a hash, create a new hash that has the keys and values switched.
#     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.
