import React, { useEffect } from 'react';

const Privacy = () => {

    useEffect(() => {
        let newTitle = "Privacy";
        document.title = newTitle;
    }, []);

    return(
        <main>
            <div className="privacy-page d-flex">
                <div className="privacy-container">
                    <h1>
                        Privacy
                    </h1>
                    <p>
                        This is the privacy page.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Privacy;