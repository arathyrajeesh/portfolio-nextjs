import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

    if (!form.current) return;

        emailjs
        .sendForm(
            "service_icgr1io",      // your service id
            "template_nzc9znd",     // your template id
            form.current,
            "chedQA2Z-BEdplaaU"     // your public key
        )
        .then(() => {
            alert("Message sent successfully!");
            form.current?.reset();
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert("Failed to send message: " + (error?.text ?? error?.message ?? "Unknown error"));
        });
    };

    return (
        <div id="contact" className="pt-16 pb-16">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                        Schedule a call <br /> with me to see if I <br /> can help
                    </h1>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg">
                        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                    </p>

                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                        <BiPhone className="w-9 h-9 text-cyan-300" />
                        <p className="text-xl font-bold text-gray-400">+91 8547189033</p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                        <BiEnvelope className="w-9 h-9 text-cyan-300" />
                        <p className="text-xl font-bold text-gray-400">arathyrajeesh2@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                        <BiMap className="w-9 h-9 text-cyan-300" />
                        <p className="text-xl font-bold text-gray-400">Kannur, Kerala</p>
                        </div>
                    </div>

                    <div className="flex items-center mt-8 space-x-3">
                        <a href="https://github.com/arathyrajeesh" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300">
                        <FaGithub className="text-white w-6 h-6" />
                        </a>

                        <a href="https://wa.me/918547189033" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300">
                        <FaWhatsapp className="text-white w-6 h-6" />
                        </a>

                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300">
                        <FaInstagram className="text-white w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="0" className="md:p-10 p-5 bg-[#131332] rounded-lg">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
                        />

                        <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
                        />

                        <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
                        />

                        <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
                        />

                        <button type="submit" className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
                        Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
