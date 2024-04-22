interface IProps {
   children?: React.ReactNode;
   title: string;
   className?: string;
   classNameTitle?: string;
}

function BorderedSection(props: IProps) {
   const { children, title, className, classNameTitle } = props;

   return (
      <div className={`bordered-section-container ${className || ""}`}>
         <div className="header">
            <div className="header-border-before"></div>
            {(title) && (
               <div className="header-title">
                  {title && <span className={`title ${classNameTitle || ""}`}>{title}</span>}
               </div>
            )}
            <div className="header-border-after"></div>
         </div>
         <div className="children-container">{children}</div>
      </div>
   );
}

export default BorderedSection;
