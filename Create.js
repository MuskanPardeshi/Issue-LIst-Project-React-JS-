import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import Follow from './Follow'




var raw = "{\n    \"data\": {\n        \"firstName\": \"Gulshan\",\n        \"lastName\": \"test\",\n        \"email\": \"emailss@gmail.com\"\n    }\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://luck-admin.luckyroofs.com/api/social-users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



const LoginSchema = Yup.object().shape({
email: Yup.string()
	.email("Invalid email address format")
	.required("Email is required"),
firstName: Yup.string()
	.min(3, "firstName must be 3 characters at minimum")
	.required("firstName is required"),
    lastName: Yup.string()
	.min(3, "lastName must be 3 characters at minimum")
	.required("lastName is required"),
});

class Create extends React.Component {
render() {
	return (
	<div className="container">
		<div className="row">
		<div className="col-lg-12">
			<Formik
			initialValues={{ email: "", firstName: "" , lastName:""}}
			validationSchema={LoginSchema}
			onSubmit={(values) => {
				console.log(values);
				// var raw = "{\n    \"data\": {\n        \"firstName\": \"Gulshan\",\n        \"lastName\": \"test\",\n        \"email\": \"emailss@gmail.com\"\n    }\n}";
				
				var raw = {'data': values};
				var requestOptions = {
					method: 'POST',
					body: raw.toString(),
					redirect: 'follow'
				};

				fetch("https://luck-admin.luckyroofs.com/api/social-users", requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
				// alert("Account is created");
			}}
			>
			{({ touched, errors, isSubmitting, values }) =>
				!isSubmitting ? (
				<div>
					<div className="row mb-5">
					<div className="col-lg-12 text-center">
						<h1 className="mt-5">Creat an Account</h1>
					</div>
					</div>
					<Form>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<Field
						type="email"
						name="email"
						placeholder="Enter email"
						autocomplete="off"
						className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
						/>

						<ErrorMessage
						component="div"
						name="email"
						className="invalid-feedback"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="firstName" className="mt-3">
						firstName
						</label>
						<Field
						type="firstName"
						name="firstName"
						placeholder="Enter firstName"
						className={`mt-2 form-control
						${
							touched.firstName && errors.firstName
							? "is-invalid"
							: ""
						}`}
						/>
						<ErrorMessage
						component="div"
						name="firstName"
						className="invalid-feedback"
						/>
					</div>

                    <div className="form-group">
						<label htmlFor="lastName" className="mt-3">
						lastName
						</label>
						<Field
						type="lastName"
						name="lastName"
						placeholder="Enter lastName"
						className={`mt-2 form-control
						${
							touched.lastName && errors.lastName
							? "is-invalid"
							: ""
						}`}
						/>
						<ErrorMessage
						component="div"
						name="lastName"
						className="invalid-feedback"
						/>
					</div>

					<button type="submit" className="btn btn-primary btn-block mt-4">
						Submit
					</button>
					
					</Form>
				</div>
			     ) : (
					<Follow></Follow>
				)
			}
			</Formik>
		</div>
		
		</div>
	</div>
	);
}
}


export default Create;