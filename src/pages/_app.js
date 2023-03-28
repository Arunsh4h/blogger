import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.scss";
import ColorSwitcher from "../common/elements/color-switcher/ColorSwitcher";
import { SessionProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ColorSwitcher />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
