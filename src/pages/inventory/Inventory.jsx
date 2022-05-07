import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { BiTrashAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../config'
import axios from 'axios'

const Inventory = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get(`${API_URL}/inventory`)
      setItems(data.items)
      console.log(data.items)
    }

    fetchItems()
      .catch(console.error)
  }, [])

  return (
    <div>
      <Container className='py-20'>
        <h1 className='text-3xl font-bold text-center mb-10'>Manage Inventory</h1>

        <table className='table-auto w-full text-left rounded-lg overflow-hidden'>
          <thead className='bg-black text-white'>
            <tr>
              <th className='px-5 py-3'>SL.</th>
              <th className='px-5 py-3'>Name</th>
              <th className='px-5 py-3'>Supplier</th>
              <th className='px-5 py-3'>Stock</th>
              <th className='px-5 py-3'>Manage</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => {
              return (<tr key={item._id} className='odd:bg-zinc-200'>
                <td className='px-5 py-2'>{index + 1}</td>
                <td className='px-5 py-2'>{item.title}</td>
                <td className='px-5 py-2'>{item.brand}</td>
                <td className='px-5 py-2'>{item.quantity ? 'In Stock' : 'Out Of Stock'}</td>
                <td className='flex flex-wrap gap-2 items-center pl-5 py-2'>
                  <div className='p-2 bg-red-400 text-white text-xl rounded-full cursor-pointer'>
                    <BiTrashAlt />
                  </div>
                  <Link className='p-2 bg-indigo-400 hover:bg-indigo-500 rounded-md text-white' to={`/inventory/${item._id}`}>Manage</Link>
                </td> 
              </tr>)
            })}
          </tbody>
        </table>
      </Container>
    </div>
  )
}

export default Inventory