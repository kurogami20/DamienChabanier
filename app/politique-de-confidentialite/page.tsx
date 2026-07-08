import H2 from "@/components/Texts/H2";

const Page = () => {
  return (
    <section className="min-h-dvh text-center py-15">
      <H2 classContent={""} content={"Politique de confidentialité"} />
      <article className="prose max-w-3xl text-left mx-auto mt-6 flex flex-col gap-4 px-6 md:px-15 2xl:px-25">
        <p>Dernière mise à jour : 08/07/2026</p>

        <p>
          La présente politique de confidentialité décrit la manière dont les
          données personnelles sont collectées, utilisées et protégées lorsque
          vous utilisez ce site internet.
        </p>

        <h3>Responsable du traitement</h3>
        <p>
          Nom : Damien Chabnier
          <br />
          Contact :{" "}
          <a
            className="text-(--main-color) hover:underline"
            href="mailto:damienchabanier@gmail.com"
          >
            damienchabanier@gmail.com
          </a>
        </p>

        <h3>Données collectées</h3>
        <p>
          Ce site ne collecte pas de données automatiquement (aucun cookie ou
          traceur n’est utilisé). Toutefois, des données personnelles peuvent
          être collectées lorsque vous utilisez le formulaire de contact ou
          envoyez un message via le site.
        </p>
        <ul>
          <li>Nom</li>
          <li>Adresse email</li>
          <li>Contenu du message</li>
        </ul>

        <h3>Finalité de la collecte</h3>
        <p>
          Les données collectées sont utilisées uniquement pour répondre aux
          demandes envoyées via le formulaire de contact et échanger avec
          l’utilisateur dans un cadre professionnel ou informatif. Aucune donnée
          n’est utilisée à des fins commerciales ou publicitaires.
        </p>

        <h3>Base légale</h3>
        <p>
          Le traitement des données repose sur le consentement de l’utilisateur
          lorsqu’il envoie un message via le formulaire de contact.
        </p>

        <h3>Durée de conservation</h3>
        <p>
          Les données sont conservées pendant une durée maximale de 12 mois
          après le dernier échange, sauf obligation légale contraire.
        </p>

        <h3>Partage des données</h3>
        <p>
          Les données personnelles ne sont ni vendues, ni louées, ni transmises
          à des tiers.
        </p>

        <h3>Sécurité</h3>
        <p>
          Les données sont traitées de manière sécurisée afin de prévenir tout
          accès non autorisé, divulgation ou perte.
        </p>

        <h3>Droits des utilisateurs</h3>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d’accès</li>
          <li>Droit de rectification</li>
          <li>Droit de suppression</li>
          <li>Droit à la limitation du traitement</li>
        </ul>
        <p>
          Pour exercer ces droits, vous pouvez contacter :{" "}
          <a
            className="text-(--main-color) hover:underline"
            href="mailto:damienchabanier@gmail.com"
          >
            damienchabanier@gmail.com
          </a>
        </p>

        <h3>Cookies</h3>
        <p>Ce site n’utilise aucun cookie ni traceur.</p>

        <h3>Modification de la politique</h3>
        <p>
          Cette politique de confidentialité peut être modifiée à tout moment.
          La version en vigueur est celle publiée sur cette page.
        </p>

        <h3>Hébergement et sous-traitance</h3>
        <p>
          Le site est hébergé par Vercel Inc. Dans le cadre de l’hébergement et
          du fonctionnement technique du site, Vercel peut être amené à traiter
          certaines données techniques nécessaires à la fourniture du service,
          conformément à sa documentation de confidentialité et à son accord de
          traitement des données. Vercel intervient en qualité de sous-traitant
          technique ; les données éventuellement traitées par cet hébergeur le
          sont uniquement pour assurer le fonctionnement, la sécurité et la
          disponibilité du service.
        </p>
      </article>
    </section>
  );
};

export default Page;
