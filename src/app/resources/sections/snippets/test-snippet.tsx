"use client";
import SyntaxHighlighter from "@/app/components/SyntaxHighlighter";

export default function TestSnippet() {
  const codeExample = `
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");
  `.trim();

  return (
    <div className="mx-auto my-8 max-w-2xl">
      <h1 className="mb-4 text-2xl font-bold">Syntax Highlighter Example</h1>
      <SyntaxHighlighter code={codeExample} language="javascript" />
    </div>
  );
}
