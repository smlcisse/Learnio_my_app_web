/*import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {nom: "Soumaïla"};
    }
    render() {
        return <div><h1>Le site de : {this.state.nom}</h1></div>;
    }
}
export default Header*/

/*function Header() {
    let nom = "Soumaïla"
    return (
        <div><h1>Le site de : {nom}</h1></div>
    );
  }
  export default Header;*/

 /* function Header(props){
    const name=props.name
    return(
        <>
            <h1>Bonjour {name} </h1>
        </>
    )
    }
    
    export default Header*/
    function Header(props){
        const nom=props.lastname , prenom = props.firstname
        return(
            <div>
                <h1>Bonjour {nom}  {prenom} </h1>
            </div>
        )
    }
    export default Header