import ConvertDMSToDD from "./degreeTodecimal";

function ParseDMS(input) {
  var parts = input.split(/[^\d\w]+/);
  var lat = ConvertDMSToDD(parts[0], parts[1], parts[2], parts[3]);
  var lng = ConvertDMSToDD(parts[4], parts[5], parts[6], parts[7]);
  return [lat, lng];
}
export default ParseDMS;
