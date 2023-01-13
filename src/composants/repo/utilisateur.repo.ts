import axios from "axios"
import "dotenv/config"
import Utilisateur from "./../model/utilisateur.modele"

export default class UtilisateurRepository {
    #URL = process.env.JSONSERVER

    getAll = (): Promise<Utilisateur[]> => {
        return axios.get(`${this.#URL}`)
            .then(res => res.data);
    }
    getById = async (id: number): Promise<Utilisateur> => {
        return axios.get(`${this.#URL}/${id}`)
            .then(res => res.data)
            .catch(err => "id introuvable");
    }
    create = async (item: Utilisateur): Promise<Utilisateur> => {
        return axios.post(`${this.#URL}`, item)
            .then(res => res.data);
    }
    update = async (item: Utilisateur): Promise<Utilisateur> => {
        return axios.put(`${this.#URL}/${item.id}`, item)
            .then(res => res.data);
    }
    delete = (id: number): Promise<any> => {
        return axios.delete(`${this.#URL}/${id}`)
    }
    patch = async (id: number, item: Utilisateur): Promise<Utilisateur> => {
        return axios.patch(`${this.#URL}/${id}`, item)
            .then(res => res.data);
    }
}