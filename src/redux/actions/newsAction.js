export const FETCH_ARTICLES='FETCH_ARTICLES';
export const TOGGLE_FAVORITES ='TOGGLE_FAVORITES';

export const fetchArticles=()=>{
    return async dispatch => {

        //logic to fetch data
      const result= await  fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=*******');
      
      const resultData=await result.json();

        dispatch({
           type:FETCH_ARTICLES,
            payload:resultData
        });
       
    }
}
export const toogleFavorites=url=>{
return{
    type:TOGGLE_FAVORITES,
    payload:url
}
}
