import React, { Component } from 'react'
import country1 from '../../images/Australia.png'
import country2 from '../../images/Canada.png'
import country3 from '../../images/china.png'
import country4 from '../../images/France.png'
import country5 from '../../images/maroc.png'
import '../map-list/list.css'

class List extends Component {
 

    render() {
       
         
        return (
            
            
             
            <div className="list-customer" >
               <div className="card">
                    <img src={country1} className="sty-img-country d-inline" />
                    <div className="card-body styl-cust">
                      <div class="progress styl-progr" style={{height:'15px',width:'250px'}}>
                        <div class="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                        
                    </div>
               </div>
             
               <div className="card">      
                       <img src={country2} className="sty-img-country d-inline" />
                     <div className="card-body styl-cust">
                         
                     <div class="progress styl-progr" style={{height:'15px',width:'250px'}}>
                        <div class="progress-bar  bg-warning" role="progressbar" style={{width:'75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>     
                         </div>
                </div>
               
                <div className="card"> 
                 <img src={country3} className="sty-img-country d-inline" />
                     <div className="card-body styl-cust">
                       
                       <div class="progress styl-progr" style={{height:'15px',width:'250px'}}>
                         <div class="progress-bar" role="progressbar" style={{width:'35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                
                 
                    <div className="card"> 
                       <img src={country4} className="sty-img-country d-inline" />

                     <div className="card-body styl-cust">
                        <div class="progress styl-progr" style={{height:'15px',width:'250px'}}>
                            <div class="progress-bar bg-danger" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                   </div>

                   <div className="card"> 
                       <img src={country5} className="sty-img-country d-inline" />

                     <div className="card-body styl-cust">
                       <div class="progress styl-progr" style={{height:'15px',width:'250px'}}>
                            <div class="progress-bar bg-success " role="progressbar" style={{width:'65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                   </div>
                
           </div>
                
           
        )
    }
}


export default  List;
