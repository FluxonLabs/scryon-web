export const OPENAI_ADS_SDK_URL = "https://bzrcdn.openai.com/sdk/oaiq.min.js";

type PixelEnvironment = {
  nodeEnv?: string;
  deploymentEnv?: string;
};

export function isOpenAIAdsDebugEnabled({ nodeEnv, deploymentEnv }: PixelEnvironment): boolean {
  if (deploymentEnv) return deploymentEnv !== "production";
  return nodeEnv !== "production";
}

export function createOpenAIAdsPixelScript(pixelId: string, debug: boolean): string {
  return `!function(w,d,s,u){
if(w.oaiq)return;
var q=function(){q.q.push(arguments)};
q.q=[];
w.oaiq=q;
var j=d.createElement(s);
j.async=1;
j.src=u;
var f=d.getElementsByTagName(s)[0];
f.parentNode.insertBefore(j,f);
}(window,document,"script",${JSON.stringify(OPENAI_ADS_SDK_URL)});
oaiq("init",{pixelId:${JSON.stringify(pixelId)},debug:${debug}});`;
}

