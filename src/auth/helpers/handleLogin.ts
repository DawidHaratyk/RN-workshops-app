import { supabase } from "../../../supabase";
import { useAuth } from "../../contexts/AuthContext";

interface InputValuesProps {
  email: string;
  password: string;
  login: () => void;
}

export const handleLogin = async ({
  email,
  password,
  login,
}: InputValuesProps) => {
  const { setLoggedUserUuid } = useAuth();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (data.user) {
    setLoggedUserUuid(data.user.id);
    login();
  }
};
