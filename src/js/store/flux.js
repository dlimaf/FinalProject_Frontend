

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("user"),
			pedidos:[],
			hamburguesas:[],
			bebidas:[],
			acompañamientos:[],
			users:[],
			openModal:false,
			edit:false,
			loading:false

			

		},
		actions: {

			loadSomeData:() =>{

				fetch("https://3000-benbungle-ecommerceback-gjc60gx0upg.ws-us98.gitpod.io/hamburgers")
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({hamburguesas:data})
				})
				.catch(error=>console.log(error))

				fetch("https://3000-benbungle-ecommerceback-gjc60gx0upg.ws-us98.gitpod.io/beverages")
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({bebidas:data})
				})
				.catch(error=>console.log(error))

				fetch("https://3000-benbungle-ecommerceback-gjc60gx0upg.ws-us98.gitpod.io/acomp")
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({acompañamientos:data})
				})
				.catch(error=>console.log(error))

			},

			setOpenModal:(data)=>{
				const store = getStore();
				setStore({openModal: data})
			},

			setEdit:(data)=>{
				const store = getStore();
				setStore({edit: data})
			},

			setLoading:(data)=>{
				const store = getStore();
				setStore({loading: data})
			},

			login: async (email, password) => {
				
				const requestOptions = {
					method: 'POST',
					headers: {
						"Content-Type":"application/json"
		
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				}
				try {
		
					const resp = await fetch("https://3000-benbungle-ecommerceback-gjc60gx0upg.ws-us98.gitpod.io/login",requestOptions)
					if (!resp.ok) {
						swal(data, { icon: "error" });
						return false;
					}
					const data = await resp.json();
					console.log("this came from the backend", data);
					localStorage.setItem("user", JSON.stringify(data.token));
					setStore({token:data.token});
					if (resp.ok) 
					return 
						true;
						swal("¡Bien!", "Has hecho clic en el botón :)", "success")						
					
				
				}catch(error) {
					console.log("There has been an error login in")
				
				}
					return false
			},

			signup: async (cell_phone, name, apellido, date_of_birth, email, password) => {
				const requestOptions = {
					method: 'POST',
					headers: {
						"Content-Type":"application/json"
		
					},
					body: JSON.stringify({
						cell_phone:cell_phone,
						name:name,
						apellido:apellido,
						date_of_birth:date_of_birth,
						email: email,
						password: password
					})
				}

				try {
		
					const resp = await fetch("https://3000-benbungle-ecommerceback-gjc60gx0upg.ws-us98.gitpod.io/signup",requestOptions)
					if (!resp.ok) {
						alert("There has been some error");
						return false;
					}
					const data = await resp.json();
					console.log("this came from the backend", data);
					if (resp.ok) return true;
								
				} catch(error) {
					console.log("There has been an error sign up")}
					swal({ icon: "error" });
					return false
				 },

			logout: async () => {
					setStore({ token: null });
					localStorage.removeItem("user");
					localStorage.removeItem("emailuseractual");
			},



		}

			

	}

};

export default getState;
