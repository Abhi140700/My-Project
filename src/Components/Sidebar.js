import React from 'react'
import { categories } from './constants'

// const selectedCategory = 'New';

const Sidebar = (props) => {
  return (
    <div className='d-flex flex-column pe-3' style={{overflow : "scroll"}}>
        {categories.map((category)=>{
            return(
                <button className='category-btn' style={{background : category.name === props.selected && '#fc1503' , color :'white' }} key={category.name} onClick={() =>{
                  props.setSelected(category.name)
                }}>
                    <span style={{color : category.name === props.selected ? 'white' : ' red'}} className='pe-3'>{category.icon}</span>
                    <span style={{opacity : category.name === props.selected ? '1' : '0.8'}}>{category.name}</span>
                </button>
            );
        })}
    </div>
  )
}

export default Sidebar