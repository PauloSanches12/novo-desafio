import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required("Nome obrigatório!"),
    age: yup.number().required("Idade obrigatório!"),
    cpf: yup.string().required("CPF obrigatório!"),
    cep: yup.string().required("CEP obrigatório!"),
    number: yup.string().required("O número é obrigatório!"),
    rg: yup.string().required("O RG é obrigatório!"),
})