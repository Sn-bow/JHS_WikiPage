export interface IItemDataType {
  id: number;
  title: string;
  subtitle: string;
  content: string;
}

export interface IAllTitleNameData {
  id: string;
  title: string;
}

export interface ILinkType {
  startIndex: number;
  endIndex: number;
  link: JSX.Element;
}

export interface IWikiDetailUIPropsTyep {
  itemData?: IItemDataType;
  getId: string;
  allTitleNameData?: IAllTitleNameData[];
}
