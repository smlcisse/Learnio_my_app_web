/*function Footer() {
    return (
        <div>
            <a href="#">&Copy; Copyright 2023</a>
        </div>
    );
  }
  export default Footer;*/

import React from 'react';
class Footer extends React.Component {
    constructor() {
        super();
        //this.state = {nom: "Soumaïla"};
    }
    render() {
        return (
        <div>
            <a href="#">&Copy; Copyright 2023</a>;
        </div>
        )
    }
}
export default Footer