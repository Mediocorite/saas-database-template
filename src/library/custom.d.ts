// custom.d.ts
declare module "*.svg" {
  const content: { src: string };
  export default content;
}
