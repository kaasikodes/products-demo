import { BeatLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../../../config/redux/hooks";
import { userActions } from "../slices/user";
import { APP_BASE_URL } from "../../../config/enviroment";

export const UserProfile = () => {
  const details = useAppSelector((state) => state.user.details);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-4">
      <div>{details.name}</div>
      <div>{APP_BASE_URL}</div>
      <BeatLoader color="#aaa" />
      <div>
        <button
          className="bg-blue-400 rounded-md px-4 py-2"
          onClick={() =>
            dispatch(userActions.updateName({ name: "Tom Hanks" }))
          }
        >
          Change Name
        </button>
      </div>
    </div>
  );
};
