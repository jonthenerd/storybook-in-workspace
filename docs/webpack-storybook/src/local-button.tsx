export interface LocalButtonProps {
    /** The text to use on the button (from local button) */
    label: string;
    /** The onClick (from local button) */
    onClick: () => void;
}

export function LocalButton({ label, onClick }: LocalButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}