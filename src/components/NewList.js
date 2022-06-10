import React, { useEffect, useState } from 'react';
import deleteImg from '../img/delete.png';
import { useDispatch } from 'react-redux';
import { setNewsState } from '../store/features/news/newsSlice';
import '../components/NewList.css';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

let PAGE = 1;

const NewsList = (props) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const newNews = () => {
        PAGE++
        setLoading(false)
        onUpdateNews();
    }

    const lastNews = () => {
        if (PAGE === 1) {
          setLoading(true)
          onUpdateNews();
        } else {
          PAGE--
          setLoading(true)
          onUpdateNews();
        }   
    }
  
    const onDelete = (id) => {
       const newArr = items.filter(item => item.id !== id);
      setItems(newArr); 
    }
    
    function onUpdateNews() {
      fetch(`https://newsapi.org/v2/everything?q=education&page=${PAGE}&apiKey=c1ebcda8143d40af8c2485acd8b00833`)
        .then(res => res.json())
        .then(
          (result) => {
            let resultArticles = result.articles.map((item) => {
              return {...item, id: Math.random().toString(30).substr(2,9)}
            })
            setItems(resultArticles);
            setLoading(false);
          })
    }
    
    useEffect(() => {
      onUpdateNews();
    }, [])
  
    return (
      <div className='new-all-items-info'>
          {loading ? <Spinner /> : <View items={items} onDelete={onDelete} newNews={newNews} lastNews={lastNews}/>}
      </div>
    );
  }
  

  const View = ({items, onDelete, newNews, lastNews}) => {

    const dispatch = useDispatch()
    
    const itemInfo = (item) => {
      let itemStore = {
          id: item.id,
          title: item.title,
          author: item.author,
          description: item.description,
          url: item.url,
          publishedAt: item.publishedAt,
          content: item.content   
        }
        dispatch(setNewsState(itemStore));
    }
      
    return (
      <>
      <div className='new-all-items-info'>
        {items.map((item, i) => { 
            if ( i > 17) return;
            return (
              <div className='new-item containerTwo' key={item.id} onClick={(e) => itemInfo(item)}>
                    <Link to="/news/:title" className='new-item-info'>
                      <div>
                        <div className='news-item-img-block'>
                          <img className='new-item-img' src={item.urlToImage} alt='item.urlToImage.not.found'/>
                        </div>
                          <h2>{item.source.name}</h2>
                          <p className='p-link'>{item.description.slice(0,190)+'...'}</p>
                      </div>     
                    </Link>
                    <div className='new-item-footer'>
                        <p>{item.publishedAt}</p>
                        <button 
                          onClick={(e) => onDelete(item.id)}
                          className='delete-btn'
                          type="button"
                          ><img className='btn-img' src={deleteImg} alt='deleteImg'/></button>
                    </div>
                </div>)
              }
          )}
      </div> 
        <button className='containerTwo next-news-btn' onClick={() => lastNews()}>LAST NEWS</button>
        <button className='containerTwo next-news-btn' onClick={() => newNews()}>NEXT NEWS</button>
      </>
    )
  }

export default NewsList;