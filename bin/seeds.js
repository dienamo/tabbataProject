const mongoose = require('mongoose');
const Brand = require('../models/brand');
const Product = require('../models/product');
const Store = require('../models/store')

Brand.collection.drop();
Product.collection.drop();
Store.collection.drop();

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });




const data = [
  {
    name: "ROBE INES",
    type: "Robe",
    description: "Légèrement évasée, la robe longue se décline en noir ou en rubis. La silhouette est raffinée et se complète avec une paire de bottes ou des baskets. Composition : Velours - 81% viscose 19% soie. Couleur : Noir",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740326/TABBATA/Image_saralavoine/robe_noire_gwuler.jpg",
    brand:
    {
      "name": "Sara Lavoine",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739949/TABBATA/Logo_marque/Brand_sara_lavoine_bthk2x.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store:

      [{
        "name": "Sara Lavoine Paris 1",
        "address": "9 Rue Saint-Roch, 75001 Paris",
        "latlng": ["48.864755", "2.331832"],
      }]

  },

  {
    name: "ROBE CELESTE",
    type: "Robe",
    description: "La robe Céleste est une robe fluide et vaporeuse entièrement en satin de soie. Sa douceur et sa lumière font de la robe, LA pièce phare de la collection. Dotée de broderies dorées, la robe est assortie d'une ceinture en soie. Elle peut s'associer également par une ceinture en cuir de la collection. Céleste se décline en deux coloris : un vermillon éclatant.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740326/TABBATA/Image_saralavoine/robe_celeste_bogxym.jpg",
    brand:
    {
      "name": "Sara Lavoine",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739949/TABBATA/Logo_marque/Brand_sara_lavoine_bthk2x.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store:
      [
        {
          "name": "Sara Lavoine Paris 1",
          "address": "9 Rue Saint-Roch, 75001 Paris",
          "latlng": ["48.864755", "2.331832"],
        },
        {
          "name": "Sara Lavoine Paris 7",
          "address": "28 Rue du Bac, 75007 Paris",
          "latlng": ["48.857632", "2.327908"],
        }
      ],
  },

  {
    name: "PULL SOFIA",
    type: "Pull",
    description: "Les pulls à rayures sont des essentiels du vestiaire de Sarah. Pour cette nouvelle saison, les épaules sont décorées de boutons dorés pour une touche chic décontractée.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740326/TABBATA/Image_saralavoine/pull_sofia_hnlopl.jpg",
    brand:
    {
      "name": "Sara Lavoine",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739949/TABBATA/Logo_marque/Brand_sara_lavoine_bthk2x.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store:

      [{
        "name": "Sara Lavoine Paris 7",
        "address": "28 Rue du Bac, 75007 Paris",
        "latlng": ["48.857632", "2.327908"],
      }]

  },

  {
    name: "Robe longue en maille ornée de perles",
    type: "Robe",
    description: "Robe femme Sandro, Robe longue en maille côtelée, Col montant, Robe fendue sur les côtés, Robe ornée de perles blanches, Le mannequin porte une taille 36 / UK 8 / US 2-4",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740312/TABBATA/Image_sandro/robe_longue_maille_evltib.jpg",
    brand:
    {
      "name": "Sandro",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/brand_sandro_e83qyj.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "Sandro Paris 4",
        "address": "50 Rue Vieille du Temple, 75004 Paris",
        "latlng": ["48.8584825", "2.3586845"],
      }
    ]
  },

  {
    name: "Robe courte à empiècement",
    type: "Robe",
    description: "Robe courte femme Sandro : Coupe ajustée, Manches 3/4, Empiècement en guipure au décolleté et aux manches, Jeu de plis partants de la taille, Le mannequin porte une taille 36 / UK 8 / US 26",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740312/TABBATA/Image_sandro/robe_courte_empiecement_emjndf.jpg",
    brand:
    {
      "name": "Sandro",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/brand_sandro_e83qyj.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "Sandro Paris 4",
        "address": "50 Rue Vieille du Temple, 75004 Paris",
        "latlng": ["48.8584825", "2.3586845"],
      }
    ]
  },

  {
    name: "Robe courte en tweed",
    type: "Robe",
    description: "Robe femme Sandro, Robe courte en tweed, Ouverture par une patte de boutonnage contrastée sur le devant. Manches courtes, Deux poches bordées d'un passepoil or, Le mannequin porte une taille 36 / UK 8 / US 26",
    reference: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740312/TABBATA/Image_sandro/robe_courte_empiecement_emjndf.jpg",
    size: "1",
    sex: "H",
    imgPath: "",
    brand:
    {
      "name": "Sandro",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/brand_sandro_e83qyj.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "Sandro Paris 4",
        "address": "50 Rue Vieille du Temple, 75004 Paris",
        "latlng": ["48.8584825", "2.3586845"],
      }
    ]
  },

  {
    name: "JEAN NEW MICK",
    type: "Jean",
    description: "Coupé dans une toile Denim Red Selvedge, le jean Mick a été confectionné avec le plus grand soin dans nos ateliers et assure une allure très contemporaine. La toile dense et brute s’assouplira avec le temps et se patinera au porté pour un délavage parfait, unique et sur-mesure.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740301/TABBATA/Image_balibaris/Jean_new_pick_e4gvpn.jpg",
    brand:
    {
      "name": "Balibaris",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/Balibaris_logo_n64an5.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "Balibaris Paris 3",
        "address": "48 Rue des Francs Bourgeois, 75003 Paris",
        "latlng": ["48.8589813", "2.3585258"],
      }
    ]
  },

  {
    name: "PULL DENNIS",
    type: "Pull",
    description: "Le pull Dennis est fabriqué en Italie dans une maille épaisse de laine italienne. Il possède un col rond ras du cou et est proposé dans un coloris vert foncé chiné. Une pièce chic et cool qui complétera délicatement vos tenues.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740301/TABBATA/Image_balibaris/pull_denis_azt0tk.jpg",
    brand:
    {
      "name": "Balibaris",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/Balibaris_logo_n64an5.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "Balibaris Paris 3",
        "address": "48 Rue des Francs Bourgeois, 75003 Paris",
        "latlng": ["48.8589813", "2.3585258"],
      },
      {
        "name": "Balibaris Paris 11",
        "address": "100 Boulevard Beaumarchais",
        "latlng": ["48.860576", "2.367310"],
      }
    ]
  },

  {
    name: "PULL JARED",
    type: "Pull",
    description: "Avec sa belle maille épaisse 100% laine mérinos, le pull Jared est confectionné en Italie et sera un essentiel de cet hiver. Ici décliné dans un coloris bleu Orion subtilement chiné.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740301/TABBATA/Image_balibaris/pull_jared_xggfdm.jpg",
    brand:
    {
      "name": "Balibaris",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/Balibaris_logo_n64an5.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "Balibaris Paris 3",
        "address": "48 Rue des Francs Bourgeois, 75003 Paris",
        "latlng": ["48.8589813", "2.3585258"],
      }
    ]
  },

  {
    name: "PULL COLL ROULÉ STYLE CAMEL",
    type: "Pull",
    description: "Ce pull long à col roulé constitue l'un des nouveaux basiques de notre collection Hiver, avec sa matière douce aux tons camel. Dans un esprit sportswear, il se présente dans une coupe ample avec des manches longues et une encolure montante. La pièce gagne en féminité grâce à ses deux fentes profondes sur les côtés, qui dévoilent subtilement le bas de votre tenue. Pile dans la tendance actuelle, ce pull habillé se portera avec un jogging en soie ou un pantalon en laine.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740340/TABBATA/Image_thekoople/pull_col_roule_long_camel_j92gw6.jpg",
    brand:
    {
      "name": "The Kooples",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/Brand_the_kooples_cj3vba.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "The Kooples Paris 12",
        "address": "60 Rue du Faubourg Saint-Antoine, 75012 Paris",
        "latlng": ["48.8519", "2.37334"],
      }
    ]
  },

  {
    name: "CHEMISE NOIRE IMPRIMÉ STYLE CASUAL",
    type: "Chemise",
    description: "Cette chemise noire imprimée s’inscrit dans l’esprit de notre nouvelle collection, inspirée par la côte ouest américaine. Elle adopte la coupe casual du moment avec une petite encolure et des poignets boutonnés. Notre Maison mise sur un effet de contraste en lui ajoutant des micromotifs en forme de palmiers blancs sur l’ensemble. Vous ferez ressortir le style de cette chemise pour homme avec un pantalon de tailleur ceinturé, une veste militaire kaki et une paire de baskets blanches.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740340/TABBATA/Image_thekoople/chemise_casual_v0paju.jpg",
    brand:
    {
      "name": "The Kooples",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/Brand_the_kooples_cj3vba.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "The Kooples Paris 12",
        "address": "60 Rue du Faubourg Saint-Antoine, 75012 Paris",
        "latlng": ["48.8519", "2.37334"],
      }
    ]
  },

  {
    name: "MANTEAU LAINE NOIR CEINTURÉ",
    type: "Manteau",
    description: "Avec ce manteau en laine noir, The Kooples imagine un nouveau classique flatteur et intemporel pour affronter l'hiver. Sa matière double-face promet de tenir chaud face aux intempéries, tandis que son col dégagé met subtilement l'encolure en valeur. Touche essentielle pour cintrer la taille, une ceinture assortie complète l'ensemble. Ce manteau long deviendra votre must-have de la saison, à porter sur un gros pull en maille coloré ou un top en soie.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740340/TABBATA/Image_thekoople/manteau_laine_noir_long_ceinture_iqm4r4.jpg",
    brand:
    {
      "name": "The Kooples",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739948/TABBATA/Logo_marque/Brand_the_kooples_cj3vba.png",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "The Kooples Paris 12",
        "address": "60 Rue du Faubourg Saint-Antoine, 75012 Paris",
        "latlng": ["48.8519", "2.37334"],
      }
    ]
  },

  {
    name: "DOUDOUNE EDOUARD",
    type: "Doudoune",
    description: "Toile de coton technique. Matière déperlante. Coupe droite. Matière très chaude. Coloris spécialement développé pour APC. Fermeture à glissière double sens. Capuche cousue au niveau de l'encolure. Longueur trois-quarts. Poches passepoilées sur les côtés. Une poche intérieure. Manches montées. Doublure matelassée.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740274/TABBATA/Image_apc/doudoune_edouard_ffgbhb.png",
    brand:
    {
      "name": "APC",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739949/TABBATA/Logo_marque/Brand_apc_wlcb89.jpg",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "APC Paris 3",
        "address": "3 Boulevard des Filles du Calvaire, 75003 Paris",
        "latlng": ["48.8612589", "2.3669307"],
      }
    ]
  },

  {
    name: "BLOUSON ERNEST",
    type: "Veste",
    description: "Croûte de veau italienne, tannée en Italie. Coupe ajustée. Fermeture boutonnée, boutons en poudre de corne. Deux poches poitrine surpiquées à rabat arrondi et boutonné. Deux poches côté. Empiècement au dos. Fente en bas des manches, poignet boutonné. Doublure en viscose.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740274/TABBATA/Image_apc/Blouson_ernest_mgdan9.png",
    brand:
    {
      "name": "APC",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739949/TABBATA/Logo_marque/Brand_apc_wlcb89.jpg",
    },
    color: "",
    washing: "normal",
    price: 10,
    store: [
      {
        "name": "APC Paris 3",
        "address": "3 Boulevard des Filles du Calvaire, 75003 Paris",
        "latlng": ["48.8612589", "2.3669307"],
      }
    ]
  },

  {
    name: "BLOUSON GRÉGOIRE",
    type: "Veste",
    description: "Twill technique. Tissu italien. Matière déperlante. Col teddy. Fermeture zippée. Poches raglan à larges passepoils. Col, poignets et taille resserrés par un bord-côtes élastiqué tricoté fantaisie. Petite poche plaquée sur le bras gauche. Fermeture zippée. Poche intérieure plaquée. Doublure ton sur ton. Fonds de poches coton. Zip APC.",
    reference: "",
    size: "1",
    sex: "H",
    imgPath: "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578740274/TABBATA/Image_apc/blouson_gregoire_lsaqpn.png",
    brand:
    {
      "name": "APC",
      "imgPath": "https://res.cloudinary.com/dvhkgds3a/image/upload/v1578739949/TABBATA/Logo_marque/Brand_apc_wlcb89.jpg",
    },
    color: "",
    washing: "normal",
    price: 10,
    store:
      [{
        "name": "APC Paris 3",
        "address": "3 Boulevard des Filles du Calvaire, 75003 Paris",
        "latlng": ["48.8612589", "2.3669307"],
      }]

  },
]

