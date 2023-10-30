export interface User {
  name: string;
  email: string;
  password?: string;
  type: string;
}

interface Column {
  label: string;
  key: any;
}

export interface TableProps {
  list: User[];
  listLabel: string;
  AddButton: any;
  columns: Column[];
}

export interface InputField {
  name: keyof User;
  label: string;
  type: string;
  placeholder: string;
  inputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputOnBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
}

export interface FormModelProps {
  open: boolean;
  setOpen: any;
  title: string;
  user: User;
  inputFields: InputField[];
  // onSubmit: (user: User) => void;
  // inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // inputOnBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // inputValue: string;
  selectValue: string;
  selectOnChange: any;
  formOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  options: any[];
}
