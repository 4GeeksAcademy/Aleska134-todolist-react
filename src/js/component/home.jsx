import React, { useState } from "react";

//create your first component
const Home = () => {
	const[ inputValue,setInputValue ] = useState("");
	const[ todos,setTodos ] = useState([]);
	return (
		<div className="container">
			<h1>Todos</h1>
			<ul>
				<li>
					<input id="listInput"
						type = "text"
						onChange = {(e)=> setInputValue(e.target.value)}
						value = {inputValue}
						onKeyDown={(e)=> {
							if(e.key === "Enter"){
								setTodos(todos.concat(inputValue));
								setInputValue('');
							}
						}}
						placeholder = "What needs to be done?">
						
					</input>
				</li>
				{todos.map((item,index)=>(
					<li key="index">{item}{" "}
						<i 
							className= "fa-sharp fa-solid fa-trash" 
							onClick={()=>
								setTodos(
									todos.filter(
										(t,currentIndex)=> index != currentIndex)
										)
						}></i>
					</li>
				))}
				
			</ul>
			<div>{todos.length} items left</div>
		</div>
	);
};

export default Home;
