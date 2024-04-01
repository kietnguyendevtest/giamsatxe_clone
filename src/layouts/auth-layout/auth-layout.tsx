import Footer from '~/components/footer';

interface IProps {
    children?: React.ReactNode
}

function AuthLayout(props: IProps) {
    return (
        <>
            {props.children}
            <Footer />
        </>
    );
}

export default AuthLayout;