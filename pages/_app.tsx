import "../styles/globals.css";
import "../components/elements/icons/library";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome/styles.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
