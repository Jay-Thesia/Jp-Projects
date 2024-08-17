import React, { SVGAttributes } from 'react';

export interface ButtonProps extends SVGAttributes<SVGElement> {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  parentClassName?: string;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: string;
  smallBtn?: boolean;
  onClick?: React.MouseEventHandler;
  key?: number;
  size?: string;
  active?: string;
  isScaleHover?: boolean;
}

// isLink = true,
//
//   ,
//   className,
//   title,
//   icon,
//   iconFirst = true,
//   variant,
//   onClick,
//
//   titleClassName,
//   value,

const Button = (props: ButtonProps) => {
  const {
    type,
    children,
    parentClassName,
    className,
    isLoading = false,
    isDisabled,
    variant,
    smallBtn = true,
    isScaleHover = false,
    onClick: onHandleClick,
  } = props;

  const classes = `group outline-none inline-flex items-center gap-2.5 lg:gap-3 justify-center font-medium transition-all duration-300 leading-none rounded-full 
  ${variant !== 'blank' && (!smallBtn ? `h-14 text-lg ` : ` h-11 text-base`)} 
  ${isScaleHover && 'hover:scale-105'} 

  ${
    variant === 'oceanFill'
      ? 'bg-gradient-to-r hover:bg-gradient-to-l from-ocean/75 to-ocean text-white transition-all'
      : variant === 'oceanBlank'
      ? ' bg-transparent text-ocean hover:text-grayNew'
      : variant === 'oceanOutline'
      ? 'border border-ocean bg-transparent hover:bg-ocean text-ocean hover:text-white'
      : variant === 'darkFill'
      ? 'bg-primary hover:bg-secondary text-white hover:text-black'
      : variant === 'darkBlank'
      ? 'bg-transparent text-grayNew hover:text-ocean'
      : variant === 'darkOutline'
      ? 'border border-grayNew bg-transparent hover:bg-grayNew text-grayNew hover:text-white'
      : variant === 'blank'
      ? 'bg-transparent text-grayNew hover:text-black'
      : variant == 'danger'
      ? 'bg-red-500 hover:bg-secondary text-white hover:text-black '
      : 'bg-themeColor text-grayNew'
  }
  transition-all duration-300 rounded-8 p-5 ${className ? className : ''} ${
    isDisabled || isLoading ? 'cursor-not-allowed' : ''
  }
  
  `;
  return (
    <>
      <div className={`${parentClassName ? parentClassName : ''}`}>
        <button
          onClick={(e) => {
            onHandleClick && onHandleClick(e);
          }}
          type={type}
          className={classes}
          disabled={isDisabled || isLoading || false}
        >
          {children}
          {isLoading && (
            <span
              className="animate-spin inline-block ml-2 w-5 h-5 rounded-full relative before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:border-4 before:border-solid before:border-current before:rounded-full before:opacity-30
       after:absolute after:content-[''] after:w-full after:h-full after:top-0 after:left-0 after:border-4 after:border-transparent after:border-solid after:border-r-current after:rounded-full"
            ></span>
          )}
        </button>
      </div>
    </>
  );
};

export default Button;
