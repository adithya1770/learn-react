import './fonts.css';
import Login from './login';

function Home(){
    return(
        <div>
        <div className='h-24 w-24 bg-white absolute left-168 rounded-2xl top-6'>
        <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
        </div>
            <p class="fonter lg:text-12xl text-8xl font-bold lg:m-48 lg:pl-8 tracking-wide text-white poppins-bold absolute lg:top-2 pl-1 ml-2 pt-2 top-80 antialiased">Farmy</p>
        </div>
    )
}

export default Home


