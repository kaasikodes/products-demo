import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../modules/user/slices/user";
import { productReducer } from "../../modules/products/slices/product";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
