import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

import overview from "../assets/overview.png";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 items-center">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1'
                >
                    I am a Software Engineering student at FAST NUCES with a strong foundation in Systems Programming,
                    Cyber Security, and Full Stack Development. I have experience with C, C++, Python, Java, and SQL,
                    and I'm passionate about low-level computing and building secure, efficient systems.
                    My toolkit includes Linux (Kali, Parrot, Fedora), Bash scripting, and security tools like Burp Suite and Wireshark.
                </motion.p>

                <motion.div
                    variants={fadeIn("left", "spring", 0.5, 0.75)}
                    className="w-full md:w-[300px] flex justify-center flex-1"
                >
                    <img
                        src={overview}
                        alt="Overview"
                        className="w-full h-auto object-cover rounded-2xl border border-[#00F0FF]/20 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
