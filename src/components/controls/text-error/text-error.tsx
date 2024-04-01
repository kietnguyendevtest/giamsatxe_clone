
interface IProps {
    children?: React.ReactNode
}

function TextError(props: IProps) {
    return (
        <div className='form-error'>
            {props.children}
        </div>
    );
}

export default TextError;