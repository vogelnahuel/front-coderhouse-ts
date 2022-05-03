export type NotificationStateType = {
    open?: boolean;
    level: any;
    title: string;
    body: string;
    onCloseLabel?: string;
    onClickLabel?: string;
    onClick?: Function;
    onClose?: Function;
  };