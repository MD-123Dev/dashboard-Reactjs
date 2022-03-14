import React, { Component } from 'react'

import userimage from '../../images/image2.png'
import '../navbar/navbar.css'


class NavBar extends Component {
    constructor(props){
      super(props)

    

      this.mynav = React.createRef()
      
  }

        componentDidMount() {
            
             this.mynav.current.style.display = "none";
        }
    state = {

           vl:null,
           x:false,
           display:false,
           menuDisplay:true

       
    };

    menuButton = (e) => {
         e.preventDefault();

         this.setState((currentState) => ({
            menuDisplay: !currentState.menuDisplay, 
        }));
        
        if(this.state.menuDisplay == false)
            this.mynav.current.style.display = "none";
        else
           this.mynav.current.style.display = "block";
       
 
    }
    

    render() {
       
         
        return (
            
            <div>
                
               <nav className="navbar navbar-expand-lg sty-navb">
                <div className="container-fluid">
                    <a className="navbar-brand" href=""  onClick={this.toggleButton} ><i className="fa fa-bars" ></i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="form-group">
                        <input type="Search" className="form-control w-100  pos-styl" name="" id=""  placeholder="Search" />
                    </div>
                    </div>
                    <div >
                         <img src={userimage} alt="Avatar" className="avatar d-inline" />
                        <h1  className="sty-user d-inline">Ali</h1>
                       <i class="fa fa-angle-down d-inline" style={{cursor:'pointer',fontSize:'18px'}}  onClick={this.menuButton}></i>

                    </div>
                    <div>
                         <li class="dropdown" ref={this.mynav} >
                            <div class="dropdown-content">
                            <a href="#"><i className="fa fa-sign-out" ></i> Log out </a>
                            <a href="#"><i className="fa fa-gear" ></i> Setting</a>
                            
                            </div>
                        </li>
                    </div>
                </div>
            </nav>

                
            </div> 
        )
    }
}

export default NavBar
