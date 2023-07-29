import Image from "next/image";
import linkedIn from "../../../public/images/icon-linkedin.svg";
import github from "../../../public/images/icon-github.svg";

export default function HeaderLayout() {
    return (
        <header className="container">
            <div className="contentContainer headerContainer">
                <div className="logo">
                    <h4>Micah Johnson</h4>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/micah-johnson-1b1b1b1b1/" target="_blank"><Image src={linkedIn} alt="linkedin image"/></a>
                    <a href="https://github.com/codejohnson89" target="_blank"><Image src={github} alt="github image"/></a>
                </div>
            </div>
        </header>
    )
}