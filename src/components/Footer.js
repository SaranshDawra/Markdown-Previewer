import React from 'react'
import classes from './footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className={classes.footer}>
            Built With <span role="img" aria-label="heart">❤️</span> By <a href="https://github.com/SaranshDawra"> Saransh Dawra</a>
            <div>
                Connect With Me:
            </div>
            <div className={classes.icons}>
                <a href="https://github.com/SaranshDawra">
                    <FaGithub className={classes.social}></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/saranshdawra/">
                    <FaLinkedin className={classes.social}></FaLinkedin>
                </a>
            </div>
        </div>
    )
}