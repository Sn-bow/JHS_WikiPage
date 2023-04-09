import * as S from './Footer.styled'

const Footer = () => {

    return (
        <S.Wrapper>
            <S.SectionBox>
                <div>
                    참조 : 본 위키 페이지는 데모용으로 제작되었으며, 상권용이 아님을 명시하며 제작 되었습니다.
                </div>
                <S.InformationContain>
                    <S.InformationBox>
                        <S.Title>제작</S.Title>
                        <S.Content>
                            <li>정현석</li>
                            <li>Jeong Hyeon Seok</li>
                        </S.Content>
                    </S.InformationBox>
                    <S.InformationBox>
                        <S.Title>도움</S.Title>
                        <S.Content>
                            <li>React</li>
                            <li>Emotion</li>
                        </S.Content>
                    </S.InformationBox>
                    <S.InformationBox>
                        <S.Title>주소</S.Title>
                        <S.Content>
                            <li>hyeonseok45@gmail.com</li>
                        </S.Content>
                    </S.InformationBox>
                </S.InformationContain>
            </S.SectionBox>
        </S.Wrapper>
    )
}


export default Footer