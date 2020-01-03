const SHOW_RECONCILER_CALLS = true;
export const log = (text:string) => {
  if(SHOW_RECONCILER_CALLS){
    globalThis.__AwtkSnapshot && __AwtkSnapshot.push(`${text}`);
  }
}
