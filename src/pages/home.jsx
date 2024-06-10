import './fonts.css';
import Login from './login';

function Home(){
    return(
        <div>
        <div className='h-24 w-24 bg-white absolute left-168 rounded-2xl top-6 lg:opacity-100 opacity-0'>
        <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
        </div>
            <p className="fonter animated-text absolute lg:text-10xl lg:left-128 lg:top-64 top-80 left-6 text-8xl">Farmy</p>
        </div>
    )
}

export default Home


