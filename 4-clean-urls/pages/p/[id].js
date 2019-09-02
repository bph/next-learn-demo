import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';

export default function Post() {
    const router = useRouter();
    
    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content post content post content post content post {router.query.id} content post content post content post content post content post content {router.query.id}post content post content post {router.query.id}content post content post content post content post content  </p>
        </Layout>
    );
};