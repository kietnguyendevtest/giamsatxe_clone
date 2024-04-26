import { InputHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';
import TextError from '~/components/controls/text-error';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
   formRHF: UseFormReturn<any>;
   name: string;
   options: string[] | any;
   label?: string;
   isRequired?: boolean;
   isDisabled?: boolean;
   isHorizontal?: boolean;
}

function RadioButtons(props: IProps) {
   const {
      formRHF,
      name,
      options, label, isRequired, isDisabled, isHorizontal,
      ...rest
   } = props;

   return (
      <div className='form-control form-control__radio'>
         {label && <label className={'form-label' + (isRequired ? " required" : "")} htmlFor={name}>{label}</label>}

         <div className={'radio-control-wrapper' + (isHorizontal ? ' horizontal' : '')}>
            {
               options.map((item: any, index: number) => {
                  return (
                     <div className='radio-control' key={index}>
                        <input
                           {...formRHF?.register(name)}
                           type='radio'
                           id={item.value}
                           value={item.value}
                           disabled={isDisabled}
                           {...rest}
                        />
                        <label htmlFor={item.value}>{item.text}</label>
                     </div>
                  )
               })
            }
         </div>

         <TextError>{formRHF?.formState.errors[name]?.message?.toString()}</TextError>
      </div>
   );
}

export default RadioButtons;