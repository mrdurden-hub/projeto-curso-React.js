import { render, screen } from '@testing-library/react';
import { PostCard } from './index';
import { PostCardPropsMock } from './mock';

const props = PostCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);
    expect(screen.getByRole('img', { name: /Lorem ipsum/i })).toHaveAttribute('src', props.cover);
  });
});
