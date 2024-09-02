import {InputHTMLAttributes} from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface AppInputProps extends HTMLInputProps {
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
    <div>
      <input
        className={className}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
