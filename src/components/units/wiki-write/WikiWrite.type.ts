export interface IFormDataType {
  title: string;
  subtitle: string;
  content: string;
}

export interface IDefaultDataType {
  title: string;
  subtitle: string;
  content: string;
}

export interface IWikiWriteUIPropsType {
  getId: string;
  onChangeHandler: (formDataKey: string, formDataValue: string) => void;
  defaultData?: IDefaultDataType;
  confirmHandler: (id: number) => void;
}
