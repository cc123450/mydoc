import CodeEditor from "../../components/CodeEditor"
import CodeList from "../../components/CodeList"
import { examples } from "../../lib/localdata";

// 只能用在page里面
export async function getStaticProps(){
    let data = await examples();
    return {props:{examples:data}};
}

export default function({examples}){

    return (
        <div>
            <div>code playground</div>
            <div className="flex flex-row w-full h-full">
                <CodeList className="w-32" examples={examples}/>
                <CodeEditor className="grow"/>
            </div>
        </div>
       
    )
}