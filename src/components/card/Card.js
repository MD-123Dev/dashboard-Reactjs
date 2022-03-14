import React from 'react'
import '../card/card.css'

const Card = (props) => {
    return (
        <div>
            <div className="card mb-4 card-sty" style={{width:'auto',height:120}}>

                 <h4 class="sty-numb">{props.number}</h4>
                
                <div className="card-body">
                  <h4 className="card-title">{ props.title}</h4>
                  <div className="sty-icon">
                        <i className={props.icon} style={{fontSize:'55px',marginRight:'20px',color:'green'}}></i>
                  </div>
                 
                  
                    <p className="card-text"></p>
                </div>
            </div>
            
        </div>
    )
}

export default Card