import React, { useState } from "react";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import CountryDropdown from "./CountryDropdown";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // ✅ BURASI

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔥 OLMAZSA OLMAZ

    const requestBody = {
      email,
      password
    };

    try {
      const authService = new AuthService();
      console.log(await authService.register(requestBody));

      navigate("/"); // ✅ SADECE BUNU ÇAĞIR
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <Segment padded="very" style={{ width: 400 }}>
        <Header textAlign="center">Giriş Yap</Header>

        <Form onSubmit={handleSubmit}>
          <Form.Input label="E-posta" type="email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Input label="Şifre" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button fluid primary type="submit">
            Giriş Yap
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default Login;
