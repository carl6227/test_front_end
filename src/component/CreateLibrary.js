import React, { useState,useEffect } from 'react';




const CreateExhibit = () => {
    const [libraryName, setName] = useState('');
    const [libraryLocation, setLocation] = useState('');
    const [libraryTheme, setTheme] = useState('');
    const [libraryDescription, setDescription] = useState('');
    const [panoramic_view, setPano] = useState('');
    const [librarian, setLibrarian] = useState([]);


// handlers for the fields

    const fileChangeHandler = (e)=>{
        setPano(e.target.files[0]);
        console.log(panoramic_view)
    }

    const getLibname = (e)=>{
       setName(e.target.value)
    }

    const getLiblocation = (e)=>{
        setLocation(e.target.value)
     }

     const getLibtheme = (e)=>{
        setTheme(e.target.value)
     }

     const getLibdescription = (e)=>{
        setDescription(e.target.value)
     }

     
     const getLibrarian = (e)=>{
        setLibrarian(e.target.value)
     }


    const onSubmitHandler = (e) =>{
        e.preventDefault();

        // handle form data before sending to backend
            const data = new FormData();

            data.append("panoramic_view",panoramic_view)
            data.append("library_name",libraryName)
            data.append("library_location",libraryLocation)
            data.append("theme",libraryTheme)
            data.append("library_description",libraryDescription)
            data.append("librarian",librarian)

        fetch('http://localhost:3000/library',{
            method:"POST",
            body:data,
        })
        .then(response => {
           alert(panoramic_view+"\n "+libraryName+"\n "+libraryLocation+" \n"+libraryTheme+"\n "+libraryDescription+"\n "+librarian);
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        })
    }

    // const getImages = async ()=>{
    //     const res = await fetch(
    //         `http://localhost:3000/exhibit_image`
    //       );
    //       const data = await res.json();
    //       setImageData(data)
         
    

    // }

    // useEffect(() => {
    //     getImages();
    //     console.log(imageData)
       
    //   }, []);
    

  return(
  
      <div className="App">
         <h1>CreateLibrary</h1>
         <form onSubmit={onSubmitHandler}>
             <input type="file" name="image_name"onChange={fileChangeHandler}/>
             <input type="text" name="libary_name" placeholder="library_name"onChange={getLibname}/>
             <input type="text" name="library_location" placeholder="library_location"onChange={getLiblocation}/>
             <textarea type="text" name="library_description" placeholder="library_description"onChange={getLibdescription}/>
             <input type="text" name="library_theme" placeholder="library_theme"onChange={getLibtheme}/>
             <input type="text" name="librarian" placeholder="librarian"onChange={getLibrarian}/>
             <br/>
             <br/>
             <button  type="submit">Submit Image</button>
          
         </form>
      </div> 
  )
   
   
}

export default CreateExhibit; 