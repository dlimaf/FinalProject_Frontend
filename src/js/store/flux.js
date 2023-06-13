

const getState = ({ getStore, getActions, setStore }) => {

	const url = process.env.BACKEND_URL

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
			loading:false,
			modalLogout:false,
			modalConfRegistro:false,
			response1:false,
			quantity:1,
			userData: null

			

			

		},
		actions: {

			informacionUsuario: () => {
				let myHeaders = new Headers();
				myHeaders.append(
					"Authorization",
					`Bearer ${JSON.parse(localStorage.getItem("user"))}`
				);
				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};
				fetch(`${url}privada`,requestOptions)
					.then((response) => response.json())
					.then((data) => {
						setStore({userData:data})
						console.log("esta bien la respuesta",data)
						return JSON.stringify(data)
					}
						)
					.catch((error) => console.log("error", error));
			},

			loadSomeData:() =>{

				fetch(`${url}hamburgers`)
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({hamburguesas:data})
				})
				.catch(error=>console.log(error))

				fetch(`${url}beverages`)
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({bebidas:data})
				})
				.catch(error=>console.log(error))

				fetch(`${url}acomp`)
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({acompañamientos:data})
				})
				.catch(error=>console.log(error))

			},

			setPedidos:(data) => {
				const store = getStore();
				setStore({pedidos: data})
			},

			setResponse1: (data) => {
				const store = getStore();
				setStore({response1: data})
			},

			setModalConfRegistro: (data) => {
				const store = getStore();
				setStore({modalConfRegistro: data})
			},

			setModalLogout: (data) => {
				const store = getStore();
				setStore({modalLogout: data})
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
		
					const resp = await fetch(`${url}login`,requestOptions)
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
		
					const resp = await fetch(`${url}signup`,requestOptions)
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

			addItem: (name, price, id) => {
				const store = getStore();
				let isExistingItem = false;
			  
				const updatedPedidos = store.pedidos.map((elem) => {
				  if (elem.id === id && elem.name === name) {
					const quantity = elem.quantity + 1;
					const updatedPrice = elem.price + price;
					isExistingItem = true;
					return {
					  ...elem,
					  quantity: quantity,
					  price: updatedPrice
					};
				  }
				  return elem;
				});
			  
				if (!isExistingItem) {
				  updatedPedidos.push({
					name: name,
					price: price,
					id: id,
					quantity: 1
				  });
				}
			  
				setStore({
				  pedidos: updatedPedidos
				});
			  
				console.log(store.pedidos);
			  }
		}


	}

};

export default getState;
