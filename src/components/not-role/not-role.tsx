import classNames from 'classnames/bind';
import styles from './not-role.module.scss';

const cx = classNames.bind(styles);

function NotRole() {
   return (
      <div className={cx("notrole-container")}>
         <div className={cx("pic")}></div>
         <div className={cx("text")}>BẠN KHÔNG CÓ QUYỀN TRUY CẬP TRANG NÀY</div>
      </div>
   );
}

export default NotRole;