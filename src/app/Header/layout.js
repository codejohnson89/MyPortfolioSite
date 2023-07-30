import Image from "next/image";
import linkedIn from "../../../public/images/icon-linkedin.svg";
import github from "../../../public/images/icon-github.svg";
import Link from "next/link";

export default function HeaderLayout() {
    return (
        <header className="container">
            <div className="contentContainer headerContainer">
                <div className="logo">
                    <h4>Micah Johnson</h4>
                </div>
                <div className="social">
                    <Link href="https://www.linkedin.com/in/%F0%9F%A4%B4%F0%9F%8F%BF-micah-johnson-344b7a56/" target="_blank"><Image src={linkedIn} alt="linkedin image"/></Link>
                    <Link href="https://github.com/codejohnson89" target="_blank"><Image src={github} alt="github image"/></Link>
                </div>
            </div>
        </header>
    )
}