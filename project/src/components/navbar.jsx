import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center gap-3 py-4 sm:py-6 px-4 sm:px-10 bg-(--c2)'>
            <h2 className='font-medium text-xl sm:text-2xl'>MediaSearch</h2>
            <div className='flex gap-4 sm:gap-5 text-base sm:text-xl items-center'>
                <Link to='/'>Search</Link>
                <Link to='/collection'>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar