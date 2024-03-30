
import { TextareaHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';

import TextError from '~/components/controls/text-error';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   formRHF: UseFormReturn<any>;
   name: string;
   label?: string;
   required?: boolean;
}

function Textarea(props: IProps) {
   const {
      formRHF,
      name = '',
      label, required,
      ...rest
   } = props;

   return (
      <div className='form-control'>
         {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
         <div className="textarea-control">
            <textarea
               {...formRHF?.register(name)}
               className='form-input'
               {...rest}
            />
         </div>
         <TextError>{formRHF?.formState.errors[name]?.message?.toString()}</TextError>
      </div>
   );
}

export default Textarea;