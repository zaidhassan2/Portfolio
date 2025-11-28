import { motion } from "framer-motion";
import { styles } from "../styles";
import CoreCanvas from "./canvas/Core";

import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Mail } from 'lucide-react'
import profile from '../assets/profile.png'

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse md:flex-row items-start gap-10`}
            >
                <div className="flex flex-row items-start gap-5">
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#00F0FF]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#00F0FF]'>ZAID HASSAN</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I am a{' '}
                            <span style={{ color: '#00F0FF', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Software Engineer', 'Cyber Security Researcher', 'Python Developer', 'C++ Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </p>

                        <div className="mt-8 flex gap-4">
                            <a href="https://github.com/zaidhassan2" target="_blank" rel="noopener noreferrer" className="bg-tertiary p-3 rounded-full border border-[#00F0FF]/20 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all">
                                <Github className="text-white w-6 h-6" />
                            </a>
                            <a href="#" className="bg-tertiary p-3 rounded-full border border-[#00F0FF]/20 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all">
                                <Linkedin className="text-white w-6 h-6" />
                            </a>
                            <a href="mailto:zaid@example.com" className="bg-tertiary p-3 rounded-full border border-[#00F0FF]/20 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all">
                                <Mail className="text-white w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-auto flex justify-center md:justify-end flex-1">
                    <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full p-[4px] bg-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_50px_rgba(0,240,255,0.3)]">
                        <img
                            src={profile}
                            alt="Zaid Hassan"
                            className="w-full h-full object-cover rounded-full border-4 border-primary"
                        />
                    </div>
                </div>
            </div>

            <CoreCanvas />

        </section>
    );
};

export default Hero;
