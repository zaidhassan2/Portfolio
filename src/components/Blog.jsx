import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { blogPosts } from "../constants/blog";

const BlogCard = ({ index, title, date, category, excerpt, tags, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
            <div className='relative w-full h-[230px]'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-cover rounded-2xl'
                />
                <div className='absolute top-3 right-3 bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm'>
                    <p className='text-white text-[12px] uppercase'>{category}</p>
                </div>
            </div>

            <div className='mt-5'>
                <div className="flex justify-between items-center mb-2">
                    <h3 className='text-white font-bold text-[24px] truncate'>{title}</h3>
                </div>
                <p className='text-secondary text-[14px] mb-4'>{date}</p>
                <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{excerpt}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p key={tag} className={`text-[14px] blue-text-gradient`}>
                        #{tag}
                    </p>
                ))}
            </div>

            {/* Read More Button - Commented out for future update
            <div className="mt-5">
                <button className="bg-[#915eff] py-2 px-4 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary hover:bg-[#7e4bd6] transition-colors">
                    Read More
                </button>
            </div>
            */}
        </motion.div>
    );
};

const Blog = () => {
    const [filter, setFilter] = useState("All");

    const filteredPosts = filter === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === filter);

    return (
        <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className={`mt-12 bg-primary min-h-screen ${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Activities & Updates</p>
                <h2 className={styles.sectionHeadText}>Blog.</h2>
            </motion.div>

            <div className='w-full flex items-center justify-start mt-5 mb-10 gap-4'>
                {["All", "Assignment", "Task", "Project"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`py-2 px-4 rounded-lg font-medium transition-colors ${filter === cat
                            ? "bg-[#915eff] text-white"
                            : "bg-tertiary text-secondary hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {/* Blog Posts Section */}
            <div className='mt-10 flex flex-wrap gap-7'>
                <AnimatePresence mode='wait'>
                    {filteredPosts.map((post, index) => (
                        <BlogCard key={`blog-${post.id}`} index={index} {...post} />
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Blog;
