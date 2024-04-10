import { InputHTMLAttributes, useState } from "react"
import { UseFormReturn } from "react-hook-form"

import TextError from '~/components/controls/text-error';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
   formRHF: UseFormReturn<any>;
   name: string;
   label?: string;
   required?: boolean;
   leftIcon?: JSX.Element;
   rightIcon?: JSX.Element;
   eyeIcon?: boolean;
}

function TextBox(props: IProps) {
   const {
      formRHF,
      name,
      type, label, required,
      leftIcon, rightIcon, eyeIcon,
      ...rest
   } = props;

   const [isShowHidePass, setIsShowHidePass] = useState<boolean>(false);

   return (
      <div className='form-control'>
         {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
         <div className='textbox-control'>
            <input
               {...formRHF?.register(name)}
               className='form-input'
               type={eyeIcon ? (isShowHidePass ? "text" : "password") : type}
               {...rest}
            />
            {leftIcon && <span className="icon-left">{leftIcon}</span>}
            {rightIcon && <span className="icon-right">{rightIcon}</span>}
            {
               eyeIcon && <span className="icon-eye" onClick={() => setIsShowHidePass(!isShowHidePass)}>
                  {isShowHidePass ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
               </span>
            }
         </div>
         <TextError>{formRHF?.formState.errors[name]?.message?.toString()}</TextError>
      </div>
   );
}

export default TextBox;