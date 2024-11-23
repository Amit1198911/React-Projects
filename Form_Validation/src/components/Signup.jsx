import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const resetForm = () => {
  const form = document.querySelector('form');
  form.reset();
}

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('First Name is required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Last Name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
          {/* First Name Field */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <Field
              name="firstName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500 text-sm mt-1">
              <ErrorMessage name="firstName" />
            </div>
          </div>

          {/* Last Name Field */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <Field
              name="lastName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500 text-sm mt-1">
              <ErrorMessage name="lastName" />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <Field
              name="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500 text-sm mt-1">
              <ErrorMessage name="email" />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-2 bg-blue-500 text-white rounded ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
