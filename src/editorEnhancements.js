const templates = {
  javascript: 'function solve(input) {\n  // your code here\n}',
  python: 'def solve(input):\n    # your code here\n    return input\n\nprint(solve("CodeClimb"))',
  java: 'public class Main {\n    public static void main(String[] args) {\n        // your code here\n        System.out.println("CodeClimb");\n    }\n}',
  cpp: '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    // your code here\n    return 0;\n}'
};

const problemTemplates = {
  'sum-of-array': {
    javascript: 'function sumArray(nums) {\n  // your code here\n  return 0;\n}\n\nconsole.log(sumArray([1, 2, 3]));',
    python: 'def sum_array(nums):\n    # your code here\n    return 0\n\nprint(sum_array([1, 2, 3]))',
    java: 'public class Main {\n    static int sumArray(int[] nums) {\n        // your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sumArray(new int[]{1, 2, 3}));\n    }\n}',
    cpp: '#include <bits/stdc++.h>\nusing namespace std;\n\nint sumArray(const vector<int>& nums) {\n    // your code here\n    return 0;\n}\n\nint main() {\n    cout << sumArray({1, 2, 3}) << endl;\n    return 0;\n}'
  },
  'reverse-a-string': { python: 'def reverse_string(text):\n    # your code here\n    return ""\n\nprint(reverse_string("code"))' },
  'fizzbuzz-simple': { python: 'def fizz_buzz(n):\n    # your code here\n    return []\n\nprint(fizz_buzz(5))' },
  'find-maximum': { python: 'def find_max(nums):\n    # your code here\n    return 0\n\nprint(find_max([1, 4, 2]))' },
  'palindrome-check': { python: 'def is_palindrome(text):\n    # your code here\n    return False\n\nprint(is_palindrome("racecar"))' },
  'count-vowels': { python: 'def count_vowels(text):\n    # your code here\n    return 0\n\nprint(count_vowels("CodeClimb"))' },
  factorial: { python: 'def factorial(n):\n    # your code here\n    return 1\n\nprint(factorial(5))' },
  'count-words': { python: 'def count_words(sentence):\n    # your code here\n    return 0\n\nprint(count_words("learn code daily"))' },
  'remove-duplicates': { python: 'def remove_duplicates(nums):\n    # your code here\n    return []\n\nprint(remove_duplicates([1, 2, 2, 3, 1]))' },
  'two-sum': { javascript: 'function twoSum(nums, target) {\n  // your code here\n}', python: 'def two_sum(nums, target):\n    # your code here\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))' },
  'linear-search': { javascript: 'function linearSearch(nums, target) {\n  // your code here\n}', python: 'def linear_search(nums, target):\n    # your code here\n    return -1\n\nprint(linear_search([4, 9, 2, 7], 2))' },
  'sum-of-digits': { javascript: 'function sumOfDigits(n) {\n  // your code here\n}', python: 'def sum_of_digits(n):\n    # your code here\n    return 0\n\nprint(sum_of_digits(1234))' },
  'valid-anagram': { javascript: 'function isAnagram(first, second) {\n  // your code here\n}', python: 'def is_anagram(first, second):\n    # your code here\n    return False\n\nprint(is_anagram("listen", "silent"))' }
};

