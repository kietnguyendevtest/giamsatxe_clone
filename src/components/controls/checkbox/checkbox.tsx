import TextError from '~/components/controls/text-error';

function Checkbox(props: any) {
    const {
        field, form,
        options, label, placeholder, disabled, required,
        ...rest
    } = props;

    const {
        name, value: fieldValue
    } = field;

    const { errors, touched, setFieldValue, setFieldTouched } = form;

    const onChange = (selectedArray: any) => {
        setFieldTouched(name);

        const checkedValue = selectedArray.target.value;
        const isChecked = fieldValue.includes(checkedValue);

        if (isChecked) {
            setFieldValue(name, fieldValue.filter((item: any) => item != checkedValue));
        } else {
            setFieldValue(name, [...fieldValue, checkedValue]);
        }
    };

    return (
        <div className='form-control form-control__checkbox'>
            {label && <label className={'form-label' + (required ? " required" : "")} htmlFor={name}>{label}</label>}
            {
                options.map((item: any, index: any) => {
                    return (
                        <div className='checkbox-control' key={index}>
                            <input
                                type='checkbox'
                                id={item.value}
                                {...field}
                                value={item.value}
                                checked={fieldValue.includes(item.value)}
                                {...rest}
                                onChange={onChange}
                            />
                            <label htmlFor={item.value}>{item.text}</label>
                        </div>
                    )
                })
            }
            <TextError>{(errors[name] && touched[name]) && errors[name]}</TextError>
        </div>
    );
}

export default Checkbox;