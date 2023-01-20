import "./signupHome.css";

export default function SignUpHome() {
  return (
    <div className="signup-home">
      <div className="container">
        <div className="top-utilisateur">
          <svg
            width="76"
            height="74"
            viewBox="0 0 76 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_3_295)">
              <path
                d="M37.9998 58.0003C29.6665 58.0003 22.2998 53.7337 17.9998 47.3337C18.0998 40.667 31.3332 37.0003 37.9998 37.0003C44.6665 37.0003 57.8998 40.667 57.9998 47.3337C55.7961 50.615 52.8194 53.3042 49.3317 55.1643C45.844 57.0243 41.9525 57.9983 37.9998 58.0003ZM37.9998 10.667C40.652 10.667 43.1955 11.7206 45.0709 13.5959C46.9463 15.4713 47.9998 18.0148 47.9998 20.667C47.9998 23.3192 46.9463 25.8627 45.0709 27.7381C43.1955 29.6134 40.652 30.667 37.9998 30.667C35.3477 30.667 32.8041 29.6134 30.9288 27.7381C29.0534 25.8627 27.9998 23.3192 27.9998 20.667C27.9998 18.0148 29.0534 15.4713 30.9288 13.5959C32.8041 11.7206 35.3477 10.667 37.9998 10.667ZM37.9998 0.666992C33.6224 0.666992 29.2879 1.52918 25.2437 3.20434C21.1995 4.8795 17.5249 7.33481 14.4296 10.4301C8.1784 16.6813 4.6665 25.1598 4.6665 34.0003C4.6665 42.8409 8.1784 51.3193 14.4296 57.5705C17.5249 60.6658 21.1995 63.1212 25.2437 64.7963C29.2879 66.4715 33.6224 67.3337 37.9998 67.3337C46.8404 67.3337 55.3188 63.8218 61.5701 57.5705C67.8213 51.3193 71.3332 42.8409 71.3332 34.0003C71.3332 15.567 56.3332 0.666992 37.9998 0.666992Z"
                fill="#87DA60"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_3_295"
                x="0.666504"
                y="0.666992"
                width="74.6665"
                height="74.667"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3_295"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3_295"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          Utilisateur
        </div>
        <div className="info-container">
          <p className="titre">Client à la recherche de service</p>
          <p className="sous-titre-utilisateur">Ce compte Vous permettra de : </p>
          <ul>
            <li>Recherche de services</li>
            <li>Commander un Service</li>
            <li>Obtenir de l'aide concernant vos services commandés</li>
          </ul>
          <button>Crée compte</button>
        </div>
      </div>

      <div className="container">
        <div className="top-prestataire">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.6665 53.333C54.8332 53.333 53.3332 51.833 53.3332 49.9997H26.6665C26.6665 51.833 25.1665 53.333 23.3332 53.333C21.4998 53.333 19.9998 51.833 19.9998 49.9997H6.6665V59.9997C6.6665 63.6663 9.6665 66.6663 13.3332 66.6663H66.6665C70.3332 66.6663 73.3332 63.6663 73.3332 59.9997V49.9997H59.9998C59.9998 51.833 58.4998 53.333 56.6665 53.333ZM66.6665 26.6663H56.6665V19.9997C56.6665 16.333 53.6665 13.333 49.9998 13.333H29.9998C26.3332 13.333 23.3332 16.333 23.3332 19.9997V26.6663H13.3332C9.6665 26.6663 6.6665 29.6663 6.6665 33.333V46.6663H19.9998V43.333C19.9998 41.4997 21.4998 39.9997 23.3332 39.9997C25.1665 39.9997 26.6665 41.4997 26.6665 43.333V46.6663H53.3332V43.333C53.3332 41.4997 54.8332 39.9997 56.6665 39.9997C58.4998 39.9997 59.9998 41.4997 59.9998 43.333V46.6663H73.3332V33.333C73.3332 29.6663 70.3332 26.6663 66.6665 26.6663ZM49.9998 26.6663H29.9998V19.9997H49.9998V26.6663Z"
              fill="#FCFF68"
            />
          </svg>
          Prestataire
        </div>
        <div className="info-container">
          <p className="titre">Prestataire à la recherche de clients</p>
          <p className="sous-titre-prestataire">Ce compte Vous permettra de : </p>
          <ul>
            <li>
              Disposer d'une plateforme professionelle pour afficher ses
              services
            </li>
            <li>se faire connaitre</li>
            <li>Obtenir les commentaire des clients</li>
            <li>
              Avoir une plateforme facile et compréhensible pour partager les
              services
            </li>
          </ul>
          <button>Crée compte</button>
        </div>
      </div>
    </div>
  );
}
