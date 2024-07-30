import { CounterApp } from "./HooksApp/CounterApp";
import { SimpleForm } from "./HooksApp/SimpleForm";

export const HooksApp = () => {
  return (
    <div className="container">
      <CounterApp />
      <hr />
      <SimpleForm />
    </div>
  );
};
