import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AppContext } from '~/contexts/app-context';
import path from '~/constants/path';
import Footer from '~/components/footer';

interface Props {
    children?: React.ReactNode
}

function MainLayout({ children }: Props) {
    const { groupRoles, reset } = useContext(AppContext)
    const navigate = useNavigate();

    console.log("MainLayout groupRoles", groupRoles);

    const handeSubmitLogout = () => {
        reset();
        navigate('/login');
    }

    return (
        <>
            <header>Header here
                <button onClick={handeSubmitLogout}>Logout</button>

            </header>
            <aside>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={path.home}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={path.todo}>Todo</NavLink>
                        </li>
                        <li>
                            <NavLink to={path.accounts}>Accounts</NavLink>
                        </li>
                        <li>
                            <NavLink to={path.roles}>Roles</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;