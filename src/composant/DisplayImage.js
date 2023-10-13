/*import React from "react";

const DisplayImage = (props) => {

    return (
      <div>
        <a
          href={props.image.url}
        >
          <img 
            alt={props.image.name} 
            src={props.image.url} 
          />
          <h1>{props.image.name}</h1>
        </a>
      </div>
    );
};
export default DisplayImage*/

import React from "react";

const DisplayImage = ({url,name}) => {

    return (
      <div>
        <a
          href={url}
        >
          <img 
            alt={name} 
            src={url} 
          />
          <h1>{name}</h1>
        </a>
      </div>
    );
};
export default DisplayImage