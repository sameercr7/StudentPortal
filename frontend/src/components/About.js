import React, {Fragment, useState} from 'react'
import EventDetails from './EventDetails';
import './css/Jobdetail.css'
import BusinessIcon from "@material-ui/icons/Business";
function Opportunity() {
    const [detail, setDetail] = useState(EventDetails)
  return (
   <Fragment>

    <section className='property'>
        <div className='center'>
            <h3>Events</h3>
        </div>
        <div className='row'>
{
    detail.map((detail)=>{
        return(
            <div className='column'>
            <div className='single-property'>
                <div className='card'>
                   <div className='property-thumb'>
                
                    <img src={detail.Image} alt='Company'></img>
                    </div> 
                    <div className='property-content'>
                        <h3>{detail.heading}</h3>
                        <div className='mark'>
                            <BusinessIcon/>
                            <span>{detail.span}</span>
                        </div>
                        <a className='amount' href={detail.link}>Apply Now</a>
                    </div>
                    <div className='property-footer'>
                        <span>Last date to apply {detail.lastdate}</span>
                    </div>
                </div>
            </div>
        </div>
        )
        
    })
}

           
        </div>

        <div className='more-property'>
            <a className='property-btn' href='#'>More Events</a>
        </div>
    </section>
   </Fragment>
  
  )
}

export default Opportunity
