import {InputHTMLAttributes} from "react";
import cls from "./Input.module.css";
import {classNames} from "../../helpers/classnames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

export interface AppInputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

const Input = ({
  className,
  value,
  onChange,
  type = "text",
  ...inputProps
}: AppInputProps) => {
  return (
    <div
      className={classNames({
        className: cls.InputWrapper,
        additional: [className],
      })}
    >
      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
