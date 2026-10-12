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
  }
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
    resultBox.innerHTML = `<b>${result.passed ? '✓ ' : '○ '}${result.message}</b>${result.tests ? `<span>${result.tests}/${result.total} tests passed</span>` : ''}${cases}${output}`;
  } catch { window.alert('The code runner is unavailable. Please try again in a moment.'); }
  button.disabled = false;
  button.firstChild.textContent = 'Run code ';
}, true);
