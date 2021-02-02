import styled from 'styled-components'

export const Container = styled.section`
    background-image: url('/images/cloud-background.png');
    background-repeat: no-repeat;
    background-color: hsl(234deg 32% 17%);
    color: #ffffff;
    padding: 1rem;
    margin: 0;
    text-align: center;
`

export const Image = styled.img`
    max-width: 202px;
    width: 100%;
`

export const Temperature = styled.div`
    font-weight: 700;
    font-size: 144px;
    line-height: 169px;
    color: #E7E7EB;
    padding-top: 87px;
`

export const WeatherName = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #A09FB1;
    padding: 87px 0;
`

export const DateSTtyle = styled.div`
    color: #A09FB1;
`

export const ExactDate = styled.p`
    font-size: 18px;
`

export const SVG = styled.svg`
    width: 14px;
`