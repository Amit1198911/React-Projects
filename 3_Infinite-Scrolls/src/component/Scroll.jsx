import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Scroll = () => {
    const [images, setImages] = useState([]);
    const [pages, setPages] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchImages = async () => {
        try {
            const response = await axios.get(
                `https://picsum.photos/v2/list?page=${pages}&limit=10`
            );
            if (response.data.length === 0) {
                setHasMore(false);
            } else {
                setImages((prevImages) => [...prevImages, ...response.data]);
            }
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, [pages]);

    const fetchMoreData = () => {
        setPages((prevPage) => prevPage + 1);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Infinite Scroll of Images</h1>
            <InfiniteScroll
                dataLength={images.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
                endMessage={<p>No more images to load</p>}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "10px",
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.download_url}
                            alt={`Image by ${image.author}`}
                            style={{ width: "100%", borderRadius: "8px" }}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Scroll;
