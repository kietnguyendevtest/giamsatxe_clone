import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toastify() {
    return (
        <ToastContainer
            className="toast-container"
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    );
}

export default Toastify;
