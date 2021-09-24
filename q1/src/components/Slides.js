import React, {useState} from 'react';

function Slides({slides}) {

    const [index , setIndex] = useState(0);
    const {title, text} = slides[index];
    const [disable , setDisable] = useState(0);
    const length = slides.length;
    // console.log(length);
    const checkIndex = (index) =>{
        if(index>length-1){
            return 0
        }
        else if (index<0){
            return length-1;
        }
        else
            return index
    }

    const prevButton = () =>{
        // console.log('prev')
        setDisable(disable => {
            let newDisable = disable-1;
            return setDisable(newDisable)
        });
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkIndex(newIndex)
        })
    }

    const nextButton = () =>{
        // console.log('next')
        setDisable(disable => {
        let newDisable = disable+1;
        return setDisable(newDisable)
        });
        // console.log(disable);
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkIndex(newIndex)
        })
    }
    const restartButton = () =>{
        // console.log('restart')
        setDisable(0)
        setIndex(0);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restartButton} disabled={disable === 0 ? true : false}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={prevButton} disabled={disable <= 0 ? true : false}>Prev</button>
                <button data-testid="button-next" className="small" onClick={nextButton} disabled={disable >= length-1 ? true : false}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>
            </div>
        </div>
    );

}

export default Slides;
