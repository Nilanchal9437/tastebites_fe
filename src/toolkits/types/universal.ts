export enum severityType {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}

export declare interface SnackBarType {
  open: boolean;
  message: string;
  severity: severityType;
}
declare interface universalType extends SnackBarType {
  loading: boolean;
}

export default universalType;
