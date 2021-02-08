import React from 'react'

const img1 = "https://picsum.photos/200/200"
const img2 = "https://picsum.photos/210/200"
const img3 = "https://picsum.photos/220/200"
const link = "https://picsum.photos"
const ranImg = "Random Image"

function Pictures(){
    return (
        <>
        <a href = {link} target = "#">
            <div className = "img_div">
                <img src = {img1} alt = {ranImg}/>
                <img src = {img2} alt = {ranImg}/>
                <img src = {img3} alt = {ranImg}/>
            </div>
        </a>
        </>
    )
}

export default Pictures