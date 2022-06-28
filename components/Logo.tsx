import Link from 'next/link';
import React from 'react';
import { LightningBoltIcon } from '@heroicons/react/solid';

function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center">
        <LightningBoltIcon className="h-8 w-8 flex-shrink-0 mr-3" />
        <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
          Nextjs Dev
        </span>
      </a>
    </Link>
  );
}

export default Logo;
