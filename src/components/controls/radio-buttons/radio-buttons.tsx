import { UseFormReturn } from 'react-hook-form';
import TextError from '~/components/controls/text-error';

interface IProps {
   formRHF: UseFormReturn<any>;
   name: string;
   options: string[] | any;
   label?: string;
   placeholder?: string;
   isRequired?: boolean;
   isDisabled?: boolean;
}

function RadioButtons(props: IProps) {
   const {
      formRHF,
      name,
      options, label, placeholder, isRequired, isDisabled,
      ...rest
   } = props;


   return (
      <div className='form-control form-control__radio'>
         {label && <label className={'form-label' + (isDisabled ? " required" : "")} htmlFor={name}>{label}</label>}
         {/* {
                options.map((item, index) => {
                    return (
                        <div className='radio-control' key={index}>
                            <input
                                type='radio'
                                id={item.value}
                                {...field}
                                {...rest}
                                value={item.value}
                                checked={field.value === item.value}
                            />
                            <label htmlFor={item.value}>{item.text}</label>
                        </div>
                    )
                })
            } */}
         <TextError>{formRHF?.formState.errors[name]?.message?.toString()}</TextError>
      </div>
   );
}

export default RadioButtons;