import styled from 'styled-components'

export const Container = styled.section`
    margin: auto;
    display: block;
    background-color: rgb(35, 31, 58);
    color: #fff;
    height: 465px;
    width: 300px;
    padding: 5px;
`

export const PersonalArea = styled.div`
    background-color: rgb(35, 31, 58);
`

export const Category = styled.p`
    background-color: yellow;
    color: black;
    height: 20px;
    width: 90px;
`

export const Img = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-left: 100px;
    border-style: groove;
    padding: 3px;
    border: 1px solid transparent;
    border-color: rgb(255, 255, 0);
`
export const Name = styled.p`
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
`

export const City = styled.p`
    text-align: center;
    font-size: 12px;
    margin-top: -15px;
`

export const Job = styled.p`
    text-align: center;
`

export const ButtonArea = styled.div`
    margin-left: 85px;
`

export const Button = styled.button`
    padding: 8px;
    color: rgb(35, 31, 58);
    background-color: rgb(4, 191, 203);

    &:last-of-type {
        color: black;
        background-color: rgb(31, 32, 56);
    }

    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }
`

export const SkillsArea = styled.p`
    background-color: rgb(31, 27, 54);
    height: 120px;
    width: 300px;
`
export const SkillsTitle = styled.p`
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 0;
    padding-left: 10px;
    padding-top: 10px;
`

export const SkillsContent = styled.div`
    background-color: #1f1b36;
    margin-top: 7px;

    & button{
        background-color: rgb(31, 27, 54);
        color: #fff;
        margin: 8px;
        border-color: rgb(4, 191, 203);
        border-width: 0.5px;
        padding: 3px;
        font-size: 12px;
    
    &:last-of-type {
        color: #fff;
    }
}
`
