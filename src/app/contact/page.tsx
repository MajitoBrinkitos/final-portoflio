'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from '../components/Toast';

function Contact(){
        const form = useRef(null);
        const [toast, setToast] = useState(null);

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
            .sendForm('service_s9mt8is', 'template_b95bqgn', form.current, 'DtaEIUUoMeQM2Joqm')
            .then(() => {
                setToast({ message: 'Message sent!', type: 'success' });
            }, (error) => {
                console.error(error.text);
                setToast({ message: 'Something went wrong.', type: 'error' });
            });
        };

return(
        <>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            <div className="flex flex-col justify-center items-center min-h-screen bg-[#e3e3e3] px-4">
                <section className="flex items-center w-full max-w-3xl bg-transparent md:flex-row">
                <form ref={form} onSubmit={sendEmail} className="mx-auto max-w-screen-xl text-center py-5">
                
                <div className=" mx-auto max-w-screen-xl text-center py-24">
                    <h1 className="text-[#3d0240] mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Contact Us</h1>
                    <p className="mb-8 text-lg font-normal ">We are here for you. Let's talk!!</p>

                    {/*First Name */}
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                        <input type="text" id="first_name" className="bg-[#b7b7b7] border border-gray-300 text-[#3d0240] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your first name" required />
                    </div>

                    {/*Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="bg-[#b7b7b7] border border-gray-300 text-[#3d0240] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400" placeholder="email@example.com" required />
                    </div>

                    {/*Message */}
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">
                            Your message
                        </label>
                        <textarea name="message" id="message" rows={4} className="block p-2.5 w-full text-sm text-[#3d0240] bg-[#b7b7b7] rounded-lg border border-gray focus:ring-blue-500 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </div>

                    {/*Button */}
                    <button type="submit" value="Send" className="flex justify-center mt-5 w-full text-[#fae3e3] bg-[#137083] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-[#0b5269] dark:hover:text-[#eae1e1]">
                        Send
                    </button>
                </div>
                </form>
                </section>
            </div>
        </>
    );
}

export default Contact