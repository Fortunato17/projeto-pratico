import { Toaster } from "react-hot-toast";
export default function NotificacoesProvider({ children }) {
  return (
    <>
    <Toaster
      toastOptions={{
        style: {
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.283)",
        },
      }}
    />
      {children}
    </>
  );
}
