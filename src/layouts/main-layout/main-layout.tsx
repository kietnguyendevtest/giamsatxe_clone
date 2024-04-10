import { useContext, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '~/contexts/app-context';
import { storage } from '~/utils';
import { Header, Sidebar, Footer } from '~/layouts/components';

interface IProps {
    children?: React.ReactNode
}

function MainLayout(props: IProps) {
    const { isAuthenticated } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, []);

    useLayoutEffect(() => {
        if (isAuthenticated) {
            navigate(storage.getCurrentUrl());
        }
    }, []);

    return (
        <>
            {
                isAuthenticated &&
                <>
                    <Header />

                    <div className="wrapper">

                        <div className="aside-wrapper">
                            <Sidebar />
                        </div>

                        <div className="content-wrapper">
                            {
                                storage.getCurrentPageLv2() &&
                                <div className="content-title">
                                    <div className="content-title__icon">
                                        <i className="fa-solid fa-display"></i>
                                    </div>
                                    <h2 className='content-title__text'>
                                        {storage.getCurrentPageLv1() &&
                                            <>
                                                {storage.getCurrentPageLv1()}<i className="fa-solid fa-caret-right"></i>
                                            </>
                                        }
                                        {storage.getCurrentPageLv2()}
                                    </h2>
                                </div>
                            }
                            {props.children}
                        </div>

                    </div>
                    <Footer />
                </>
            }
        </>
    );
}

export default MainLayout;