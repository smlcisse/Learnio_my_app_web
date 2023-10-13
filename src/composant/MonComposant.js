/*import React from "react";

class MonComposant extends React.Component{
   
    constructor(props) {
        super(props)
        {
            this.state={count:0}
        }
    }

     render(){
        return (
            // on affiche un bouton
               <button
                    // au clique, on change le state avec setCount
                    >
                    {this.state.count}
                </button>
        );
    }
}

export default MonComposant*/

/*import React from "react";

class MonComposant extends React.Component{
   
    constructor(props) {
        super(props)
        {
            this.state={count:0}
        }
    }

    setCount = () => {
        this.setState({count: 3 });
      }

     render(){
        return (
            // on affiche un bouton
               <button
                    // au clique, on change le state avec setCount.
                    onClick={() => {
                        
                      this.setCount()
                        console.log('Mise à jour du state et de l\' affichage du component')
                    }}>
                    {this.state.count}
                </button>
        );
    }
}

export default MonComposant*/

import React,{ useState } from 'react';

function MonComposant() {
    // on utilise le hook useState de React
    //const [count, setCount] = useState(0);
    const [count, setCount] = React.useState(0);
 
    return (
        // on affiche un bouton
        <button
            // au clique, on change le state avec setCount
            onClick={() => setCount(count + 1)}
        >
            {/* on utilise le state dans l'affichage */}

            {count}
        </button>
    );
}

export default MonComposant
