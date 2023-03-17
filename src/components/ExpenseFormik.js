import React from "react";
import "./ExpenseForm.css";
import { Field, Formik } from "formik";

class ExpenseFormik extends React.Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      name: "",
      email: "",
      amount: "",
      date: "",
      category: "",
      Hobbies: "",
    };
  }
  validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.amount) {
      errors.amount = "Required";
    }
    if (!values.date) {
      errors.date = "Required";
    }
    if (!values.category) {
      errors.category = "Required";
    }

    return errors;
  };
  handleSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  render() {
    return (
      <div className="formik">
        <div id="expenseForm">
          <Formik
            initialValues={this.initialValues}
            validate={(values) => this.validate(values)}
            onSubmit={(values, { setSubmitting }) =>
              this.handleSubmit(values, setSubmitting)
            }
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <label for="name">
                  Name <span>{errors.name && touched.name && errors.name}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <label for="email">
                  Email{" "}
                  <span>{errors.email && touched.email && errors.email}</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <label for="amount">
                  Amount{" "}
                  <span>
                    {errors.amount && touched.amount && errors.amount}
                  </span>
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Enter expense amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                />

                <label for="date">
                  Spend Date{" "}
                  <span>{errors.date && touched.date && errors.date}</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Enter date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                />

                <label for="category">
                  select{" "}
                  <span>
                    {errors.category && touched.category && errors.category}
                  </span>
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                >
                  <option value="">Select</option>
                  <option value="Food">Food</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Academic">Academic</option>
                </select>
                <label for="Hobbies">
                  Hobbies{" "}
                  <span>
                    {errors.Hobbies && touched.Hobbies && errors.Hobbies}

                    <div
                      role="group"
                      aria-labelledby="checkbox-group "
                      textColor="black"
                    >
                      <label>
                        <Field type="checkbox" name="checked" value="movie's" />
                        movie's
                      </label>
                      <label>
                        <Field type="checkbox" name="checked" value="Sport" />
                        Sport
                      </label>
                      <label>
                        <Field type="checkbox" name="checked" value="reading" />
                        reading
                      </label>
                    </div>
                  </span>
                </label>

                <input type="submit" value="Submit" disabled={isSubmitting} />
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
export default ExpenseFormik;
