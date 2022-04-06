import React, { useState } from 'react';
import './images.css';
import Title from '../comps/Title';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';

function Images() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="Images">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
export {Images};
