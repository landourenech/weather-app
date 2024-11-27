'use client';

import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="">
      <h1 className="">Quelque chose c&apos;est mal passe!</h1>
    </main>
  );
}
