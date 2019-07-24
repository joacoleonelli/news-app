import React from 'react';
import renderer from 'react-test-renderer';

import Article from './components/Article';

describe('Counter', () => {
  test('snapshot renders', () => {
    const article = {
        author: "Test"
    }

    const component = renderer.create(<Article article={article}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});