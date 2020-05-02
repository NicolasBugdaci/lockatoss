const b = (r) => {
  if ("string" != typeof r)
    return { error_message: "422 unprocessable Entity" };
  if (5 !== r.length) return { error_message: "422 unprocessable Entity" };
  if ("GUF42" == r) return { position: "Z8" };
  if ("BAISE" == r) return { position: "Tu parles autrement la !" };
  var t = (r.substr(1, 2).charCodeAt() + 2 * r.substr(0, 1).charCodeAt()) % 4,
    e =
      (10 * r.substr(2, 3).charCodeAt() +
        3 * r.substr(3, 4).charCodeAt() +
        r.substr(4, 5).charCodeAt()) %
      5;
  return { position: String.fromCharCode(t + 97) + (e + "") };
};
export default b;
