import { Controller, UseFormReturn } from 'react-hook-form';
import Select from 'react-select'

import TextError from '~/components/controls/text-error';

interface IProps {
    formRHF: UseFormReturn<any>;
    name: string;
    options: string[] | any;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    multi?: boolean;
}

function SelectBox(props: IProps) {
    const {
        formRHF,
        name,
        options, label, placeholder, disabled, required, multi,
        ...rest
    } = props;

    console.log("SelectBox formRHF", formRHF.getValues(name)?.value);

    // const { name, value: fieldValue } = field;
    // const { errors, touched, setFieldValue, setFieldTouched } = form;

    // const handleBlur = () => {
    //    //setFieldTouched(name);
    //    formRHF.setFocus(name);
    // };

    const onChangeSingle = (selected: any) => {
        formRHF.setValue(name, selected.value);
    };
    const onChangeMulti = (selectedArray: any) => {
        if (selectedArray) {
            formRHF.setValue(
                name,
                selectedArray.map((item: any) => item.value),
            );
        } else {
            formRHF.setValue(name, []);
        }
    };

    const getValueFromSingle = () => {
        return options.find((option: any) => option.value === formRHF.getValues(name)?.value);
    };
    const getValueFromMulti = () => {
        return options.filter((option: any) => formRHF.getValues(name)?.value.includes(option.value));
    };

    const value = multi ? getValueFromMulti() : getValueFromSingle();
    const onChangeHandler = multi ? onChangeMulti : onChangeSingle;

    console.log("value", value);

    return (
        <div className='form-control'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
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
                        isDisabled={disabled}
                        //isTouched={touched[name]}
                        isMulti={multi}
                        {...rest}

                        value={value}
                        //onBlur={handleBlur}
                        onChange={onChangeHandler}
                    />
                )}
            />

            {/* <Select
            className='select-control'
            classNamePrefix="react-select"
            id={name}
            {...field}
            options={options}
            placeholder={placeholder}
            isDisabled={disabled}
            isTouched={touched[name]}
            isMulti={multi}
            {...rest}

            value={value}
            onBlur={handleBlur}
            onChange={onChangeHandler}
         /> */}
            <TextError>{formRHF?.formState.errors[name]?.message?.toString()}</TextError>
        </div>
    );
}

export default SelectBox;