

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("user"),
			pedidos:[],
			hamburguesas:[
				{title:"CHEESE BURGER 1",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:100.00},
				{title:"CHEESE BURGER 2",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:200.00},
				{title:"CHEESE BURGER 3",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:300},
				{title:"CHEESE BURGER 4",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:400},
				{title:"CHEESE BURGER 5",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:500},
				{title:"CHEESE BURGER 6",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:600},
		
			],
			bebidas:[
				{title:"SPRITE 1",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"SPRITE 2",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"SPRITE 3",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"SPRITE 4",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"SPRITE 5",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"SPRITE 6",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		
			],
			acompañamientos:[
				{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		
			],
			arma:[
				{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
				{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		
			],
			users:[],
			openModal:false,
			edit:false,
			loading:false

			

		},
		actions: {




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
		
					const resp = await fetch("https://dlimaf-literate-guacamole-r9w6qp57j7gfj4r-3000.preview.app.github.dev/login",requestOptions)
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
		
					const resp = await fetch("https://dlimaf-literate-guacamole-r9w6qp57j7gfj4r-3000.preview.app.github.dev/signup",requestOptions)
					if (!resp.ok) {
						alert("There has been some error");
						return false;
					}
					const data = await resp.json();
					console.log("this came from the backend", data);
					if (resp.ok) return true;
								
				} catch(error) {
					console.log("There has been an error sign up")}
					swal(data, { icon: "error" });
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
