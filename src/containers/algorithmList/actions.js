export function selectAlgorithm(algorithmName) {
  
  return {
    type: "ALGORITHM_SELECTED",
    payload: algorithmName
  }
}
