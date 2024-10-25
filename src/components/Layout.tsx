import styled from "styled-components"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    )
}

export default Layout

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	
	width: 100%;

	margin-top: 5rem;
	color: black;
	background: white;
`