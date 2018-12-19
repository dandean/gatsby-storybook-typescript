import * as React from 'react';

// Using require instead of import so we do not need to define types for
// every CSS class:
const css = require('./Example.module.css');

// If this component had specific props they would go here:
export interface ExampleProps extends React.HTMLAttributes<HTMLDivElement> {}

const Example: React.FunctionComponent<ExampleProps> = props => {
  const { className, ...remaining } = props;
  return <div className={`${className} ${css.wrapper}`} {...remaining} />;
};

export default Example;
