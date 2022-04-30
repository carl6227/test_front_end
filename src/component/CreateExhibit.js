import React, { useState,useEffect } from 'react';
const axios = require('axios').default;


const CreateExhibit = () => {
    const [exhibitTitle, setTitle] = useState('');
    const [exhibitDescription, setDescription] = useState('');
    const [librarian, setLibrarian] = useState('');
 
   
     const getExhibitTitle = (e)=>{
        setTitle(e.target.value)
     }

     const getExhibitDescription = (e)=>{
        setDescription(e.target.value)
     }

     
     const getLibrarian = (e)=>{
        setLibrarian(e.target.value)
     }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
  // handle form data before sending to backend
       const data = new FormData();
    
     

        axios.post('http://localhost:3000/exhibit', {
            exhibit_title: exhibitTitle,
            exhibit_description: exhibitDescription,
            library:librarian
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
     
    }


  return(
  
      <div className="App">
         <h1>React App File Uploading </h1>
         <form onSubmit={onSubmitHandler}>
             <input type="text" name="exhibit_title" placeholder="exhibit title"onChange={getExhibitTitle}/>
             <input type="text" name="exhibit_description" placeholder="exhibit description"onChange={getExhibitDescription}/>
             <input type="text" name="librarian" placeholder="librarian"onChange={getLibrarian}/>
             <br/>
             <br/>
             <button  type="submit">Submit Image</button>
         </form>
      </div> 
  )
   
   
}

export default CreateExhibit; 