import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledContact = styled.div`
  padding: 4rem 12vw;
  background: #fafaff;
  margin-bottom: 40px;
`;

const Title = styled.h3`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: clamp(30px, 4vw, 40px);
  text-transform: uppercase;
  color: #3b4754;
  padding-top: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  position: relative; /* Position relative for absolute positioning of label */
  margin-bottom: 1rem;
  width: 300%;
  max-width: 600px;
`;

const Label = styled.label`
  position: absolute;
  left: 12px;
  top: 12px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 1rem; /* Default size */
  color: #aaa;
  transition: 0.2s ease all; /* Smooth transition */
  pointer-events: none; /* Prevent mouse events on label */

  /* When the input is focused or contains text */
  input:focus + &,
  input:not(:placeholder-shown) + &,
  textarea:focus + &,
  textarea:not(:placeholder-shown) + & {
    top: -10px; /* Move label up */
    left: 10px;
    font-size: 0.8rem; /* Shrink size */
    color: #3b4754; /* Change color */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 12px 6px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 55px;
  box-sizing: border-box;
  margin-bottom: 15px;

  &:focus {
    border-color: #478778; /* Change border color on focus */
    outline: none; /* Remove outline */
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 12px 6px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #478778; /* Change border color on focus */
    outline: none; /* Remove outline */
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: #478778;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  color: #3b4754;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

const Contact: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <Title>Contact</Title>
      <StyledContact>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {submitted ? (
            <p>Thank you for reaching out! We will get back to you shortly.</p>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder=" " // Add a placeholder to trigger not-empty state
                />
                <Label htmlFor="name">Name</Label>
              </FormGroup>

              <FormGroup>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder=" " // Add a placeholder to trigger not-empty state
                />
                <Label htmlFor="email">Email</Label>
              </FormGroup>

              <FormGroup>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  placeholder=" " // Add a placeholder to trigger not-empty state
                />
                <Label htmlFor="message">Message</Label>
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
          )}
        </div>
      </StyledContact>
    </>
  );
};

export default Contact;
