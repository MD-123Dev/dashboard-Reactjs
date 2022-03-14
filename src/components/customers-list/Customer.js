import React, { Component } from 'react'
import cust1 from '../../images/image2.png'
import cust2 from '../../images/user.png'
import cust3 from '../../images/user2.png'
import cust4 from '../../images/user3.png'
import cust5 from '../../images/user4.png'
import '../customers-list/customer.css'

class Customer extends Component {
 

    render() {
       
         
        return (
            
            
             
            <div className="list-customer" >
               <div className="card">
                    <img src={cust1} className="sty-img-cust d-inline" />
                    <div className="card-body styl-cust">
                       
                         <h4 className="sty-name-cust d-inline" >Ali</h4>
                          <h4 className="sty-info-cust d-inline" >hdfkkhnfl</h4>
                    </div>
               </div>
             
               <div className="card">      
                       <img src={cust2} className="sty-img-cust d-inline" />
                     <div className="card-body styl-cust">
                         
                            <h4 className="sty-name-cust d-inline" >ahmed</h4>
                            <h4 className="sty-info-cust d-inline" >hdfkkhnfl</h4>
                         </div>
                </div>
               
                <div className="card"> 
                 <img src={cust3} className="sty-img-cust d-inline" />
                     <div className="card-body styl-cust">
                       
                         <h4 className="sty-name-cust d-inline" >John</h4>
                            <h4 className="sty-info-cust d-inline" >hdfkkhnfl</h4>
                    </div>
                </div>
                
                  <div className="card"> 
                    <img src={cust4} className="sty-img-cust d-inline" />
                    <div className="card-body styl-cust">
                         <h4 className="sty-name-cust d-inline" >ahmed</h4>
                         <h4 className="sty-info-cust d-inline" >hdfkkhnfl</h4>
                    </div>
                  </div>
                    <div className="card"> 
                       <img src={cust5} className="sty-img-cust d-inline" />

                     <div className="card-body styl-cust">
                         <h4 className="sty-name-cust d-inline" >Ali</h4>
                         <h4 className="sty-info-cust d-inline" >hdfkkhnfl</h4>
                    </div>
                   </div>
                
           </div>
                
           
        )
    }
}


export default  Customer;
