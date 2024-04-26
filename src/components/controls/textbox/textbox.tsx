import { InputHTMLAttributes, useState } from "react"
import { UseFormReturn } from "react-hook-form"

import TextError from '~/components/controls/text-error';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
   formRHF: UseFormReturn<any>;
   name: string;
   label?: string;
   isRequired?: boolean;
   isDisabled?: boolean;
   leftIcon?: JSX.Element;
   rightIcon?: JSX.Element;
   isEyeIcon?: boolean;
}

function TextBox(props: IProps) {
   const {
      formRHF,
      name,
      type, label, isRequired, isDisabled = false,
      leftIcon, rightIcon, isEyeIcon,
      className,
      ...rest
   } = props;

   const [isShowHidePass, setIsShowHidePass] = useState<boolean>(false);

   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    if (type !== "number")
   //       return;

   //    let newValue = e.target.value;

   //    // Kiểm tra xem giá trị mới có phù hợp với định dạng số không
   //    if (!/^(-?\d*\.?\d*)$/.test(newValue)) {
   //       // Nếu không phù hợp, loại bỏ tất cả các ký tự ngoại trừ số, dấu trừ và dấu chấm thập phân
   //       newValue = newValue.replace(/[^\d.-]/g, '');

   //       // Kiểm tra xem giá trị mới có chứa nhiều hơn một dấu trừ hoặc một dấu chấm không
   //       const minusCount = (newValue.match(/-/g) || []).length;
   //       const dotCount = (newValue.match(/\./g) || []).length;

   //       if (minusCount > 1 || dotCount > 1) {
   //          // Loại bỏ ký tự cuối cùng nếu vượt quá một dấu trừ hoặc một dấu chấm
   //          newValue = newValue.slice(0, -1);
   //       }
   //    } else if (newValue.startsWith('.')) {
   //       // Nếu giá trị mới bắt đầu bằng dấu chấm, đặt giá trị của ô nhập về rỗng
   //       newValue = '';
   //    }

   //    e.target.value = newValue;
   // };


   return (
      <div className='form-control'>
         {label && <label className={'form-label' + (isRequired ? " required" : "")} htmlFor={name}>{label}</label>}
         <div className='textbox-control'>
            <input
               {...formRHF?.register(name)}
               className={'form-input ' + className}
               type={isEyeIcon ? (isShowHidePass ? "text" : "password") : type}
               autoComplete="off"
               disabled={isDisabled}
               //onChange={handleInputChange}
               {...rest}
            />
            {leftIcon && <span className="icon-left">{leftIcon}</span>}
            {rightIcon && <span className="icon-right">{rightIcon}</span>}
            {
               isEyeIcon && <span className="icon-eye" onClick={() => setIsShowHidePass(!isShowHidePass)}>
                  {isShowHidePass ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
               </span>
            }
         </div>
         <TextError>{formRHF?.formState.errors[name]?.message?.toString()}</TextError>
      </div>
   );
}

export default TextBox;