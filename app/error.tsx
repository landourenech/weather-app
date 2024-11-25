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
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Quelque chose c'est mal passe!</h2>
      
    </main>
  );
}