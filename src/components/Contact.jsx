import { useState } from 'react';
import useAnimateScroll from '../hooks/useAnimateScroll';
import emailjs from '@emailjs/browser';
import { TbMailForward } from 'react-icons/tb';
import { toast, Toaster } from 'react-hot-toast';
import Socials from './Socials';
import Resume from './Resume';


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [input, setInput] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState({ email: false, required: false });
    useAnimateScroll('.hide');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.email && input.message) {
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
                .then((result) => {
                    console.log(result.text);
                    toast.success('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                    setInput({ name: '', email: '', message: '' });
                }, (error) => {
                    console.log(error.text);
                    toast.error('Failed to send message, please try again.');
                });
        } else {
            setError({ ...error, required: true });
        }
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const checkRequired = () => {
        setError({ ...error, required: !input.email || !input.message });
    };

    return (
        <div id="contact" className="px-4 lg:px-72 py-8 lg:py-16 text-white scroll-mt-24 hide">
            <Toaster />
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
                {/* Form Side */}
                <div className="w-full lg:w-1/2 max-w-md mx-auto mb-8 lg:mb-0">
                    <form onSubmit={handleSubmit} className="text-white">
                        <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={input.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={input.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    onBlur={() => {
                                        checkRequired();
                                        setError({ ...error, email: !isValidEmail(input.email) });
                                    }}
                                />
                                {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={input.message}
                                    onChange={handleChange}
                                    required
                                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] resize-none	
                                     focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    onBlur={checkRequired}
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                {error.required && <p className="text-sm text-red-400">Email and Message are required!</p>}
                                <button
                                    type="submit"
                                    className="flex items-center gap-1 hover:gap-3 rounded-full mt-4
                                    bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3
                                     text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white
                                      no-underline transition-all duration-200 ease-out hover:text-white 
                                      hover:no-underline md:font-semibold"
                                >
                                    <span>Send Message</span>
                                    <TbMailForward size={18} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Resume and Socials Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-white">
                    <div className="max-w-md text-center lg:text-left">
                        <p className="text-lg text-[#d3d8e8] mt-8 mb-12">
                            If you have any questions or concerns, please don't hesitate to contact me.
                            I am open to any work opportunities that align with my skills and interests.
                        </p>
                        <div>
                            <Resume />
                        </div>
                        <div className='px-36 lg:px-0'>
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
