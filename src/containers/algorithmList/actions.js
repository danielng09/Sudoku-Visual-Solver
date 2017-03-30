export function selectAlgorithm(algorithmName) {
  console.log(algorithmName, "has been selected!");

  return {
    type: "ALGORITHM_SELECTED",
    payload: algorithmName
  }
}
