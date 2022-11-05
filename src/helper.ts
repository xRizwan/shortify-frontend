import type { ErrorToastOptions, SuccessToastOptions } from "./typing";

export const API_BASE = import.meta.env.VITE_API_BASE;

export const makeUrl = (short: string) => `${API_BASE}${short}`;

export const successToastOptions: SuccessToastOptions = {
  toastClassName: "successToast",
};

export const errorToastOptions: ErrorToastOptions = {
  toastClassName: "errorToast",
};
