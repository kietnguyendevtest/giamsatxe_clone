
import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children?: React.ReactNode
   to?: string; href?: string;
   variant?: 'contained' | 'outline' | 'text';
   size?: 'small' | 'medium' | 'large';
   isDisabled?: boolean;
   leftIcon?: JSX.Element;
   rightIcon?: JSX.Element;
   className?: string;
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: IProps) {
   const {
      children,
      to, href,
      variant = 'contained',
      size = 'medium',
      isDisabled = false,
      leftIcon,
      rightIcon,
      className = "",
      onClick,
      ...rest
   } = props;

   let Comp: string | React.ForwardRefExoticComponent<any> = 'button';

   const _props: any = {
      onClick,
      ...rest,
   }

   // Remove event listener when btn is disabled
   if (isDisabled) {
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
      isDisabled,
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