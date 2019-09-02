import Layout from '../components/MyLayout2'; 

const aboutPageContent = <p>This is the about page</p>;

export default function About () {
    return <Layout content={aboutPageContent} />;
}