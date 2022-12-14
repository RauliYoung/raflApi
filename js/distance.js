const toRadians = (n) => {
  return n * (Math.PI / 180);
};
// Laskee etäisyyden kahden latituudin ja longituudin avulla
const haversineFormula = (latlong1, latlong2) => {
  const earthsRadius = 6371;

  let dLat = toRadians(latlong2[0] - latlong1[0]);
  let dLon = toRadians(latlong2[1] - latlong1[1]);

  let x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(latlong1[0])) *
      Math.cos(toRadians(latlong2[0])) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  let c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  let distance = earthsRadius * c;

  // palautus metreissä
  return distance * 1000;
};
