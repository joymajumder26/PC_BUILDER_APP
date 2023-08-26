import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
// import { Providers as AuthProviders } from "next-auth";


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps.session}>
      {/* You may also want to include your authentication providers */}
      {/* <AuthProviders session={pageProps.session}> */}
        <Component {...pageProps} />
      {/* </Providers> */}
    </SessionProvider>
  );
}