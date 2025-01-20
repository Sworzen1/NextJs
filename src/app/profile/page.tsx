import { auth } from '@/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Image
        alt="profile_image"
        className="rounded-full"
        height={128}
        src={session?.user?.image ?? '/avatar_placeholder.svg'}
        width={128}
      />
      <h1 className="my-6">{session?.user?.name}</h1>
      <h3 className="text-blue-300">{session?.user?.email}</h3>
    </div>
  );
}
