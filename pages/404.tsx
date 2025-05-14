import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Custom404() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <>
      <Head>
        <title>Redirecting... - Wordle1st</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Redirecting to Game of the Day...</h1>
        </div>
      </div>
    </>
  );
} 