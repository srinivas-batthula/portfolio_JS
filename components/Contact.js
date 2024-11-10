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
                        <a href="https://www.instagram.com/srinivas_abhi8/" target="_blank" style={{ fontSize: '2rem', color: 'red', marginRight: '1rem', borderRadius: '30%' }} className={styles.link3}>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
