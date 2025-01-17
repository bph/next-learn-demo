//Layout as a Higher Order Component (Method 1)

import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid green'
};

const withLayout = Page => {
    return () => (
        <div style={layoutStyle}>
         <Header />
         <Page />
        </div>
    );
};
    


export default withLayout;