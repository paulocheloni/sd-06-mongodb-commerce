db.produtos.updateMany(
  { },
  { $set:
    { avaliacao: NumberInt("0") },
  },
);

db.produtos.updateMany(
  { $expr: { $eq: [ "$tag", "bovino"] } ,
  { $set:
    { avaliacao: NumberInt("5") },
  },
);

db.produtos.updateMany(
  { $expr: { $eq: [ "$tag", "ave"] },
  { $set:
    { avaliacao: NumberInt("3") },
  },
);

db.produtos.find({}, { avaliacao: 1, nome: 1, _id: 0 });
