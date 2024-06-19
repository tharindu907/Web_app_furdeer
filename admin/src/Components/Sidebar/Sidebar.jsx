import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/add_product_icon.svg'
import list_product_icon from '../../assets/all_product_icon.svg'
import chart_icon from '../../assets/chart_icon.svg'
import footer_logo from '../../assets/logo.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
      </Link>
      <div className="sidebar-item">
          <img src={chart_icon} alt="" />
          <p>Charts</p>
        </div>
      <div className="footer">
          <img src={footer_logo} alt="" />
      </div>
    </div>
  )
}

export default Sidebar
