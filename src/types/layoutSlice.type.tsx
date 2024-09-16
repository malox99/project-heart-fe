export interface ILayoutInitial {
  selectedRoute: string;
  showSpinner: boolean;
  toast: {
    show: boolean,
    message: string,
    status: 'success' | 'error'
  }
}
