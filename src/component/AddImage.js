import React, { useState,useEffect } from 'react';



const CreateImage = () => {
    const [fileData, setFileData] = useState();
    const [imageData, setImageData] = useState([]);
    const [exhibit, setExhibit] = useState('');
 
    const fileChangeHandler = (e)=>{
        setFileData(e.target.files[0]);
        console.log(fileData)
    }

    const exhibitHandler = (e)=>{
        
       setExhibit(e.target.value)
    }


    const onSubmitHandler = (e) =>{
        e.preventDefault();

        // handle file data from the state before sending
            const data = new FormData();

            data.append("image_name",fileData)
            data.append("exhibit",exhibit)

        fetch('http://localhost:3000/exhibit_image',{
            method:"POST",
            body:data,
        })
       
     
    }

    const getImages = async ()=>{
        const res = await fetch(
            `http://localhost:3000/exhibit_image`
          );
          const data = await res.json();
          setImageData(data)
         
    

    }

    useEffect(() => {
        getImages();
        console.log(imageData)
       
      }, []);
    

  return(
  
      <div className="App">
         <h1>React App File Uploading </h1>
         <form onSubmit={onSubmitHandler}>
             <input type="file" name="image_name"onChange={fileChangeHandler}/>
             <input type="text" name="exhibit" placeholder="exhibit id"onChange={exhibitHandler}/>
             <br/>
             <br/>
             <button  type="submit">Submit Image</button>
             {
             imageData.map((image) => (<img style={{width:100,height:100}}src={"http://localhost:3000/static/images/"+image.image_name}/>)
   
)
             }
         </form>
      </div> 
  )
   
   
}

export default CreateImage; 