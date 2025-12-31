import React, { useState } from "react";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import CountryDropdown from "./CountryDropdown";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      email,
      password,
      fullName,
      country
    };

    try {
      const authService = new AuthService();
      await authService.register(requestBody).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <Segment padded="very" style={{ width: 400 }}>
        <Header textAlign="center">Giriş Yap</Header>

        <Form onSubmit={handleSubmit}>
          <Form.Input label="Ad Soyad" onChange={(e) => setFullName(e.target.value)} />
          <Form.Input label="E-posta" type="email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Input label="Şifre" type="password" onChange={(e) => setPassword(e.target.value)} />

          <Form.Field>
            <label>Ülke</label>
            <CountryDropdown onSelect={setCountry} />
          </Form.Field>

          <Button fluid primary type="submit" disabled={!country}>
            Giriş Yap
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default Register;
