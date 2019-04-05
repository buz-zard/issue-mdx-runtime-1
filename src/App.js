import React from 'react';
import MDX from '@mdx-js/runtime';

import Test from './Test.mdx';

const mdx = `
# Hello

<div children="O
K" />
`;

export default function App() {
  return (
    <div>
      <Test />
      <MDX>{mdx}</MDX>
    </div>
  );
}
