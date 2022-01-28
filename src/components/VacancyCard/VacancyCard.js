import React from 'react';
import classNames from 'classnames';
import { Widget } from "@uploadcare/react-widget";
import "./VacancyCard.scss"
import vacancyCardHeader from "../../assets/img/vacancyCardHeader.png"
import applyImg from "../../assets/img/apply.png"
import dislikeImg from "../../assets/img/dislike.png"
import dislikeSelectedImg from "../../assets/img/dislike-selected.png"
import starImg from "../../assets/img/star.png"
import starSelectedImg from "../../assets/img/star-selected.png"

function VacancyCard({vacancy}) {
  const [dislikeActive, setDislikeActive] = React.useState(false)
  const [starActive, setStarActive] = React.useState(false)

  const handleClickStar = () => {
    setStarActive(!starActive)
  }

  const handleClickDislike = () => {
    setDislikeActive(!dislikeActive)
  }


  const fileTypeLimit = (allowedFileTypes) => {
    const types = allowedFileTypes.split(' ')
  
    return function(fileInfo) {
      if (fileInfo.name === null) {
        return
      }
      const extension = fileInfo.name.split('.').pop().toLowerCase()
  
      if (extension && !types.includes(extension)) {
        alert("Sorry. Only img, png, svg")
        return
      }
    }
  }
  
  const validators = [fileTypeLimit('img svg png')];
    
  

  return <div className = {classNames("vacancy-card", {'halfOpacity': dislikeActive})}>
          <img className="vacancy-card-header" src={vacancyCardHeader} alt="card header" />
          <div className='card-info'>
            { dislikeActive 
            ? 
            <div className='status-label blackLabel'>
                    <span className='status-label-text'>Неинтересная</span>
                   </div>
            : 
            <div className='status-label redLabel'>
                    <span className='status-label-text'>Новая</span>
                   </div>}
            <div className='vacancy-name-and-image'>
              <b>{vacancy.name}</b>
              <img src={vacancy.imageURL} alt="company" />
            </div>
            <div className='salary'>
              {vacancy.salary}
            </div>
            <div className='companyNameAndLocation'>
              <span className='red'>{vacancy.companyName}</span> <span>{vacancy.location}</span>
            </div>
            <div className='benefits'>
              {vacancy.benefits ? vacancy.benefits.map(benefit => <span key={benefit}>{benefit}</span>) : <div className='fatDiv'>  </div>}
            </div>
            <div className='card-footer'>
              <div className='footerInfo'>
                <img className='apply' src={applyImg} alt="apply" />
                {/* <div {...getRootProps()}>
                  <input {...getInputProps()} /> */}
                    <b className='bold'>Откликнутся: </b>
                    <Widget validators={validators} publicKey="949ca8c8ab9b0a116b78" />;
                 
                <div onClick={handleClickStar}>
                  {
                    starActive ? <img src={starSelectedImg} alt="favorite" /> : <img src={starImg} alt="favorite" />
                  }
                </div>
                <div onClick={handleClickDislike}>
                  {
                    dislikeActive ? <img src={dislikeSelectedImg} alt="dislike" /> : <img src={dislikeImg} alt="dislike" />
                  }
                </div>
              </div>
              <div className='timeAgo'>
                {vacancy.timeAgo}
              </div>
            </div>
          </div>
        </div>;
}

export default VacancyCard;
