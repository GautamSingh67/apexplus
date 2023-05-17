import React from 'react'
import { Nav } from '../Navbar/Nav'
import { Link } from 'react-router-dom'
import style2 from './style2.module.css'
import style from '../AddScenario/style.module.css'

export function AddVehicle() {
    

  return (
    <div className='layout'>
      <Nav />
      <div className='layout1'>
        <div className={style2["parent-div"]}>
          <h3 style={{color: "#f5f5f5c7"}}>Vehicle / add</h3>
          <h1 style={{color: "#f5f5f5c7"}}>Add Vehicle</h1>
          <form>
            <div className={style2["form-div1"]}>
              <div className={style2["layout2"]}>
                <div>
                  <label htmlFor='s-list'>Scenarios List</label><br />
                  <select id='s-list' className={style2["input"]}>
                    <option>Select Scenario</option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
                <div>
                  <label htmlFor='v-name'>Vehicle Name</label><br />
                  <input type='text' id='v-name' className={style2["input"]} />
                </div>
                <div>
                  <label htmlFor='speed'>Speed</label><br />
                  <input type='number' id='speed' className={style2["input"]} />
                </div>
              </div>

              <div className={style2["layout3"]}>
                <div>
                  <label htmlFor='position-x'>Position X</label><br />
                  <input type='number' id='position-x' className={style2["input"]}/>
                </div>
                <div>
                  <label htmlFor='position-y'>Position Y</label><br />
                  <input type='number' id='position-y' className={style2["input"]}/>
                </div>
                <div>
                  <label htmlFor='direction'>Direction</label><br />
                  <select id='direction' className={style2["input"]}>
                    <option>Select Direction</option>
                    <option value="Towards">Towards</option>
                    <option value="Backward">Backward</option>
                    <option value="Upwards">Upwards</option>
                    <option value="Downwards">Downwards</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{marginTop:"4%"}}>
              <button type='button' className={style["add"]}>Add</button>
              <button type='reset' className={style["reset"]}>Reset</button>
              <Link to="/home" className={style["go-back"]}>Go Back</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
