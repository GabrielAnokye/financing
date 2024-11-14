import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/banking.svg"
            width={1000}
            height={1000}
            alt="SpendSmart logo"
          />
        </div>
      </div>
      {children}
    </main>
  );
}
