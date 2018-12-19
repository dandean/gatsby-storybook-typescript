import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Example from './Example';

storiesOf('Example', module).add('default', () => (
  <Example>Hello World</Example>
));
