"use client";
import React from "react";
import { SyntaxHighlighter as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const COMPONENT_MAP = {
  h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
  p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
  a: (props) => <a className="text-blue-600 hover:underline" {...props} />,
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />
  ),
  li: (props) => <li className="mb-2" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700"
      {...props}
    />
  ),
  code: ({ children, className }) => {
    const language = className?.replace("language-", "") || "javascript";
    return (
      <ReactSyntaxHighlighter
        language={language}
        style={atomOneDark}
        className="rounded-lg mb-4"
        wrapLongLines={true}
      >
        {String(children).replace(/\n$/, "")}
      </ReactSyntaxHighlighter>
    );
  },
  pre: (props) => <>{props.children}</>,
  img: (props) => (
    <img className="max-w-full h-auto rounded-lg my-4" {...props} />
  ),
  table: (props) => (
    <table className="border-collapse border border-gray-300 my-4" {...props} />
  ),
  tr: (props) => <tr className="border border-gray-300" {...props} />,
  td: (props) => <td className="border border-gray-300 px-4 py-2" {...props} />,
  th: (props) => (
    <th
      className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold"
      {...props}
    />
  ),
};

export default COMPONENT_MAP;
