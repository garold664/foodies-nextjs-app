'use client';

import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  function handlePickClick() {
    if (!imageInputRef.current) return;
    imageInputRef.current.click();
  }

  function handlePickImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      console.log('file is  read');
      setPickedImage(fileReader.result as string);
      console.log(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt="Preview" fill />}
        </div>
        <input
          onChange={handlePickImage}
          ref={imageInputRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          required
        />
        <button
          className={styles.button}
          onClick={handlePickClick}
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