const additionalLanguageTemplates = {
  'reverse-a-string': { java: 'import java.util.*;\n\npublic class Main {\n    static String reverseString(String text) {\n        // your code here\n        return "";\n    }\n\n    public static void main(String[] args) {\n        System.out.println(reverseString("code"));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\nstring reverseString(string text) { return ""; }\nint main() { cout << reverseString("code") << endl; }' },
  'fizzbuzz-simple': { java: 'import java.util.*;\n\npublic class Main {\n    static String[] fizzBuzz(int n) {\n        // your code here\n        return new String[0];\n    }\n\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(fizzBuzz(5)));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\ntemplate<class T> void printVector(const vector<T>& v) { cout << "["; for (int i=0;i<v.size();i++) cout << (i?", ":"") << v[i]; cout << "]" << endl; }\nvector<string> fizzBuzz(int n) { return {}; }\nint main() { printVector(fizzBuzz(5)); }' },
  'find-maximum': { java: 'public class Main {\n    static int findMax(int[] nums) {\n        // your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(findMax(new int[]{1, 4, 2}));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\nint findMax(const vector<int>& nums) { return 0; }\nint main() { cout << findMax({1, 4, 2}) << endl; }' },
  'palindrome-check': { java: 'public class Main {\n    static boolean isPalindrome(String text) {\n        // your code here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(isPalindrome("racecar"));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\nbool isPalindrome(string text) { return false; }\nint main() { cout << boolalpha << isPalindrome("racecar") << endl; }' },
  'count-vowels': { java: 'public class Main {\n    static int countVowels(String text) {\n        // your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(countVowels("CodeClimb"));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\nint countVowels(string text) { return 0; }\nint main() { cout << countVowels("CodeClimb") << endl; }' },
  factorial: { java: 'public class Main {\n    static long factorial(int n) {\n        // your code here\n        return 1;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(factorial(5));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\nlong long factorial(int n) { return 1; }\nint main() { cout << factorial(5) << endl; }' },
  'count-words': { java: 'public class Main {\n    static int countWords(String sentence) {\n        // your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(countWords("learn code daily"));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\nint countWords(string sentence) { return 0; }\nint main() { cout << countWords("learn code daily") << endl; }' },
  'remove-duplicates': { java: 'import java.util.*;\n\npublic class Main {\n    static int[] removeDuplicates(int[] nums) {\n        // your code here\n        return new int[0];\n    }\n\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(removeDuplicates(new int[]{1, 2, 2, 3, 1})));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\ntemplate<class T> void printVector(const vector<T>& v) { cout << "["; for (int i=0;i<v.size();i++) cout << (i?", ":"") << v[i]; cout << "]" << endl; }\nvector<int> removeDuplicates(const vector<int>& nums) { return {}; }\nint main() { printVector(removeDuplicates({1, 2, 2, 3, 1})); }' },
  'two-sum': { java: 'import java.util.*;\n\npublic class Main {\n    static int[] twoSum(int[] nums, int target) {\n        // your code here\n        return new int[0];\n    }\n\n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\ntemplate<class T> void printVector(const vector<T>& v) { cout << "["; for (int i=0;i<v.size();i++) cout << (i?", ":"") << v[i]; cout << "]" << endl; }\nvector<int> twoSum(const vector<int>& nums, int target) { return {}; }\nint main() { printVector(twoSum({2, 7, 11, 15}, 9)); }' },
  'linear-search': { java: 'public class Main {\n    static int linearSearch(int[] nums, int target) {\n        // your code here\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(linearSearch(new int[]{4, 9, 2, 7}, 2));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\n\nint linearSearch(const vector<int>& nums, int target) {\n    // your code here\n    return -1;\n}\n\nint main() {\n    cout << linearSearch({4, 9, 2, 7}, 2) << endl;\n    return 0;\n}' },
  'sum-of-digits': { java: 'public class Main {\n    static int sumOfDigits(int n) {\n        // your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sumOfDigits(1234));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\n\nint sumOfDigits(int n) {\n    // your code here\n    return 0;\n}\n\nint main() {\n    cout << sumOfDigits(1234) << endl;\n    return 0;\n}' },
  'valid-anagram': { java: 'public class Main {\n    static boolean isAnagram(String first, String second) {\n        // your code here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(isAnagram("listen", "silent"));\n    }\n}', cpp: '#include <bits/stdc++.h>\nusing namespace std;\n\nbool isAnagram(string first, string second) {\n    // your code here\n    return false;\n}\n\nint main() {\n    cout << boolalpha << isAnagram("listen", "silent") << endl;\n    return 0;\n}' }
};

