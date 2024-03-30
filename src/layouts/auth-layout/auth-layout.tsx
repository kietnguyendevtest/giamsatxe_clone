import Footer from '~/components/footer';

interface Props {
    children?: React.ReactNode
}

function AuthLayout({ children }: Props) {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}

export default AuthLayout;