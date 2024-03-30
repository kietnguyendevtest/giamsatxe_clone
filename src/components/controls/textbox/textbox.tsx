import { InputHTMLAttributes } from "react"
import { UseFormReturn } from "react-hook-form"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   formRHF?: UseFormReturn<any>;
}

function TextBox(props: Props) {
   const {
      formRHF,
      name = '',

      className,
      ...rest
   } = props;

   return (
      <div className={className}>
         <input
            {...formRHF?.register(name)}
            {...rest}
         />

         <div>{formRHF?.formState.errors[name]?.message?.toString()}</div>
      </div>
   );
}

export default TextBox;