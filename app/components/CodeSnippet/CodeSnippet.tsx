import {
  LinksFunction
} from "remix";

import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxHighlighterTheme from "react-syntax-highlighter/dist/esm/styles/hljs/gradient-dark";

import styles from "~/components/CodeSnippet/CodeSnippet.css";

export const links: LinksFunction = () => {
  return [
    {rel: "stylesheet", href: styles },
  ];
};

export const CodeSnippet = ({ string, fileName }: any) => {
  return (
    <section className="code-snippet">
      <code className="file-name">{fileName}</code>
      <SyntaxHighlighter language="json" style={syntaxHighlighterTheme}>
        {string}
      </SyntaxHighlighter>
    </section>
  );
};
