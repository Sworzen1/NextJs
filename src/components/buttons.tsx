'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export const SignInButton = () => {
  const { data, status } = useSession();

  if (status === 'loading') return <>...</>;

  if (status === 'authenticated')
    return (
      <Link href="/profile">
        <Image
          alt="profile_image"
          height={32}
          src={data.user?.image ?? '/avatar_placeholder.svg'}
          width={32}
          className="rounded-full"
        ></Image>
      </Link>
    );

  return <button onClick={() => signIn()}>Sign in</button>;
};

export const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};
