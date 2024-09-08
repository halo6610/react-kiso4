import React,{ useState } from 'react'
import './App.css'

const App:React.FC =()=>{
	const [count, setCount] = useState<number>(0)
	const greeting: string = "hello";
	const myNameIs="私の名前は"
	type Name="HALO66"|"HALO67";
	let myName: Name
	myName="HALO67"
	myName="HALO66"
	
	type profile={ name: string, height?: number|string }
	const profileList: Array<profile> = [{ name: myName, height: 170 },{ name: "Taro", height: "180" }]
	const myProfile=profileList[0]
	const hobby:(string|number)[]=["プログラミング","ゲーム","読書",2046,"など"]
	function hobbyFunc(hobby:(number|string)):(number|string){
		if(typeof(hobby)==="number"){
			return hobby+2
		}else{
			return hobby
		}
	}
	const addGreeting = <T, U>(key1: T, key2: U): Array<T | U> => {
		return [key1, key2];
	};
	const greetings=addGreeting< string, string > ("こんにちは", greeting);
	type propType={message: string}
	const TestComp:React.FC<propType>=(props:propType)=>{
		return(
			<>
			<h2>{props.message}</h2>
			</>
		)
	}
	return (
    <>

			<div className="hobby__container">
				<h2>{greetings[0]}・{greetings[1]}</h2>
				<p>{myNameIs}{myProfile.name}です。</p>
				<TestComp message='好きなこと'/>
				<ul className='hobby__list'>
					{hobby.map((item,key)=>(
						<li key={key}>{hobbyFunc(item)}</li>
					))}
				</ul>

			</div>


			<button onClick={() => setCount((count) => count + 1)}>
          クリック回数 {count}
      </button>
    </>
  )
}

export default App