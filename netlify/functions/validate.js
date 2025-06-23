exports.handler = async (event) => {
  console.log("=== Full Request ===");
  console.log("HTTP Method:", event.httpMethod);
  console.log("Path:", event.path);
  console.log("Headers:", event.headers);
  console.log("Query Params:", event.queryStringParameters);
  console.log("Body:", event.body);

  return {
    statusCode: 200,
    body: "OK",
  };
};
