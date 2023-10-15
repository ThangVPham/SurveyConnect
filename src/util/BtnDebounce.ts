let id = -1;
interface BtnDebounceProp {
  cb: () => void;
}
export function BtnDebounce({ cb }: BtnDebounceProp) {
  clearTimeout(id);
  id = setTimeout(() => {
    cb();
  }, 100);
}
