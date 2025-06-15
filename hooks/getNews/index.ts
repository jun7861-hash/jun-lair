import { useState, useEffect } from 'react';

import { News } from '@/hooks/getNews/types';

const newsUrl = 'https://newsapi.org' as const;

const useGetNews = () => {
  const [data, setData] = useState<News>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `${newsUrl}/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEXT_PUBLIC_NEWS}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { data, isLoading };
};

export default useGetNews;
