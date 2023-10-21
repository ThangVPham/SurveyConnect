let id = -1;
interface DebounceProp {
  cb: () => void;
}
export function Debounce({ cb }: DebounceProp) {
  clearTimeout(id);
  id = window.setTimeout(() => {
    cb();
  }, 150);
}
