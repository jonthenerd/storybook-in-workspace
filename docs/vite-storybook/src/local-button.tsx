export interface LocalButtonProps {
    /** The text to use on the button (from local component) */
    label: string;
    onClick: () => void;
}

export function LocalButton({ label, onClick }: LocalButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}