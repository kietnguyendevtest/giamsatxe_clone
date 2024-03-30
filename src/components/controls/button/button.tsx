
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

function Button(props: any) {
   const {
      children,
      to, href,
      variant = 'contained', //contained, outline, text
      size = 'medium', //small, medium, large
      disabled = false,
      leftIcon,
      rightIcon,
      className,
      onClick,
      ...passProps
   } = props;

   let Comp: string | React.ForwardRefExoticComponent<any> = 'button';

   const _props = {
      onClick,
      ...passProps,
   }

   // Remove event listener when btn is disabled
   if (disabled) {
      Object.keys(_props).forEach((key) => {
         if (key.startsWith('on') && typeof _props[key] === 'function') {
            delete _props[key];
         }
      });
   }

   if (to) {
      _props.to = to;
      Comp = Link;
   } else if (href) {
      _props.href = href;
      Comp = 'a';
   }

   const classes = cx('btn-wrapper', {
      [className]: className,
      [variant]: variant,
      [size]: size,
      disabled,
   });

   return (
      <Comp className={classes} {..._props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;