import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
    return (
        <section className="contentContainer introSection">
            <div className="imageContainer special">
            </div>
            <div className="textContentContainer">
                <h1>Nice to meet you!<br/>I&apos;m Micah Johnson.</h1>
                <p>I am based in Houston, Texas as a front-end developer passionate about building accessible web apps that users love.</p>
                <Link className="btn customBtn" href="#contact">GET IN TOUCH</Link>
            </div>
        </section>
    )
}