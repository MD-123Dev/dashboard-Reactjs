import React, { Component } from 'react'

import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

const state = {
  labels: ['Tv', 'Phone', 'Machine',
           'Pc', 'table'],
  datasets: [
    {
     
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [74, 152, 20, 425, 1250]
    }
  ]
}
 

class Graph extends Component {
  
    
    

    render() {
       
         
        return (
            
            <div>
                
              <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Produits',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        

                
            </div> 
        )
    }
}

export default Graph