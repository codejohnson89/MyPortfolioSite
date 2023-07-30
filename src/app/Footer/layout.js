'use client'
import Image from "next/image";
import { useForm } from "react-hook-form";
import linkedIn from "../../../public/images/icon-linkedin.svg";
import github from "../../../public/images/icon-github.svg";

import email from "../Functions/email.js";

import { useState, useEffect } from 'react';
import Link from "next/link";



export default function FooterLayout() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        email(data);
    };
    const [ isClient, setIsClient ] = useState(false);

    useEffect(() => {
        setIsClient(true);
    },[]);

    return (
        <>
            {isClient && 
                <footer className="container">
                <div id="contact" className="contentContainer contactSection">
                    <div className="contact">
                        <h1>Contact</h1>
                        <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                    </div>
                    <div className="email">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="smInput" type="text" placeholder="Name" {...register("name", { required: true })} />
                            <input className="smInput" type="text" placeholder="Email" {...register("email", { required: true })} />
                            <input className="lgInput" type="text" placeholder="Message" {...register("message", { required: true })} />
                            <button className="btnSubmit" type="submit">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
                <div className="contentContainer socialSection">
                    <div className="logo">
                        <h4>Micah Johnson</h4>
                    </div>
                    <div className="social">
                        <Link href="https://www.linkedin.com/in/%F0%9F%A4%B4%F0%9F%8F%BF-micah-johnson-344b7a56/" target="_blank"><Image src={linkedIn} alt="linkedin image"/></Link>
                        <Link href="https://github.com/codejohnson89" target="_blank"><Image src={github} alt="github image"/></Link>
                    </div>
                </div>
            </footer>
            }
        </>
    )
}