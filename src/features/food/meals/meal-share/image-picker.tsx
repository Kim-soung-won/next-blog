'use client';
import { useRef, useState } from "react";
import classes from "./image-picket.module.css";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name?: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage ] = useState(null);
  const imageInputRef = useRef(null);
  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChanged(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }


  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage && <Image src={pickedImage} alt="The image" fill />}
      </div>
      <input
        className={classes.input}
        type="file"
        id={name}
        accept="image/png, image/jpeg" 
        name={name}
        ref={imageInputRef}
        onChange={handleImageChanged}
      />
      <button className={classes.button} type="button" onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  </div>
}