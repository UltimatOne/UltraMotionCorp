import UtilisateurRepo from "../repo/utilisateur.repo";
import Utilisateur from "../model/utilisateur.modele";

export default class UtilisateurService {

    #repo: UtilisateurRepo

    constructor(repo: UtilisateurRepo) {
        this.#repo = repo
    }

    getAll = (): Promise<Utilisateur[]> => {
        return this.#repo.getAll()
    }

    getById = (id: number): Promise<Utilisateur> => {
        return this.#repo.getById(id)
    }

    deleteById = (id: number): Promise<any> => {
        return this.#repo.delete(id)
    }

    createUtilisateur = (item: string): Promise<Utilisateur> => {
        const data = new Utilisateur(item)
        return this.#repo.create(data)
    }

    updateUtilisateur = async (item: Utilisateur, id: number): Promise<Utilisateur> => {
        const error: string = "Objet corrompu"
        if(item.id !== id) throw error
        const checkId = await this.getById(id);
        const data = new Utilisateur()

        if (typeof (checkId) == "string") {
            console.log("oui")
            data.create(item.task, item.completed)
            return this.#repo.create(data)
        }
        data.update(item)
        return this.#repo.update(data).catch(err => err)
    }

    patchUtilisateur = (id: number, item: Utilisateur): Promise<Utilisateur> => {
        const data = new Utilisateur()
        data.update(item)
        return this.#repo.patch(id, data).catch(err => err)
    }

}