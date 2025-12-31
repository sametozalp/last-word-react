import React, { useState } from "react";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import CountryDropdown from "./CountryDropdown";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState(null);

  const handleSubmit = () => {
    const requestBody = {
      email,
      password,
      fullName,
      country
    };

    console.log("Giden JSON:", requestBody);
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

          <Button fluid primary disabled={!country}>
            Giriş Yap
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default Login;
