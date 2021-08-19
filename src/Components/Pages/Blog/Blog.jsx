import React, { useEffect } from 'react';

const Blog = () => {

    useEffect(() => {
        let newTitle = "Blog";
        document.title = newTitle;
    }, []);
    return(
        <main>
            <div className="terms-page d-flex">
                <div className="terms-container">
                    <h1>
                        Blog
                    </h1>
                    <p>
                        This is single Blog Page.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Blog;