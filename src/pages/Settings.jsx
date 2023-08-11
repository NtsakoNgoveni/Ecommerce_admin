import React from 'react'

const Settings = () => {
  return (
    <div>
        <h1>Settings</h1>
        <br />
        <label htmlFor="settings_featured_product"></label>
        <select name="settings_featured_product" id="">
            <option value={''}>{'Macbook 14 pro'}</option>
        </select>
        <label htmlFor="settings_shipping_price"></label>
        <input type="number" name="settings_shipping_price" id="" />
    </div>
  )
}

export default Settings;
