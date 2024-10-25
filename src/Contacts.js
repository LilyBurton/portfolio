import React from 'react';
import SocialLinks from './socialLinks';

const Contacts = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "53e8d146-d672-4d34-b9a4-742f1063796d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
    };

    return (
        <div>
            <section className='contact'>
                <form onSubmit={onSubmit}>
                    <div className='input-box'>
                        <label>Full Name</label>
                        <input className='field-box' placeholder='Enter your name ' name='name' required />
                    </div>
                    <div className='input-box'>
                        <label>Email</label>
                        <input className='field-box' placeholder='Enter your email ' name='email' required />
                    </div>
                    <div className='input-box'>
                        <label>Your Message</label>
                        <textarea name='message' className="field-box big" placeholder='Enter your message ' required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                <SocialLinks />
            </section>
        </div>
    );
};

export default Contacts;






