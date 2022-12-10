import React from "react";
import { Formik, Form, Field } from "formik";

import "bootstrap/dist/css/bootstrap.css";

class Great extends React.Component {
render() {
	return (
	<div className="container">
		<div className="row">
		<div className="col-lg-12">
			<Formik initialValues={{ email: "", firstName: "", lastName:""}}>
			{(props) => (
				<div>
				{console.log(props)}
				<div className="row mb-5">
					<div className="col-lg-12 text-center">
					<h1 className="mt-5">Login Form</h1>
					</div>
				</div>
				<Form>
					<div className="form-group">
					{/* <label htmlFor="email"></label> */}
					<Field
						type="email"
						name="email"
						placeholder="Enter email"
						autoComplete="off"
					/>
					</div>

					<div className="form-group">
					{/* <label htmlFor="firstName" className="mt-3">
					</label> */}

					<Field
						type="firstName"
						name="firstName"
						placeholder="Enter FirstName"
					/>
					</div>
                    
					<div className="form-group">
					{/* <label htmlFor="lastName" className="mt-3">
					
					</label> */}
					<Field
						type="lastName"
						name="lastName"
						placeholder="Enter LastName"
					/>
					</div>

					<button
					type="submit"
					className="btn btn-primary btn-block mt-4"
					>
					Submit
					</button>
				</Form>
				</div>
			)}
			</Formik>
		</div>
		</div>
	</div>
	);
}
}

export default Great;
