import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()

    const handleAddToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
    }

    return (
        <div className='w-[45vw] sm:w-[30vw] md:w-[18vw] relative h-64 sm:h-80 bg-white rounded-xl overflow-hidden'>
            <a target='_blank' className='h-full' href={item.url}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
            </a>
            <div id='bottom' className='flex justify-between gap-2 sm:gap-3 items-center w-full px-2 sm:px-4 py-3 sm:py-6 absolute bottom-0 text-white'>
                <h2 className='text-sm sm:text-lg font-semibold capitalize h-10 sm:h-14 overflow-hidden'>{item.title}</h2>
                <button
                    onClick={() => { handleAddToCollection(item) }}
                    className='bg-indigo-600 active:scale-95 text-white rounded px-2 sm:px-3 py-1 cursor-pointer font-medium text-sm sm:text-base whitespace-nowrap'
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard