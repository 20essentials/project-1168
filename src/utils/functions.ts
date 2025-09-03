export const $ = (el: string) => document.querySelector(el);
export const $$ = (el: string) => document.querySelectorAll(el);

export function baseUrl(path: string) {
  return new URL(path.replace(/^\/+/, ''), import.meta.env.SITE).toString();
}

export function getUrlOfTheComponent({ theURL }: { theURL: string }) {
  const url = new URL(theURL);
  const fileName = url.pathname.split('/').pop();
  return `https://github.com/20essentials/project-1168/blob/main/src/components/${fileName}`;
}
