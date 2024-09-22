import sectionImg from '../../assets/section1.png';
import icon from '../../assets/Icon.png';
import './sectionMulti.scss';

const SectionMulti = () => {
    return (
        <section className='sectionMulti'>
            <div className='sectionMulti__contents'>
                <div className='sectionMulti__content-left'>
                    <h1>Light, Fast & Powerful</h1>
                    <p>
                        Experience a platform that's build for speed without
                        sacrificing power. Our lightweight framework ensures
                        fast load times, while still providing the robust tools
                        you need to create professional-grade landing pages that
                        captivate and convert.
                    </p>
                    <p>
                        Wether you're designing from scratch or using pre-made
                        templates, you'll feel the power of simplicity combined
                        with performance.
                    </p>
                    <div className='sectionMulti__content-items'>
                        <div className='sectionMulti__content-item'>
                            <img src={icon} alt='' />
                            <h4>Effortless Customization</h4>
                            <p>
                                Quickly personalize every aspect of your landing
                                page to align with your brand.
                            </p>
                        </div>
                        <div className='sectionMulti__content-item'>
                            <img src={icon} alt='' />
                            <h4>Optimized Performance</h4>
                            <p>
                                Our lightweight system ensures your landing page
                                loads in an instant, delivering a seamless user
                                experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='sectionMulti__content-right'>
                    <img src={sectionImg} alt='' />
                </div>
            </div>
        </section>
    );
};

export default SectionMulti;
