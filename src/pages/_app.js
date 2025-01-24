import "../styles/globals.css"; 
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {    }
      <Head>
        <title>Calculatrice  | Next.js et TailwindCSS</title>
        <meta
          name="description"
          content="Une calculatrice  développée avec Next.js et TailwindCSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {   }
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 font-sans">
        {  }
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto py-4 px-6">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Calculatrice Moderne
            </h1>
            <p className="text-lg font-medium mt-1">
            précise et réactive
            </p>
          </div>
        </header>

        { }
        <main className="container mx-auto py-10 px-6">
          <section className="bg-white rounded-xl shadow-md p-8">
            <Component {...pageProps} />
          </section>
        </main>

        {  }
        <footer className="bg-blue-600 text-white py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Calculatrice | Développée
               en Next.js et TailwindCSS
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
