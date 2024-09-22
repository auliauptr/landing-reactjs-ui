import './pricing.scss';

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='pricing__content'>
                <h1>A Price To Suit Everyone</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus
                </p>
                <span className='pricing__price'>$40</span>
                <span className='pricing__title'>UI Design Kit</span>
                <span className='pricing__subtitle'>See, One price. Simple.</span>
                <button>Purchase Now</button>
            </div>
        </div>
    );
};

export default Pricing;
