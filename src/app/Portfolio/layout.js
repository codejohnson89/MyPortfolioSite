import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import { portfolio } from '../../../content/portfolio';

export default function Portfolio() {
    return (
        <section className="contentContainer portfolioSection row">
            <div className="portfolioIntro">
                <h1>Projects</h1>
                <Link href="/">View All Projects</Link>
            </div>
            {portfolio.map((item, index) => {
                return (
                    <div key={index} className="card col-xs-12 col-sm-12 col-md-6">
                        <div className='fluid'>
                            <Image variant="top" src={item.image} width={1440} height={1056} alt="site preview"/>
                        </div>
                        <div className='card-body'>
                            <div className='card-title'>{item.title}</div>
                            <p className='card-text'>
                                {item.description}
                            </p>
                            <div className='buttonContainer'>
                                <a href={item.github} className="btn btn-primary">View Github</a>
                                <a href={item.site} className="btn btn-primary">View Site</a>
                            </div>
                        </div>
                    </div>
                )
            })}
                {/* <div className="card col-sm-6">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='buttonContainer'>
                            <a href="#" className="btn btn-primary">View Github</a>
                            <a href="#" className="btn btn-primary">View Site</a>
                        </div>
                    </div>
                </div> */}
        </section>
    )
}