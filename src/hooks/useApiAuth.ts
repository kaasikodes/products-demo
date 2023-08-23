import { useAppSelector } from "../config/redux/hooks";

export const useApiAuth = () => {
  const auth = useAppSelector((state) => state.user);

  return {
    token: auth.token,
    userDetails: auth.details,
  };
};
