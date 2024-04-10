import { useLayoutEffect } from "react";

import { storage } from "~/utils";
import path from "~/constants/path";

function NotFound() {
    useLayoutEffect(() => {
        storage.setCurrentUrl(path.home);
        storage.setCurrentPageLv1("");
        storage.setCurrentPageLv2("");
        storage.setCurrentControllerName("");
    }, []);

    return (
        <div className="notfoundpage-container">
            <div className="center">
                <div className="error">
                    <div className="number">4</div>
                    <div className="illustration">
                        <div className="circle"></div>
                        <div className="clip">
                            <div className="paper">
                                <div className="face">
                                    <div className="eyes">
                                        <div className="eye eye-left"></div>
                                        <div className="eye eye-right"></div>
                                    </div>
                                    <div className="rosyCheeks rosyCheeks-left"></div>
                                    <div className="rosyCheeks rosyCheeks-right"></div>
                                    <div className="mouth"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="number">4</div>
                </div>
                <div className="text">KHÔNG TÌM THẤY TRANG</div>
                {/* <Button
                    type='default'
                    stylingMode='outlined'
                >
                    <NavLink to="/"
                        onClick={() => {
                            localStorage.setItem(process.env.REACT_APP_STORAGE_CURRENTURL, "/")
                            localStorage.setItem(process.env.REACT_APP_STORAGE_CURRENTPAGE, "")
                        }}
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Về trang chủ</span>
                    </NavLink>
                </Button> */}
            </div>
        </div>
    );
}

export default NotFound;
