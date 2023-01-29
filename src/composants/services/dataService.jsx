export default class dataService {
  static getServices() {
    return fetch("http://localhost:8000/services").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }
  
  static getService(id) {
    return fetch(`http://localhost:8000/services/${id}`)
      .then((response) => response.json())
      .then((data) => (this.empty(data) ? null : data))
      .catch((error) => this.error(error));
  }
  
  static createService(service) {
    return fetch(`http://localhost:8000/services/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }
  
  static majService(service) {
    return fetch(`http://localhost:8000/services/${service.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }
  
  static suprService(service) {
    return fetch(`http://localhost:8000/services/${service.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
  }
  static ajoutService(service) {
    return fetch(`http://localhost:8000/services/`, {
      method: "POST",
      body: JSON.stringify(service),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static getClients() {
    return fetch("http://localhost:8000/clients").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  static getClient(id) {
    return fetch(`http://localhost:8000/clients/${id}`)
      .then((response) => response.json())
      .then((data) => (this.empty(data) ? null : data))
      .catch((error) => this.error(error));
  }

  static createClient(client) {
    return fetch(`http://localhost:8000/clients/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(client),
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static majClient(client) {
    return fetch(`http://localhost:8000/clients/${client.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(client),
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static suprClient(client) {
    return fetch(`http://localhost:8000/clients/${client.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
  }
  static ajoutClient(client) {
    return fetch(`http://localhost:8000/clients/`, {
      method: "POST",
      body: JSON.stringify(client),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static getEntreprises() {
    return fetch("http://localhost:8000/entreprises").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  static getEntreprise(id) {
    return fetch(`http://localhost:8000/entreprises/${id}`)
      .then((response) => response.json())
      .then((data) => (this.empty(data) ? null : data))
      .catch((error) => this.error(error));
  }

  static createEntreprise(entreprise) {
    return fetch(`http://localhost:8000/entreprises/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entreprise),
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static majEntreprise(entreprise) {
    return fetch(`http://localhost:8000/entreprises/${entreprise.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entreprise),
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static suprEntreprise(entreprise) {
    return fetch(`http://localhost:8000/entreprises/${entreprise.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
  }
  static ajoutEntreprise(entreprise) {
    return fetch(`http://localhost:8000/entreprises/`, {
      method: "POST",
      body: JSON.stringify(entreprise),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }


  static empty(data) {
    return Object.keys(data).length === 0;
  }

  static error(error) {
    console.error(error);
  }
}
