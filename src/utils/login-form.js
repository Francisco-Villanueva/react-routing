// Lista de 10 usuarios con username y contraseña
const users = [
	{ username: 'user1', password: 'pass1' },
	{ username: 'user2', password: 'pass2' },
	{ username: 'user3', password: 'pass3' },
	{ username: 'user4', password: 'pass4' },
	{ username: 'user5', password: 'pass5' },
	{ username: 'user6', password: 'pass6' },
	{ username: 'user7', password: 'pass7' },
	{ username: 'user8', password: 'pass8' },
	{ username: 'user9', password: 'pass9' },
	{ username: 'user10', password: 'pass10' },
];

// Función para verificar las credenciales
async function verifyCredentials(username, password) {
	// Agregamos una demora de 2 segundos
	await new Promise(resolve => setTimeout(resolve, 2000));

	const user = users.find(u => u.username === username && u.password === password);
	
	if (!user) {
		throw new Error('Credenciales inválidas asdasda');
	}
	
	return true;
}

// Ejemplo de uso:
// try {
//     await verifyCredentials('user1', 'pass1');
//     console.log('Inicio de sesión exitoso');
// } catch (error) {
//     console.error(error.message);
// }


export {verifyCredentials}