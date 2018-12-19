import * as React from 'react';
import Example from '../components/Example';

const css = require('./index.module.css');

export interface GatsbyLocation extends Location {
  state: { [key: string]: string };
}

export interface PageProps {
  location: GatsbyLocation;
  data: any; // This would be the data provided by GraphQL queries if they were set up.
}

const IndexPage: React.FunctionComponent<PageProps> = props => {
  return (
    <div className={css.example}>
      <Example>Hello World</Example>
    </div>
  );
};

export default IndexPage;
