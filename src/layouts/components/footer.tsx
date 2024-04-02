import { useEffect, useState } from "react";

function Footer() {
    const [year, setYear] = useState<string>('2024');

    useEffect(() => {
        const currentYear = new Date().getFullYear().toString() || year;
        setYear(currentYear)
    }, []);

    return (
        <div className="footer-container">
            Bản quyền thuộc Công ty Cổ phần Tập đoàn Thép VAS © {year}
        </div>
    );
}

export default Footer;