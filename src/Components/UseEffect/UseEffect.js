import React, {useState, useEffect} from "react";

const UseEffect = () => {

    const [posts, setPosts] = useState([]);
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const getPostsFromAPI = async () => {
            try {
                let postsFromAPI = await fetch('https://jsonplaceholder.typicode.com/posts');
                let postsParsed = await postsFromAPI.json();
                setPosts(postsParsed);
            }
            catch(err) {
                console.log(err);
            }
        }
        getPostsFromAPI();
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        }
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        console.log('added')
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            console.log('removed')
        }
    }, []) 

    return (
        <div className="UseEffect">
            <p>{width}</p>
            <ul className="posts">
                {posts.map((post, index) => {
                    return <li className="post" key={index}>{post.title}</li>
                })}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default UseEffect;