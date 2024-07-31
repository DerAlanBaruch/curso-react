import { useForm } from "./hooks/useForm";

export const SimpleForm = () => {
  const { formState, handleInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <div className="row gap-3">
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
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn btn-secondary" onClick={onResetForm}>
          Reset
        </button>
      </div>
    </>
  );
};
