import { useState } from "react";
import "./App.css";
import axios from "axios";

const api = axios.create({
	baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/",
});

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de tarefas (apenas leitura)</h1>
		</div>
	);
};

const AppTarefas = () => {
	const [tarefas, setTarefas] = useState([]);

	const tratarClique = () => {
		api.get("pegar").then((response) => {
			console.info(response.data);
			const lista = response.data.data.map((item: any) =>  item.sigla);
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

const App = () => {
	return (
		<>
			<AppNavBar />
			<AppTarefas />
		</>
	);
};

export default App;