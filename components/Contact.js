import React, { useState } from "react";
import { useRouter } from 'next/router';

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

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
                const response = await fetch('https://portfolio-backend-ynyr.onrender.com/sendEmail/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"name":val.name, "to":val.email, "txt":val.msg}),
                });

                const result = await response.json();
                if (response.ok) {
                    setSuccess('Email sent successfully!');
                } else {
                    setErr(result.error || 'Failed to send email.');
                }
            } catch (err) {
                setErr('Error: ' + err.message);
            } finally {
                val.email="";
                val.name="";
                val.msg="";
                setLoading(false);
            }
            setSub(true);
            setTimeout(() => {
                // You can implement further logic here after successful submission
                router.push('/'); // This will redirect to / Home page
            }, 1500);
        } else {
            console.log("Not-submited");
            // icon.className = "fa-solid fa-user";
            setErr("Please Enter Data to Send...")
            setSub(false);
            return;
        }
    }

    return (
        <>
            <div className={styles.main}>

                <div className={styles.head}><span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}>Contact</span> me</div>

                <div className={styles.img}></div>

                <Form id="form" className={styles.form}>
                    {
                        (sub===true) ? <div style={{color:"red", fontSize:"1.2rem"}}>
                                Redirecting to Home Page...
                            </div> : ""
                    }
                    <Row className={styles.row}>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label className="w-100 fs-5">Full Name</Form.Label>
                            <div className={styles.inputContainer}>
                                <FloatingLabel controlId="floatingName" label="Full name...">
                                    <Form.Control
                                        className="w-100 fs-6"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        value={val.name}
                                        placeholder="Name"
                                        autoFocus
                                    />
                                </FloatingLabel>
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
                                <FloatingLabel controlId="floatingEmail" label="Email address...">
                                    <Form.Control
                                        className="w-100 fs-6"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={val.email}
                                        placeholder="name@example.com"
                                        autoComplete="email"
                                    />
                                </FloatingLabel>
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
                                    className="w-100 fs-6 h-28"
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

                    <Button onClick={handleSubmit} variant="primary" type="submit" className={styles.btn} disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}
                    </Button>

                    {error && <p style={{ color: 'red', backgroundColor:'black', fontSize:"1rem" }}>{err}</p>}
                    {success && <p style={{ color: 'green', backgroundColor:'black', fontSize:"1rem" }}>{success}</p>}
                </Form>

                <div className={styles.main2}>
                    <div className={styles.txt}>Connect with me on <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}>Social media</span></div>

                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/srinivas-batthula/" target="_blank" style={{ fontSize: '2rem', color: 'skyblue', marginRight: '1rem', borderRadius: '30%' }} className={styles.link1}>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/srinivas-batthula/" target="_blank" style={{ fontSize: '2rem', color: 'white', marginRight: '1rem', borderRadius: '30%' }} className={styles.link2}>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://leetcode.com/u/WRBRSO7OH6/" target="_blank" style={{ fontSize: '2.2rem', width:'2.2rem', height:'2.2rem', color: 'white', marginRight: '1rem', borderRadius: '30%' }} className={styles.link2}>
                        <svg width="95" height="111" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto max-w-none"><path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="black"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/srinivas_abhi8/" target="_blank" style={{ fontSize: '2rem', color: 'red', marginRight: '1rem', borderRadius: '30%' }} className={styles.link3}>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
