import React from "react"
import { StyledCard ,Content , CardImage} from "./styled/Card.styled"

export const Card = (item) => {
    const {id,title,body,image} = item
    console.log(item)
    return(
        <StyledCard layout={id % 2 === 0 && "row-reverse"}>
            <div>
                <h2>{title}</h2>
                <Content>{body}</Content>
            </div>
            <CardImage src={`./images/${image}`}/>
        </StyledCard>
    )
}