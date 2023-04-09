import * as S from './WikiWrite.styled'
import { IWikiWriteUIPropsType } from './WikiWrite.type'


const WikiWriteUI = (props: IWikiWriteUIPropsType) => {
    const { getId, onChangeHandler, defaultData, confirmHandler } = props
    return (
        <S.Main>
            {getId === 'create' ? <h1>등록하기</h1> : <h1>수정하기</h1>}
            <S.Section>
                <S.InputStyleBox>
                    <S.StyleBox>
                        <S.TitleLabel htmlFor='title'>제목</S.TitleLabel>
                        <S.TitleInput type='text' id='title' onChange={(e) => onChangeHandler(e.target.id, e.target.value)} defaultValue={defaultData?.title} />
                    </S.StyleBox>
                </S.InputStyleBox>
                <S.InputStyleBox>
                    <S.StyleBox>
                        <S.SubTitleLabel htmlFor='subtitle'>부제목</S.SubTitleLabel>
                        <S.SubTitleInput type='text' id='subtitle' onChange={(e) => onChangeHandler(e.target.id, e.target.value)} defaultValue={defaultData?.subtitle} />
                    </S.StyleBox>
                </S.InputStyleBox>
                <S.InputStyleBox>
                    <S.StyleBox>
                        <S.TitleLabel htmlFor='content'>내용</S.TitleLabel>
                        <S.ContentInput id='content' onChange={(e) => onChangeHandler(e.target.id, e.target.value)} defaultValue={defaultData?.content} />
                    </S.StyleBox>
                </S.InputStyleBox>
                <S.ButtonBox>
                    <S.CancelButtonLink to={getId === 'create' ? '/' : `/detail/${getId}`}>
                        <S.CancelButton>취소하기</S.CancelButton>
                    </S.CancelButtonLink>
                    {getId === 'create' ? <S.ConfirmButton onClick={() => confirmHandler(Number(getId))}>등록하기</S.ConfirmButton> : <S.ConfirmButton onClick={() => confirmHandler(Number(getId))}>수정하기</S.ConfirmButton>}
                </S.ButtonBox>
            </S.Section>
        </S.Main>
    )
}

export default WikiWriteUI