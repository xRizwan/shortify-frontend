export const API_BASE = import.meta.env.VITE_API_BASE;

export const makeUrl = (short: string) => `${API_BASE}${short}`;
