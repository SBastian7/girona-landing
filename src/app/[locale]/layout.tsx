import type { Metadata } from "next";
import {NextIntlClientProvider, useMessages} from 'next-intl';

import "../globals.css";
import '../fonts.css';

export const metadata: Metadata = {
  title: "Montilivi Tour interactivo",
  description: "Powered by Bstadium",
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
