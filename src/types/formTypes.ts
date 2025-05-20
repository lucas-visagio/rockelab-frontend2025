import { type UseFormRegister, type FieldError } from "react-hook-form";

export interface RegisterFormData {
  email: string;
  confirmEmail: string;
  password: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  registerOptions?: any;
  error?: FieldError;
  helperText?: string;
} 