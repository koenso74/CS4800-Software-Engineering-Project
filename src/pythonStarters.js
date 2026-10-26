const pythonStarters = {
  'sum-of-array': 'def sum_array(nums):\n    # your code here\n    return 0\n\nprint(sum_array([1, 2, 3]))',
  'reverse-a-string': 'def reverse_string(text):\n    # your code here\n    return ""\n\nprint(reverse_string("code"))',
  'fizzbuzz-simple': 'def fizz_buzz(n):\n    # your code here\n    return []\n\nprint(fizz_buzz(5))',
  'find-maximum': 'def find_max(nums):\n    # your code here\n    return 0\n\nprint(find_max([1, 4, 2]))',
  'palindrome-check': 'def is_palindrome(text):\n    # your code here\n    return False\n\nprint(is_palindrome("racecar"))',
  'count-vowels': 'def count_vowels(text):\n    # your code here\n    return 0\n\nprint(count_vowels("CodeClimb"))',
  factorial: 'def factorial(n):\n    # your code here\n    return 1\n\nprint(factorial(5))',
  'count-words': 'def count_words(sentence):\n    # your code here\n    return 0\n\nprint(count_words("learn code daily"))',
  'remove-duplicates': 'def remove_duplicates(nums):\n    # your code here\n    return []\n\nprint(remove_duplicates([1, 2, 2, 3, 1]))',
  'two-sum': 'def two_sum(nums, target):\n    # your code here\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))',
  'linear-search': 'def linear_search(nums, target):\n    # your code here\n    return -1\n\nprint(linear_search([4, 9, 2, 7], 2))',
  'sum-of-digits': 'def sum_of_digits(n):\n    # your code here\n    return 0\n\nprint(sum_of_digits(1234))',
  'valid-anagram': 'def is_anagram(first, second):\n    # your code here\n    return False\n\nprint(is_anagram("listen", "silent"))'
};

export function pythonStarterFor(slug) {
  return pythonStarters[slug];
}
