'use client';

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  console.log(error);

  return (
    <div>
      <h1>Something went wrong ! </h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
