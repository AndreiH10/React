import Header from '../../components/Header';
import './NotFoundPage.css';

function NotFoundPage({ cart }){
    return(
        <>
            <Header cart={cart} />

            <title>Not found page</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            <div className='not-found-message'>
                Page not found
            </div>
        </>
    )
}

export default NotFoundPage;