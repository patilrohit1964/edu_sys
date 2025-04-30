import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaHashtag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Peopleslider from '../pages/PeopleSlider';
const Footer = () => {
    return (
        <>

            {/* <div className='border bg-[#6440FB] mt-25'>
                <Peopleslider />
                <div className='flex items-center justify-around pb-10'>
                    {
                        [
                            { target: 10, title: "Years of experience" },
                            { target: 22289, title: "Total Course Views" },
                            { target: 18010, title: "Number of Requests" },
                            { target: 350, title: "Hiring Companies" },
                        ].map(el => (
                            <AnimatedCounter target={el.target} title={el.title} />
                        ))}
                </div>
            </div> */}
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content flex items-center justify-around p-10">
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Success Story</Link>
                    <Link className="link link-hover">Payment</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Placement</h6>
                    <Link className="link link-hover">Placement reviews</Link>
                    <Link className="link link-hover">Hire From Us</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Terms</h6>
                    <Link className="link link-hover" to={"/terms-conditions"}>Terms & Condition</Link>
                    <Link className="link link-hover" to={"/privacy-policy"}>Privacy policy</Link>
                    <Link className="link link-hover">Return Policy</Link>
                    <Link className="link link-hover">Contact</Link>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <FaHashtag size={40} />
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link>
                        <FaFacebook size={25} />
                    </Link>
                    <Link>
                        <FaLinkedin size={25} />
                    </Link>
                    <Link>
                        <FaInstagram size={25} />
                    </Link>
                </nav>
            </footer>
        </>
    )
}

export default Footer





