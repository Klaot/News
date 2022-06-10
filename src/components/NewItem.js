
import { useSelector } from "react-redux";

 const NewsItem = () => {
    let name = useSelector((state) => state.user)
    
    return (
        <>
            <div className="containerNewItem">
                <h1>{name.title}</h1>
                <h2>{name.author}</h2>
                <p>{name.content}</p>
                <p>{name.description}</p>
                <p>{name.publishedAt}</p>
                <a id='a' href={name.url}><span><b>Full info:</b></span> {name.url}</a>
            </div>
            
        </>
    )
}

export { NewsItem} ;