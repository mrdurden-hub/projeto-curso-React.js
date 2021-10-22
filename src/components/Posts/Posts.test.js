import { render } from '@testing-library/react';
import { Posts } from './index';

const props = [
  {
    id: 0,
    title: 'Lorem ipsum',
    body: 'Lorem ipsum dolor sit amet e bla bla bla...',
    cover: 'img/img.jpg',
  },
  {
    id: 1,
    title: 'Lorem ipsum',
    body: 'Lorem ipsum dolor sit amet e bla bla bla...',
    cover: 'img/img.jpg',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    body: 'Lorem ipsum dolor sit amet e bla bla bla...',
    cover: 'img/img.jpg',
  },
];

describe('<Post />', () => {
  it('should render Posts', () => {
    render(<Posts {...props} />);
  });
});
