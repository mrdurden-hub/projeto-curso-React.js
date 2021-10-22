import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from '.';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 0,
          title: 'title 1',
          body: 'Lorem ipsum dolor sit amet',
        },
        {
          userId: 1,
          title: 'title 2',
          body: 'Lorem ipsum dolor sit amet',
        },
        {
          userId: 2,
          title: 'title 3',
          body: 'Lorem ipsum dolor sit amet',
        },
      ]),
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          url: 'img/img.png',
        },
        {
          url: 'img/img.png',
        },
        {
          url: 'img/img.png',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);
/*-
describe() recebe no primeiro parâmetro o componente
que será testado e no segundo parâmetro é passado o[s] teste[s].
  EXEMPLO:
-*/
describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePost = screen.getByText('Desculpe, mas não conseguimos encontrar nada relacionado.');

    await waitForElementToBeRemoved(noMorePost);

    const search = screen.getByPlaceholderText(/Type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);

    const button = screen.getByRole('button', { name: /Load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<Home />);
    const noMorePost = screen.getByText('Desculpe, mas não conseguimos encontrar nada relacionado.');

    await waitForElementToBeRemoved(noMorePost);

    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title 2' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title 3' })).toBeInTheDocument();
  });
});