const pythonSolutions = {
  'sum-of-array': 'def sum_array(nums):\n    total = 0\n    for num in nums:\n        total += num\n    return total',
  'reverse-a-string': 'def reverse_string(text):\n    result = ""\n    for char in text:\n        result = char + result\n    return result',
  'fizzbuzz-simple': 'def fizz_buzz(n):\n    result = []\n    for number in range(1, n + 1):\n        if number % 15 == 0:\n            result.append("FizzBuzz")\n        elif number % 3 == 0:\n            result.append("Fizz")\n        elif number % 5 == 0:\n            result.append("Buzz")\n        else:\n            result.append(number)\n    return result',
  'find-maximum': 'def find_max(nums):\n    largest = nums[0]\n    for num in nums[1:]:\n        if num > largest:\n            largest = num\n    return largest',
  'palindrome-check': 'def is_palindrome(text):\n    return text == text[::-1]',
  'count-vowels': 'def count_vowels(text):\n    vowels = "aeiou"\n    return sum(1 for char in text.lower() if char in vowels)',
  factorial: 'def factorial(n):\n    result = 1\n    for number in range(2, n + 1):\n        result *= number\n    return result',
  'count-words': 'def count_words(sentence):\n    return len(sentence.split())',
  'remove-duplicates': 'def remove_duplicates(nums):\n    seen = set()\n    result = []\n    for num in nums:\n        if num not in seen:\n            seen.add(num)\n            result.append(num)\n    return result',
  'two-sum': 'def two_sum(nums, target):\n    seen = {}\n    for index, num in enumerate(nums):\n        needed = target - num\n        if needed in seen:\n            return [seen[needed], index]\n        seen[num] = index\n    return []',
  'linear-search': 'def linear_search(nums, target):\n    for index, num in enumerate(nums):\n        if num == target:\n            return index\n    return -1',
  'sum-of-digits': 'def sum_of_digits(n):\n    total = 0\n    while n > 0:\n        total += n % 10\n        n //= 10\n    return total',
  'valid-anagram': 'def is_anagram(first, second):\n    return sorted(first) == sorted(second)'
};

