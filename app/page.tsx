import FoodRescueForm from '@/components/food-rescue-form';
import { Suspense } from 'react';

export default function Home() {
  // Pass the query parameters to your form
  return (
    <main className='flex justify-center items-center'>
      <section className='flex flex-col gap-6 w-full px-4 md:w-3/5 min-h-screen justify-center'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          D2L Food Rescue Form
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <FoodRescueForm />
        </Suspense>
      </section>
    </main>
  );
}
