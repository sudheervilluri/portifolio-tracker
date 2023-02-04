import React, { useState, useEffect } from 'react';

function StockTable({ stock }) {
    // ...existing state and form handling code from previous example...

    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=${stock}&apiKey=6efd6f5a77c34e59b873cd51cde599ce`, {
                headers: {
                    Referer: "http://localhost:3000/",
                    referer: "http://localhost:3000/",
                    origin: "http://localhost:3000/"
                }
            }
            );
            const data = await res.json();
            setNews(data.articles);
        }
        fetchNews();
    }, [stock]);

    return (
        <div>
            {/* ...existing form code from previous example... */}
            <table>
                {/* ...existing table code from previous example... */}
            </table>
            <h2>Latest {stock} News</h2>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StockTable;