const languageSolutions = {
  java: {
    'sum-of-array': 'static int sumArray(int[] nums) {\n    int total = 0;\n    for (int num : nums) total += num;\n    return total;\n}',
    'reverse-a-string': 'static String reverseString(String text) {\n    return new StringBuilder(text).reverse().toString();\n}',
    'fizzbuzz-simple': 'static String[] fizzBuzz(int n) {\n    String[] result = new String[n];\n    for (int i = 1; i <= n; i++) {\n        if (i % 15 == 0) result[i - 1] = "FizzBuzz";\n        else if (i % 3 == 0) result[i - 1] = "Fizz";\n        else if (i % 5 == 0) result[i - 1] = "Buzz";\n        else result[i - 1] = String.valueOf(i);\n    }\n    return result;\n}',
    'find-maximum': 'static int findMax(int[] nums) {\n    int largest = nums[0];\n    for (int num : nums) if (num > largest) largest = num;\n    return largest;\n}',
    'palindrome-check': 'static boolean isPalindrome(String text) {\n    return text.equals(new StringBuilder(text).reverse().toString());\n}',
    'count-vowels': 'static int countVowels(String text) {\n    int count = 0;\n    for (char ch : text.toLowerCase().toCharArray())\n        if ("aeiou".indexOf(ch) >= 0) count++;\n    return count;\n}',
    factorial: 'static long factorial(int n) {\n    long result = 1;\n    for (int number = 2; number <= n; number++) result *= number;\n    return result;\n}',
    'count-words': 'static int countWords(String sentence) {\n    String trimmed = sentence.trim();\n    return trimmed.isEmpty() ? 0 : trimmed.split("\\\\s+").length;\n}',
    'remove-duplicates': 'static int[] removeDuplicates(int[] nums) {\n    Set<Integer> seen = new LinkedHashSet<>();\n    for (int num : nums) seen.add(num);\n    return seen.stream().mapToInt(Integer::intValue).toArray();\n}',
    'two-sum': 'static int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> seen = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int needed = target - nums[i];\n        if (seen.containsKey(needed)) return new int[]{seen.get(needed), i};\n        seen.put(nums[i], i);\n    }\n    return new int[0];\n}',
    'linear-search': 'static int linearSearch(int[] nums, int target) {\n    for (int i = 0; i < nums.length; i++)\n        if (nums[i] == target) return i;\n    return -1;\n}',
    'sum-of-digits': 'static int sumOfDigits(int n) {\n    int total = 0;\n    while (n > 0) { total += n % 10; n /= 10; }\n    return total;\n}',
    'valid-anagram': 'static boolean isAnagram(String first, String second) {\n    char[] firstChars = first.toCharArray();\n    char[] secondChars = second.toCharArray();\n    Arrays.sort(firstChars);\n    Arrays.sort(secondChars);\n    return Arrays.equals(firstChars, secondChars);\n}'
  },
  cpp: {
    'sum-of-array': 'int sumArray(const vector<int>& nums) {\n    int total = 0;\n    for (int num : nums) total += num;\n    return total;\n}',
    'reverse-a-string': 'string reverseString(string text) {\n    reverse(text.begin(), text.end());\n    return text;\n}',
    'fizzbuzz-simple': 'vector<string> fizzBuzz(int n) {\n    vector<string> result;\n    for (int i = 1; i <= n; i++) {\n        if (i % 15 == 0) result.push_back("FizzBuzz");\n        else if (i % 3 == 0) result.push_back("Fizz");\n        else if (i % 5 == 0) result.push_back("Buzz");\n        else result.push_back(to_string(i));\n    }\n    return result;\n}',
    'find-maximum': 'int findMax(const vector<int>& nums) {\n    int largest = nums[0];\n    for (int num : nums) if (num > largest) largest = num;\n    return largest;\n}',
    'palindrome-check': 'bool isPalindrome(string text) {\n    string reversed = text;\n    reverse(reversed.begin(), reversed.end());\n    return text == reversed;\n}',
    'count-vowels': 'int countVowels(string text) {\n    int count = 0;\n    for (char ch : text)\n        if (string("aeiouAEIOU").find(ch) != string::npos) count++;\n    return count;\n}',
    factorial: 'long long factorial(int n) {\n    long long result = 1;\n    for (int number = 2; number <= n; number++) result *= number;\n    return result;\n}',
    'count-words': 'int countWords(string sentence) {\n    stringstream words(sentence);\n    int count = 0;\n    string word;\n    while (words >> word) count++;\n    return count;\n}',
    'remove-duplicates': 'vector<int> removeDuplicates(const vector<int>& nums) {\n    set<int> seen;\n    vector<int> result;\n    for (int num : nums)\n        if (seen.insert(num).second) result.push_back(num);\n    return result;\n}',
    'two-sum': 'vector<int> twoSum(const vector<int>& nums, int target) {\n    unordered_map<int, int> seen;\n    for (int i = 0; i < nums.size(); i++) {\n        int needed = target - nums[i];\n        if (seen.count(needed)) return {seen[needed], i};\n        seen[nums[i]] = i;\n    }\n    return {};\n}',
    'linear-search': 'int linearSearch(const vector<int>& nums, int target) {\n    for (int i = 0; i < nums.size(); i++)\n        if (nums[i] == target) return i;\n    return -1;\n}',
    'sum-of-digits': 'int sumOfDigits(int n) {\n    int total = 0;\n    while (n > 0) { total += n % 10; n /= 10; }\n    return total;\n}',
    'valid-anagram': 'bool isAnagram(string first, string second) {\n    sort(first.begin(), first.end());\n    sort(second.begin(), second.end());\n    return first == second;\n}'
  }
};

function templateFor(slug, language) {
  return problemTemplates[slug]?.[language] || additionalLanguageTemplates[slug]?.[language] || templates[language];
}

const languages = [
  ['python', 'Python'],
  ['javascript', 'JavaScript'],
  ['java', 'Java'],
  ['cpp', 'C++']
];

function installLanguagePicker() {
  const label = document.querySelector('.editor-head .language');
  const editor = document.querySelector('.editor');
  if (!label || !editor || label.dataset.enhanced) return;
  label.dataset.enhanced = 'true';
  const select = document.createElement('select');
  select.className = 'language-select';
  select.setAttribute('aria-label', 'Programming language');
  select.title = 'Choose a programming language';
  const slug = window.location.pathname.split('/').filter(Boolean).pop();
  const languageKey = `cc_language_v2_${slug}`;
  languages.forEach(([value, text]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  });
  select.value = localStorage.getItem(languageKey) || 'python';
  editor.value = templateFor(slug, select.value);
  editor.dispatchEvent(new Event('input', { bubbles: true }));
  select.addEventListener('change', () => {
    localStorage.setItem(languageKey, select.value);
    editor.value = templateFor(slug, select.value);
    editor.dispatchEvent(new Event('input', { bubbles: true }));
    editor.focus();
  });
  label.replaceWith(select);
}

