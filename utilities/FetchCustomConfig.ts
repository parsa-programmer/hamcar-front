import { FetchError } from "ohmyfetch";
export default interface FetchCustomConfig {
    ignoreErrors?: boolean;
    onError?: (e: FetchError) => void;
    onValidationFailed?: (errors: Record<string, string>, e: FetchError) => void;
    setErrors?: (errors: { [key: string]: string }) => void;
    // transformer?: (data: any) => any;
    goToLogin?: boolean;
}