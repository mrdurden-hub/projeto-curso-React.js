import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';

class App extends Component {
  // Nessa classe é usado Class field, por isso não tem construtor
  state = {
    posts: []
  }

  componentDidMount(){
    this.loadPosts()
  }

  loadPosts = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    
    const [posts, photos] = await Promise.all([postResponse, photosResponse])
    
    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.body}
            cover={post.cover}
            />
          ))}
        </div>
      </section>
      
    );
  }
}

export default App;
