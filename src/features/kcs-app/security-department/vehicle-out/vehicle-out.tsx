import { useEffect, useState } from "react";

function VehicleOut() {
   const [nfcSupported, setNfcSupported] = useState(false);
   const [nfcReading, setNfcReading] = useState(false);
   const [message, setMessage] = useState('');
   const [serialNumber, setSerialNumber] = useState('');

   useEffect(() => {
      // Kiểm tra xem trình duyệt hỗ trợ Web NFC API hay không
      if ('NDEFReader' in window) {
         setNfcSupported(true);
      } else {
         setNfcSupported(false);
      }
   }, []);


   const hexToBytes = (hex: any) => {
      const hexArray = hex.split(':');
      const bytes = [];
      for (let i = 0; i < hexArray.length; i++) {
         const byte = parseInt(hexArray[i], 16);
         if (isNaN(byte) || byte < 0 || byte > 255) {
            throw new Error('Invalid hex string');
         }
         bytes.push(byte);
      }
      return bytes;
   };
   const bytesToDec = (bytes: any) => {
      let result = 0n;
      let factor = 1n;
      for (let i = 0; i < bytes.length; ++i) {
         const value = BigInt(bytes[i]);
         result += value * factor;
         factor *= 256n;
      }
      return result;
   };
   const formatRFID = (serialNumber: any) => {
      try {
         const bytes = hexToBytes(serialNumber);
         const serialNumberDecimal = bytesToDec(bytes);

         return serialNumberDecimal.toString();
      } catch (error) {
         alert('Đã xảy ra lỗi format RFID');
      }
   }

   const startNFCReading = async () => {
      try {
         const reader = new window.NDEFReader();
         await reader.scan();

         //alert("Scan started successfully.");

         reader.onreadingerror = () => {
            alert("Cannot read data from the NFC tag. Try another one?");
         };

         reader.onreading = (event: any) => {
            setNfcReading(false);

            setSerialNumber(formatRFID(event.serialNumber) || "");

            for (const record of event.message.records) {

               switch (record.recordType) {
                  case "text":
                     const textDecoder = new TextDecoder(record.encoding);
                     setMessage(textDecoder.decode(record.data));
                     break;
                  case "url":
                     // TODO: Read URL record with record data.
                     break;
                  default:
                  // TODO: Handle other records with record data.
               }
            }
         };
         setNfcReading(true);
      } catch (error) {
         alert('Error while reading NFC: ' + error);
      }
   };

   return (
      <div>
         {nfcSupported ? (
            <div>
               {nfcReading
                  ? <p>Đang đọc...</p>
                  : <button onClick={startNFCReading}>Click đọc NFC</button>
               }
               <hr />
               {serialNumber && <div>ID của thẻ NFC: {serialNumber}</div>}
               {message && <div>BSX đã ghi: {message}</div>}
            </div>
         ) : (
            <p>Trình duyệt của bạn không hỗ trợ NFC.</p>
         )}
      </div>
   );
}

export default VehicleOut;