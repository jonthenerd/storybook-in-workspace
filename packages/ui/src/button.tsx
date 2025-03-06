export interface ButtonProps {
    /** The text to use on the button (from package) */
    label: string;
    /** This is the onClick (from package) */
    onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}