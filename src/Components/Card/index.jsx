/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import './card.css';
import Tooltip from '@mui/material/Tooltip';


export default ({imgSrc, followersCount, label, tooltipText}) => {
     return (<div className='card-wrapper'>
        <Tooltip title={tooltipText} arrow placement="top">
        <div className='card'>
            <div className='card-img-frame'>
                <img className='card-image' src={imgSrc} />
            </div>
            <div className='card-content'>
                <span className='card-content-pill'>
                    {followersCount} follows
                </span>
            </div>
        </div>
        </Tooltip>
        <p className='card-label'>{label}</p>
     </div>)

}