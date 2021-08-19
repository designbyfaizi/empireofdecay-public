import React, { useEffect } from 'react';

const Blogs = () => {

    useEffect(() => {
        let newTitle = "Blogs";
        document.title = newTitle;
    }, []);
    return(
        <main>
            <div className="terms-page d-flex">
                <div className="terms-container">
                    <h1>
                        Blogs
                    </h1>
                    <p>
                        This is the blogs page.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Blogs;