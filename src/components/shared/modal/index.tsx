import { CloseIcon } from 'components/assets/svg';
import React, { ReactNode } from 'react';

const Modal = ({
  width = 'max-w-3xl',
  children,
  className,
  title,
  close,
  isFilter = false,
}: {
  width?: string;
  children?: ReactNode;
  className?: string;
  title: string;
  close?: () => void;
  isFilter?: boolean;
}) => {
  return (
    <>
      {isFilter ? (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center font-semibold">
          {/* Modal content */}
          <div className="z-99 inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-xs mx-auto">
            {/* Modal header */}
            <div className="rounded-[20px] p-8 relative flex flex-col w-full bg-white shadow-2xl">
              <div className="relative flex items-center mb-6">
                <h3 className="font-bold text-2xl"> {title}</h3>
                <button
                  type="button"
                  className="absolute text-2xl right-0 text-black hover:text-ocean opacity-80 hover:opacity-100 transition-all"
                  onClick={() => close?.()}
                >
                  <CloseIcon />
                  {/* <Plus size="h-7 w-7 " className="rotate-45" /> */}
                </button>
              </div>
              <div className={className}>{children}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 overflow-x-hidden overflow-y-auto z-[99] ">
          <div
            className={`relative w-full flex justify-between min-h-screen items-center py-10 z-[1] px-4 mx-auto ${width}`}
          >
            <div className="rounded-[20px] p-8 relative flex flex-col w-full bg-white">
              <div className="relative flex items-center mb-6">
                <h2 className="font-bold text-2xl lg:text-3xl"> {title}</h2>
                <button
                  type="button"
                  className="absolute text-2xl right-0 text-black hover:text-ocean opacity-80 hover:opacity-100 transition-all"
                  onClick={() => close?.()}
                >
                  <CloseIcon />
                  {/* <Plus size="h-7 w-7 " className="rotate-45" /> */}
                </button>
              </div>
              <div className={className}>{children}</div>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => close?.()}
          ></div>
        </div>
      )}
    </>
  );
};

export default Modal;
