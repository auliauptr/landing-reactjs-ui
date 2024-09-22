import './hero.scss';
import heroImg from '../../assets/designer_1.png';
const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero__content'>
                <div className='hero__left'>
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                    <p>
                        Create stunning, high-converting landing pages
                        effortlessly. Our platform offers the tools and
                        flexibility you need to design visually appealing and
                        fully customized pages in no time.
                    </p>
                    <br />
                    <p>
                        Wether you're promoting a product, service, or event you
                        can craft and launch your landing page with ease,
                        ensuring that your message reaches the right audience
                        quickly and effectivily.
                    </p>
                    <div className='hero__btn'>
                        <button>Purchase UI Kit</button>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='hero__right'>
                    <img src={heroImg} alt='' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
