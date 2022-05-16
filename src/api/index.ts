interface Entries {
    mainImage: string;
    additionalImages: string[];
    variants: Variant[];
    score: {
      avg: number;
    };
    description: string;
    utilisation: unknown;
    reviews: unknown;
}

interface Variant {
  title: string;
  capacity: string;
  price: number;
}

export const mockedData: Entries = {
  mainImage: 'https://media.typology.com/storyblok/03f86bbfa8/creme-hydratante-visage-zinc-extrait-bambou__main__0914580d6a7f4516ad99366d387a10cf.jpg?twic=v1',
  additionalImages: [
    'https://media.typology.com/video-storyblok/x/6384ba963d/806x792_lab-2003_v1.mp4?twic=v1',
    'https://media.typology.com/video-storyblok/x/6384ba963d/806x792_lab-2003_v1.mp4?twic=v1',
    'https://media.typology.com/storyblok/ef8076f79a/creme-hydratante-visage-zinc-extrait-bambou__additional__5bd42d85c6b648f08c58dae2788b7401.jpg?twic=v1',
    'https://media.typology.com/storyblok/fcaee3b46e/creme-hydratante-visage-zinc-extrait-bambou__additional__b7d67a09e24a48feacff6549bab9041c.jpg?twic=v1',
    'https://media.typology.com/storyblok/b5281759c3/creme-hydratante-visage-zinc-extrait-bambou__additional__29e1e1ff572f4218bb9c44300f57db91.jpg?twic=v1',
    'https://media.typology.com/storyblok/b2cae7bc31/creme-hydratante-visage-zinc-extrait-bambou__additional__e3414b91a4184cdfb2b96589aaa89090.jpg?twic=v1',
    'https://media.typology.com/storyblok/b78e06ee09/creme-hydratante-visage-zinc-extrait-bambou__additional__0f76ef2b7a8c4a36b90456ef6831b769.jpg?twic=v1',
  ],
  variants: [
    {
      title: 'Crème visage purifiante | Zinc PCA 4% + extrait de bambou ' +
                ' | 50ml',
      capacity: '50ml',
      price: 21.5,
    },
  ],
  score: {
    avg: 4.1,
  },
  description: '<p>Enrichie en actifs séborégulateurs et antibactériens, ' +
        'purifie la peau et combat les imperfections cutanées.</p><p>98% ' +
        'd&#39;origine naturelle.</p>',
  utilisation: '<p>Une noisette - Appliquer sur le visage et le cou.</p>',
  reviews: [
    {
      customerName: 'Pauline R.',
      score: 4,
      createdAt: '2020-11-03T08:38:19.000Z',
      title: 'Surprenant',
      content: 'J\'y allais vraiment au hasard, mais après' +
                ' 4 semaines d\'utilisation je me retrouve avec une ' +
                'peau plus saine et plus lumineuse. Seule remarque...' +
                ' votre packaging. Pour une marque qui prône l\'écologie ' +
                'etc... il y a BEAUCOUP trop d\'emballages, même en carton. ' +
                'Le colis était vraiment too much. Sinon, bon produit.',
    },
    {
      customerName: 'Maelann G.',
      score: 5,
      createdAt: '2020-10-18T16:56:57.000Z',
      title: 'Parfaite !',
      content: 'Purifie réellement la peau, la rend douce et' +
                ' crée un effet matifiant pour le reste de la ' +
                'journée, je suis extrêmement satisfaite de cette ' +
                'crème.Aucun regret !',
    },
    {
      customerName: 'Jennifer M.',
      score: 3,
      createdAt: '2020-11-26T06:40:31.000Z',
      title: 'Décevant',
      content: 'Creme qui peluche et n hydrate pas du tout',
    },
    {
      customerName: 'Aubry S.',
      score: 4,
      createdAt: '2020-11-04T08:39:06.000Z',
      title: 'bonne crême de jour',
      content: 'très bien contre les rougeurs et autres irritations et ' +
                'bien hydratante, par contre oubliez l\'effet anti brillance',
    },
    {
      customerName: 'Dilan D.',
      score: 2,
      createdAt: '2020-07-24T09:55:31.000Z',
      title: 'Pas pour moi',
      content: 'La crème pèle après l\'avoir appliqué et je n' +
                ' la trouve pas vraiment matifante je pense qu\'elle ' +
                'ne convient pas à ma peau',
    },
  ],
};