document.addEventListener('keydown', event => {
  const editor = event.target.closest?.('.editor');
  if (!editor || event.key !== 'Tab') return;
  event.preventDefault();
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const value = editor.value;
  if (event.shiftKey && start === end && start > 0) {
    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
    if (value.slice(lineStart, start).startsWith('  ')) {
      editor.value = value.slice(0, lineStart) + value.slice(lineStart + 2);
      editor.selectionStart = editor.selectionEnd = start - 2;
    }
    return;
  }
  editor.value = value.slice(0, start) + '  ' + value.slice(end);
  editor.selectionStart = editor.selectionEnd = start + 2;
  editor.dispatchEvent(new Event('input', { bubbles: true }));
});

const observer = new MutationObserver(installLanguagePicker);
observer.observe(document.body, { childList: true, subtree: true });
installLanguagePicker();

document.addEventListener('click', async event => {
  const button = event.target.closest?.('.editor-actions .primary');
  if (!button || !button.textContent.includes('Run code')) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const editor = document.querySelector('.editor');
  const language = document.querySelector('.language-select')?.value || 'javascript';
  const slug = window.location.pathname.split('/').filter(Boolean).pop();
  button.disabled = true;
  button.dataset.originalLabel = button.textContent;
  button.firstChild.textContent = 'Running… ';
  try {
    const response = await fetch('/api/submissions/run', { method: 'POST', headers: { 'Content-Type': 'application/json', ...(localStorage.getItem('cc_token') ? { Authorization: `Bearer ${localStorage.getItem('cc_token')}` } : {}) }, body: JSON.stringify({ slug, code: editor?.value || '', language }) });
    const result = await response.json();
    let resultBox = document.querySelector('.editor-actions + .result');
    if (!resultBox) { resultBox = document.createElement('div'); resultBox.className = 'result'; document.querySelector('.editor-actions')?.after(resultBox); }
    resultBox.className = `result ${result.passed ? 'success' : ''}`;
    const cases = result.cases?.length ? `<div class="test-cases"><strong>Test cases</strong>${result.cases.map(test => `<div class="test-case"><span class="case-status ${test.passed === false ? 'failed' : 'passed'}">${test.passed === false ? '×' : '✓'}</span><code>${test.input}</code><span>→ ${test.expected}</span></div>`).join('')}</div>` : '';
    const output = result.output ? `<pre class="runner-output">${result.output}</pre>` : '';
    const escapeHtml = value => String(value || '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const selectedLanguage = document.querySelector('.language-select')?.value || 'python';
    const languageNames = Object.fromEntries(languages);
    const languageName = languageNames[selectedLanguage] || selectedLanguage;
    const exampleSolution = selectedLanguage === 'python' ? pythonSolutions[slug] : languageSolutions[selectedLanguage]?.[slug] || result.solution;
    const comparison = result.passed && exampleSolution ? `<details class="solution-comparison" open><summary>Best solution in ${escapeHtml(languageName)}: how it works</summary><div class="solution-teaching"><p class="solution-label">The idea in plain English</p><p>${escapeHtml(result.explanation || 'This solution visits the input and builds the answer step by step.')}</p><p class="solution-label">Example ${escapeHtml(languageName)} solution</p><pre>${escapeHtml(exampleSolution)}</pre><p class="solution-tip">There can be many correct solutions. This is one clear reference approach; your code can look different and still be correct.</p></div></details>` : '';
    resultBox.innerHTML = `<b>${result.passed ? '✓ ' : '○ '}${result.message}</b>${result.tests !== undefined ? `<span>${result.tests}/${result.total} tests passed</span>` : ''}${cases}${output}${comparison}`;
  } catch { window.alert('The code runner is unavailable. Please try again in a moment.'); }
  button.disabled = false;
  button.firstChild.textContent = 'Run code ';
}, true);
