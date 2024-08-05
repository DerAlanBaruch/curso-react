import { AuthProvider } from "./HeroesSPA/auth";
import { AppRouter } from "./HeroesSPA/router/AppRouter";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
