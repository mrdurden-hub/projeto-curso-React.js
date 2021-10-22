import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('is render button with the text "load more"', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  // it('is should call the Button function', () => {
  //   const fn = jest.fn();
  //   render(<Button text="load more" onClick={fn} />);

  //   const button = screen.getByRole('button', { name: /load more/i });

  //   fireEvent.click(button);
  //   fireEvent.click(button);

  //   expect(fn).toHaveBeenCalled();
  // });

  it('is should be enabled when disable is false', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });
});
