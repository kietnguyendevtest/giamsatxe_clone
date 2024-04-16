import { useState } from "react";

function XeVao() {
   const [message, setMessage] = useState('');

   const onWrite = async (message: any) => {
      try {
         const ndef = new window.NDEFReader();
         // This line will avoid showing the native NFC UI reader
         await ndef.scan();
         await ndef.write({ records: [{ recordType: "text", data: message }] });
         alert(`Lưu thành công BSX: ${message}`);
      } catch (error) {
         alert(`Thiết bị không hỗ trợ`);
      }
   }
   const handleWrite = (e: any) => {
      e.preventDefault();
      onWrite(message);
      setMessage('');
   };

   return (
      <div>
         <form onSubmit={handleWrite}>
            <div className="writer-container">
               <input type="text" placeholder="Nhập bsx..." value={message} onChange={(e) => setMessage(e.target.value)}></input>
               <hr />
               <button className="btn" type="submit">
                  Click Quét thẻ từ
               </button>
            </div>
         </form>
      </div>
   );
}

export default XeVao;