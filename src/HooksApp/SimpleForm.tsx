import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });
  const { username, email } = formState;
  const handleInputChange = ({ target }: any) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  useEffect(() => {
    console.log("username");
  }, [username]);

  useEffect(() => {
    console.log("email");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        autoComplete="off"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="form-control"
        placeholder="email@email.com"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />
    </>
  );
};
