import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada texto="Código" className="mb-5" somenteLeitura valor={id}></Entrada>
            ) : false}
            <Entrada className="mb-5" texto="Nome" valor={nome} valorMudou={setNome}></Entrada>
            <Entrada texto="Idade" tipo="number" valorMudou={setIdade} valor={idade}></Entrada>
            <div className="mt-7 flex justify-end">
                <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(id, nome, +idade))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}