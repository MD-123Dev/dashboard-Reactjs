import React from 'react'
import '../table/table.css'
import cust1 from '../../images/image2.png'
import cust2 from '../../images/user.png'
import cust3 from '../../images/user2.png'
import cust4 from '../../images/user3.png'
import cust5 from '../../images/user4.png'


const Table = (props) => {
    return (
        <div>
             
             <table class="table">
                 <thead>
                     <tr>
                         <th>Name</th>
                         <th>Prix</th>
                         <th>Tracking Id</th>
                          <th>Status</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td ><img src={cust1} className="sty-img-tab d-inline"></img>Ali</td>
                         <td>15245 $</td>
                         <td>441</td>
                          <td ><h4 className="sty-middle">Middle</h4></td>
                     </tr>
                     <tr>
                         <td ><img src={cust2} className="sty-img-tab d-inline"></img>Ahemed</td>
                         <td>12566$</td>
                         <td>336</td>
                         <td ><h4 className="sty-good">Good</h4></td>
                     </tr>
                      <tr>
                         <td ><img src={cust3} className="sty-img-tab d-inline"></img>John</td>
                         <td>33684$</td>
                         <td>85</td>
                         <td ><h4 className="sty-bad">Bad</h4></td>
                     </tr>
                      <tr>
                         <td ><img src={cust4} className="sty-img-tab d-inline"></img>Ali</td>
                         <td>355684$</td>
                         <td>36</td>
                         <td ><h4 className="sty-bad">Bad</h4 ></td>
                     </tr>
                 </tbody>
             </table>
            
        </div>
    )
}

export default Table