import { Header, Sidebar, Footer } from '~/layouts/components';

interface IProps {
    children?: React.ReactNode
}

function MainLayout(props: IProps) {
    // const navigate = useNavigate();
    // const account_redux = useSelector((state) => state.user.account);
    // const currentUrl_redux = useSelector((state) => state.user.currentUrl);

    // useEffect(() => {
    //     if (account_redux && account_redux.auth) {
    //         if (!localStorage.getItem(process.env.REACT_APP_STORAGE_CURRENTCONTROLLERNAME)) {
    //             navigate("/");
    //         }
    //         else {
    //             navigate(currentUrl_redux);
    //         }
    //     } else {
    //         navigate("/login");
    //     }
    // }, [account_redux]);

    return (
        <>
            <Header />

            <div className="wrapper">

                <div className="aside-wrapper">
                    <Sidebar />
                </div>

                <div className="content-wrapper">
                    {props.children}
                </div>

            </div>
            <Footer />
        </>
    );
}

export default MainLayout;