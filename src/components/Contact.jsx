import { useState, useCallback, memo } from 'react';
import emailjs from '@emailjs/browser';
import { TbMailForward } from 'react-icons/tb';
import { toast, Toaster } from 'react-hot-toast';
import Socials from './Socials';
import Resume from './Resume';
import { AnimateInView } from './AnimateInView';

const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
};

const InputField = memo(({ type, name, placeholder, value, onChange, onBlur, error }) => (
    <div className="flex flex-col gap-2">
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required
            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
));

InputField.displayName = 'InputField';

const TextArea = memo(({ name, placeholder, value, onChange, onBlur }) => (
    <div className="flex flex-col gap-2">
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required
            className="bg-[#10172d] w-full border rounded-md border-[#353a52] resize-none focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            rows="4"
        ></textarea>
    </div>
));

TextArea.displayName = 'TextArea';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState({ email: '', required: '' });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if (formData.email && formData.message) {
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
                .then(() => {
                    toast.success('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                }, () => {
                    toast.error('Failed to send message, please try again.');
                });
        } else {
            setError(prev => ({ ...prev, required: 'Email and Message are required!' }));
        }
    }, [formData]);

    const checkEmail = useCallback(() => {
        setError(prev => ({
            ...prev,
            email: !isValidEmail(formData.email) ? 'Please provide a valid email!' : ''
        }));
    }, [formData.email]);

    const checkRequired = useCallback(() => {
        setError(prev => ({
            ...prev,
            required: !formData.email || !formData.message ? 'Email and Message are required!' : ''
        }));
    }, [formData.email, formData.message]);

    return (
        <div id="contact" className="px-4 lg:px-72 py-8 lg:py-16 text-white scroll-mt-24">
            <Toaster />
            <AnimateInView>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
                    <div className="w-full lg:w-1/2 max-w-md mx-auto mb-8 lg:mb-0">
                        <form onSubmit={handleSubmit} className="text-white">
                            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
                            <div className="flex flex-col gap-4">
                                <InputField
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <InputField
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={() => { checkRequired(); checkEmail(); }}
                                    error={error.email}
                                />
                                <TextArea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={checkRequired}
                                />
                                <div className="flex flex-col items-center gap-2">
                                    {error.required && <p className="text-sm text-red-400">{error.required}</p>}
                                    <button
                                        type="submit"
                                        className="flex items-center gap-1 hover:gap-3 rounded-full mt-4 bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                                    >
                                        <span>Send Message</span>
                                        <TbMailForward size={18} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
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
            </AnimateInView>
        </div>
    );
};

export default memo(Contact);