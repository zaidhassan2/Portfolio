import { motion } from "framer-motion";
import { styles } from "../styles";
import CoreCanvas from "./canvas/Core";

import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import profile from '../assets/profile.png'

const Hero = () => {
    return (
        <section className={`relative w-full h-[100dvh] mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse md:flex-row items-start gap-10 z-50`}
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

                        <div className="mt-8 flex flex-col gap-6">
                            <div className="flex gap-4">
                                <a href="https://github.com/zaidhassan2" target="_blank" rel="noopener noreferrer" className="bg-tertiary p-3 rounded-full border border-[#00F0FF]/20 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all">
                                    <Github className="text-white w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/zaid-hassan-2a1990332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-tertiary p-3 rounded-full border border-[#00F0FF]/20 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all">
                                    <Linkedin className="text-white w-6 h-6" />
                                </a>
                                <a href="mailto:zaid786276@gmail.com" className="bg-tertiary p-3 rounded-full border border-[#00F0FF]/20 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all">
                                    <Mail className="text-white w-6 h-6" />
                                </a>
                            </div>

                            <motion.a
                                href="https://drive.google.com/uc?export=download&id=1AbfhQSELBuMMcpM-K7oX6CUOf0SJInRM" download="Muhammad_Zaid_Hassan_CV.pdf" // Replace with actual Google Drive link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white rounded-full group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] w-fit cursor-pointer touch-manipulation z-50"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    boxShadow: ["0px 0px 0px rgba(0,240,255,0)", "0px 0px 20px rgba(0,240,255,0.5)", "0px 0px 0px rgba(0,240,255,0)"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                                <span className="relative flex items-center gap-2">
                                    <Download className="w-5 h-5 animate-bounce" />
                                    Download CV
                                </span>
                            </motion.a>
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
