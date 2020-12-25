import React from "react";
import "./ContactForm.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-4 xl-2 py-3 ">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/f/mnqoozve"
              method="POST"
            >
              <div className="form-group col-sm-6">
                <label htmlFor="name" className="white">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="email-input" className="white">
                  Email:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email-input"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="email-body-input" className="white">
                  Message:
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="email-body-input"
                  rows="4"
                  name="message"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              {status === "SUCCESS" ? (
                <p className="white offset-2">Thanks!</p>
              ) : (
                <button className="btn btn-secondary offset-2">Submit</button>
              )}
              {status === "ERROR" && (
                <p className="white">
                  Ooops! There was an error. Please check your email address.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
