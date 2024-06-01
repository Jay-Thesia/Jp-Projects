import {
    PasswordEyeCloseIcon,
    PasswordEyeOpenIcon,
  } from "components/assets/svg";
  import React, { useState } from "react";
  
  import {
    UseFormRegister,
    FieldValues,
    Path,
    Merge,
    FieldError,
    Control,
    FieldErrorsImpl,
  } from "react-hook-form";
  
  export type FieldType =
    | "text"
    | "email"
    | "password"
    | "radio"
    | "checkbox"
    | "date"
    | "number"
    | "mask_input"
    | "input"
    | "textarea"
    | "select"
    | "dateAndTime"
    | "asyncSelect"
    | "creatableAsyncSelect"
    | "creatableSelect"
    | "color"
    | "time"
    | "richTextEditor"
    | "currency_format"
    | "CreatableAsyncSelectFormFieldForSearch";
  
  export type InputProps<TFormValues extends FieldValues> = {
    label?: string | React.ReactNode;
    iconClass?: string;
    id?: string;
    iconPosition?: "top" | "right" | "left" | "bottom";
    name: Path<TFormValues>;
    defaultChecked?: boolean;
    className?: string;
    parentClassName?: string;
    placeholder?: string;
    wrapperClass?: string;
    type?: FieldType;
    value?: string;
    minDate?: Date;
    maxDate?: Date;
    register?: UseFormRegister<TFormValues>;
    control?: Control<TFormValues>;
    error?:
      | Merge<FieldError, (FieldError | undefined)[]>
      | Merge<FieldError, (Merge<FieldError, FieldErrorsImpl> | undefined)[]>
      | undefined;
    errors?: FieldErrorsImpl<TFormValues>;
    isMulti?: boolean;
    disabled?: boolean;
    isClearable?: boolean;
    isLoading?: boolean; // async select
    serveSideSearch?: boolean; // async select
    setValue?: (value: string | undefined) => void;
    onChange?: (value: any) => void;
    fieldLimit?: number;
    menuPlacement?: "auto" | "top" | "bottom";
    variantBottomLine?: "dark" | "ocean";
    popperPosition?: "fixed";
    selected?: Date | null | undefined;
    showYearDropdown?: boolean;
    showMonthDropdown?: boolean;
    onFocusApiCall?: boolean;
    maskInputType?: string;
    labelClass?: string;
    beforeAddValidateRegex?: RegExp;
    inputMaxLength?: number;
    variant?: boolean;
    extraText?: string;
    extraTextClass?: string;
    extraTextRight?: boolean;
    minNumber?: number;
  };
  
  const Input = <TFormValues extends Record<string, unknown>>(
    fieldProps: InputProps<TFormValues>
  ) => {
    const {
      id,
      label,
      type,
      name,
      className,
      parentClassName,
      register,
      disabled,
      error,
      fieldLimit,
      variant = false,
      labelClass,
      extraText,
      extraTextClass,
      value,
      extraTextRight,
      minNumber,
      variantBottomLine,
      ...rest
    } = fieldProps;
  
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const onHandlePasswordVisible = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    return (
      <>
        <div
          className={`input-wrap relative ${
            parentClassName ? parentClassName : ""
          }`}
        >
          {label ? (
            <label
              className={`${variant ? "" : "text-grey text-base"} ${
                labelClass ? labelClass : ""
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          ) : (
            ""
          )}
          <div className="relative">
            <input
              id={id ?? ""}
              disabled={disabled ?? false}
              type={
                type === "password"
                  ? passwordVisible
                    ? "text"
                    : "password"
                  : type
              }
              value={value}
              className={`${
                variant
                  ? ""
                  : `relative peer bg-transparent text-dark transition-all placeholder:text-dark/70 outline-none block text-base w-full pb-3 border-b-2 border-grey  ${className}`
              }
            ${className ?? ""} ${type === "password" ? "pr-12" : ""} ${
                extraTextRight ? "pl-5" : ""
              }`}
              {...(register ? register(name) : "")}
              min={minNumber}
              {...rest}
              maxLength={fieldLimit ?? 100}
            />
            <span
              className={`absolute peer-focus:scale-x-100 bottom-0 left-2/4 -translate-x-2/4 h-0.5 w-full ${
                variantBottomLine === "ocean" ? "bg-ocean" : "bg-dark"
              } block scale-x-0 transition-all duration-500 origin-center `}
            ></span>
          </div>
  
          {extraText ? (
            <span
              className={`inline-block absolute text-xs opacity-50 font-medium  top-9
              ${extraTextRight ? " left-1.5 " : " right-2 "}
               ${extraTextClass ? extraTextClass : ""}`}
            >
              {extraText}
            </span>
          ) : (
            ""
          )}
          {type === "password" ? (
            <span
              onClick={onHandlePasswordVisible}
              className={`inline-block absolute  right-4 w-5 h-5 cursor-pointer opacity-80 ${
                variant ? "top-12" : " top-2"
              }`}
            >
              {passwordVisible ? (
                <PasswordEyeOpenIcon className="!fill-none" />
              ) : (
                <PasswordEyeCloseIcon className="!fill-none" />
              )}
            </span>
          ) : (
            ""
          )}
  
          {error && (
            <p className="text-base text-red-500 font-medium mt-1 inline-block">
              {error.message}
            </p>
          )}
        </div>
      </>
    );
  };
  
  export default Input;
  