import './card.css';

export default () => {
     return (<div className='card-wrapper'>
        <div className='card'>
            <div className='card-img-frame'>
                <img className='card-image' src='https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800' />
            </div>
            <div className='card-content'>
                <span className='card-content-pill'>
                    100 follows
                </span>
            </div>
        </div>
        <p className='card-label'>New English Songs</p>
     </div>)

}