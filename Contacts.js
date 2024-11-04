import React, { useState } from 'react';
import SocialLinks from './socialLinks';

const Contacts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email)
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail) {
            setEmailError("Please enter a valid email")
        } else {
            setEmailError('')
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        const formData = new FormData(event.target);
        formData.append("access_key", "53e8d146-d672-4d34-b9a4-742f1063796d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await res.json();
            if (result.success) {
                setIsSubmitting(true);
            } else {
                console.error("Submission failed", result);
            }
        } catch (error) {
            console.log("There's an error in submitting the form", error);
        }
    };

    return (
        <div>
            <section className="contact">
                <div className="form-container">
                    {isSubmitting ? (
                        <h3>Thank You For Submitting the form.</h3>
                    ) : (
                        <form onSubmit={onSubmit}>
                            <div className="input-box">
                                <label>Full Name</label>
                                <input
                                    className="field-box"
                                    placeholder="Enter your name "
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <label>Email</label>
                                <input
                                    className="field-box"
                                    placeholder="Enter your email "
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailError && (
                                    <span className='email-error'>{emailError}</span>
                                )}
                            </div>
                            <div className="input-box">
                                <label>Your Message</label>
                                <textarea
                                    name="message"
                                    className="field-box big"
                                    placeholder="Enter your message "
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    )}
                </div>
                <div className="social-links-container">
                    <SocialLinks />
                </div>
            </section>
        </div>
    );
};

export default Contacts;







