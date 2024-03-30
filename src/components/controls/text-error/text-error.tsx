
interface Props {
    children?: React.ReactNode
}

function TextError(props: Props) {
    return (
        <div className='form-error'>
            {props.children}
        </div>
    );
}

export default TextError;