import React, { Component } from 'react'
import userimage from '../../images/image2.png'
import '../slide/slide.css'

class Slide extends Component {
 

    render() {
       
         
        return (
            
            
             
            <div class="silde-menu-style" >
               <ul>
                    <li class="styl-dash">
                        <img src={userimage} class="sty-img d-inline" />
                         <a class="sty-ab d-inline" href="#">Ali</a>
                    </li>
               
                    <li class="styl-li"><i class="fa fa-home sty-fa"></i><a class="sty-a" href="#">Dashboard</a></li>
                    <li class="styl-li"><i class="fa fa-user sty-fa"></i><a class="sty-a" href="#">User</a></li>
                    <li class="styl-li"><i class="fa fa-file sty-fa"></i><a  class="sty-a" href="#">Documents</a></li>
                    <li class="styl-li"><i class="fa fa-bar-chart sty-fa"></i><a class="sty-a" href="#">Charts</a></li>
                    <li class="styl-li"><i class="fa fa-bell sty-fa"></i><a class="sty-a" href="#">Notification</a></li>
                </ul>
           </div>
                
           
        )
    }
}


export default  Slide;
