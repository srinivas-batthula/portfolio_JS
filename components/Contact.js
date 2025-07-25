import React, { useState } from "react";
import { useRouter } from 'next/router';

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./../styles/Contact.module.css";

export default function ContactPage() {
    const [error, setError] = useState({ name: "", email: "", msg: "" });
    const [val, setVal] = useState({ name: "", email: "", msg: "" });
    const [sub, setSub] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [err, setErr] = useState(null);

    const router = useRouter();

    function Validite() {
        let t = { ...error };
        if (val.name === "") {
            t["name"] = "UserName is required!";
        } else {
            t["name"] = "";
        }

        if (val.email === "") {
            t["email"] = "E-mail is required!";
        } else if (!/\S+@\S+\.\S+/.test(val.email)) {
            t["email"] = "E-mail is Invalid!";
        } else {
            t["email"] = "";
        }

        setError(t);

        if (
            t.name === "" &&
            t.email === "" &&
            t.msg === ""
        ) {
            return true;
        } else {
            return false;
        }
    }

    function handleChange(event) {
        console.log("change");
        setVal({ ...val, [event.target.name]: event.target.value });

        Validite();
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (Validite() === true) {
            setLoading(true);
            setErr(null);
            setSuccess(null);
            console.log("submited");
            // icon.className = "fa-solid fa-spinner text-success";
            try {
                const response = await fetch('https://eo95al15k26gtw1.m.pipedream.net', {                //    n8n-automation endpoint ...
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'pipedream/1'
                    },
                    body: JSON.stringify({ "name": val.name, "email": val.email, "message": val.msg }),        // { "name": val.name, "to": val.email, "txt": val.msg } ...
                });

                if (response.ok) {
                    // Show success toast if form is submitted correctly
                    toast.success("Form submitted successfully!", {
                        position: "top-center",
                        closeOnClick: true,
                        draggable: false,
                        hideProgressBar: false,
                        closeButton: true,
                        autoClose: 3000,
                        theme: "colored",
                        transition: Bounce
                    });
                    setSuccess('Redirecting to Home...');
                } else {
                    // Show error toast if input is empty
                    toast.error("Form submission failed!", {
                        position: "top-center",
                        closeOnClick: true,
                        draggable: false,
                        hideProgressBar: false,
                        closeButton: true,
                        autoClose: 3000,
                        theme: "dark",
                        transition: Bounce
                    })
                    setErr('Failed to send email.');
                }
            } catch (err) {
                console.log('Error from /Contact', err);
                // Show error toast if input is empty
                toast.error("Form submission failed!", {
                    position: "top-center",
                    closeOnClick: true,
                    draggable: false,
                    hideProgressBar: false,
                    closeButton: true,
                    autoClose: 3000,
                    theme: "dark",
                    transition: Bounce,
                })
                setErr('Error!');
            } finally {
                val.email = "";
                val.name = "";
                val.msg = "";
                setLoading(false);
            }
            setSub(true)
            setTimeout(() => {
                // You can implement further logic here after successful submission
                router.push('/'); // This will redirect to / Home page
            }, 3000)
        } else {
            console.log("Not-submited");
            // Show error toast if input is empty
            toast.error("Form submission failed!", {
                position: "top-center",
                closeOnClick: true,
                draggable: false,
                hideProgressBar: false,
                closeButton: true,
                autoClose: 3000,
                theme: "dark",
                transition: Bounce
            })
            // icon.className = "fa-solid fa-user";
            setErr("Please Enter Data to Send!")
            setSub(false);
            return;
        }
    }

    return (
        <>
            <div className={styles.main}>

                <div className={styles.head}>
                    Let's <span className={styles.head2}> Connect</span>
                    <p style={{
                        color: 'rgba(220, 220, 220, 0.751)',
                        fontSize: '1.3rem',
                        fontWeight: 'normal'
                    }}>Interested in working together or discussing an idea? I’d love to hear from you!</p>
                </div>

                {/* <div className={styles.img}></div> */}

                <ToastContainer />

                <Form id="form" className={styles.form}>
                    <div style={{ color: 'rgb(231, 130, 231)', fontWeight: 'bolder', fontSize: '1.7rem', marginBottom: '3.3rem' }}>Drop a Message</div>
                    {
                        (sub === true) ? <div style={{ color: "green", fontSize: "1.2rem", backgroundColor: 'transparent' }}>
                            Redirecting to Home Page...
                        </div> : ""
                    }
                    {error && <p style={{ color: 'red', backgroundColor: 'transparent', fontSize: "1rem" }}>{err}</p>}
                    {(success && sub === false) && <p style={{ color: 'green', backgroundColor: 'transparent', fontSize: "1rem" }}>{success}</p>}

                    <Row className={styles.row}>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label className="w-100 fs-5">Full Name</Form.Label>
                            <div className={styles.inputContainer}>
                                <Form.Control
                                    className={`${"w-100 fs-6 py-2.5"} ${styles.inp}`}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={val.name}
                                    placeholder="John Smith"
                                    autoFocus
                                />
                                <span
                                    className={`${styles.validationIcon} ${error.name === "" ? styles.valid : styles.invalid}`}
                                >
                                    {
                                        (val.name !== "") ? ((error.name === "") ? "✓" : "✗") : ""
                                    }
                                </span>
                            </div>
                        </Form.Group>
                    </Row>

                    <Row className={styles.row}>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="w-100 fs-5">E-mail</Form.Label>
                            <div className={styles.inputContainer}>
                                <Form.Control
                                    className={`${"w-100 fs-6 py-2.5"} ${styles.inp}`}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={val.email}
                                    placeholder="name@example.com"
                                    autoComplete="email"
                                />
                                <span
                                    className={`${styles.validationIcon} ${error.email === "" ? styles.valid : styles.invalid}`}
                                >
                                    {
                                        (val.email !== "") ? (error.email === "" ? "✓" : "✗") : ""
                                    }
                                </span>
                            </div>
                        </Form.Group>
                    </Row>

                    <Row className={styles.row}>
                        <Form.Group as={Col} controlId="formGridMessage">
                            <Form.Label className="w-100 fs-5">Message</Form.Label>
                            <div className={styles.inputContainer}>
                                <Form.Control
                                    className={`${"w-100 fs-6 py-4"} ${styles.inp}`}
                                    type="text"
                                    name="msg"
                                    onChange={handleChange}
                                    value={val.msg}
                                    placeholder="Write something here..."
                                />
                                <span
                                    className={`${styles.validationIcon} ${error.msg === "" ? styles.valid : styles.invalid}`}
                                >
                                    {
                                        (val.msg !== "") ? (error.msg === "" ? "✓" : "✗") : ""
                                    }
                                </span>
                            </div>
                        </Form.Group>
                    </Row>

                    <Button onClick={handleSubmit} type="submit" className={styles.btn} disabled={loading}>
                        {loading ? 'Sending...' : 'Send'} <i className="fa-regular fa-paper-plane"></i>
                    </Button>
                </Form>

                <div className={styles.main2}>
                    <div className={styles.txt}>Get In Touch</div>

                    <div className={styles.links}>
                        <a data-social="Linkedin" className={styles.linkedinButton} id={styles.linkBtn} rel="me" href="https://www.linkedin.com/in/srinivas-batthula/" title="srinivas batthula linkedin socials" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='38' height='38' fill="currentColor"><title>Linkedin</title><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </a>
                        <a data-social="GitHub" className={styles.githubButton} id={styles.linkBtn} rel="me" href="https://github.com/srinivas-batthula/" title="srinivas batthula github socials" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width='38' height='38' fill="currentColor"><title>GitHub</title><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        </a>
                        <a data-social="LeetCode" className={styles.leetcodeButton} id={styles.linkBtn} rel="me" href="https://leetcode.com/u/srinivas-batthula/" title="srinivas batthula leetcode socials" target="_blank">
                            <svg role="img" viewBox="0 0 24 24" width='38' height='38' fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
                        </a>
                        {/* <a data-social="Instagram" className={styles.instagramButton} id={styles.linkBtn} rel="me" href="https://www.instagram.com/srinivas_abhi8/" title="srinivas batthula instagram socials" target="_blank">
                            <svg role="img" viewBox="0 0 24 24" width='38' height='38' fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
                        </a> */}
                        <a data-social="Twitter" className={styles.twitterButton} id={styles.linkBtn} rel="me" href="https://x.com/Abhi07082005/" title="srinivas batthula x twitter socials" target="_blank">
                            <svg role="img" viewBox="0 0 24 24" width='38' height='38' fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                        </a>
                        <a
                            data-social="Email"
                            className={styles.emailButton}
                            id={styles.linkBtn}
                            href="mailto:srinivasbatthula05.official@gmail.com"
                            title="srinivas batthula email socials"
                            target="_blank"
                            rel="me"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                width="43"
                                height="43"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Email</title>
                                <path d="M2 4C0.9 4 0 4.9 0 6v12c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2H2zm0 2h20l-10 7L2 6zm0 2.5l7.5 5.25c1 .75 2.5 .75 3.5 0L22 8.5V18H2V8.5z" />
                            </svg>
                        </a>
                        <a
                            data-social="WhatsApp"
                            className={styles.whatsappButton}
                            id={styles.linkBtn}
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_MOBILE_NO}?text=Hi%20Srinivas%2C%20I%20just%20visited%20your%20portfolio%20and%20was%20really%20impressed%21%20I%27d%20love%20to%20connect%20and%20maybe%20discuss%20opportunities%20or%20ideas%20with%20you.`}
                            title="srinivas batthula whatsapp"
                            target="_blank"
                            rel="me"
                        >
                            <svg
                                role="img"
                                width="42"
                                height="42"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <title>WhatsApp</title>
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                        </a>

                    </div>
                </div>
                
                <div className="max-w-lg mx-auto mt-8 mb-5 pt-7 pb-7 pl-3 pr-3 rounded-3xl border border-green-400 bg-green-400/15 text-white shadow-lg hover:shadow-green-300 transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3 justify-center">
                        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                        <h2 className="text-lg font-semibold text-green-400">Available for Opportunities</h2>
                    </div>
                    <p className="text-white-50 leading-relaxed text-center" style={{fontSize: '1.1rem'}}>
                        I'm currently open to internships, freelance projects, and collaborations in software development and Open Source. Let's build something meaningful together!
                    </p>
                </div>
            </div>
        </>
    );
}
