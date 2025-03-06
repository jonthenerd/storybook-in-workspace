import { Button, ButtonProps} from "@jonthenerd/ui";

export interface ExtendedButtonProps extends ButtonProps {
    /** This is a title (from extended button) */
    title: string;
}

export function ExtendedButton(props: ExtendedButtonProps) {
  return (
    <div title={props.title}>
        <Button {...props} />
    </div>
  );
}