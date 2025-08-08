import React, { useState } from "react";
import { useRouter } from 'next/router';

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Socials from "./Socials";
import styles from "./../styles/Contact.module.css";
import { saveToIndexedDB } from "@/utils/indexedDB";


const OfflineStore = async (val) => {       // Save Offline & Queue Background Sync...
    let temp = {
        id: Date.now(),
        body: { "name": val.name, "email": val.email, "message": val.msg },
        url: 'https://eo95al15k26gtw1.m.pipedream.net',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'pipedream/1'
        }
    }
    await saveToIndexedDB(temp, 'contactForm');

    try {      // Registering 'SYNC' event {fired when back online}...
        if ('serviceWorker' in navigator && 'SyncManager' in window) {
            (await navigator.serviceWorker.ready).sync.register('sync-share');
            console.log('Background sync registered.');
        }
    } catch (err) {
        console.error('Sync setup failed, saving locally:', err);
    }
    // console.log('SyncManager')

    toast.success("Saved successfully! Will send when online.", {
        position: "top-center",
        closeOnClick: true,
        draggable: false,
        hideProgressBar: false,
        closeButton: true,
        autoClose: 3000,
        theme: "colored",
        transition: Bounce
    });
    return;
}


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

        if (val.msg === "") {
            t["msg"] = "Message is Required!";
        }
        else {
            t["msg"] = "";
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
        setVal({ ...val, [event.target.name]: event.target.value });
        Validite();
    }

    function finishAndRedirect() {          // Helper function on Success...
        setVal({ name: "", email: "", msg: "" });
        setSub(true);
        setLoading(false);
        setSuccess('Redirecting to Home...');
        setTimeout(() => router.push('/'), 3000);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (Validite() === true) {
            if (loading) return;
            setLoading(true);
            setErr(null);
            setSuccess(null);
            console.log("submited");

            // If offline, store in IndexedDB for backup...
            if (typeof navigator !== "undefined" && !navigator.onLine) {
                console.log('Offline: Saving to IndexedDB!');
                await OfflineStore(val);        // Save Offline & Queue Background Sync...
                finishAndRedirect();
                return;
            }
            else {          // Online: fire it live to n8n...
                console.log('Online: Sending Request!');
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
                        finishAndRedirect();
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
                    await OfflineStore(val);        // Save Offline & Queue Background Sync...
                    finishAndRedirect();
                }
            }
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
            setErr("Please Enter Valid Data!")
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
                        fontSize: '1.2rem',
                        fontWeight: 'normal'
                    }}>Interested in working together or discussing an idea? I’d love to hear from you!</p>
                </div>

                {/* <div className={styles.img}></div> */}

                <ToastContainer />

                <Form id="form" className={styles.form}>
                    <div style={{ color: 'rgb(231, 130, 231)', fontWeight: 'bolder', fontSize: '1.7rem', marginBottom: '3.3rem' }}> <i className="fa-regular fa-paper-plane fs-2 mr-3"></i> Drop a Message</div>
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
                                    required
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
                                    required
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
                                    aria-required
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
                    <Socials />
                </div>

                <div className="max-w-lg mx-auto mt-8 mb-5 pt-7 pb-7 pl-3 pr-3 rounded-3xl border border-green-400 bg-green-400/15 text-white shadow-lg hover:shadow-green-300 transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3 justify-center">
                        <span className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></span>
                        <h2 className="text-lg font-semibold text-green-400">Available for Opportunities</h2>
                    </div>
                    <p className="text-white-50 leading-relaxed text-center" style={{ fontSize: '1.1rem' }}>
                        I'm currently open to internships, freelance projects, and collaborations in software development and Open Source. Let's build something meaningful together!
                    </p>
                </div>
            </div>
        </>
    );
}
