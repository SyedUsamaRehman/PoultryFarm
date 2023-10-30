import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Input, Select } from "../components/forms";
import { FormModelProps } from "../types/types";

const FormModel = ({
  open,
  setOpen,
  title,
  // user,
  inputFields,
  options,
  // onSubmit,
  // inputValue,
  // inputOnChange,
  // inputOnBlur,
  selectValue,
  selectOnChange,
  formOnSubmit,
}: FormModelProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form onSubmit={formOnSubmit}>
                  <div className="bg-gray-50 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-bold leading-6 text-gray-900"
                        >
                          Add New {title}
                        </Dialog.Title>
                        <div className="mt-2 grid grid-cols-1 gap-4 mx-20">
                          {/* {inputFields.map((field) => (
                            <Input
                              key={field.name}
                              type={field.type}
                              name={field.name}
                              id={field.name}
                              value={inputValue}
                              onChange={inputOnChange}
                              onBlur={inputOnBlur}
                              placeholder={field.placeholder}
                              required
                              label
                              labelText={field.label}
                            />
                          ))} */}
                          {inputFields.map((field) => (
                            <Input
                              key={field.name}
                              type={field.type}
                              name={field.name}
                              id={field.name}
                              value={field.inputValue}
                              onChange={field.inputOnChange}
                              onBlur={field.inputOnBlur}
                              placeholder={field.placeholder}
                              required
                              label
                              labelText={field.label}
                            />
                          ))}
                          <Select
                            name="mySelect"
                            options={options}
                            value={selectValue}
                            onChange={selectOnChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 p-3 text-lg font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    >
                      Save {title}
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 p-3 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FormModel;