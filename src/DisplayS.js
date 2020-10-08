import React  from "react";
import styled from 'styled-components'



const DivName = styled.div`

 img { 

     border-radius: 50%;
     width: 70%;

 }
    

h1 {

    color: ${pr => pr.theme.primaryColor};
    font-size: ${pr => pr.theme.fonts.h1};
    &:hover {
      color: ${pr => pr.theme.fourthColor};
    }

}

p{
    font-size: ${pr => pr.theme.fonts.p};
    font-weight: ${pr => pr.theme.fonts.bold};
    background-color: ${pr => pr.theme.thirdColor};
}


`








function displayHeader(props) {

    const { imgInfo, title, copyright, date, imageDesc } = props;
    return (
        <DivName>
            <img src={imgInfo} alt='Space'></img>
            <h1>{title}</h1>
            <p>Date:{date}</p>
            <p>{imageDesc}</p>
            <p className='copyright'>Copyright: {copyright}</p>

            <button>Close</button>
        </DivName>

    );
}



export default displayHeader