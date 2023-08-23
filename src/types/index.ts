export type TResponseStatus = "loading" | "success" | "error";

export interface IModalProps {
  open: boolean;
  handleClose: () => void;
}
