import React, { useState } from "react";
import styles from "./../styles/About.module.css";

// JSON-Data imports
import allSkills from '@/data/skills.json'
import allTools from '@/data/tools.json'


export default function SkillsSection() {
    const skillCategories = ["All", "Frontend", "Backend", "Database", "Language", "Version Control", "Automation"];
    const toolCategories = ["All", "Testing", "Deployment", "DevOps", "Development", "APIs"];

    const [selectedSkillCategory, setSelectedSkillCategory] = useState("All");
    const [selectedToolCategory, setSelectedToolCategory] = useState("All");

    const filteredSkills = selectedSkillCategory === "All"
        ? allSkills
        : allSkills.filter(skill =>
            skill.type.map(t => t.toLowerCase()).includes(selectedSkillCategory.toLowerCase())
        );

    const filteredTools = selectedToolCategory === "All"
        ? allTools
        : allTools.filter(tool =>
            tool.type.map(t => t.toLowerCase()).includes(selectedToolCategory.toLowerCase())
        );

    return (
        <div className={styles.skills}>
            {/* Skills Section */}
            <div className={styles.main2}>
                <div className={styles.head} style={{ marginBottom: '3rem' }}>
                    Professional <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>Skillset</span>
                    <p style={{ color: 'rgba(255, 295, 255, 0.488)', fontSize: '1.3rem' }}>
                        A comprehensive overview of my technical Skillset
                    </p>
                </div>

                {/* Skills Filter */}
                <div className="w-96 lg:w-full overflow-x-auto scrollbarHide px-4 mb-6 scroll-snap-x">
                    <div className="inline-flex gap-1.5 whitespace-nowrap scroll-snap-start">
                        {skillCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedSkillCategory(category)}
                                className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-300
            ${selectedSkillCategory === category
                                        ? 'bg-purple-500 text-white border-purple-600 shadow'
                                        : 'bg-transparent text-white border-gray-500 hover:border-purple-500 hover:text-purple-400'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills display */}
                <div className={styles.flex1}>
                    {filteredSkills.map((item, index) => (
                        <div key={index} title={item.name} className={styles.flex2}><span className={styles.i}><i className={item.icon}></i></span></div>
                    ))
                    }
                </div>
            </div>

            {/* Tools Section */}
            <div className={styles.main2}>
                <div className={styles.head}>
                    <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>Tools</span> I use
                    <p style={{ color: 'rgba(255, 295, 255, 0.488)', fontSize: '1.3rem' }}>
                        Top tools I use for Productivity
                    </p>
                </div>

                {/* Tool Filter */}
                <div className="w-96 lg:w-full overflow-x-auto scrollbarHide px-4 mb-6 scroll-snap-x">
                    <div className="inline-flex gap-1.5 whitespace-nowrap scroll-snap-start">
                        {toolCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedToolCategory(category)}
                                className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-400
            ${selectedToolCategory === category
                                        ? 'bg-purple-500 text-white border-purple-600 shadow'
                                        : 'bg-transparent text-white border-gray-500 hover:border-purple-500 hover:text-purple-400'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tools display */}
                <div className={styles.flex3}>
                    {filteredTools.map((item, index) => (
                        <div key={index} title={item.name} className={styles.flex2}><span className={styles.i}>
                            <i className={item.icon}></i>
                        </span>
                        </div>
                    ))
                    }
                </div>
            </div>

        </div>
    );
}
