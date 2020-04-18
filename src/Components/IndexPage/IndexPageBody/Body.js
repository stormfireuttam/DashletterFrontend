import React from 'react';
import Img1 from '../../../Assets/1tile.png';
import Img2 from '../../../Assets/2tile.png';
import Img3 from '../../../Assets/3tile.png';
import Img4 from '../../../Assets/4tile.png';
import {Content, Contents} from './Content/index';
import './Body.css';

const Body = (props) => {
  return(
    <div className="content">
        {/* 1st row */}
      <div className="largeImage" style={{backgroundImage: 'url(' + Img1 + ')'}}></div>
      <div className="firstblock text"><Content link = "/user" exact="true"/></div>
        {/* other rows */}
      <div className="alt1">
        <div className="text"><Contents title="One platform for all newsletters" bg='#f2f2f2'/></div>
        <div style={{backgroundImage: 'url(' + Img2 + ')', backgroundSize:'contain'}}></div>
      </div>
      <div className="alt2">
        <div style={{backgroundImage: 'url(' + Img3 + ')', backgroundSize: 'cover', margin: 10 + '% ' + 8 + '%'}}></div>
        <div className="text" ><Contents title="We organize newsletter even better"/></div>
      </div>
      <div className="alt1">
        <div className="text"><Contents title="Added security from spamming" bg='#f2f2f2'/></div>
        <div style={{backgroundImage: 'url(' + Img4 + ')', backgroundSize:'cover', margin: 10 + '% ' + 6 + '%'}} ></div>
      </div>
    </div>
  );
  }

export default Body;