
import React, { useEffect } from "react";
import styles from "./../styles/Projects.module.css";
import { useProjectsDataStore } from "@/store/useProjectsDataStore";


function Card({ data }) {
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                {/* Copy 'imgI' & paste it for current img with the new img path/url... */}
                <div className={styles.imgI} style={{ backgroundImage: `url(${data.imgUrl})` }}></div>
            </div>
            <div className={styles.title}>
                {data.title}
            </div>
            <div className={styles.content}>
                {data.des}
            </div>
            <div className={styles.links}>
                {/* Use this DropDown to display 2-github links for Frontend & Backend */}
                {
                    (data.isOneRepo === 'true')
                        ? (<button className={styles.btn2} style={{ marginRight: '1rem' }}><a href={data.urlRepo} target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', padding: '0.3rem' }}><i className="fa-brands fa-github"></i></a></button>)
                        : (<div className={styles.dropdown}>
                            <button className={styles.dropbtn}><i className="fa-brands fa-github"></i></button>
                            <div className={styles.dropdownContent}>
                                <a href={data.urlFront} target="_blank">Frontend repo</a>
                                <a href={data.urlBack} target="_blank">Backend repo</a>
                            </div>
                        </div>)
                }
                {/* Use this Link to display Live-Demo link */}
                {/* <button className={styles.btn2} style={{ marginLeft: '1rem' }}><a href={data.urlLive} target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}><i className="fa-solid fa-arrow-up-right-from-square" style={{ paddingTop: '0.2rem', marginRight: '0.3rem' }}></i><span>  Demo  </span></a></button> */}
                {
                    (data.isLiveLink === "true") && <a href={data.urlLive} target="_blank" style={{ textDecoration: 'none' }}><button className={styles.animatedBtn}><i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '1rem' }}></i></button></a>
                }
            </div>
        </div>
    )
}

export default function ProjectsPage() {
    const data = useProjectsDataStore((s) => s.projects);
    const fetchProjects = useProjectsDataStore((s) => s.fetchProjects);

    useEffect(()=>{
        if(!data){
            fetchProjects();
        }
        else if(data.length === 0){
            console.log("No Projects to display!");
        }
    }, [data]);


    // metadata.json.....   { In your all `projects` to display them automatically! }
    //     {
    //         "imgUrl": "https://srinivas-batthula.github.io/portfolio/utils/projects/todo_project.png",
    //         "title": "Task Manager",
    //         "des": "'Task Manager' is an innovative web app built with MERN stack and PWA features, designed to streamline task organization and productivity. The app features an intuitive UI, Notifications, Secure user-authentication and Offline functionality, ensuring accessibility on the go. Explore how it simplifies everyday planning, and feel free to reach out for any collaboration opportunities!",
    //         "isOneRepo": "false",
    //         "isLiveLink": "true",
    //         "urlFront": "https://github.com/srinivas-batthula/todo",
    //         "urlBack": "https://github.com/srinivas-batthula/todo_backend",
    //         "urlLive": "https://srinivas-batthula.github.io/todo"
    //     }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.head} style={{ marginBottom: '4rem' }}>
                    My Recent <span style={{ color: 'rgb(231, 120, 231)', fontWeight: 'bold' }}>Works</span>
                    <div style={{ margin: '0.2rem', fontSize: '1.2rem', fontWeight: '400', color: 'rgba(220, 220, 220, 0.751)' }}>Here are a few projects I've worked on recently.</div>
                </div>
                <div className={styles.main2}>

                    {
                        (data && data.length !== 0) ? data.map((item, index) => {
                            return (
                                <Card key={index} data={item} />
                            )
                        }) : <div className="text-center w-full my-12 text-green-400 animate-pulse transition-colors duration-500 hover:text-purple-500">
                            <h4>Loading Projects from GitHub...</h4>
                        </div>
                    }

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <div className={styles.img3}></div>
                        </div>
                        <div className={styles.title}>
                            Coming Soon...
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
