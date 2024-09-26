import { Highlight, themes } from "prism-react-renderer";

interface SyntaxHighlighterProps {
  code: string;
  language: string;
}

export default function SyntaxHighlighter({
  code,
  language,
}: SyntaxHighlighterProps) {
  return (
    <Highlight theme={themes.nightOwl} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className="overflow-x-auto rounded-lg bg-gray-800 p-5 text-sm">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span className="inline-block w-8 select-none text-gray-500">
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
