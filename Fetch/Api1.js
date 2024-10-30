// Con fetch

const API = 'https://miempresa.com/api/datos'

export const obtenerDatos = async (filtro) => {
    const response = await fetch(`${API}?categoria=${filtro}`, {
        method: "GET"
    })
    return await response.json()
}

