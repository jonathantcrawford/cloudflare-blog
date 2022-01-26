import {
  LinksFunction
} from "remix";


import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import syntaxHighlighterTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/gradient-dark';



import styles from "~/components/CodeSnippet/CodeSnippet.css";


export const links: LinksFunction = () => {
  return [
    {rel: "stylesheet", href: styles },
  ];
};

export const CodeSnippet = ({ string, fileName }: any) => {
  SyntaxHighlighter.registerLanguage('json', json);

  return (
    <section className="code-snippet">
      <code className="file-name">{fileName}</code>
      <SyntaxHighlighter  language="json" style={syntaxHighlighterTheme}>
        {string}
      </SyntaxHighlighter >
    </section>
  );
};
