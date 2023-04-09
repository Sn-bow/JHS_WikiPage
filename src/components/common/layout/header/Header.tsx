import * as S from './Header.styled'



const Header = () => {
    return (
        <S.Wrapper>
            <S.Link href='/'>
                <S.WiKiLogo>Wiki Page</S.WiKiLogo>
            </S.Link>
        </S.Wrapper>
    )
}


export default Header

