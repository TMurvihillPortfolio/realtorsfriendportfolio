const newImprovement = (improvement) => {
  return {
      completed: improvement.completed,
      improvement: improvement.improvement,
      cost: improvement.cost,
      estPriceAdj: improvement.estPriceAdj,
      estTimeToSell: improvement.estTimeToSell,
      notes: improvement.notes,
      itemId: improvement.id
  };
};

export function makeData(improvements) {
  return improvements.map(improvement => {
    return {
      ...newImprovement(improvement)
    };
  });
}