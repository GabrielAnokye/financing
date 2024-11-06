import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./form";
import { Input } from "./input";

interface CustomInputProps {
  form: any;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  form,
  name,
  label,
  placeholder,
  type,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
