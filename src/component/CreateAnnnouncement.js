import React, { useState,useEffect } from 'react';




const CreateAnnouncement = () => {
    const [announcementText, setText] = useState('');
    const [image, setImage] = useState('');
    const [librarian, setLibrarian] = useState('');


// handlers for the fields

    const fileChangeHandler = (e)=>{
        setImage(e.target.files[0]);
        console.log(image)
    }

     const getAnnouncementText = (e)=>{
        setText(e.target.value)
     }

     
     const getLibrarian = (e)=>{
        setLibrarian(e.target.value)
     }


    const onSubmitHandler = (e) =>{
        e.preventDefault();

        // handle form data before sending to backend
            const data = new FormData();

            data.append("image",image)
            data.append("announcement_text",announcementText)
            data.append("librarian",librarian)
  
        fetch('http://localhost:3000/announcement',{
            method:"POST",
            body:data,
        })
        .then(response => {
           alert(image+"\n "+announcementText+"\n "+librarian);
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
             <input type="file" name="image"onChange={fileChangeHandler}/>
             <textarea type="text" name="announcement_text" placeholder="announcement_text"onChange={getAnnouncementText}/>
             <input type="text" name="librarian" placeholder="librarian"onChange={getLibrarian}/>
             <br/>
             <br/>
             <button  type="submit">Submit Image</button>
          
         </form>
      </div> 
  )
   
   
}

export default CreateAnnouncement; 