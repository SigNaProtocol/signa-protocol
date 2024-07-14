export const useHide = () => {
  window.ali = "www";
  return useState<string>("ishide", () => true);
};
