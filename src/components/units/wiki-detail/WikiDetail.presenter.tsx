import * as S from './WikiDetail.styled'
import { IWikiDetailUIPropsTyep } from './WikiDetail.type'
import { renderContentWithLinks } from '../../common/libraries/renderContentWithLinks'
import WikiAnotherInfor from './wiki-detail-another-information/WikiAnotherInfor'



const WikiDetailUI = (props: IWikiDetailUIPropsTyep) => {
    const { itemData, getId, allTitleNameData } = props
    return (
        <>
            <S.Main>
                <h1>내용</h1>
                <S.Section>
                    <S.StyleBox>
                        <S.Title>{itemData?.title}</S.Title>
                        <S.SubTitle>{itemData?.subtitle}</S.SubTitle>
                        <S.Content>
                            {renderContentWithLinks(itemData, allTitleNameData)}
                        </S.Content>
                    </S.StyleBox>
                    <S.CanCleLink to={'/'}>
                        <S.CanCleButton>메인으로 이동</S.CanCleButton>
                    </S.CanCleLink>
                    <S.ModifyLink to={`/write/${getId}`}>
                        <S.Modify>수정하기</S.Modify>
                    </S.ModifyLink>
                </S.Section>
            </S.Main>
            <WikiAnotherInfor
                allTitleNameData={allTitleNameData}
                getId={getId}
            />
        </>
    )
}

export default WikiDetailUI