import React, {useEffect, useState} from "react";
import "./styles/news_page_style.css";
import Container from "react-bootstrap/Container";
import "./styles/about_page_style.css";
import styled from "styled-components";
import NewsPageComponent from "./news-page-component";
import {getNews} from "../../services/news-services";

const NewsPage = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loadingNewsItems, setLoadingNewsItems] = useState(true);

    useEffect(() => {
        const getNewsItems = async () => {
            const newsItemsData = await getNews();
            setNewsItems(newsItemsData.data);
            setLoadingNewsItems(false);
        };

        getNewsItems();
    }, []);
    if (loadingNewsItems) {
        return <>Loading...</>;
    }
    console.log(newsItems.length);
    return (
        <Container>
            <br/>
            {
                newsItems.map(item => (
                    <NewsPageComponent news={item} key = {item.id}/>
                ))
            }


        </Container>
    );
};

const DescriptionComponent = styled.div`
  text-align: justify;
  text-justify: inter-word;
`;

const SectionTitle = styled.h5`
  padding-bottom: 20px;
`;

export default NewsPage;
