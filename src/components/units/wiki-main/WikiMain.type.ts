import { MouseEvent } from 'react';

export interface IListDataType {
  id: number;
  title: string;
  subtitle: string;
  content: string;
}

export interface IWikiMainUiPropsType {
  pagiNationNum: number[];
  paginationHandler: (e: MouseEvent<HTMLSpanElement>) => void;
  pagiNextCountHandler: () => void;
  pagiPrevCountHandler: () => void;
  listData?: IListDataType[];
  pagiCount: number;
  lastPage: number;
}