function getUnique(arr, comp) {

  const unique = arr
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

  return unique;
}

const brands = data.map(products => products.brand)
const uniqueBrands = getUnique(brands, 'name');
const stores = [];
data.forEach(function (product) {
  //si product.store.name n'est pas dans stores
  // alors je push product dans store
  const storeNames = stores.map(store => store.name);

  product.store.forEach(store => {
    if (storeNames.indexOf(store.name) === -1) {
      stores.push(store)
    }
  })
})
console.log(stores)

Store.create(stores)
  .then(stores => {
    console.log(`${stores.length} stores has been created`);

    Brand.create(uniqueBrands)
      .then(brands => {
        console.log(`${brands.length} brands has been created`);

        //
        // remplacer tous les product.brand par l'id de la brand correspondante
        //

        const brandsId = brands.map(brand => brand.id); // ['1234', '2345', ...]
        const products = data.map((product) => {
          productBrandName = product.brand.name;
          const brand = brands.find(el => el.name === productBrandName);
          product.brand = brand.id;
          return product;
        });

        products.forEach(p => {
          let ids = [];
          stores.forEach(s => {
            p.store.forEach(ps => {
              // console.log(ps.address,s.address)
              if (ps.address === s.address) {
                ids.push(s._id)
              }
            })
          })
          p.store = ids;
        })

        Product.create(products)
          .then(products => {
            console.log(`${products.length} products has been created`);
            mongoose.connection.close();
          }).catch(err => console.error(err));
      })

  }).catch(err => console.error(err));
