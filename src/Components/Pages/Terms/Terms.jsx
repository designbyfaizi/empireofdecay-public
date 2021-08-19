import React, { useEffect } from 'react';

const Terms = () => {

    useEffect(() => {
        let newTitle = "Terms";
        document.title = newTitle;
    }, []);

    return(
        <main>
            <div className="terms-page d-flex">
                <div className="terms-container">
                    <h1>
                        Terms
                    </h1>
                    <p>
                        This is the terms page.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Terms;