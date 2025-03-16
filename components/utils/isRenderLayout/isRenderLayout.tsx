export default function isRenderLayout(path: string) {
  const excludePath = ['/signIn'];
  const isRender = excludePath.find((el) => el === path);
  return isRender;
}
