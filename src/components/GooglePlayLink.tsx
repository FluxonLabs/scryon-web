"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { trackGooglePlayCta } from "@/lib/openai-ads";

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.scryon";

type GooglePlayLinkProps = Omit<ComponentProps<typeof Link>, "href">;

export function GooglePlayLink({ onClick, ...props }: GooglePlayLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackGooglePlayCta();
    onClick?.(event);
  };

  return (
    <Link
      {...props}
      href={PLAY_STORE_URL}
      onClick={handleClick}
    />
  );
}

