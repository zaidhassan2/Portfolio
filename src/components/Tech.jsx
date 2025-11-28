import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>My skills</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
            </motion.div>

            <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
                {technologies.map((technology, index) => (
                    <div className='w-full md:w-[45%] flex flex-col gap-2' key={technology.name}>
                        <div className="flex justify-between">
                            <span className="text-white font-medium">{technology.name}</span>
                            <span className="text-secondary">{technology.progress}%</span>
                        </div>
                        <div className="w-full bg-tertiary rounded-full h-2.5 border border-[#00F0FF]/20">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${technology.progress}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="bg-[#00F0FF] h-2.5 rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
