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

const AppUFLista = () => {
	const [tarefas, setTarefas] = useState([]);

	const tratarClique = () => {
		api.get("uf").then((response) => {
			console.info(response.data);
			const lista = response.data.data.map((item: any) => 
			item.sigla
			);
			console.info(lista);
			setTarefas(lista);
		});
	};
	return (
		<div className="card">
			<button onClick={tratarClique}>Pegar tarefas</button>
			<ul>
				{tarefas.map((tarefa: string, indice: number) => (
					<li key={indice}>{tarefa}</li>
				))}
			</ul>
		</div>
	);
};

const AppUFDetalhe = () => {
	return(
		<>
		</>
	)
};

const App = () => {
	const [uf , setUF] = useState([]);
	const [ufs , setUFS] = useState([]);
	return (
		<>
			<AppNavBar />
			<AppUFLista />
			<AppUFDetalhe/>
		</>
	);
};

export default App;