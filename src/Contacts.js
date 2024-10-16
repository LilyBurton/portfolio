import React from 'react';

const Contacts = () => {
    return(
        <div>
            <section className='contact'>
                <form>
                    <div className='input-box'>
                        <label>Full Name</label>
                        <input className='field-box' placeholder='Enter your name ' required />
                    </div>
                    <div className='input-box'>
                        <label>Email</label>
                        <input className='field-box' placeholder='Enter your email ' required />
                    </div>
                    <div className='input-box'>
                        <label>Your Message</label>
                        <textarea name="" id="" className="field-box big" placeholder="Enter your message " required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    )
}

export default Contacts;