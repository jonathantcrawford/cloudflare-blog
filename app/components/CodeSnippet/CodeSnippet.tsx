import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxHighlighterTheme from "react-syntax-highlighter/dist/esm/styles/hljs/gradient-dark";


export const CodeSnippet = ({ string, fileName }: any) => {
  return (
    <section className="">
      <code className="">{fileName}</code>
      <SyntaxHighlighter language="json" style={syntaxHighlighterTheme}>
        {string}
      </SyntaxHighlighter>
    </section>
  );
};
