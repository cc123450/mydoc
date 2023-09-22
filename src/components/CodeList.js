import { useEffect } from "react"

export default function CodeList({examples}){
    useEffect(()=>{
        console.log('examples', examples);
    }, []);

    return (
        <div className='w-80 pl-3'>
            <ul>
                <li>
                    <h5 className="my-3 font-semibold ">顶级菜单1</h5>
                    <ul className="space-y-2 border-l ">
                        <li><a className="pl-4" href="#">菜单1-1</a></li>
                        <li><a className="pl-4" href="#">菜单1-2</a></li>
                        <li><a className="pl-4" href="#">菜单1-3</a></li>
                        <li><a className="pl-4" href="#">菜单1-4</a></li>
                    </ul>
                </li>
                <li>
                    <h5 className="my-3 font-semibold ">顶级菜单2</h5>
                    <ul className="space-y-2 border-l ">
                        <li><a className="pl-4" href="#">菜单2-1</a></li>
                        <li><a className="pl-4" href="#">菜单2-2</a></li>
                        <li><a className="pl-4" href="#">菜单2-3</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )    
}