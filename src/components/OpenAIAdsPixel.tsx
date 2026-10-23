import Script from "next/script";
import {
  createOpenAIAdsPixelScript,
  isOpenAIAdsDebugEnabled,
} from "@/lib/openai-ads-pixel";

export function OpenAIAdsPixel() {
  const pixelId = process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID?.trim();
  if (!pixelId) return null;

  const debug = isOpenAIAdsDebugEnabled({
    nodeEnv: process.env.NODE_ENV,
    deploymentEnv: process.env.VERCEL_ENV ?? process.env.NEXT_PUBLIC_DEPLOYMENT_ENV,
  });

  return (
    <Script id="openai-ads-pixel" strategy="afterInteractive">
      {createOpenAIAdsPixelScript(pixelId, debug)}
    </Script>
  );
}

