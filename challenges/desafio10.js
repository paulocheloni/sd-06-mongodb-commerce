db.produtos.updateMany({},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 120 } });

db.produtos.updateOne({ "tags.0": "bovino", "tags.1": "pão" },
  { $inc: { "vendasPorDia.6": 120 } });

db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });
