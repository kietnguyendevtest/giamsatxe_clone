import { Footer } from "~/layouts/components";

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