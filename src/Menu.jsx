import React from 'react'
import "./menu.scss"
import {Meal01, Meal02, Meal03, Meal04, Meal05, Meal06, Meal07, Meal08, Meal09, Meal10, Meal11, Meal12 , Meal13, Meal14, Meal15, Meal16} from "./MenuImg"
export const Menu = () => {

    const Btn = [
        {
            id : 1,
            name: "1-taomlar"
        },
        {
            id : 2,
            name: "2-taomlar"
        },
        {
            id : 3,
            name: "Salatlar"
        },
        {
            id : 4,
            name: "Ichimliklar"
        }
    ]



    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handleBtn = (e)=>{
      e.preventDefault();  
    }
  return (
    <div className='container menu'>
        <div className='menu__btn'>
            <h2>Menyu</h2>
            <div className='buttons'>
              {
                Btn.map((btn)=>(
                   <form onSubmit={(e)=>handleSubmit} key={btn.id}>
                     <button onClick={(e)=>handleBtn}>{btn.name}</button>
                   </form>
                ))
              }
            </div>

            <div>
            </div>
        </div>
        <div className='food__wrapp'>
        <div className='food__box'>
                <img src={Meal01} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal02} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal03} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal04} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal05} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal06} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal07} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal08} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>

        <div className='food__box'>
                <img src={Meal09} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal10} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal11} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        <div className='food__box'>
                <img src={Meal12} alt="" />
                <p>Kichik qiyma 20000</p>
                <div className='food__price'>
                  <span>1 dona</span>
                  <span>20000 so'm</span>
                </div>
        </div>
        </div>

    </div>
  )
}
