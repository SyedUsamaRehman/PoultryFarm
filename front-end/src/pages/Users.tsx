import React from "react";
import ListsTable from "../components/tables/ListsTable";
import { UsersColumns, users } from "../lists/Lists";
import FormModel from "../model/FormModel";
import { InputField } from "../types/types";
import { useFormik } from "formik";

const inputFields: InputField[] = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];

const userFormColumns: any = [
  {
    name: "name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
  },
];

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Users = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  // const formik = useFormik({
  //   initialValues: users,
  //   onSubmit: (values: any) => {
  //     values.id = users.length + 1;
  //     users.push(values);
  //     console.log(users);
  //     formik.resetForm();
  //     setOpen(false);
  //   },
  // });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values: any) => {
      values.id = users.length + 1;
      users.push(values);
      console.log(values);
      formik.resetForm();
      setOpen(false);
      // Log the input values
      const { name, email, password } = values;
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);

      // Log the selected option
      console.log("Selected Option:", selectedOption);
    },
  });

  return (
    <div>
      <div className="">
        <ListsTable
          AddButton={() => setOpen(true)}
          list={users}
          listLabel="Users Data"
          columns={UsersColumns}
        />
        {/* <FormModel
          open={open}
          setOpen={!open}
          title="User"
          user={userFormColumns}
          inputFields={inputFields}
          // onSubmit={formik.handleSubmit}
          inputValue={formik.values[field.name]}
          inputOnChange={formik.handleChange}
          inputOnBlur={formik.handleBlur}
          selectValue={selectedOption}
          selectOnChange={handleSelectChange}
          formOnSubmit={formik.handleSubmit}
          options={options}
        /> */}
        {/* <FormModel
          open={open}
          setOpen={setOpen}
          title="User"
          user={userFormColumns}
          inputFields={inputFields.map((field) => ({
            ...field,
            inputValue: formik.values[field.name],
            inputOnChange: formik.handleChange,
            inputOnBlur: formik.handleBlur,
          }))}
          selectValue={selectedOption}
          selectOnChange={handleSelectChange}
          formOnSubmit={formik.handleSubmit}
          options={options}
        /> */}
        <FormModel
          open={open}
          setOpen={setOpen}
          title="User"
          user={userFormColumns}
          inputFields={inputFields.map((field) => ({
            ...field,
            inputValue: formik.values[field.name],
            inputOnChange: (event) =>
              formik.setFieldValue(field.name, event.target.value),
            inputOnBlur: () => formik.setFieldTouched(field.name),
          }))}
          selectValue={selectedOption}
          selectOnChange={handleSelectChange}
          formOnSubmit={formik.handleSubmit}
          options={options}
        />
      </div>
    </div>
  );
};

export default Users;
