import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao: string
    public postagem: Postagem[]
    
    public tema: string
    public categoria: string
}