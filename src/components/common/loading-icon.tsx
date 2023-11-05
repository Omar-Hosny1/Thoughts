import Image from 'next/image';
import React from 'react';

function LoadingIcon() {
  return (
    <Image
      src="/loading.svg"
      width={25}
      height={25}
      alt=""
      className="animate-spin"
    />
  );
}

export default LoadingIcon;
