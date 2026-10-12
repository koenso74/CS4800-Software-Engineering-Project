const templates = {
  javascript: 'function solve(input) {\n  // your code here\n}',
  python: 'def solve(input):\n    # your code here\n    pass',
  java: 'class Solution {\n    public static Object solve(Object input) {\n        // your code here\n        return null;\n    }\n}',
  cpp: '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    // your code here\n    return 0;\n}'
};

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
  languages.forEach(([value, text]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  });
  select.addEventListener('change', () => {
    editor.value = templates[select.value];
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
    const response = await fetch('/api/submissions/run', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug, code: editor?.value || '', language }) });
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
