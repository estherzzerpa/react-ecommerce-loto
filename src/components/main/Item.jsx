import React from 'react'
import styled from 'styled-components'
import { colors } from '../styled-components/global/Styled-App'
import { Button } from './styled/StyleMain'

const CardProducts = styled.article`
        width: 30%; 
        min-width: 300px;
        transition: .5s all ease;
        background-color: #cdae94 ;
        overflow: hidden;
        margin: 5px;
        color: ${colors.text};

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            button{
                width: 100%;
                height: 30px;
                background-color: ${colors.primary};
                border: none;
                color: ${colors.text};
                font-weight: bolder;
                cursor: pointer;
                transition: .5s all ease;
                &:hover{
                    background-color: ${colors.btnHover};
                }
            }
        }
    `
    const InfoCard = styled.div`
        width: 100%;
        overflow: hidden;
        position: relative;
        height:400px;
        background-color: beige;
        h2{
            position: absolute;
            top: 80%;
            left: 10%;
            color: ${colors.primary};
        }
    `
    const ImgProduct = styled.img`
        
        width:100% ;
        min-width: 300px;
        cursor: pointer;
        transition: .5s all;
       
        &:hover{
            transform: scale(1.1);
        }
    `

const Item = ({product}) => {

    console.log(product)
    
  return (
    <CardProducts className="card w-[22%] h-[30%]  min-w-[240px] transition-all m-4 hover:shadow-xl">

        <InfoCard className='overflow-hidden relative'>
            
            <ImgProduct width={300} className='w-[100%] min-w-[280px] cursor-pointer  bg-center hover:scale-[1.1] transition-all' src={product.image} alt="" />
            <h2 className='absolute top-[90%] left-[35%] text-white uppercase font-bold'>{product.category}</h2>

        </InfoCard>

        <div className='flex flex-col justify-between items-center h-[40%] px-2 py-1 bg-white'>

                <p>${product.price}</p>
                {/* LLAMAR AL CALL BACK */}

                <button href="#" className='bg-ochre-700 text-white py-1  px-2 uppercase'>COMPRAR</button>

        </div>
    </CardProducts>
  )
}

export default Item