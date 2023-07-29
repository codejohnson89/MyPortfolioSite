import Image from 'next/image';

export default function Intro() {
    return (
        <section className="contentContainer introSection">
            <div className="imageContainer special">
            </div>
            <div className="textContentContainer">
                <h1>Nice to meet you!<br/>I&apos;m Micah Johnson.</h1>
                <p>I am based in Houston, Texas as a front-end developer passionate about building accessible web apps that users love.</p>
                <button className="btn customBtn">GET IN TOUCH</button>
            </div>
        </section>
    )
}