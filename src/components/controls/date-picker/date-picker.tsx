
import { Controller, UseFormReturn } from 'react-hook-form';
import DateView from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import vi from 'date-fns/locale/vi';

import TextError from '~/components/controls/text-error';

interface IProps {
   formRHF: UseFormReturn<any>;
   name: string;
   label?: string;
   placeholder?: string;
   isRequired?: boolean;
   isDisabled?: boolean;
   dateFormat?: string;
}

function DatePicker(props: IProps) {
   const {
      formRHF,
      name,
      label, placeholder = 'dd/MM/yyyy', isRequired, isDisabled, dateFormat = "dd/MM/yyyy",
      ...rest
   } = props;

   return (
      <div className='form-control'>
         {label && <label className={'form-label' + (isRequired ? " required" : "")} htmlFor={name}>{label}</label>}
         <div className="date-control">
            <Controller
               name={name}
               control={formRHF.control}
               render={({ field }) => (
                  <DateView
                     disabled={isDisabled}
                     showIcon
                     icon={<i className="fa-regular fa-calendar-days"></i>}
                     placeholderText={placeholder}
                     dateFormat={dateFormat}
                     locale={vi as any}
                     //showTimeSelect
                     {...rest}
                     selected={field.value}
                     onChange={(date: Date | any) => date && field.onChange(new Date(date.setHours(12, 0, 0, 0)))}
                     value={field.value}
                  />
               )}
            />
         </div>
         <TextError>{formRHF?.formState.errors[name]?.message?.toString()}</TextError>
      </div>
   );
}

export default DatePicker;