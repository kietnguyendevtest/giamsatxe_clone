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

function Checkbox(props: IProps) {
    const {
        formRHF,
        name,
        options, label, isRequired, isDisabled, isHorizontal,
        ...rest
    } = props;

    return (
        <div className='form-control form-control__checkbox'>
            {label && <label className={'form-label' + (isRequired ? " required" : "")} htmlFor={name}>{label}</label>}

            <div className={'checkbox-control-wrapper' + (isHorizontal ? ' horizontal' : '')}>
                {
                    options.map((item: any, index: number) => {
                        return (
                            <div className='checkbox-control' key={index}>
                                <input
                                    {...formRHF?.register(name)}
                                    type='checkbox'
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

export default Checkbox;