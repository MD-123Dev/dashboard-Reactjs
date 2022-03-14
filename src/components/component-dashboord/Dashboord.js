import React, { Component } from 'react'
import Nav from '../navbar/NavBar';
import Slide from '../slide/Slide';
import Card from '../card/Card';
import Customer from '../customers-list/Customer';
import Table from '../table/Table';

import '../component-dashboord/dashboord.css'
 import Graph from '../graph/Graph';
import Map from '../map/Map';
import List from '../map-list/List';


class Dashboord extends Component {
  
    
    

    render() {
       
         
        return (
            
            <div>
                
             <Slide/>
                <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                          <Card title="Client" icon="fa fa-user" number="145246" /> 
                      </div>
                       <div className="col-md-4">
                          <Card title="Sales" icon="fa fa-shopping-cart" number="$145246" /> 
                      </div>
                       <div className="col-md-4">
                          <Card title="Money" icon="fa fa-money" number="$445221" /> 
                      </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <Graph />
                        </div>
                        <div className="col-md-4">
                            <Customer />
                        </div>
                    </div>
                     <div className="row">
                         <div className="col-md-12">
                           <Table />
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-8">
                            <Map />
                        </div>
                          <div className="col-md-4">
                            <List />
                        </div>
                     </div>
                    
                </div>

                
            </div> 
        )
    }
}

export default Dashboord