// components/Projects.js

import React, { useEffect } from "react";
import styles from "./../styles/Projects.module.css";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { useProjectsDataStore } from "@/store/useProjectsDataStore";


function Card({ project }) {
    return (
        <div
            className={`${styles.card2} bg-gradient-to-br from-[#1a1a1a] to-[#1f1f1f] border border-purple-500/20 rounded-2xl shadow-xl hover:shadow-purple-700 transition duration-200 hover:-translate-y-1 transform p-6`}
        >
            <div >
                <Image src={project.imgUrl} alt='Image' width={500} height={300} loading="lazy" className='rounded-lg mb-3 w-full h-60' />
            </div>

            <h2 className="text-2xl font-semibold text-purple-400 mb-2 flex justify-center">
                {project.title}
            </h2>

            <p className="text-gray-300 mb-3 flex justify-center">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.techStack.map((tech, i) => (
                    <span
                        key={i}
                        className="bg-purple-800/40 text-purple-300 px-2 py-0.5 text-xs rounded-full border border-purple-600/30"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mb-4 text-left flex flex-col justify-start mr-auto">
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex flex-col justify-start">
                    Key Features:
                </h4>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 flex flex-col justify-start">
                    {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-6 pt-4 justify-center">
                {
                    (project.isLiveLink === "true") && <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-2 border border-purple-400 rounded-lg text-purple-300 hover:text-white hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-purple-600"
                    >
                        <span className="group-hover:scale-105 transition-transform duration-200">Live</span>
                        <FaExternalLinkAlt className="text-md group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                }

                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-2 border border-purple-400 rounded-lg text-purple-300 hover:text-white hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-purple-600"
                >
                    <span className="group-hover:scale-105 transition-transform duration-200">Code</span>
                    <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                </a>
            </div>

        </div>
    )
}

export default function ProjectsPage() {
    const data = useProjectsDataStore((s) => s.projects);
    const fetchProjects = useProjectsDataStore((s) => s.fetchProjects);

    useEffect(() => {
        if (!data) {
            fetchProjects();
        }
        else if (data.length === 0) {
            console.log("No Projects to display!");
        }
    }, [data]);


    // metadata.json.....   { In your all `projects` to display them automatically! }
    // {
    //     "imgUrl": "https://srinivas-batthula.github.io/portfolio/utils/projects/portfolio_project.png",
    //         "title": "Personal Portfolio",
    //             "description": "A sleek, responsive portfolio built with React & Next.js to showcase my work, skills, and journey.",
    //                 "techStack": [
    //                     "Next.Js",
    //                     "React.js",
    //                     "TailwindCSS",
    //                     "SEO"
    //                 ],
    //                     "keyFeatures": [
    //                         "Pipedream Automation for contact-form",
    //                         "Auto-fetch & display latest GitHub projects using GitHub-API",
    //                         "Greets users based on their location/timezone using IP detection",
    //                         "Fully Responsive & Cross Platform"
    //                     ],
    //                         "isLiveLink": "true",
    //                             "githubLink": "https://github.com/srinivas-batthula/portfolio",
    //                                 "liveLink": "https://srinivas-batthula.vercel.app"
    // }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.head} style={{ marginBottom: '4rem' }}>
                    My Recent <span style={{ color: 'rgb(231, 120, 231)', fontWeight: 'bold' }}>Works</span>
                    <div style={{ margin: '0.2rem', fontSize: '1.2rem', fontWeight: '400', color: 'rgba(220, 220, 220, 0.751)' }}>Here are a few projects I've worked on recently.</div>
                </div>
                <div className={`${styles.main2} flex flex-wrap justify-center gap-10`}>

                    {
                        (data && data.length !== 0) ? data.map((item, index) => {
                            return (
                                <Card key={index} project={item} />
                            )
                        }) : <div className="text-center w-full my-12 text-green-400 animate-pulse transition-colors duration-500 hover:text-purple-500">
                            <h4>Loading Projects from GitHub...</h4>
                        </div>
                    }

                </div>
                <a href="https://github.com/srinivas-batthula" target="_blank">
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <div className={styles.img3}></div>
                        </div>
                        <div className={styles.title}>
                            More on GitHub...
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}
