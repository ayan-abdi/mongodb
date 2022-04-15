const { connect, Schema, model, Types } = require("mongoose");

connect("mongodb://localhost:27017/formation");
const commandSchema = new Schema({ id: Number, qtt: Number });
const stagiaireSchema = new Schema({
  nom: { type: String, required: true },
  prenom: String,
  profession: String,
  resultat: String,
  section: String,
});

const Stagiaire = model("stagiaires", stagiaireSchema);
Stagiaire.findOne({ nom: "Olivier" })
  .exec()
  .then((items) => {
    console.log(items);
  });

Stagiaire.insertMany([
  { nom: "LY", prenom: "Khun", resultat: 10, section: ".net" },
  { nom: "Strimelle", prenom: "Aurelien", resultat: 16, section: "js" },
  { nom: "Morre", prenom: "Thierry", resultat: 17, section: ".net" },
  { nom: "Person", prenom: "Mike", resultat: 18, section: ".net" },
  { nom: "Ovyn", prenom: "Flavian", resultat: 14, section: "js" },
]);
//   .then((kevivvvvv) => {
//     console.log("oulalalalala");
//   })
//   .catch((kevinnnnnn) => {
//     console.log("bloppppp");
//   });

// Stagiaire.find({
//     '_id': { $in:[
//         Types.ObjectId('62581d77189e41ce0e7342f3'),
//         Types.ObjectId('62581bd1c237ce207d017c51'),

//     ]}
// }, function(err, docs){
//     console.log(docs);
// }).exec().then(its => console.log(its));

Stagiaire.find()
  .where("_id")
  .in([
    Types.ObjectId("62581d77189e41ce0e7342f3"),
    Types.ObjectId("62581bd1c237ce207d017c51"),
  ])
  .exec()
  .then((its) => console.log(its));

// const s = new Stagiaire();
// s.nom = "Maman";
// s.commandes.push({ id: 2, qtt: 43 });
// s.biblop = "42";

// s.save();
// const newElm = new Stagiaire();
// newElm.nom = "hello";
// newElm.commandes.push({ id: 4, qtt: 22222 });
// newElm.profession = "sans emploi";
// newElm.save();
