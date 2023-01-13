export default class Utilisateur {
    id!: number
    [task: string]: any
    completed!: boolean

    constructor(data?: string, completed?: boolean) {
        if(data) this.create(data, completed)
    }

    create = (obj: string, completed: boolean = false) => {
        this.task = obj
        this.completed = completed
    }
    update = (obj: any) => {
        const checkAttribut = ["task", "completed", "id"]
        for (let key in obj) {
            if (checkAttribut.includes(key)) {
                this[key] = obj[key]
            }
        }
    }
}