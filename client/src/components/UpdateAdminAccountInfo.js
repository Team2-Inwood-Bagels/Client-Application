import React from 'react'
import '../styles/styles.css'

function UpdateAccountInformation() {

    return (
        <div className='updateaccountinfo'>
            <div className='updateadmin_container'>
                <h1> Update Account Information </h1>
                <div className='updateadmin_acc'>
                    <div className='update_info'>
                        <div className='update_adminame'>
                            Update Employee Name: 
                            <input 
                                type="text"
                                className='update_adminame_textBox'
                                placeholder='Enter Employee Name'
                            />
                        </div>
                        <div className='update_adminemail'>
                            Update Email: 
                            <input 
                                type="text"
                                className='update_adminemail_textBox'
                                placeholder='Enter Employee Email'
                            />
                        </div>
                        <div className='update_adminfillin_dropdown'>
                            <div className='update_dropdown'>
                                Select Employee Role *
                                <select className="update_employee_roles">
                                    <option value="owner">Bussiness Owner</option>
                                    <option value="manager">Manager</option>
                                    <option value="associate">Associate</option>
                                </select>
                            </div> 
                        </div>
                    </div>
                </div>
                <button className='update_info_btn'>
                    Submit
                </button>                
            </div>
        </div>
    )
}

export default UpdateAccountInformation