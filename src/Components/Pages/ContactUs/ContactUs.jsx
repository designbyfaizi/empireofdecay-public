import React, { useEffect } from 'react';

const ContactUs = () => {

    useEffect(() => {
        let newTitle = "Contact Us";
        document.title = newTitle;
    }, []);

    return(
        <main>
            <div className="contactus-page d-flex">
                <div className="contactus-container">
                    <h1>
                        Contact Us
                    </h1>
                    <p>
                        This is the contact us page.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ContactUs;