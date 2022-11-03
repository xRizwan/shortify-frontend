import type { TYPE } from "vue-toastification";
import type { ToastOptions } from "vue-toastification/dist/types/types";

export type User = {
  username: string;
  password: string;
};

export type Url = {
  date: Date;
  id: number;
  user: number;
  long: string;
  short: string;
};

export type SuccessToastOptions = ToastOptions & {
  type?: TYPE.SUCCESS | undefined;
};
