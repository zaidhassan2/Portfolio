import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { education, hobbies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ education }) => (
    <div className='bg-tertiary p-5 rounded-2xl w-full border border-[#00F0FF]/20'>
        <h3 className='text-white text-[24px] font-bold'>{education.school}</h3>
        <p className='text-secondary text-[16px] font-semibold'>{education.degree}</p>
        <p className='text-secondary text-[14px]'>{education.grade}</p>
        <p className='text-white-100 text-[14px] mt-2'>{education.desc}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {education.points.map((point, index) => (
                <li
                    key={`education-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

import { Code, Music, Moon, Shield } from 'lucide-react';

const HobbyCard = ({ name, icon: Icon, color }) => (
    <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className='w-full sm:w-[250px] p-[1px] rounded-[20px] shadow-card'
    >
        <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col border border-[#00F0FF]/20 hover:border-[#00F0FF] transition-all duration-300'
        >
            <Icon size={48} className={`${color}`} />
            <h3 className='text-white text-[20px] font-bold text-center'>
                {name}
            </h3>
        </div>
    </motion.div>
);

const EducationAndHobbies = () => {
    const hobbiesData = [
        { name: "Coding", icon: Code, color: "text-blue-400" },
        { name: "Music", icon: Music, color: "text-green-400" },
        { name: "Sleeping", icon: Moon, color: "text-purple-400" },
        { name: "Cyber Security", icon: Shield, color: "text-red-400" },
    ];

    return (
        <div className="flex flex-col gap-20">
            {/* Education Section */}
            <div>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My Academic Journey</p>
                    <h2 className={styles.sectionHeadText}>Education.</h2>
                </motion.div>

                <div className='mt-10 flex flex-col gap-5'>
                    {education.map((edu, index) => (
                        <EducationCard key={`education-${index}`} education={edu} />
                    ))}
                </div>
            </div>

            {/* Hobbies Section */}
            <div>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What I do for fun</p>
                    <h2 className={styles.sectionHeadText}>Hobbies.</h2>
                </motion.div>

                <div className='mt-10 flex flex-wrap gap-10 justify-center'>
                    {hobbiesData.map((hobby, index) => (
                        <HobbyCard key={hobby.name} {...hobby} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(EducationAndHobbies, "");
