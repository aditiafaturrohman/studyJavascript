function filtering(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.info(filtering("boolean", 1, 2, false, 4, 5, "aditia", true, 4, 7, "mutia", "danu"));
