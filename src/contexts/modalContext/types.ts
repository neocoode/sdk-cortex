
export interface IModalContextType {
  onClose: () => void;
  onOpen: (content: React.FC, props?: IOpenModalProps) => void;
}

export interface IModalProviderProps {
  children: React.ReactNode;
}

export interface IOpenModalProps {
  onClose?: () => void;
}

export interface IOpenModal {
  Content: React.FC;
  props: IOpenModalProps;
}