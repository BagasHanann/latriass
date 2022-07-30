import { useState } from 'react';
import Container from '../components/Container';

export default function Navbar() {
const [dropdown, setDropdown] = useState(false);
const [offCanvas, setOffCanvas] = useState(false);
    return (
        <nav className="py-10">
            <Container>
                <div className="flex items-center">
                    <div className="w-4/12 lg:hidden">
                        <button onClick={() => { setOffCanvas(!offCanvas )}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="lg:w-6/12 md:w-8/12 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white rounded flex items-center justify-center mr-4 shadow-2xl">
                            <h1 className='text-green-500 font-bold'>L</h1>
                        </div>
                            Latriaz Pangaistuti
                    </div>
                    <div className="w-3/12 lg:hidden text-right">
                        <svg width="30" height="30" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                            <path d="M62.5701 12.923C60.4371 6.82099 55.4101 1.75599 49.0601 1.05699C45.4601 0.712987 41.8391 0.951987 38.5391 2.61599C35.9451 3.92399 33.8661 6.11599 31.9991 8.37899C29.6991 5.62499 27.1601 3.16499 23.8051 1.88499C21.7851 1.11599 19.5931 0.892987 17.4531 0.905987C15.6011 0.920987 13.7311 1.10699 11.9601 1.70999C8.7161 2.81399 6.0031 5.10699 3.9761 7.93199C3.38339 8.76496 2.86316 9.64719 2.4211 10.569C1.9731 11.49 1.5911 12.448 1.2651 13.42C-1.6019 22.986 0.128097 34.746 9.4861 40.133C10.4301 40.781 11.4101 41.403 12.4051 42.008C15.3841 43.83 18.4951 45.545 21.2141 47.666C21.9851 48.391 22.6681 49.16 23.2241 49.994C24.3351 51.662 24.9021 53.586 24.6281 55.887C24.9011 58.176 22.8561 59.813 22.8561 62.268C23.2671 65.538 36.9761 58.102 38.1411 57.338C47.8071 51.633 57.6241 44.268 61.4601 32.988C62.0892 31.5371 62.6122 30.0425 63.0251 28.516C64.3971 23.458 64.2961 17.864 62.5671 12.923" fill="#DF394C"/>
                        </svg>
                    </div>
                    <div className={`lg:w-5/12 w-full bg-green-500 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10   lg:p-0 transition-all ${offCanvas ? 'left-0' : '-left-full'}`}>
                        <button 
                            className="absolute lg:hidden top-10 right-10"
                            onClick={() => { setOffCanvas(false) }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <ul className="lg:space-x-10 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                            <li className="lg:ml-4">
                                <a className='hover:text-green-100' href='/'>Home</a>              
                            </li>
                            <li>
                                <a className='hover:text-green-100' href='/posts'>About you</a>
                            </li>
                        </ul>
                    </div>  
                </div>
            </Container>
        </nav>
    )
}