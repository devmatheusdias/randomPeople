
export function badRequestError(){
    return {
        type: "badRequest",
        message: `Falha na requisição`
    }
}

export function notFoundError(resource = "Item"){
    return {
        type: "notFound",
        message: `${resource} não encontrado!`
    }
}