import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageContext";
const Modal = () => {
    const {isModal, setIsModal} = useContext(ImageContext);
    function handleModalClose(){
        setIsModal(!isModal);
        window.location.reload(true);
    }
  return (
    <div className='modal'>
        <div>
        <p>Saved</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <br></br>
        <button onClick={handleModalClose}>Close</button>
        </div>

    </div>
  )
}

export default Modal;
