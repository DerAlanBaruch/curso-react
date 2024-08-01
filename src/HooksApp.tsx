import { Callback } from "./HooksApp/Callback";
import { CounterApp } from "./HooksApp/CounterApp";
import { FocusScreen } from "./HooksApp/FocusScreen";
import { Layout } from "./HooksApp/Layout";
import { Memorize } from "./HooksApp/Memorize";
import { MemorizeButtons } from "./HooksApp/MemorizeButtons";
import { MultipleCustomHooks } from "./HooksApp/MultipleCustomHooks";
import { SimpleForm } from "./HooksApp/SimpleForm";

export const HooksApp = () => {
  return (
    <div className="container">
      <CounterApp />
      <hr />
      <SimpleForm />
      <hr />
      <MultipleCustomHooks />
      <hr /> 
      <FocusScreen />
      <hr />
      <Layout />
      <hr />
      <Memorize />
      <hr />
      <Callback />
      <hr />
      <MemorizeButtons />
      <hr />
    </div>
  );
};
