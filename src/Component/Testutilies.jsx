import React, { useState } from 'react'
import Swal from 'sweetalert2'
function Testutilies() {
    const [Text,setText]=useState("")
 const[showAlert,setshowAlert]=useState(false)
 const[alertMessage,setalertMessage]=useState("");
    const TextValue=(e)=>{
        setText(e.target.value);
    }
    const CopyText=()=>{
        navigator.clipboard.writeText(Text)
        Swal.fire({
            title: 'Success!',
            text: 'text is copied',
            icon: 'success',
            confirmButtonText: 'Done'
          })
      
    }
    const countCharacter = (text) => {
        return text.replace(/\s+/g, '').length;
      
    }

    const countWords = (text) => {
      return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }
  const convertToUpperCase = () => {
    setText(Text.toUpperCase());
    Swal.fire({
        title: 'Success!',
        text: 'text is upper case',
        icon: 'success',
        confirmButtonText: 'Done'
      })

}

const convertToLowerCase = () => {
    setText(Text.toLowerCase());
    Swal.fire({
        title: 'Success!',
        text: 'text is converted lower case',
        icon: 'success',
        confirmButtonText: 'Done'
      })

}

const clearText = () => {
    setText("");
    Swal.fire({
        title: 'Danger!',
        text: 'text is clear',
        icon: 'danger',
        confirmButtonText: 'Done'
      })

}


    
  return (
    <div>
    <div className='container'>
      <h1 className='text-center'>TestUtilies</h1>
      <div className="form-group px-5">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3" value={Text} onChange={TextValue}></textarea> 

        </div>
    </div>
    {showAlert && <p className='text-center text-success'>{alertMessage}</p>}
    <div className='text-center m-3'>
    <button className="btn btn-outline btn-success m-3" onClick={convertToUpperCase}>UpperCase</button>
    <button className="btn btn-outline btn-success m-3" onClick={convertToLowerCase}>LowerCase</button>
    <button className="btn btn-outline btn-success m-3" onClick={clearText}>Clear</button>
    <button className="btn btn-outline btn-success m-3" onClick={CopyText}>Copy</button>
    </div>
    <div>
    <p>Character Count: {countCharacter(Text)}</p>
        {/* <p>Character Count:-{Text.length}</p> */}
        <p>Word Count: {countWords(Text)}</p>

    </div>

    </div>


  )
}

export default Testutilies
