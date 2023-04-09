import * as S from './WIkiMain.styled'
import { v4 as uuidV4 } from 'uuid'
import { IWikiMainUiPropsType } from './WikiMain.type'

const WikiMainUI = (props: IWikiMainUiPropsType) => {
    const { pagiNationNum, paginationHandler, pagiNextCountHandler, pagiPrevCountHandler, listData, pagiCount, lastPage } = props
    return (
        <S.Main>
            <S.Section>
                {
                    listData?.map(el =>
                    (
                        <S.ListItemLink to={`/detail/${el.id}`} key={uuidV4()}>
                            <S.ListItem
                            >
                                <S.ListText>{el.title}</S.ListText>
                                <S.SubListText>{el.subtitle}</S.SubListText>
                            </S.ListItem>
                        </S.ListItemLink>
                    )
                    )
                }
            </S.Section>
            <S.PaginationSection>
                <S.PagiPrevCount onClick={pagiPrevCountHandler}>이전</S.PagiPrevCount>
                <S.PagiNumContain>
                    {pagiNationNum.map((_, index) =>
                        index + pagiCount <= lastPage
                        &&
                        (
                            <S.PagiNum
                                key={uuidV4()}
                                id={(index + pagiCount).toString()}
                                onClick={paginationHandler}
                            >
                                {index + pagiCount}
                            </S.PagiNum>
                        ))}
                </S.PagiNumContain>
                <S.PagiNextCount onClick={pagiNextCountHandler}>다음</S.PagiNextCount>
                <S.WriteButtonLink to={'/write/create'}>
                    <S.ConfirmButton>등록하기</S.ConfirmButton>
                </S.WriteButtonLink>
            </S.PaginationSection>
        </S.Main>
    )
}

export default WikiMainUI