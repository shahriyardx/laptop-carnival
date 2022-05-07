import React from 'react'
import Container from '../../components/Container/Container'
import { BiTrashAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const MyItems = () => {
  return (
    <div>
      <Container className='py-20'>
        <h1 className='text-3xl font-bold text-center mb-10'>My Items</h1>

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
            <tr className='odd:bg-zinc-200'>
              <td className='px-5 py-2'>1</td>
              <td className='px-5 py-2'>Macbook Pro 2022</td>
              <td className='px-5 py-2'>Apple</td>
              <td className='px-5 py-2'>In Stock</td>
              <td className='flex flex-wrap gap-2 items-center pl-5 py-2'>
                <div className='p-2 bg-red-400 text-white text-xl rounded-full cursor-pointer'>
                  <BiTrashAlt />
                </div>
                <Link className='p-2 bg-indigo-400 hover:bg-indigo-500 rounded-md text-white' to='/inventory/1'>Manage</Link>
              </td> 
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  )
}

export default MyItems