import Layout from '../../components/MyLayout.js'
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <img align="right" src={props.show.image.medium} />
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <p>
      <strong>Rating:</strong> {props.show.rating.average} | Premiered: {props.show.premiered}<br/>
      <a href={props.show.officialSite}>Official Site</a>
    </p>
  </Layout>
);
// 
Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`);
  return { show };
};

export default Post;