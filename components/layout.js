import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) 
{
  return (
    <div>
      <Head>
        <title>Week13 Next.js App</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </Head>
      <main>
        {children}
      </main>
      <div className="container text-center">
      <footer>
        <p className="mt-2">This Is The Week 14 Assignment</p>
      </footer>
      </div>
    </div>
  );
}