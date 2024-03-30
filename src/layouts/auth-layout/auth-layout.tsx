import Footer from '~/components/footer';

interface Props {
    children?: React.ReactNode
}

function AuthLayout(props: Props) {
    return (
        <>
            {props.children}
            <Footer />
        </>
    );
}

export default AuthLayout;