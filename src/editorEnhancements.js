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
  'two-sum': { python: 'def two_sum(nums, target):\n    # your code here\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))' }
};

function templateFor(slug, language) {
  return problemTemplates[slug]?.[language] || templates[language];
}

const languages = [
  ['javascript', 'JavaScript'],
  ['python', 'Python'],
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
  languages.forEach(([value, text]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  });
  select.addEventListener('change', () => {
    const slug = window.location.pathname.split('/').filter(Boolean).pop();
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
    const comparison = result.passed && result.solution ? `<details class="solution-comparison"><summary>Compare with an example solution</summary><p>${escapeHtml(result.explanation)}</p><pre>${escapeHtml(result.solution)}</pre></details>` : '';
    resultBox.innerHTML = `<b>${result.passed ? '✓ ' : '○ '}${result.message}</b>${result.tests !== undefined ? `<span>${result.tests}/${result.total} tests passed</span>` : ''}${cases}${output}${comparison}`;
  } catch { window.alert('The code runner is unavailable. Please try again in a moment.'); }
  button.disabled = false;
  button.firstChild.textContent = 'Run code ';
}, true);
