import { Controller, UseFormReturn } from 'react-hook-form';
import Select from 'react-select'

import TextError from '~/components/controls/text-error';

interface IProps {
    formRHF: UseFormReturn<any>;
    name: string;
    options: string[] | any;
    label?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    isMulti?: boolean;
    isCloseMenuOnSelect?: boolean;
}

function SelectBox(props: IProps) {
    const {
        formRHF,
        name,
        options, label, placeholder = '', isRequired,
        isDisabled, isMulti, isCloseMenuOnSelect = true,
        ...rest
    } = props;

    return (
        <div className='form-control'>
            {label && <label className={'form-label' + (isRequired ? " required" : "")} htmlFor={name}>{label}</label>}
            <Controller
                name={name}
                control={formRHF.control}
                render={({ field }) => (
                    <Select
                        className='select-control'
                        classNamePrefix="react-select"
                        {...field}
                        options={options}
                        placeholder={placeholder}
                        isDisabled={isDisabled}
                        isMulti={isMulti}
                        blurInputOnSelect={isCloseMenuOnSelect}
                        closeMenuOnSelect={isCloseMenuOnSelect}
                        {...rest}
                    />
                )}
            />
            <TextError>{formRHF?.formState.errors[name]?.message?.toString()}</TextError>
        </div>
    );
}

export default SelectBox;