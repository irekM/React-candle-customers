import React, {useState, useEffect} from "react";
import { NewsSectionHeader, TitleWrapper, Wrapper } from 'components/templates/NewsSection/NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';
 


export const query = `
{
    allArticles {
        id
        title
        category
        content
        image {
          url
        }
      }
    }
    `;


const NewsSection = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    useEffect(()=> {
        axios
        .post(
            'https://graphql.datocms.com/', 
        {
            query,
        },
         {
            headers: {
                authorization: `Bearer ${proces.env.REACT_APP_DATOCMS_TOKEN}`,
            },
        }
        )
        .then(({data: {data}}) => {
             setArticles(data.allArticles);
        })
        .catch(() => {
            setError('Sorry we couldnt load articles')
        });
    }, []);



    return (
        <Wrapper>
            <NewsSectionHeader>News from clients</NewsSectionHeader>
            {article.length > 0 ? (
                article.map(({id, title, category, content, image = null}) => (                 <ArticleWrapper key={id}>
                <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
                </TitleWrapper>
                <ContentWrapper>
                <p>{content}</p>
                {image ? <img src ={image.url} alt="article image" /> : null};
                </ContentWrapper>
                <Button isBig>Click me</Button>
            </ArticleWrapper>
            )) 
            ): ( <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
            )}
                    
        </Wrapper>
    );
};

export default NewsSection;