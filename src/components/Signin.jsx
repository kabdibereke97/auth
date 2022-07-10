import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
       <div>
            <h1 className=' text-2xl font-bold py-2'>
               Sign in to your account
            </h1>
            <p className="py-2">
                Dont have  an account yet? <Link to='/signup' className='underline'> Sign up</Link> 
            </p>
       </div>
       <form>
            <div className='flex flex-col py-2'>
                <label className='py-2 form-medium'>Email Address</label>
                <input classname="border  border-blue-500 p-3"type="email" />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 form-medium'>Password</label>
                <input classname="border border-blue-500  p-3"type="password" />
            </div>
            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-4 text-white'>Sign In</button>
       </form>
    </div>
  )
}

export default Signin