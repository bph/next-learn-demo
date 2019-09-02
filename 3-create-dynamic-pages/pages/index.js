import Layout from '../components/MyLayout.js';
import Link from 'next/Link';

const PostLink = props => {
  return (<li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
  )
};


export default function Blog() {

  return (
    <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Nextjs is awesome" />
          <PostLink title="Deplay apps with Zeit" />
        </ul>
    </Layout>
  );
}
