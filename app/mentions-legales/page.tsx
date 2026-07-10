import H2 from "@/components/Texts/H2";

const Page = () => {
  return (
    <section className="min-h-dvh text-center py-15">
      <H2 classContent={""} content={"Mentions légales"} />
      <article className="prose max-w-3xl text-left mx-auto mt-6 flex flex-col gap-4 px-6 md:px-15 2xl:px-25">
        <p>Dernière mise à jour : 08/07/2026</p>

        <h3>Éditeur du site</h3>
        <p>
          Le présent site est édité par : Damien Chabanier
          <br />
          Statut : Entrepreneur individuel
          <br />
          Adresse : 20 rue des Chênes, 31270 Villeneuve-Tolosane, France
          <br />
          Email :{" "}
          <a
            className="text-blue-500 hover:underline"
            href="mailto:damienchabanier@gmail.com"
          >
            damienchabanier@gmail.com
          </a>
        </p>

        <h3>Directeur de la publication</h3>
        <p>Le directeur de la publication est : Damien Chabanier</p>

        <h3>Hébergement</h3>
        <p>
          Le site est hébergé par : Vercel Inc.
          <br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
          <br />
          Site web : vercel.com
          <br />
          Contact : privacy@vercel.com
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
          L’ensemble du contenu présent sur le site (textes, images, graphismes,
          logos et éléments techniques) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction, représentation, modification,
          publication ou adaptation, totale ou partielle, est interdite sans
          autorisation écrite préalable.
        </p>

        <h3>Polices de caractères</h3>
        <p>
          Le site utilise la police Sharkbit de Nami Studio pour certains titres. Cette police est
          utilisée conformément à sa licence d’utilisation.
        </p>

        <h3>Données personnelles</h3>
        <p>
          Les informations transmises via le formulaire de contact (nom, adresse
          email, contenu du message) sont utilisées uniquement pour répondre aux
          demandes adressées au site. Le site ne dépose pas de cookies ni de
          traceurs. Pour plus d’informations, consultez{" "}
          <a
            className="text-blue-500 hover:underline"
            href="/politique-de-confidentialite"
          >
            la politique de confidentialité
          </a>
          .
        </p>

        <h3>Responsabilité</h3>
        <p>
          L’éditeur du site s’efforce de fournir des informations exactes et à
          jour, mais ne saurait être tenu responsable des erreurs, omissions ou
          indisponibilités temporaires du service. L’utilisateur demeure
          responsable de l’usage qu’il fait des informations disponibles sur le
          site.
        </p>

        <h3>Droit applicable</h3>
        <p>
          Les présentes mentions légales sont soumises au droit français. En cas
          de litige, et sous réserve des règles de compétence impératives, les
          juridictions françaises seront compétentes.
        </p>
      </article>
    </section>
  );
};

export default Page;
