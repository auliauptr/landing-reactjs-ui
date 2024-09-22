import './section.scss';
import data from '../../data/sectionData.js';

const Section = () => {
    return (
        <section className='section'>
            {data.map((item) => (
                <div className='section__contents' key={item.id}>
                    <div className='section__left'>
                        <div className='content__img'>
                            <img src={item.img} alt='' />
                        </div>
                    </div>
                    <div className='section__right'>
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                        {item.title === 'Fast and Efficent Workflow' && (
                            <button className='section__btn'>
                                Purchase Now
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Section;
