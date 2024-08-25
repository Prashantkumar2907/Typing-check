import React from 'react'

const TypingColor = (props) => {

    const renderTextWithColors = () =>{
        return props.generatedText.split('').map((char,index)=>{
            let color
            if(index<props.userInput.length){
                color = char === props.userInput[index] ? 'green':'red'
            }

            return (
                <span key={index} style={{color:color}}>
                    {char}
                </span>
            )
        })
    }
  return (
    <div>
       {renderTextWithColors()}
    </div>
  )
}

export default TypingColor
