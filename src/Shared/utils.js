export const handleSelection = (selectId, selectedIds) => {
  const selected = new Set(selectedIds || []);

  if (selected.has(selectId)) {
    selected.delete(selectId);
  } else {
    selected.add(selectId);
  }

  return selected;
};
