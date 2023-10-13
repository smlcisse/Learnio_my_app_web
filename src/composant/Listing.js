import React from "react";

const Listing = () => {

    /*const people = [
        'Creola Katherine Johnson: Mathématicenne ',
        'Mario José Molina-Pasquel Henríquez: Chimiste',
        'Mohammad Abdus Salam: Physicien',
        'Percy Lavon Julian: Chimiste',
        'Subrahmanyan Chandrasekhar: Astrophysicien'
      ];*/

    const candidats= [ {
  name: 'Joe', work: 'freelance-developer',
  blogs: '54', websites: '32',
  hackathons: 'none', location: 'Morocco', id: '0',

},
 {
  name: 'Janet', work: 'fullstack-developer',
  blogs: '34', websites: '12',
  hackathons: '6', location: 'Mozambique', id: '1',

},
];

return(
    <div>
        <div>
            {
                candidats.map(function(element, index){
                    return (
                    <div>
                        <p key = {index}>{element.name}</p>
                        <p key = {index}>{element.blogs}</p>
                        <p key = {index}>{element.hackathons}</p>
                        <p key = {index}>{element.work}</p>
                        <p key = {index}>{element.websites}</p>
                        <p key = {index}>{element.location}</p>

                    </div>)
                })
            }
        </div>
    </div>
   
)
       }
export default Listing