import React from 'react';
import '../styles/News_card.css'
const News_card = (props) => {
    return(
        <>
        <div className="card">
            <div className="card-content">
             <h5><i className="fas fa-newspaper"></i>{props.publisher}</h5>
              <a href='https://www.google.com/search?rlz=1C1UEAD_enIN930IN930&biw=1366&bih=625&tbm=nws&sxsrf=ALeKk01lPJN_a0lZwVq1BoI8rwwdVDvaYQ%3A1607841553175&ei=EbfVX7qkCsaT4-EP286TmAI&q=two+wheeler+&oq=two+wheeler+&gs_l=psy-ab.3..0l10.39314.39314.0.41006.1.1.0.0.0.0.196.196.0j1.1.0....0...1.1.64.psy-ab..0.1.194....0.8qN7oX1eqvQ'>
                <h3>{props.headline}</h3>
                <p>{props.des}</p>
                <img src={props.imgSrc} alt='img'/>
              </a>
            </div>
        </div>
        </>
    );
};

export default News_card;