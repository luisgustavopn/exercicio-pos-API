import { useState } from "react";
import "./App.css";
import axios from "axios";

const api = axios.create({
	baseURL: "https://infoweb-api.vercel.app/",
});

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de unidades federativas do BR</h1>
		</div>
	);
};

const AppUFDetalhe = (props: any) => {
	
	return(
		<div>
				<p>{props.uf.sigla}</p>
				<p>{props.uf.nome}</p>
		</div>
	)
};

const AppUFLista = (props:any) => {
	
	const tratarClique = () => {
		api.get("uf").then((response) => {
			console.info(response.data);
			const lista = response.data.data.map((item:any , index:any) => 
				<ul key={index.id}>
					<li >{item.sigla}</li>
					{/* <li>{item.nome}</li> */}
				</ul>
			);
			props.mudarUF(lista);
		});
	};
	return (

		<div className="card">
			<button onClick={tratarClique}>Pegar estados</button>
			<div>
				{props.uf.map((item:any, indice:any) => (
					<button key={indice}>{item}</button>
				))}
			</div>
		</div>
	);
};



const App = () => {
	const [uf , setUF] = useState({sigla: 'RN' , nome: 'Rio Grande do Norte'});
	const [ufs , setUFS] = useState([]);
	
	return (
		<>
			<AppNavBar />
			<AppUFDetalhe uf={uf} mudarUF={setUF}/>
			<AppUFLista uf={ufs} mudarUF = {setUFS}/>
			
		</>
	);
};

export default App;