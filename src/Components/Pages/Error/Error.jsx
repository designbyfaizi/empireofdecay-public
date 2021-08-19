import React, { useEffect } from 'react';

const ErrorPage = () => {
    useEffect(() => {
        let newTitle = "404 Error";
        document.title = newTitle;
    }, []);
    return(
        <main>
            <div className="error-page d-flex">
                <div className="error-container">
                    <h1>
                        404-Error
                    </h1>
                    <p>
                        Sorry, but it seems but this is not the right route
                    </p>
                </div>
            </div>
        </main>
    );
}
export default ErrorPage;