import * as S from '../WikiDetail.styled'
import { IWikiAnotherInforPropsType } from './WikiAnotherInfor.type'
import { v4 as uuidV4 } from 'uuid'

const WikiAnotherInfor = (props: IWikiAnotherInforPropsType) => {
    const { allTitleNameData, getId } = props
    return (
        <S.AnatherInfor>
            <h2>다른 정보</h2>
            <S.TitleBox>
                {allTitleNameData?.map(el => (
                    Number(el.id) !== Number(getId)
                    &&
                    <S.AnotherTitleLink to={`/detail/${el.id}`} key={uuidV4()}>
                        <S.TitleItem>{el.title}</S.TitleItem>
                    </S.AnotherTitleLink>
                ))}
            </S.TitleBox>
        </S.AnatherInfor>
    )
}

export default WikiAnotherInfor