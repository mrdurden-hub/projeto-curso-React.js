import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('is render button with the text "load more"', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument('class', 'button');
  });

  // it('is should call the Button function', () => {
  //   const fn = jest.fn();
  //   render(<Button text="load more" onClick={fn} />);

  //   const button = screen.getByRole('button', { name: /load more/i });

  //   userEvent.click(button);

  //   expect(fn).toHaveBeenCalled();
  // });

  it('is should be enabled when disable is false', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });
});
