import "../styles/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
