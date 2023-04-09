import { IAllTitleNameData, IItemDataType, ILinkType } from '../../units/wiki-detail/WikiDetail.type';
import * as S from '../../units/wiki-detail/WikiDetail.styled';
import { v4 as uuidV4 } from 'uuid'
import React from 'react';

// 전체 라이브러리로 사용할 경우 타입들을 제네릭 타입으로 바꿔서 사용
export const renderContentWithLinks = (itemData?: IItemDataType, allTitleNameData?: IAllTitleNameData[]) => {
  if (!itemData || !allTitleNameData) {
    return null;
  }
  const content = itemData.content;
  let currentIndex = 0;
  const links: ILinkType[] = [];
  allTitleNameData.forEach(titleData => {
    const title = titleData.title;
    const regex = new RegExp(`${title}`, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      const index = match.index;
      const link = (
        <S.TitleLink to={`/detail/${titleData.id}`} key={uuidV4()}>
          {title}
        </S.TitleLink>
      );
      links.push({
        startIndex: index,
        endIndex: index + title.length,
        link: link,
      });
    }
  });
  links.sort((a, b) => a.startIndex - b.startIndex);
  return (
    <>
      {links.map((linkData, i) => {
        const text = content.slice(currentIndex, linkData.startIndex);
        currentIndex = linkData.endIndex;
        return (
          <React.Fragment key={i}>
            {text}
            {linkData.link}
          </React.Fragment>
        );
      })}
      {content.slice(currentIndex)}
    </>
  );
};
