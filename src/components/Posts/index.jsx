import './styles.css'

import { PostCard } from '../../components/PostCard/index';

export const Posts = ({posts}) => (
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
)