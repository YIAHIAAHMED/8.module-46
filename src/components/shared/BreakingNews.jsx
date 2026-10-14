import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: 1,
        title: "Artificial Intelligence in 2026",
        slug: "ai-in-2026",
        description: "Discover how AI is transforming everyday life and industries in 2026.",
        author: "John Doe",
        publishedAt: "2026-06-06",
        image: "https://example.com/images/ai.jpg",
        category: "Technology"
    },
    {
        id: 2,
        title: "The Future of Web Development",
        slug: "future-of-web-dev",
        description: "Learn about the upcoming trends in React, Next.js, and modern UI design.",
        author: "Jane Smith",
        publishedAt: "2026-06-05",
        image: "https://example.com/images/web.jpg",
        category: "Programming"
    },
    {
        id: 3,
        slug: "global-climate-summit",
        title: "Global Climate Summit Begins",
        description: "World leaders gather to discuss renewable energy and sustainable solutions.",
        author: "Alex Johnson",
        publishedAt: "2026-06-04",
        image: "https://example.com/images/climate.jpg",
        category: "Environment"
    }
];


const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-1 items-center bg-gray-200 text-black container mx-auto'>
            <button className='btn bg-pink-400 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100} >
               {news.map(n =>
                <span key={n.id}>{n.title} </span>
               )}
            </Marquee>
        </div>
    );
};

export default BreakingNews;