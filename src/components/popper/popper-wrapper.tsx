import React from 'react';

interface IProps {
   children?: React.ReactNode
}

function PopperWrapper(props: IProps) {
   return (
      <div className='popper-wrapper' tabIndex={-1}>
         {props.children}
      </div>
   );
}

export default PopperWrapper;