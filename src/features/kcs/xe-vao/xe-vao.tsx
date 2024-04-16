
import { useCallback, useRef, useState } from "react";
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';

function XeVao() {
   const [image, setImage] = useState(null);
   const webcamRef = useRef<any>(null);
   const [ocrText, setOcrText] = useState('');

   const capture = useCallback(() => {
      setOcrText('');

      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);

      //----Đọc văn bản từ hình ảnh
      Tesseract.recognize(imageSrc)
         .then(({ data: { text } }) => {
            setOcrText(text);
         })
         .catch(error => {
            console.error('Lỗi khi đọc văn bản từ hình ảnh:', error);
         });
   }, [webcamRef]);


   const videoConstraints = {
      width: 250,
      height: 250,
      facingMode: "environment"
   };

   return (
      <div>
         <div>
            <Webcam
               audio={false}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
               videoConstraints={videoConstraints}
            />
         </div>
         <br />
         <button onClick={capture}>Chụp ảnh</button>
         <br />
         {image && (
            <div>
               <div>
                  <span>Văn bản từ hình ảnh:</span>
                  <b>{ocrText || 'Đang xử lý...'}</b>
               </div>

               <br />

               <h2>Ảnh đã chụp:</h2>
               <img src={image} alt="Chụp ảnh" />
            </div>
         )}
      </div>
   );
}

export default XeVao;