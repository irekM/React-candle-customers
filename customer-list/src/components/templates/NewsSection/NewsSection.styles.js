import styled from "styled-components";

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 /3;
  border-left: 1px solid ${({theme}) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h3`
margin-right: auto;
color: ${({theme}) => theme.colors.darkPurple};
`;

export const ArticleWrapper = styled(viewWrapper)`
margin: 30px 0;
width: 100%;
max-width: unset;
border-radius: 12px;
color: ${({theme}) => theme.colors.darkGray};

p{
  line-height: 1.6;
}
`;

export const TitleWrapper = styled.dic`
h3 {
  margin: 0;
  font-size: ${({theme}) => theme.fontSize.xl};
}

p {
  margin: 0;
  font-size: ${({theme}) => theme.fontSize.l};
}
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    margin-left: 35px;
    height: 200px;
    object-fit: cover;
  }
`;